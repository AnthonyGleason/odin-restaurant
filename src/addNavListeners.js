import { loadHome } from "./loadHome.js";
import {loadMenu} from "./loadMenu.js";
import {loadOrder} from "./loadOrder.js";
import {loadContact} from "./loadContact";

let addNavListeners = function (){
    const home = document.querySelector('#home');
    const menu = document.querySelector('#menu');
    const order = document.querySelector('#order');
    const contact = document.querySelector('#contact');
    home.addEventListener('click', ()=>{
        loadHome();
    })
    menu.addEventListener('click', ()=>{
        loadMenu();
    })
    order.addEventListener('click', ()=>{
        loadOrder();
    })
    contact.addEventListener('click', ()=>{
        loadContact();
    })
}
export {addNavListeners};