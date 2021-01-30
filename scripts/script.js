$('document').ready(function () {
    if ($("body").width() <= 991) {
        $("#sign-up-button").remove();
        $("#login-button").remove();
        $('.navbar-nav').append('<button class="btn btn-dark" id="login-button" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-expanded="false" aria-controls="navbarSupportedContent">Увійти</button>');
        $('.navbar-nav').append('<button class="btn btn-success" id="sign-up-button" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-expanded="false" aria-controls="navbarSupportedContent">Зареєструватися</button>');
    }
    $('#sign-up-button').on('click', function () {
        document.getElementById("close-button").style.display = "block";
        document.getElementById("sign-up-container").style.display = "flex";
        document.getElementById("login-close-button").style.display = "none";
        document.getElementById("login-form-container").style.display = "none";
    });
    $('#form-close-button').on('click', function () {
        document.getElementById("close-button").style.display = "none";
        document.getElementById("sign-up-container").style.display = "none";
    });
    $('#login-button').on('click', function () {
        document.getElementById("login-close-button").style.display = "block";
        document.getElementById("login-form-container").style.display = "flex";
        document.getElementById("close-button").style.display = "none";
        document.getElementById("sign-up-container").style.display = "none";
    });
    $('#login-close-button').on('click', function () {
        document.getElementById("login-close-button").style.display = "none";
        document.getElementById("login-form-container").style.display = "none";
    });

    $('#accept-sign-up-button').on('click', function () {
        var name = document.getElementsByName('name')[0].value;
        var surname = document.getElementsByName('surname')[0].value;
        var email = document.getElementsByName('email')[0].value;
        var password = document.getElementsByName('password')[0].value;
        $.ajax({
            url: '/ajax/sign-up.php',
            type: 'POST',
            cache: false,
            data: { 'name': name, 'surname': surname, 'email': email, 'password': password },
            dataType: 'html',
            beforeSend: function (xhr) {
                $('#accept-sign-up-button').prop("disabled", true);
            },
            success: function (data) {
                alert(data);
                $('#accept-sign-up-button').prop("disabled", false);
            },
            error: (error) => {
                console.log(JSON.stringify(error));
            }
        });
    });

    $('#accept-login-button').on('click', function () {
        var email = document.getElementsByName('login-email')[0].value;
        var password = document.getElementsByName('login-password')[0].value;
        $.ajax({
            url: '/ajax/login.php',
            type: 'GET',
            cache: false,
            data: { 'email': email, 'password': password },
            dataType: 'html',
            beforeSend: function (xhr) {
                $('#accept-login-button').prop("disabled", true);
            },
            success: function (data) {
                alert(data);
                $('#accept-login-button').prop("disabled", false);
            },
            error: (error) => {
                console.log(JSON.stringify(error));
            }
        });
    });

    //Search-Tickets scripts

    $('.tickets').append('<div class="ticket"> <div class="country-from"> <h2>Країна відправлення</h2> <h4>Час відправлення: 13:45</h4> </div> <div class="arrow-right"> <img src="images/arrow-right.png" alt="arrow-right"> </div> <div class="country-to"> <h2>Країна прибуття</h2> <h4>Час прибуття: 16:21</h4> </div> <div class="price"> <h3>1565 грн.</h3><button class="btn btn-success" id="booking-btn">Забронювати</button></div> </div>');
    // if quantity of tickets < 3 --> footer margin-top -120px; else 30px;
    $('#booking-btn').on('click', function () {
        document.getElementById("booking-close-button").style.display = "block";
        document.getElementById("booking-form-container").style.display = "flex";
    });
    $('#booking-close-button').on('click', function () {
        document.getElementById("booking-close-button").style.display = "none";
        document.getElementById("booking-form-container").style.display = "none";
    });
});
