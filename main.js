let socialLinks = document.querySelector(".card__content__info__social");
let shareIcon = document.getElementById("share-icon");

shareIcon.addEventListener("click", () => {
  if (window.innerWidth > 767) {
    socialLinks.classList.toggle("active");
  }
});
