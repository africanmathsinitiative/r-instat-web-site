const scrollToTopButton = document.querySelector(".scroll-to-top-btn");

window.addEventListener("scroll", () => {
  if(this.window.pageYOffset > 100){
    scrollToTopButton.classList.add("active");
  }else{
      scrollToTopButton.classList.remove("active");
    }
});