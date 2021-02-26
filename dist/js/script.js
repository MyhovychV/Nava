function burgerClick() {
   let headerNav = document.getElementById("header-nav")
   if (headerNav.style.display == "none") {
      headerNav.style.display = "block"
      setTimeout(() => {
         headerNav.style.top = "50px"
      }, 3000)
   } else if (headerNav.style.display == "block") {
      headerNav.style.display = "none"
      setTimeout(() => {
         headerNav.style.top = "0"
      }, 3000)
   } else if (headerNav.style.display == "") {
      headerNav.style.display = "block"
      setTimeout(() => {
         headerNav.style.top = "50px"
      }, 3000)
   }
}