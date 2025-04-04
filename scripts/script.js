'use strict';

document.addEventListener("DOMContentLoaded", () => {
    console.log('Скрипт отработал корректно1');

    /* 
        *   Алгоритм
        *
        *   1. Начало.
        *   2. Получаем кнопку.
        *   3. Проверка условия (навешиваем слушатели событий на click на кнопку): есть ли клик на кнопку.
        *       3.1. Да: Смотрим, нажата ли кнопка.
        *           3.1.1 Проверка условия.
        *               3.1.1.1. Да (кнопка уже нажата): смена цвета и текста кнопки в исходное положение.
        *               3.1.1.2. Нет (кнопка еще не нажата): смена цвета и текста кнопки.
        *       3.2. Нет: Конец.
        *   4. Конец.
        * 
        *   Блок-схема: img/blocshema.png
        */

    // 2. Получаем кнопку "Добавить в корзину"
    const button = document.querySelector('.add__to__cart');
    console.log(button);
    if (!button) return; // Если кнопки нет, выходим


    let isActive = false; // Состояние кнопки

    // 3. Навешиваем слушатель событий на клик
    button.addEventListener('click', () => {
        if (isActive) {
            // 3.1.1.1 Кнопка уже нажата: возвращаем стандартный цвет и текст
            button.style.backgroundColor = "blue";
            button.textContent = "Добавить в корзину";
        } else {
            // 3.1.1.2 Кнопка не нажата: меняем цвет и текст
            button.style.backgroundColor = "red";
            button.textContent = "Ожидает в корзине";
        }

        isActive = !isActive; // Инвертируем состояние кнопки
    });
});