import Header from './components/Header.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';
import PopupWithForm from './components/PopupWithForm.js';
import ImagePopup from './components/ImagePopup.js';
import './App.css';
// import closeImage from './images/popup__close.svg';


function App() {
  return (
    <div className="page">
      <>
        <Header />
        <Main />
        <Footer />
        <PopupWithForm name="profile" title="Редактировать профиль" buttonText="Сохранить" />
        <PopupWithForm name="elements" title="Новое место" buttonText="Сохранить" />
        <PopupWithForm name="avatar" title="Обновить аватар" buttonText="Сохранить" />
        <PopupWithForm name="delete" title="Вы уверены?" buttonText="Да" />
        <ImagePopup />
      </>


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
