const buttonOpenMobile = document.getElementById("mobile-button")

const menuMobile = document.getElementById("mobile-menu")

buttonOpenMobile.addEventListener("click", ()=>{
  
  
  menuMobile.classList.remove("hidden");
  menuMobile.classList.remove("-right-[18rem]");
  menuMobile.classList.add("right-0");

    setTimeout(() => {
      menuMobile.classList.add("-right-[18rem]");
      menuMobile.classList.add("hidden");
  }, 8000);
})

const buttonCloseMobile = document.getElementById("mobile-close")

buttonCloseMobile.addEventListener("click", () => {
  menuMobile.classList.remove("right-0");
  menuMobile.classList.add("-right-[18rem]");
  menuMobile.classList.add("hidden");
  
});

const header = document.getElementById("header")

document.addEventListener("scroll", ()=>{
  
  const scrollPosition = window.scrollY;

  if(scrollPosition !== 0){
    header.classList.add("backdrop-blur-lg");
    header.classList.add("text-bg-color");
    header.classList.add("hover:text-color-text");
    header.classList.add("mt-4");

  } else{
    header.classList.remove("backdrop-blur-lg");
    header.classList.remove("text-bg-color");
    header.classList.remove("hover:text-color-text");
    header.classList.remove("mt-4");
  }

})