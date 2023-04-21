import { createHeader } from './components/createHeader.js'; //подключаем функцию из другого элемента, она наполняет header

const initApp = () => {
  const headerParent = document.querySelector('.header');
  const app = document.querySelector('#app');
  
  //вызываем функцию, которая наполняет header. Возвращает объекты. Она написана в другом док-те и импортирована(строка1) в этот док-т
  const headerObj = createHeader(headerParent);
  console.log('headerObj', headerObj);

  //функция 
  const returnIndex = e => {
    e.preventDefault(); //при нажатии на ссылку headerLogoLink отменяем перезагрузку страницы
    headerObj.updateHeaderTitle('Категории'); //обращаемся к headerObj, там есть updateHeaderTitle, который принимает новое название заголовка, задаем заголовок 'Категории'
    //это делается для того, что бы вернуться на главную страницу
  };

  headerObj.headerLogoLink.addEventListener('click', returnIndex);  //обращаемся к headerObj, там есть ссылка headerLogoLink, при клике на ссылку вызываем функцию returnIndex 
  
  headerObj.headerBtn.addEventListener('click', () => {
    headerObj.updateHeaderTitle('Новая категория');
  });
};

initApp();