prevBtn = document.querySelector("#prev-slide");
nextBtn = document.querySelector("#next-slide");

prevBtn.addEventListener('click',e => {
    e.preventDefault();
    var carousel = document.querySelector(".carousel")
    var instance = M.Carousel.getInstance(carousel)
    instance.prev();
})

nextBtn.addEventListener('click',e => {
    e.preventDefault();
    var carousel = document.querySelector(".carousel")
    var instance = M.Carousel.getInstance(carousel)
    instance.next();
})