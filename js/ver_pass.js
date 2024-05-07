const pass = document.getElementById("pass");
const icon = document.getElementById("icon");

icon.addEventListener("click", e => {
    if (pass.type === "password") {
        pass.type = "text";
        icon.classList.remove("bi-eye");
        icon.classList.add("bi-eye-slash");
    } else {
        pass.type = "password";
        icon.classList.add("bi-eye");
        icon.classList.remove("bi-eye-slash");
    }
});