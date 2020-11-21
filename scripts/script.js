jQuery('document').ready(function () {
    if ($("body").width() <= 991) {
        $("#sign-up-button").remove();
        $("#login-button").remove();
        $('.navbar-nav').append('<button class="btn btn-dark" id="login-button" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-expanded="false" aria-controls="navbarSupportedContent">Увійти</button>');
        $('.navbar-nav').append('<button class="btn btn-success" id="sign-up-button" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-expanded="false" aria-controls="navbarSupportedContent">Зареєструватися</button>');
    }
    jQuery('#sign-up-button').on('click', function () {
        document.getElementById("close-button").style.display = "block";
        document.getElementById("sign-up-container").style.display = "flex";
        document.getElementById("login-close-button").style.display = "none";
        document.getElementById("login-form-container").style.display = "none";
    });
    jQuery('#form-close-button').on('click', function () {
        document.getElementById("close-button").style.display = "none";
        document.getElementById("sign-up-container").style.display = "none";
    });
    jQuery('#login-button').on('click', function () {
        document.getElementById("login-close-button").style.display = "block";
        document.getElementById("login-form-container").style.display = "flex";
        document.getElementById("close-button").style.display = "none";
        document.getElementById("sign-up-container").style.display = "none";
    });
    jQuery('#login-close-button').on('click', function () {
        document.getElementById("login-close-button").style.display = "none";
        document.getElementById("login-form-container").style.display = "none";
    });
    
    //Search-Tickets scripts
    
    $('.tickets').append('<div class="ticket"> <div class="country-from"> <h2>Країна відправлення</h2> <h4>Час відправлення: 13:45</h4> </div> <div class="arrow-right"> <img src="images/arrow-right.png" alt="arrow-right"> </div> <div class="country-to"> <h2>Країна прибуття</h2> <h4>Час прибуття: 16:21</h4> </div> <div class="price"> <h3>1565 грн.</h3><button class="btn btn-success" id="booking-btn">Забронювати</button></div> </div>');
    // if quantity of tickets < 3 --> footer margin-top -120px; else 30px;
    jQuery('#booking-btn').on('click', function () {
        document.getElementById("booking-close-button").style.display = "block";
        document.getElementById("booking-form-container").style.display = "flex";
    });
    jQuery('#booking-close-button').on('click', function () {
        document.getElementById("booking-close-button").style.display = "none";
        document.getElementById("booking-form-container").style.display = "none";
    });
});
