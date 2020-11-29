const accordionButton = document.querySelectorAll('.accordion-btn')
const levelButton = document.querySelectorAll('.level-btn')

for( let i = 0; i < accordionButton.length; i++ ){
    accordionButton[i].addEventListener('click', openItems)
    console.log(accordionButton)

    function openItems(){
        this.classList.toggle('accordion-active')
   
    const accordionItem = this.nextElementSibling
    if(accordionItem.style.maxHeight){
        accordionItem.style.maxHeight = null
    } else {
        accordionItem.style.maxHeight =  accordionItem.scrollHeight + 'px'
    } }

}



for( let j = 0; j < levelButton.length; j++ ){
    levelButton[j].addEventListener('click', openItems)
console.log(levelButton)

    function openItems(){
      this.classList.toggle('accordion-active')
    const levelItem = this.nextElementSibling
    if(levelItem.style.maxHeight){
        levelItem.style.maxHeight = null
    } else {
        levelItem.style.maxHeight =  levelItem.scrollHeight + 'px'
    } }

}

// display: none 作法
/*
for( let i = 0; i < accordionButton.length; i++ ){
    accordionButton[i].addEventListener('click', openItems)

    function openItems(){
        this.classList.toggle('accordion-active')
   
    const accordionItem = this.nextElementSibling
    if(accordionItem.style.display === 'block'){
        accordionItem.style.display = 'none'
    } else {
        accordionItem.style.display =  'block'
    } }

} */
