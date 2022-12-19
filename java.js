let profile = document.getElementById("profile");
let allbusiness = document.getElementById("allbusiness");

function businessDad() {

    if (profile.getAttribute('src') === "https://github.com/davidjnash2/davidjnash2.github.io/blob/4471d52ab185c266fd9ec5f40b1beff3677b7ea8/F07335DE-9DA6-41A4-BE53-D9377952592F.jpg") {
        profile.setAttribute('src', "https://github.com/davidjnash2/davidjnash2.github.io/blob/4471d52ab185c266fd9ec5f40b1beff3677b7ea8/IMG_6499.jpeg");
    }
    else {
        profile.setAttribute('src', "https://github.com/davidjnash2/davidjnash2.github.io/blob/4471d52ab185c266fd9ec5f40b1beff3677b7ea8/F07335DE-9DA6-41A4-BE53-D9377952592F.jpg");
    }
}

allbusiness.addEventListener("click", businessDad);
