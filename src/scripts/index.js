
const aboutUsServices = document.querySelector(".about-us button");
let aboutUsContent = document.querySelector(".about-us div");

aboutUsServices.addEventListener('click', function () {
    aboutUsContent.classList.toggle("show");
})