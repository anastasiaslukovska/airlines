jQuery('document').ready(function() {
    jQuery('#sign-up-button').on('click', function() {
        document.getElementById("close-button").style.display = "block";
        document.getElementById("form-relative-container").style.display = "flex";
        document.getElementById("sign-up-form").style.display = "block";
    });
    jQuery('#form-close-button').on('click', function() {
        document.getElementById("close-button").style.display = "none";
        document.getElementById("form-relative-container").style.display = "none";
        document.getElementById("sign-up-form").style.display = "none";
    });
});