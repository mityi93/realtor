/**
 * NodeList.prototype.forEach() polyfill
 * https://developer.mozilla.org/en-US/docs/Web/API/NodeList/forEach#Polyfill
 */
 if (window.NodeList && !NodeList.prototype.forEach) {
	NodeList.prototype.forEach = function (callback, thisArg) {
		thisArg = thisArg || window;
		for (var i = 0; i < this.length; i++) {
			callback.call(thisArg, this[i], i, this);
		}
	};
}



/*Выбор на мобильных устройствах */
const sidebarToggleBtn = document.querySelector('.menu-icon-wrapper');
const menuIcon = document.querySelector('.menu-icon');
const sidebar = document.querySelector('.sidebar');

sidebarToggleBtn.onclick = function() {
    menuIcon.classList.toggle('menu-icon-active');
    sidebar.classList.toggle('sidebar--mobile-active');

};

/* Показать еще 3 карточки */

const btnShowMoreCards = document.querySelector('.btn-more');
const hiddenCards = document.querySelectorAll ('.card__link-hidden');


btnShowMoreCards.addEventListener('click',function() {
    hiddenCards.forEach(function(card) {
        card.classList.remove('card__link-hidden')
    })
})

/* Показать/скрыть контент внутри виджетов */

const widgets = document.querySelectorAll('.widget');

/*Находим все виджеты */
widgets.forEach(function(widget){

    //Слушаем клик внутри виджета
    widget.addEventListener('click', function(e) {
        //Если клик по заголовку - тогда скрываем/показываем тело виджета
        if(e.target.classList.contains('widget__title')) {
            e.target.classList.toggle('widget__title--active');
            e.target.nextElementSibling.classList.toggle('widget__body--hidden');
        }
    })
}) 

/* Location - кнопка Любая */

const checkBoxAny = document.querySelector('#location-05');
const topLocationCheckBoxes = document.querySelectorAll('[data-location-param]');

//Клик по кнопке Любая - и отключение checkbox
checkBoxAny.addEventListener('change', function(){

    if(checkBoxAny.checked) {
        topLocationCheckBoxes.forEach(function(item) {
            item.checked = false;
        });
    }
})

//Клик по checkbox - и отключение кнопки Любая 
topLocationCheckBoxes.forEach(function(item) {
    item.addEventListener('change', function() {
        if(checkBoxAny.checked){
            checkBoxAny.checked = false;
        }
    })
})

/*Кнопка Показать ещё в виджете Дополнительные опции  */

const showMoreOptions = document.querySelector('.widget__btn-show-hidden'); 
const hiddenCheckBoxes = document.querySelectorAll ('.checkbox--hidden');

    showMoreOptions.onclick = function (e) {
        e.preventDefault();


        //Если блоки были скрыты - значит показываем 
        if(showMoreOptions.dataset.options == 'hidden') {
            hiddenCheckBoxes.forEach(function (item) {
                item.style.display = 'block';
            });
            showMoreOptions.innerText = 'Скрыть опции';
            showMoreOptions.dataset.options = 'visible';
        } 
        
        //Если блоки были видны  - значит скрываем 
        else if (showMoreOptions.dataset.options == 'visible') {
            hiddenCheckBoxes.forEach(function(item) {
                item.style.display = 'none';
            });
            showMoreOptions.innerText = 'Показать ещё';
            showMoreOptions.dataset.options = 'hidden';
        } 
    }
