const accordionBtn = document.querySelectorAll('.accordion')

    for(let i = 0; i < accordionBtn.length; i++){
        accordionBtn[i].addEventListener('click', openSubmenu)

        /* Toggle between hiding and showing the submenu */
        function openSubmenu(){

            const submenu = this.nextElementSibling
            console.log(submenu)

            if (submenu.style.display === 'block'){
                submenu.style.display = 'none'
            } else {
                submenu.style.display = 'block'
            }
        }
    }


