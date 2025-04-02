'use strict';

document.addEventListener("DOMContentLoaded", () => {
    console.log('Скрипт отработал корректно1');

    
 

    // Scroll up
    const scrollUpButton = document.querySelector('.scroll-up');

    if (!scrollUpButton) return; // Если кнопки нет, выходим


    const windowHeight = document.documentElement.clientHeight; // Высота видимой части окна

    // Показать кнопку при прокрутке вниз на высоту экрана
    document.addEventListener('scroll', () => {
        let scrollPageY = window.scrollY; // Исправлено с this.scrollY

        if (scrollPageY >= windowHeight) {
        
            scrollUpButton.classList.add('scroll-up--show');
        } else {
            scrollUpButton.classList.remove('scroll-up--show');
       
        }
    });

    // Плавная прокрутка наверх при нажатии на кнопку
    scrollUpButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

  /* 4. Подбор тегов в поисковой строке при вводе */
//   const searchBlock = document.querySelector('.search');

//   if (searchBlock) {
//       const searchFormField = searchBlock.querySelector('.search');
//       const tags = searchBlock.querySelectorAll('.search__tag-item'); // Получаем все теги

//       // Функция для фильтрации тегов
//       const filterTags = () => {
//           const searchText = searchFormField.value.toLowerCase(); // Получаем текст из поисковой строки

//           tags.forEach(tag => {
//               const tagText = tag.textContent.toLowerCase(); // Получаем текст тега
//               if (tagText.includes(searchText)) {
//                   tag.classList.remove('search__tag-item--hidden'); // Показываем тег
//               } else {
//                   tag.classList.add('search__tag-item--hidden'); // Скрываем тег
//               }
//           });
//       }

//       // Обработчик события ввода текста
//       searchFormField.addEventListener('input', filterTags);
//   }
//   document.addEventListener('DOMContentLoaded', () => {
//     // Находим блок с тегами поиска
//     const searchTagList = document.querySelector('.searchtag-list');
//     if (!searchTagList) {
//         console.log('Блок .searchtag-list не найден');
//         return;
//     }

//     // Находим все элементы списка (теги)
//     const tagItems = searchTagList.querySelectorAll('.searchtag-item');

//     // Формируем массив, извлекая текстовое содержимое каждого элемента
//     const tagsArray = Array.from(tagItems).map(item => item.textContent.trim());

//     // Выводим полученный массив в консоль
//     console.log('Массив тегов поиска:', tagsArray);
// });
// document.addEventListener('DOMContentLoaded', () => {
//     console.log('Скрипт загружен и выполняется'); // Проверяем, выполняется ли код

//     // Находим все элементы с названиями товаров
//     const productTitles = document.querySelectorAll('.producttitle, .product-cardtitle');

//     console.log('Найденные элементы:', productTitles); // Проверяем, нашлись ли элементы

//     // Формируем массив, извлекая текстовое содержимое каждого элемента
//     const productArray = Array.from(productTitles).map(item => item.textContent.trim());

//     // Выводим полученный массив в консоль
//     console.log('Массив названий товаров:', productArray);
// });



const preloader = document.querySelector('.preloader');
const content = document.querySelector('.main');
if (preloader && content) {
    setTimeout(() => {
        // Скрываем прелоадер
        preloader.style.opacity = '0';
        preloader.style.visibility = 'hidden';

        // Показываем контент
        content.style.display = 'block';

        // Удаляем элемент из DOM
        preloader.remove();
    }, 1500); // Задержка 1,5 секунды
}




    /* Лекция 5 */
    const cardsContainer = document.querySelector('#video');
    if (cardsContainer && false) {
        const videoRows = cardsContainer.querySelectorAll('.video__row');

        /* Моковые данные */
        const cardsData = {
            card1: {
                link: 'phone1.html',
                icon: 'img/ip16pro.png',
                iconAlt: 'Иконка телефона',
                title: 'iPhone 16 Pro, 256 ГБ',
                buttom: 'Купить'
            },
            card2: {
                link: 'phone1.html',
                icon: 'img/ip15green.png',
                iconAlt: 'Иконка телефона',
                title: 'iPhone 15, 128 ГБ',
                buttom: 'Купить'
            },
        }

        // Функция для создания карточки
        const createCard = (linkUrl, iconUrl, iconAlt, title, buttom) => {       

            // Шаблонные строки подстановки (второй вариант вывода разметки - рекомендуемый)         
            const card = `               
                       <div class="product">
                        <img src="${iconUrl}" alt="${iconAlt}" class="product__image">
                        <h3 class="product__title">${title}</h3>
                        <a href="${linkUrl}" class="product__botton" target="_blank">${buttom}</a>
                    </div>
            `; 
            
            return card;
        }

        let i = 0;
        for (const cardKey in cardsData) {
            const card = cardsData[cardKey]; 
            // console.log();
            const cardElement = createCard(card.link, card.icon, card.iconAlt, card.title, card.buttom);
           
            videoRows[i].insertAdjacentHTML('beforeend', cardElement); // Второй вариант
            i++;
        }
    }

    /* end Лекция 5 */
    



    /* Лекция 6 */
 const cardsContainer2 = document.querySelector('#video');
 if (cardsContainer2) {
     const cardList = cardsContainer2.querySelector('.video__row');

     // Пример URL для получения данных с сервера
     const apiUrl = 'data.json';

     // Функция для создания карточки
     const createCard = (linkUrl, iconUrl, iconAlt, title, buttom) => {       

        // Шаблонные строки подстановки (второй вариант вывода разметки - рекомендуемый)         
        const card = `               
                   <div class="product">
                    <img src="${iconUrl}" alt="${iconAlt}" class="product__image">
                    <h3 class="product__title">${title}</h3>
                    <a href="${linkUrl}" class="product__botton" target="_blank">${buttom}</a>
                </div>
        `; 

         return card;
     }

     // Загрузка данных с сервера
     fetch(apiUrl)
         .then(response => response.json())
         .then(data => {
             console.log(data); // Данные
             console.log(typeof (data)); // Тип полученных данных

             // for (const item in data) {
             //     const card = data[item];

             //     const cardElement = createCard(card.link, card.icon, card.iconAlt, card.iconWidth, card.iconHeight, card.title, card.description);
             //     cardList.insertAdjacentHTML('beforeend', cardElement);
             // }
             let i = 0;

             const videoRows = cardsContainer2.querySelectorAll('.video__row');
             data.forEach(item => {
                 const cardElement = createCard(item.link, item.icon, item.iconAlt, item.title, item.buttom);
                //  cardList.insertAdjacentHTML('beforeend', cardElement);

                 videoRows[i].insertAdjacentHTML('beforeend', cardElement); // Второй вариант
                 i++;
             });
         })
         .catch(error => {
             console.error('Ошибка при загрузке данных:', error);
         });


         // Карусель (слайдер)
    const slider = document.querySelector('.swiper');

    if (slider) {
        const swiper = new Swiper(slider, {
            // Дополнительные параметры
            slidesPerView: 4, // Количество слайдов на экране
            spaceBetween: 30, // Расстояние между слайдами
            loop: true,  // Зацикливание слайдов

            

            // Навигационные стрелки
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }
 }
});