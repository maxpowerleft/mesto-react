import React from 'react';
import closeImage from '../images/popup__close.svg';

function PopupWithForm(props) {

  return (
    <section className={`popup popup_type_${props.name}`}>
      <form action="#" className="popup__form popup__profile-form" noValidate>
        <img src={closeImage} alt="Кнопка закрытия модального окна" className="popup__close" />
        <div className="popup__content">
          <h3 className="popup__title">{`${props.title}`}</h3>
          {props.children}
          <button type="submit" className="popup__save-button">{`${props.buttonText}`}</button>
        </div>
      </form>
    </section>
  )
}

export default PopupWithForm;