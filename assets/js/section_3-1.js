const glossaryForm = document.querySelector('.court-glossary-select')
const courtAreaSelect = document.querySelector('#court-area')
const courtLineSelect = document.querySelector('#court-line')
const glossarySelect = document.querySelector('.glossary-select')
const glossaryButton = document.querySelector('.glossary-btn')
const glossaryButtonLine = document.querySelector('.glossary-line-btn')

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

    // select 下的 option change ，將上一個 transition 移除
    courtAreaSelect.addEventListener('change', function () {
        courtTransitions.forEach(function (courtTransition) {
            courtTransition.classList.remove('active')
        })
    })

    // 加上判斷式，在同樣的 option 下，再點一下 button，會有 toggle 效果
    for (let i = 0; i < courtTransitions.length; i++) {
        console.log(courtTransitions[i])
        if (courtTransitions[i].classList.contains('active')) {
            courtTransitions[i].classList.remove('active')
            console.log('active to non-active')
        } else {
            courtTransitions[i].classList.add('active')
            console.log('non-active to active')
        }
    }

    // forEach 寫法
    //   courtTransitions.forEach(function (courtTransition) {
    //       courtTransition.classList.add('active')
    //       console.log(courtTransition)
    //   })

    // 要用迴圈把 quertySelectorAll 的每個 item 取出
    // for (let i = 0; i < courtTransitions.length; i++) {
    //     courtTransitions[i].classList.add('active')
    // }
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

    // select 下的 option change ，將上一個 transition 移除
    courtLineSelect.addEventListener('change', function () {
        courtTransitions.forEach(function (courtTransition) {
            courtTransition.classList.remove('line-active')
        })
    })

    // 加上判斷式，在同樣的 option 下，再點一下 button，會有 toggle 效果
    for (let i = 0; i < courtTransitions.length; i++) {
        console.log(courtTransitions[i])
        if (courtTransitions[i].classList.contains('line-active')) {
            courtTransitions[i].classList.remove('line-active')

            console.log('active to non-active')
        } else {
            courtTransitions[i].classList.add('line-active')
            console.log('non-active to active')
        }
    }
}

function definitionDisplay() {
    const courtDefinition = document.querySelector('#court-area-definition')
    console.log(courtDefinition)

    // select 下的 option change ，將上一個 transition 移除
    courtAreaSelect.addEventListener('change', function () {
        courtDefinition.style.display = 'none'
    })

    if (courtDefinition.style.display === 'none') {
        courtDefinition.style.display = 'block'
    } else {
        courtDefinition.style.display = 'none'
    }
}

glossaryButton.addEventListener('click', courtAreaSelected)
glossaryButton.addEventListener('click', definitionDisplay)
glossaryButtonLine.addEventListener('click', courtLineSelected)