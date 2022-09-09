let clearScreen = function (){
    if (document.querySelector('.content-container')!=null){
        document.querySelector('.content-container').remove();
    }
};
export {clearScreen};