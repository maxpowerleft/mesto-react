import Header from './components/Header.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';
import './App.css';
// import closeImage from './images/popup__close.svg';

function App() {
  return (
    <div className="page">
      <>
        <Header />
        <Main />
        <Footer />
      </>


  {/* <section className="popup popup_type_profile">
  <form action="#" className="popup__form popup__profile-form" noValidate>
    <img src={closeImage} alt="Кнопка закрытия модального окна" className="popup__close" />
    <div className="popup__content">
      <h3 className="popup__title">Редактировать профиль</h3>
      <input id="user-name-input" type="text" className="popup__input popup__text popup__user-name" name="name" placeholder="Имя" required minLength={2} maxLength={40} />
      <span id="user-name-input-error" className="popup__input-error" />
      <input id="user-description-input" type="text" className="popup__input popup__text popup__user-description" name="about" placeholder="Описание" required minLength={2} maxLength={200} />
      <span id="user-description-input-error" className="popup__input-error" />
      <button type="submit" className="popup__save-button">Сохранить</button>
    </div>
  </form>
</section>


  <section className="popup popup_type_elements">
  <form action="#" className="popup__form popup__elements-form" noValidate>
    <img src={closeImage} alt="Кнопка закрытия модального окна" className="popup__close popup__close_element" />
    <div className="popup__content">
      <h3 className="popup__title">Новое место</h3>
      <input id="card-name-input" type="text" className="popup__input popup__text popup__card-name" name="name" placeholder="Название" required minLength={1} maxLength={30} />
      <span id="card-name-input-error" className="popup__input-error" />
      <input id="card-src-input" type="url" className="popup__input popup__text popup__card-src" name="link" placeholder="Ссылка на фото/картинку" required />
      <span id="card-src-input-error" className="popup__input-error" />
      <button type="submit" className="popup__save-button popup__save-button_element">Сохранить</button>
    </div>
  </form>
</section>


  <section className="popup popup_type_fullscreen">
  <div className="popup__fullscreen-container">
    <img src={closeImage} alt="Кнопка закрытия модального окна" className="popup__close popup__close_element popup__close_fullscreen" />
    <img src="#" alt="Фотография на весь экран" className="popup__fullscreen-image" />
    <p className="popup__fullscreen-text" />
  </div>
</section>


  <section className="popup popup_type_avatar">
  <form action="#" className="popup__form popup__avatar-form" noValidate>
    <img src={closeImage} alt="Кнопка закрытия модального окна" className="popup__close popup__close_avatar" />
    <div className="popup__content">
      <h3 className="popup__title">Обновить аватар</h3>
      <input id="avatar-src-input" type="url" className="popup__input popup__text popup__avatar-src" name="link" placeholder="Ссылка на Ваш новый аватар" required />
      <span id="avatar-src-input-error" className="popup__input-error" />
      <button type="submit" className="popup__save-button popup__save-button_avatar">Сохранить</button>
    </div>
  </form>
</section>


  <section className="popup popup_type_delete">
  <form action="#" className="popup__form popup__delete-form" noValidate>
    <img src="<%=require('./images/popup__close.svg')%>" alt="Кнопка закрытия модального окна" className="popup__close popup__close_delete" />
    <div className="popup__content">
      <h3 className="popup__title">Вы уверены?</h3>
      <button type="submit" className="popup__save-button popup__save-button_delete">ДА</button>
    </div>
  </form>
</section> */}


  {/* <template class="template-elements">
    <div class="element">
      <img src="#" alt="Фотография Вашего поста" class="element__image">
      <button class="element__delete-button">
        <img src="<%=require('./images/trash.svg')%>" alt="Кнопка удаления карточки" class="element__delete-image">
      </button>
      <h3 class="element__title"></h3>
      <div class="element__container">
        <button class="element__like-button"></button>
        <p class="element__likes-count">0</p>
      </div>
    </div>
  </template> */}
    </div>
  );
}

export default App;
