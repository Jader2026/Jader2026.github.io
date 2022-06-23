(function(){
    const openButton = document.querySelector('.nav__img');
    const menu = document.querySelector('.nav__link');
    const closeMenu = document.querySelector('.nav__close');
    const controlMenu = document.querySelector('.nav_menu');

    openButton.addEventListener('click', (e)=>{
        menu.classList.add('nav__link--show');
        controlMenu.classList.add('nav_menu--show')
        console.log(e);

    });

    closeMenu.addEventListener('click', ()=>{
        menu.classList.remove('nav__link--show');
        controlMenu.classList.remove('nav_menu--show')
    }); 


})();