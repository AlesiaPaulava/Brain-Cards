import { createElement } from '../helper/createElement.js';//подключаем функцию (после названия фун-ии ставим курсор CTRL+пробел)

export const createHeader = (parent) => {
  const container = createElement('div', { //создаем див, Присваиваем класс диву "контейнер"
    className: 'container header__container', 
  }); 
    
  parent.append(container); //вставим в header div

  const headerLogoLink = createElement('a', { //создаем ссылку
    href: '#', //присваиваем ссылке href
    className: 'header__logo-link', //присваиваем ссылке класс header__logo-link
  });

  const logo = createElement('img', { //создаем картинку, 
    src: 'img/logo.svg', //присваеваем картинке атрибут src
    className: 'header__logo', //присваеваем картинке класс Header__logo
    alt: 'Логотип сервиса Brain Cards', //присваеваем картинке alt
  });

  headerLogoLink.append(logo); //в ссылку вставляем логотип

  const headerTitle = createElement('h2', { //создаем h2
    className: 'header__subtitle', //присваеваем h2 класс header__subtitle
    textContent: 'Категории', //пишем текст h2 
  });

  const headerBtn = createElement('button', { //создаем кнопку
    className:'header__btn', //присваеваем класс header__btn
    textContent: 'Добавить категорию', //пишем текст кнопке
  });

  container.append(headerLogoLink, headerTitle, headerBtn); //в контейнер вставляем ссылку, заголовок, кнопку

  const updateHeaderTitle = title => { //функция, которая меняет заголовок, принимает какой-то текст title
    headerTitle.textContent = title; //будет менять текст заголовка на title
  };

  return { headerLogoLink, headerBtn, updateHeaderTitle }; //возвращаем объект (ссылку, кнопку, заголовок), т.к.потом на наих будет писаться функционал отдельным документом
};

