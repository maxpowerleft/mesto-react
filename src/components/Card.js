import React from 'react';
import trashCan from '../images/trash.svg';

function Card(props) {
  return (
    <article className="elements">
      <div className="element">
        <img src={props.link} alt="Фотография Вашего поста" className="element__image" />
        <button className="element__delete-button">
          <img src={trashCan} alt="Кнопка удаления карточки" className="element__delete-image" />
        </button>
        <h3 className="element__title">{props.title}</h3>
        <div className="element__container">
        <button className="element__like-button" />
          <p className="element__likes-count">{props.likes}</p>
        </div>
      </div>
    </article>
  )
}

export default Card;