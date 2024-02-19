let toggleMenu = document.getElementById("toggleMenu"),
    LinksList = document.getElementById("LinksList");
toggleMenu.addEventListener("click", () => {
    toggleMenu.classList.toggle("open"), LinksList.classList.toggle("open")
}), $(function() {
    $(".owl-carousel").owlCarousel({
        margin: 20,
        responsive: {
            0: {
                items: 1,
                dots: !0,
                loop: !0
            },
            600: {
                items: 2,
                dots: !0,
                loop: !0
            },
            1e3: {
                items: 4,
                dots: !0,
                loop: !0
            }
        }
    })
}), AOS.init();