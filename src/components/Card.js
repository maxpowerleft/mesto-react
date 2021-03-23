import React from 'react';
import trashCan from '../images/trash.svg';

function Card(props) {

    function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <article className="element">     
        <img onClick={handleClick} src={props.card.link} alt="Фотография Вашего поста" className="element__image" />
        <button className="element__delete-button">
          <img src={trashCan} alt="Кнопка удаления карточки" className="element__delete-image" />
        </button>
        <h3 className="element__title">{props.card.name}</h3>
        <div className="element__container">
        <button className="element__like-button" />
          <p className="element__likes-count">{props.card.likes}</p>
        </div>
    </article>
  )
}

export default Card;