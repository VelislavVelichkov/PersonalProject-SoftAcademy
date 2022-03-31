function showBurgerMenu() {
    let BurgerMenu = document.getElementById("showMainMenu");
    if (BurgerMenu.style.display === "block") {
      BurgerMenu.style.display = "none";
    } else {
      BurgerMenu.style.display = "block";
    }
};
$(function() {
    $('.slider').bxSlider({
    auto: true,
    pause: 4000
});
});