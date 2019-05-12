// Переключатель

$('.switch label').on('click', function(){
    var indicator = $(this).parent('.switch').find('span');
    if ( $(this).hasClass('right') ){
          $(indicator).addClass('right');
    } else {
      $(indicator).removeClass('right');
    }
  });


// Окно - логин 

const openBtn = document.querySelector('.btn-login');
const overlayLogin = document.querySelector('.overlay-login');
const popupLogin = document.querySelector('.popup-login');
const closeBtn = document.querySelector('.popup-close');
let opacity = 0.2;

openBtn.addEventListener('click', function () {
    popupLogin.classList.add('popup-login_active');
    popupLogin.style.opacity = 0;

    setTimeout(function foo() {
        if (opacity < 1) {
            opacity += 0.2;
            popupLogin.style.opacity = opacity;
            setTimeout(foo, 80);
        }


    }, 80);




    closeBtn.addEventListener('click', function () {
        setTimeout(function fooC() {
            if (opacity > 0) {
                opacity -= 0.2;
                popupLogin.style.opacity = opacity;
                setTimeout(fooC, 80);
            } else {
    
                popupLogin.classList.remove('popup-login_active');
            }
        }, 80);
    
    
    });

    document.addEventListener('keydown', function (e) {

        setTimeout(function fooC() {
            if (e.keyCode === 27) {
                opacity -= 0.2;
                popupLogin.style.opacity = opacity;
                setTimeout(fooC, 80);
            } else {
                popupLogin.classList.remove('popup-login_active');
            }
        }, 80);
    
    });

    overlayLogin.addEventListener('click', function() {
        setTimeout(function fooC() {
            if (opacity > 0) {
                opacity -= 0.2;
                popupLogin.style.opacity = opacity;
                setTimeout(fooC, 80);
            } else {
    
                popupLogin.classList.remove('popup-login_active');
            }
        }, 80);
    });





});

// Окно - правила

  
const openBtnRules = document.querySelector('.btn-rules');
const popupRules = document.querySelector('.popup-rules');
const overlayRules = document.querySelector('.overlay-rules');
const closeBtnRules = document.querySelector('.popup-close_rules');
let opacityRules = 0.2;

openBtnRules.addEventListener('click', function () {
    popupRules.classList.add('popup-rules_active');
    popupRules.style.opacityRules = 0;

    setTimeout(function foo() {
        if (opacityRules < 1) {
            opacityRules += 0.2;
            popupRules.style.opacityRules = opacityRules;
            setTimeout(foo, 80);
        }


    }, 80);

    closeBtnRules.addEventListener('click', function () {
        setTimeout(function fooC() {
            if (opacityRules > 0) {
                opacityRules -= 0.2;
                popupRules.style.opacityRules = opacityRules;
                setTimeout(fooC, 80);
            } else {
    
                popupRules.classList.remove('popup-rules_active');
            }
        }, 80);
    
    
    });

    document.addEventListener('keydown', function (e) {

        setTimeout(function fooC() {
            if (e.keyCode === 27) {
                opacityRules -= 0.2;
                popupRules.style.opacityRules = opacityRules;
                setTimeout(fooC, 80);
            } else {
                popupRules.classList.remove('popup-rules_active');
            }
        }, 80);
    
    });

    overlayRules.addEventListener('click', function() {
        setTimeout(function fooC() {
            if (opacity > 0) {
                opacity -= 0.2;
                popupRules.style.opacity = opacity;
                setTimeout(fooC, 80);
            } else {
    
                popupRules.classList.remove('popup-rules_active');
            }
        }, 80);
    });



});
