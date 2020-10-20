const glossaryForm = document.querySelector('.court-glossary-select')
const courtAreaSelect = document.querySelector('#court-area')
const courtLineSelect = document.querySelector('#court-line')
const glossarySelect = document.querySelector('.glossary-select')
const glossaryButton = document.querySelector('.glossary-btn')
const glossaryButtonTwo = document.querySelector('.glossary-btn-two')

// if (glossaryButton.classList.contains('glossary-btn')) {
//     console.log('yes')
// }



function courtAreaSelected() {
    // selectedIndex 為你所選中的選項index
    const index = courtAreaSelect.selectedIndex
    console.log(index)

    const optionValue = courtAreaSelect.options[index].value
    console.log(optionValue)

    const optionText = courtAreaSelect.options[index].text
    console.log(optionText)

    // 將 DOM 裡相對應的 option value class 取出
    const courtTransitions = document.querySelectorAll(`.${optionValue}`)

    // 將上一個 transition 移除

    // for (let i = 0; i < courtTransitions.length; i++) {
    //     courtTransitions[i].classList.remove('active')
    //     console.log(courtTransitions[i])
    // }


    glossaryButton.addEventListener('click', function () {
        courtTransitions.forEach(function (courtTransition) {
            courtTransition.classList.remove('active')
        })
    })

    // 要用迴圈把 quertySelectorAll 的每個 item 取出
    // for (let i = 0; i < courtTransitions.length; i++) {
    //     courtTransitions[i].classList.add('active')
    // }

    // forEach 寫法
    courtTransitions.forEach(function (courtTransition) {
        courtTransition.classList.add('active')
        console.log(courtTransition)
    })
}


function courtLineSelected() {
    // selectedIndex 為你所選中的選項index
    const index = courtLineSelect.selectedIndex
    console.log(index)

    const optionValue = courtLineSelect.options[index].value
    console.log(optionValue)

    const optionText = courtLineSelect.options[index].text
    console.log(optionText)

    // 將 DOM 裡相對應的 option value class 取出
    const courtTransitions = document.querySelectorAll(`.${optionValue}`)

    // 將上一個 transition 移除

    // for (let i = 0; i < courtTransitions.length; i++) {
    //     courtTransitions[i].classList.remove('active')
    //     console.log(courtTransitions[i])
    // }


    glossaryButton.addEventListener('click', function () {
        courtTransitions.forEach(function (courtTransition) {
            courtTransition.classList.remove('active')
        })
    })

    // 要用迴圈把 quertySelectorAll 的每個 item 取出
    // for (let i = 0; i < courtTransitions.length; i++) {
    //     courtTransitions[i].classList.add('active')
    // }

    // forEach 寫法
    courtTransitions.forEach(function (courtTransition) {
        courtTransition.classList.add('active')
        console.log(courtTransition)
    })
}

glossaryButton.addEventListener('click', courtAreaSelected)
glossaryButtonTwo.addEventListener('click', courtLineSelected)