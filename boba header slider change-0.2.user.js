// ==UserScript==
// @name         boba header slider change
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  just add hide button
// @author       Bell Cranel (Kostik)
// @match        *://*rivalregions.com/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=rivalregions.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

     document.querySelector("#header_slide_inner").insertAdjacentHTML("afterend",`<div id="hide_back_header" class="button_green" style="position: absolute; top: 10%; left: 5px;"">Приховати</div>`);
     document.getElementById("hide_back_header").onclick=function(){
         // Получаем ссылку на элемент по его id
         var myElement = document.getElementById('body');

         // Получаем текущий цвет фона
         var backgroundColor = window.getComputedStyle(myElement).backgroundColor;

         // Выводим цвет в хеадер
         if (document.querySelector('#header_slide').style.backgroundColor == backgroundColor){
             document.querySelector('#header_slide').style.backgroundColor = "";
             document.querySelector('#hide_back_header').textContent = 'Приховати';
         } else {
             document.querySelector('#header_slide').style.backgroundColor = backgroundColor;
             document.querySelector('#hide_back_header').textContent = 'Показати';
         };
     };
    // Your code here...
})();