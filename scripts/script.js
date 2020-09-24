jQuery('document').ready(function() {
    jQuery('#sign-up-button').on('click', function() {
        document.getElementById("form-relative-container").style.display = "flex";
        document.getElementById("form-bg-id").style.display = "flex";
        document.getElementById("sign-up-form").style.display = "block";
    })
});