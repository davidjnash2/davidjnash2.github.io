let profile = document.getElementById("profile");
let allbusiness = document.getElementById("allbusiness");

function businessDad() {

    if (profile.getAttribute('src') === "F07335DE-9DA6-41A4-BE53-D9377952592F.jpg") {
        profile.setAttribute('src', "IMG_6499.jpeg");
    }
    else {
        profile.setAttribute('src', "F07335DE-9DA6-41A4-BE53-D9377952592F.jpg");
    }
}

allbusiness.addEventListener("click", businessDad);
