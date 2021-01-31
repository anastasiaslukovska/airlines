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

    // if quantity of tickets < 3 --> footer margin-top -120px; else 30px;

    $('#search-button').on('click', function () {
        var from = document.getElementsByName('from')[0].value;
        var to = document.getElementsByName('to')[0].value;
        var date = new String(document.getElementsByName('date')[0].value);
        var year = date.substring(0, 4);
        var month = date.substring(5, 7);
        var day = date.substring(8, 10);
        $.ajax({
            url: '/ajax/search-tickets.php',
            type: 'GET',
            cache: false,
            data: { 'from': from, 'to': to, 'date': date },
            dataType: 'html',
            beforeSend: function (xhr) {
                $('#search-button').prop("disabled", true);
            },
            success: function (data) {
                var result = JSON.parse( data );
                for(let i = 0; i < result.length; i++){
                    document.getElementById('tickets').innerHTML += '<div class="ticket"> <div class="country-from"> <h2>'
                        + result[i][3] + '</h2> <h4>Час відправлення: ' + result[i][7] + '</h4> </div> <div class="arrow-right"> <img src="images/arrow-right.png" alt="arrow-right"> </div> <div class="country-to"> <h2>'
                        + result[i][4] + '</h2> <h4>Час прибуття: ' + result[i][8] + '</h4> </div> <div class="price"> <h3>' + result[i][10] + ' грн.</h3><button class="btn btn-success" id="booking-btn">Забронювати</button></div> </div>';
                }
                $('#search-button').prop("disabled", false);
            },
            error: (error) => {
                console.log(JSON.stringify(error));
            }
        });
    });

    $('#tickets').on('click', '#booking-btn', function () {
        document.getElementById("booking-close-button").style.display = "block";
        document.getElementById("booking-form-container").style.display = "flex";
    });
    $('#booking-close-button').on('click', function () {
        document.getElementById("booking-close-button").style.display = "none";
        document.getElementById("booking-form-container").style.display = "none";
    });
});
