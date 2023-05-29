const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');
const switchBody = document.querySelector('#btn-switch'),
    switchButton = document.querySelector('.indicator');


registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', ()=> {
    wrapper.classList.toggle('active-popup');
});

iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup','active');
});

switchBody.addEventListener('click', ()=>{
    switchButton.classList.toggle("D-ModeOn");
});
switchBody.addEventListener('click', ()=>{
    document.body.classList.toggle('DarkOn');
});
