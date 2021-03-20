import React from 'react';
import Header from './components/Header.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';
import PopupWithForm from './components/PopupWithForm.js';
import ImagePopup from './components/ImagePopup.js';


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
        <PopupWithForm onClose={closeAllPopups} isOpen={isEditProfilePopupOpen} name="profile" title="Редактировать профиль" buttonText="Сохранить" />
        <PopupWithForm onClose={closeAllPopups} isOpen={isAddPlacePopupOpen} name="elements" title="Новое место" buttonText="Сохранить" />
        <PopupWithForm onClose={closeAllPopups} isOpen={isEditAvatarPopupOpen} name="avatar" title="Обновить аватар" buttonText="Сохранить" />
        <PopupWithForm onClose={closeAllPopups} name="delete" title="Вы уверены?" buttonText="Да" />
        <ImagePopup />
      </>
    </div>
  );
}

export default App;
