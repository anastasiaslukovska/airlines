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

    /*$('#accept-sign-up-button').on('click', function () {
        var name = document.getElementsByName('name')[0].value;
        var surname = document.getElementsByName('surname')[0].value;
        var email = document.getElementsByName('email')[0].value;
        var password = document.getElementsByName('password')[0].value;
        $.ajax({
            url: '/php/sign-up.php',
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
*/
    /*$('#accept-login-button').on('click', function () {
        var email = document.getElementsByName('login-email')[0].value;
        var password = document.getElementsByName('login-password')[0].value;
        $.ajax({
            url: '/php/login.php',
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
    });*/

    //Search-Tickets scripts

    // if quantity of tickets < 3 --> footer margin-top -120px; else 30px;

    $('#search-button').on('click', function () {
        var from = document.getElementsByName('from')[0].value;
        var to = document.getElementsByName('to')[0].value;
        var date = new String(document.getElementsByName('date')[0].value);
        $.ajax({
            url: '/php/search-tickets.php',
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

    //input-hints
    $(document.getElementsByName('from')[0]).on('input', function () {
        document.getElementById('from-select').innerHTML = "";
        var from = document.getElementsByName('from')[0].value;
        if(from != "") {
            document.getElementById('from-select').style.opacity = 0.5;
            $.ajax({
                url: '/php/from-hint.php',
                type: 'GET',
                cache: false,
                data: {'from': from},
                dataType: 'html',
                success: function (data) {
                    var result = JSON.parse(data);
                    for (let i = 0; i < result.length; i++) {
                        if ((i > 0 && result[i][0] != result[i - 1][0]) || i == 0) {
                            document.getElementById('from-select').innerHTML += '<option value="' + result[i][0] + '">' + result[i][0] + '</option>';
                        }
                    }
                },
                error: (error) => {
                    console.log(JSON.stringify(error));
                }
            });
        }
        else{
            document.getElementById('from-select').style.opacity = 0;
        }
    });

    $('#from').blur(function () {
            document.getElementById('from-select').style.opacity = 0;
        })
        .focus(function () {
            if(document.getElementsByName('from')[0].value != ""){
                document.getElementById('from-select').style.opacity = 0.5;
            }
        });

    $('#from-select').on('change', function () {
        $('#from').val(document.getElementById('from-select').options[document.getElementById('from-select').options.selectedIndex].value);
    });

    $(document.getElementsByName('to')[0]).on('input',function () {
        document.getElementById('to-select').innerHTML = "";
        var to = document.getElementsByName('to')[0].value;
        if(to != "") {
            document.getElementById('to-select').style.opacity = 0.5;
            $.ajax({
                url: '/php/to-hint.php',
                type: 'GET',
                cache: false,
                data: {'to': to},
                dataType: 'html',
                success: function (data) {
                    var result = JSON.parse(data);
                    for (let i = 0; i < result.length; i++) {
                        if ((i > 0 && result[i][0] != result[i - 1][0]) || i == 0) {
                            document.getElementById('to-select').innerHTML += '<option value="' + result[i][0] + '">' + result[i][0] + '</option>';
                        }
                    }
                },
                error: (error) => {
                    console.log(JSON.stringify(error));
                }
            });
        }
        else {
            document.getElementById('to-select').style.opacity = 0;
        }
    });

    $('#to').blur(function () {
            document.getElementById('to-select').style.opacity = 0;
        })
        .focus(function () {
            if(document.getElementsByName('to')[0].value != ""){
                document.getElementById('to-select').style.opacity = 0.5;
            }
        });

    $('#to-select').on('change', function () {
        $('#to').val(document.getElementById('to-select').options[document.getElementById('to-select').options.selectedIndex].value);
    });
});
