import React from 'react';
import avatarLoadingGif from '../images/Avatar.gif';
import editImage from '../images/edit-image.svg';
import addImage from '../images/add-image.svg';


function Main() {

const handleEditAvatarClick = () => {
  let a = document.querySelector('.popup_type_avatar')
  a.classList.add('popup_opened')
}

const handleEditProfileClick = () => {
  let a = document.querySelector('.popup_type_profile')
  a.classList.add('popup_opened')
}

const handleAddPlaceClick = () => {
  let a = document.querySelector('.popup_type_elements')
  a.classList.add('popup_opened')
}

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__container">
          <button onClick={handleEditAvatarClick} className="profile__edit-button-avatar">
            <img src={avatarLoadingGif} alt="Здесь находится ваш аватар" className="profile__avatar" />
          </button>
        </div>
        <div className="profile__user-info">
          <p className="profile__user-name">Загрузка...</p>
          <button onClick={handleEditProfileClick} className="profile__edit-button">
            <img src={editImage} alt="Кнопка изменения профиля" className="profile__edit-image" />
          </button>
          <p className="profile__user-description">Загрузка...</p>
        </div>
        <button onClick={handleAddPlaceClick} className="profile__add-button">
          <img src={addImage} alt="Кнопка добавления новых записей" className="profile__add-image" />
        </button>
      </section>
      <section className="elements"></section>
    </main>
    
  )
}



// document.querySelector('.profile__edit-button-avatar').addEventListener('click', handleEditAvatarClick)

export default Main;