import React from 'react';
import avatarLoadingGif from '../images/Avatar.gif';
import editImage from '../images/edit-image.svg';
import addImage from '../images/add-image.svg';


function Main() {
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__container">
          <button className="profile__edit-button-avatar">
            <img src={avatarLoadingGif} alt="Здесь находится ваш аватар" className="profile__avatar" />
          </button>
        </div>
        <div className="profile__user-info">
          <p className="profile__user-name">Загрузка...</p>
          <button className="profile__edit-button">
            <img src={editImage} alt="Кнопка изменения профиля" className="profile__edit-image" />
          </button>
          <p className="profile__user-description">Загрузка...</p>
        </div>
        <button className="profile__add-button">
          <img src={addImage} alt="Кнопка добавления новых записей" className="profile__add-image" />
        </button>
      </section>
      <section className="elements"></section>
      </main>
  )
}

// function handleEditAvatarClick() {
//   document.querySelector('.popup_type_avatar').classList.add('popup_opened')
// }

// document.querySelector('.profile__edit-button-avatar').addEventListener('click', handleEditAvatarClick)

export default Main;