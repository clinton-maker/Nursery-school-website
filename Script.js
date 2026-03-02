// Show alert when Enroll button is clicked
function showMessage() {
    alert("Thank you for your interest in Bright Future Nursery School! 🌈");
}

/* Optional: Simple form message (Contact page) */
document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector("form");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            alert("Your message has been sent successfully! 📩");
            form.reset();
        });
    }

});
