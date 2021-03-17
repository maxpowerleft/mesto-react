import React from 'react';
import closeImage from '../images/popup__close.svg';

function ImagePopup() {

  return (
    <section className="popup popup_type_fullscreen">
      <div className="popup__fullscreen-container">
        <img src={closeImage} alt="Кнопка закрытия модального окна" className="popup__close popup__close_element popup__close_fullscreen" />
        <img src="#" alt="Фотография на весь экран" className="popup__fullscreen-image" />
        <p className="popup__fullscreen-text" />
      </div>
    </section>
  )
}

export default ImagePopup;