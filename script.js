function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')
    img = document.querySelector("#profile img")

   if(html.classList.contains('light'))
   {
       img.setAttribute('src', './assets/avatar-light.png')
       img.setAttribute('alt', 'Mayk tema claro')
   }
else{
    img.setAttribute('src', './assets/avatar.png')
    img.setAttribute('alt', 'Mayk tema escuro')
}
   
}
