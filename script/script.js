const featuresBtn = document.getElementById("features-btn");
const companyBtn = document.getElementById('company-btn');
const hamburgerBtn = document.getElementById('open');
const hamburgerBtnClose = document.getElementById('close');
const main = document.getElementById('main');

featuresBtn.addEventListener('click', () => {

    document.getElementById("firstDropdown").classList.toggle('myDropDown-active');
    companyBtn.addEventListener('click', () => {

        document.getElementById("firstDropdown").classList.remove('myDropDown-active');
        
    });

    main.addEventListener('click', () => {

        document.getElementById("firstDropdown").classList.remove('myDropDown-active');
        
    });
});


companyBtn.addEventListener('click', () => {

    document.getElementById("secondDropdown").classList.toggle('myDropDown1-active');

    featuresBtn.addEventListener('click', () => {

        document.getElementById("secondDropdown").classList.remove('myDropDown1-active');
    
    });

    main.addEventListener('click', () => {

        document.getElementById("secondDropdown").classList.remove('myDropDown1-active');
        
    });

});

hamburgerBtn.addEventListener('click', () => {

    
    document.getElementById("navbar-buttons").classList.add('buttons-active');
    document.getElementById("navbar-menu").classList.add('menu-active');
    hamburgerBtnClose.style.cssText = 'display: block;'
});


hamburgerBtnClose.addEventListener('click', () => {

    
    document.getElementById("navbar-buttons").classList.remove('buttons-active');
    document.getElementById("navbar-menu").classList.remove('menu-active');
    hamburgerBtnClose.style.cssText = 'display: none;'
});

main.addEventListener('click', () => {

    document.getElementById("navbar-buttons").classList.remove('buttons-active');
    document.getElementById("navbar-menu").classList.remove('menu-active');
    hamburgerBtnClose.style.cssText = 'display: none;'
    
});