window.addEventListener('DOMContentLoaded', function(){
        
    let buttonFirst = document.querySelector('.interaction-field__button--first');
    buttonFirst = buttonFirst.addEventListener('click', function(){

        let blockFirst =  document.querySelector('.interaction-field__wrapper-first');  
        blockFirst = blockFirst.classList.remove('show');
        let blockSecond =  document.querySelector('.interaction-field__wrapper-second');  
        blockSecond = blockSecond.classList.add('show');
        document.querySelector('.carpet').style.display = 'none';        
    });  
    
    let buttonSecond = document.querySelector('.interaction-field__button--second');
    buttonSecond = buttonSecond.addEventListener('click', function(){

        let blockSecond =  document.querySelector('.interaction-field__wrapper-second');  
        blockSecond = blockSecond.classList.remove('show');
        let blockThird =  document.querySelector('.interaction-field__wrapper-third');  
        blockThird = blockThird.classList.add('show');
    }); 

    let buttonThirdL = document.querySelector('.interaction-field__button--third-left');
    buttonThirdL = buttonThirdL.addEventListener('click', function(){

        let blockThird =  document.querySelector('.interaction-field__wrapper-third');  
        blockThird = blockThird.classList.remove('show');
        let blockFourth =  document.querySelector('.interaction-field__wrapper-fourth');  
        blockFourth = blockFourth.classList.add('show');
    }); 

    let buttonThirdR = document.querySelector('.interaction-field__button--third-right');
    buttonThirdR = buttonThirdR.addEventListener('click', function(){

        let blockThird =  document.querySelector('.interaction-field__wrapper-third');  
        blockThird = blockThird.classList.remove('show');
        let blockFirst =  document.querySelector('.interaction-field__wrapper-first');  
        blockFirst = blockFirst.classList.add('show');
    }); 

    let buttonFourthL = document.querySelector('.interaction-field__button--fourth-left');
    buttonFourthL = buttonFourthL.addEventListener('click', function(){

        let blockFourth =  document.querySelector('.interaction-field__wrapper-fourth');  
        blockFourth = blockFourth.classList.remove('show');
        let blockFifth =  document.querySelector('.interaction-field__wrapper-fifth');  
        blockFifth = blockFifth.classList.add('show');
    }); 

    let buttonFourthR = document.querySelector('.interaction-field__button--fourth-right');
    buttonFourthR = buttonFourthR.addEventListener('click', function(){

        let blockFourth =  document.querySelector('.interaction-field__wrapper-fourth');  
        blockFourth = blockFourth.classList.remove('show');
        let blockFirst =  document.querySelector('.interaction-field__wrapper-first');  
        blockFirst = blockFirst.classList.add('show');
    });

    let buttonFifthL = document.querySelector('.interaction-field__button--fifth-left');
    buttonFifthL = buttonFifthL.addEventListener('click', function(){

        let blockFifth =  document.querySelector('.interaction-field__wrapper-fifth');  
        blockFifth = blockFifth.classList.remove('show');
        let blockSixth =  document.querySelector('.interaction-field__wrapper-sixth');  
        blockSixth = blockSixth.classList.add('show');
    }); 

    let buttonFifthR = document.querySelector('.interaction-field__button--fifth-right');
    buttonFifthR = buttonFifthR.addEventListener('click', function(){

        let blockFifth =  document.querySelector('.interaction-field__wrapper-fifth');  
        blockFifth = blockFifth.classList.remove('show');
        let blockFirst =  document.querySelector('.interaction-field__wrapper-first');  
        blockFirst = blockFirst.classList.add('show');
    });

    let buttonSixth = document.querySelector('.interaction-field__button--sixth');
    buttonSixth = buttonSixth.addEventListener('click', function(){

        let blockSixth =  document.querySelector('.interaction-field__wrapper-sixth');  
        blockSixth = blockSixth.classList.remove('show');
        let blockSeventh =  document.querySelector('.interaction-field__form');  
        blockSeventh = blockSeventh.classList.add('show');
    });    

    let buttonForm = document.querySelector('.form__button');
    buttonForm = buttonForm.addEventListener('click', function(){
        let errors = [];
        let name = document.querySelector('.form__name').value;
        let mail = document.querySelector('.form__email').value;
        let age = document.querySelector('.form__self-age').value;
        let girl = document.querySelector('.form__girls-age-list').value;
        let Fcheck = document.querySelector('#first-checkbox').checked;
        let Scheck = document.querySelector('#second-checkbox').checked;
        
        if (name == false || mail == false || age == false || Fcheck == false || Scheck == false || girl == false) {            

            if (name == false) {
                errors.push ('заполните поле имя');
            }
            
            else if (mail == false) {
                errors.push ('заполните поле почта');
            }
    
            else if (age == false) {
                errors.push ('заполните поле Ваш возраст');
            }

            else if (girl == false) {
                errors.push ('выберете возраст девушки');
            }          
    
            else if (Fcheck == false) {
                errors.push ('Дайте согласие с условиями');
            }
    
            else if (Scheck == false) {
                errors.push ('Дайте согласие на уведомления');
            }
            
            alert(errors);              
        }

        else if (name !== false && mail !== false &&  age !== false &&  Fcheck == true &&  Scheck == true &&  girl !== false) {
            alert(errors); 
            window.location.href = 'questionnaires.html';  
        }             
    });
});
