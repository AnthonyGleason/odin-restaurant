import {clearScreen} from "./clearScreen.js";
let loadMenu = function (){
    clearScreen();
    const contentDiv = document.querySelector('#content');
    const contentContainer= document.createElement('div');
    contentContainer.setAttribute('class', 'content-container');
    contentDiv.appendChild(contentContainer);
    const contentText= document.createElement('div');
    contentText.setAttribute('class', 'content-text');
    contentText.innerText="Small Coffee: $1.00, Medium Coffee: $1.50, Large Coffee: $2.00 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet risus feugiat in ante metus dictum. Et malesuada fames ac turpis egestas sed. Ut sem viverra aliquet eget sit amet. Natoque penatibus et magnis dis. Nunc id cursus metus aliquam eleifend mi in. Purus non enim praesent elementum. Eu nisl nunc mi ipsum. Nunc faucibus a pellentesque sit amet porttitor eget dolor. Ac tortor dignissim convallis aenean et tortor. Elementum curabitur vitae nunc sed velit. Magna eget est lorem ipsum dolor sit amet. Posuere lorem ipsum dolor sit amet consectetur. Id donec ultrices tincidunt arcu non sodales neque. Enim sit amet venenatis urna cursus eget. Sit amet luctus venenatis lectus magna fringilla urna porttitor rhoncus. Arcu non odio euismod lacinia. Nunc pulvinar sapien et ligula ullamcorper malesuada proin libero nunc.";
    contentContainer.appendChild(contentText);
};
export {loadMenu};