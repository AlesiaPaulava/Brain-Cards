//функция для создания элемеентов html
export const createElement = (tag, attr) => {
    const element = document.createElement(tag);
    Object.assign(element, attr); // метод Object.assign берет атрибуты переданные в attr и заменяет их в element, или создает если их нет
    return element; //возвращаем элемент, для того, что бы его можно было сохранить в переменные в функции createHeader
};