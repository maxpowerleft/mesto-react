import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';
import EditProfilePopup from './EditProfilePopup.js';
import EditAvatarPopup from './EditAvatarPopup.js';
import AddPlacePopup from './AddPlacePopup.js';
import api from '../utils/api';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';


function App() {

  const [currentUser, setCurrentUser] = React.useState({});
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({ link: '', name: '' });
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getInitialCards()
      .then(res => {
        setCards(res)
      })
      .catch(err => {
        console.error(err)
      })
  }, []);

function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(item => item._id === currentUser._id);
    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
      })
      .catch(err => {
        console.error(err)
      });
  }
  
  function handleCardDelete(card) {
    api.deleteCard(card._id)
      .then(() => {
        setCards(cards.filter(c => c._id !== card._id));
      })
      .catch((err) => {      
        console.error(err);
      })
  }

  const handleEditAvatarClick = () => {
    setEditAvatarPopupOpen(true);
  }

  const handleEditProfileClick = () => {
    setEditProfilePopupOpen(true);
  }

  const handleAddPlaceClick = () => {
    setAddPlacePopupOpen(true);
  }
  
  const handleCardClick = (card) => {
    setSelectedCard(card)
  }

  const handleUpdateUser = (data) => {
    api.patchUserData(data)
      .then((res) => {
        setCurrentUser(res)
        closeAllPopups()
      })
    .catch((err) => {
        console.error(err);
      })
  }

  const handleUpdateAvatar = (data) => {
    api.patchUserAvatar(data)
      .then((res) => {
        setCurrentUser(res)
        closeAllPopups()
      })
    .catch((err) => {
        console.error(err);
      })
  }
  
  const handleAddPlaceSubmit = (newCard) => {
    api.postCard(newCard)
      .then((res) => {
        setCards([res, ...cards]);
        closeAllPopups()
    })
  }

  const closeAllPopups = () => {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setSelectedCard({ link: '', name: '' })
  }

  React.useEffect(() => {
    api.getUserData()
      .then(res => {
        setCurrentUser(res)
      })
      .catch((err) => {
        console.error(err);
      })
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <>
          <Header />
          <Main
            onCardClick={handleCardClick}
            onEditAvatar={handleEditAvatarClick}
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onCardDelete={handleCardDelete}
            onCardLike={handleCardLike}
            cards={cards} />
          <Footer />
          
          <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />
        {/* <PopupWithForm onClose={closeAllPopups} isOpen={isEditProfilePopupOpen} name="profile" title="Редактировать профиль" buttonText="Сохранить">
          <>
            <input id="user-name-input" type="text" className="popup__input popup__text popup__user-name" name="name" placeholder="Имя" required minLength={2} maxLength={40} />
            <span id="user-name-input-error" className="popup__input-error" />
            <input id="user-description-input" type="text" className="popup__input popup__text popup__user-description" name="about" placeholder="Описание" required minLength={2} maxLength={200} />
            <span id="user-description-input-error" className="popup__input-error" />
          </>
        </PopupWithForm> */}
        <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlace={handleAddPlaceSubmit} />
        {/* <PopupWithForm onClose={closeAllPopups} isOpen={isAddPlacePopupOpen} name="elements" title="Новое место" buttonText="Сохранить">
          <>
            <input id="card-name-input" type="text" className="popup__input popup__text popup__card-name" name="name" placeholder="Название" required minLength={1} maxLength={30} />
            <span id="card-name-input-error" className="popup__input-error" />
            <input id="card-src-input" type="url" className="popup__input popup__text popup__card-src" name="link" placeholder="Ссылка на фото/картинку" required />
            <span id="card-src-input-error" className="popup__input-error" />
          </>
          </PopupWithForm> */}
          
          <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />
        {/* <PopupWithForm onClose={closeAllPopups} isOpen={isEditAvatarPopupOpen} name="avatar" title="Обновить аватар" buttonText="Сохранить">
          <>
            <input id="avatar-src-input" type="url" className="popup__input popup__text popup__avatar-src" name="link" placeholder="Ссылка на Ваш новый аватар" required />
            <span id="avatar-src-input-error" className="popup__input-error" />
          </>
        </PopupWithForm> */}
        <PopupWithForm onClose={closeAllPopups} name="delete" title="Вы уверены?" buttonText="Да" />
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </>
      </div>
      </CurrentUserContext.Provider>
  );
}

export default App;
