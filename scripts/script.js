jQuery('document').ready(function () {
    if ($("body").width() <= 991) {
        $("#sign-up-button").remove();
        $("#login-button").remove();
        $('.navbar-nav').append('<button class="btn btn-dark" id="login-button" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-expanded="false" aria-controls="navbarSupportedContent">Увійти</button>');
        $('.navbar-nav').append('<button class="btn btn-success" id="sign-up-button" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-expanded="false" aria-controls="navbarSupportedContent">Зареєструватися</button>');
    }
    jQuery('#sign-up-button').on('click', function () {
        document.getElementById("close-button").style.display = "block";
        document.getElementById("form-relative-container").style.display = "flex";
        document.getElementById("login-close-button").style.display = "none";
        document.getElementById("login-form-container").style.display = "none";
    });
    jQuery('#form-close-button').on('click', function () {
        document.getElementById("close-button").style.display = "none";
        document.getElementById("form-relative-container").style.display = "none";
    });
    jQuery('#login-button').on('click', function () {
        document.getElementById("login-close-button").style.display = "block";
        document.getElementById("login-form-container").style.display = "flex";
        document.getElementById("close-button").style.display = "none";
        document.getElementById("form-relative-container").style.display = "none";
    });
    jQuery('#login-close-button').on('click', function () {
        document.getElementById("login-close-button").style.display = "none";
        document.getElementById("login-form-container").style.display = "none";
    });
});
