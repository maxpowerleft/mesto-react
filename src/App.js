import React from 'react';
import Header from './components/Header.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';
import PopupWithForm from './components/PopupWithForm.js';
import ImagePopup from './components/ImagePopup.js';
import './App.css';


function App() {

  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);


  const handleEditAvatarClick = () => {
    setEditAvatarPopupOpen(true);
  }

  const handleEditProfileClick = () => {
    setEditProfilePopupOpen(true);
  }

  const handleAddPlaceClick = () => {
    setAddPlacePopupOpen(true);
  }
  

  const closeAllPopups = () => {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
  }

  return (
    <div className="page">
      <>
        <Header />
        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}/>
        <Footer />
        <PopupWithForm onClose={closeAllPopups} isOpen={isEditProfilePopupOpen} name="profile" title="Редактировать профиль" buttonText="Сохранить">
          <>
            <input id="user-name-input" type="text" className="popup__input popup__text popup__user-name" name="name" placeholder="Имя" required minLength={2} maxLength={40} />
            <span id="user-name-input-error" className="popup__input-error" />
            <input id="user-description-input" type="text" className="popup__input popup__text popup__user-description" name="about" placeholder="Описание" required minLength={2} maxLength={200} />
            <span id="user-description-input-error" className="popup__input-error" />
          </>
        </PopupWithForm>
        
        <PopupWithForm onClose={closeAllPopups} isOpen={isAddPlacePopupOpen} name="elements" title="Новое место" buttonText="Сохранить">
          <>
            <input id="card-name-input" type="text" className="popup__input popup__text popup__card-name" name="name" placeholder="Название" required minLength={1} maxLength={30} />
            <span id="card-name-input-error" className="popup__input-error" />
            <input id="card-src-input" type="url" className="popup__input popup__text popup__card-src" name="link" placeholder="Ссылка на фото/картинку" required />
            <span id="card-src-input-error" className="popup__input-error" />
          </>
        </PopupWithForm>

        <PopupWithForm onClose={closeAllPopups} isOpen={isEditAvatarPopupOpen} name="avatar" title="Обновить аватар" buttonText="Сохранить">
          <>
            <input id="avatar-src-input" type="url" className="popup__input popup__text popup__avatar-src" name="link" placeholder="Ссылка на Ваш новый аватар" required />
            <span id="avatar-src-input-error" className="popup__input-error" />
          </>
        </PopupWithForm>
        <PopupWithForm onClose={closeAllPopups} name="delete" title="Вы уверены?" buttonText="Да" />
        <ImagePopup />
      </>
    </div>
  );
}

export default App;
