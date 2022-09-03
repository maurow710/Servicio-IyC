window.onload = function() {  
    var menu_boton = document.querySelector('.menu_boton') 
    if (menu_boton) { 
        menu_boton.addEventListener('click', () => { 
            var menu_items = document.querySelector('.menu_items') 
            menu_items.classList.toggle('show')
        }) 
    } 
}