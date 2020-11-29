const singlesBtn = document.querySelector('.singles-btn')
const doublesBtn = document.querySelector('.doubles-btn')
const resetBtn = document.querySelector('#reset-btn')
const glossaryForm = document.querySelector('.court-glossary-select')
const courtAreaSelect = document.querySelector('#court-area')
const courtLineSelect = document.querySelector('#court-line')
const glossarySelect = document.querySelector('.glossary-select')
const glossaryButtonArea = document.querySelector('.glossary-area-btn')
const glossaryButtonLine = document.querySelector('.glossary-line-btn')


function courtAreaSelected() {
    // selectedIndex 為你所選中的選項index
    const index = courtAreaSelect.selectedIndex
    console.log(index)

    const optionValue = courtAreaSelect.options[index].value
    console.log(optionValue)

    //  const optionText = courtAreaSelect.options[index].text
    //  console.log(optionText)

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

function definitionAreaDisplay() {
    const courtDefinition = document.querySelector('.court-area-definition')

    const index = courtAreaSelect.selectedIndex

    const optionValue = courtAreaSelect.options[index].value

    // 將 DOM 裡相對應的 option value class 取出
    // const definitionDivArray = document.querySelectorAll(`.${optionValue}.court-area-definition`)

    // const definitionDiv = definitionDivArray[0]
    // console.log(definitionDiv)

    const definitionDiv = document.querySelector(`#${optionValue}`)

    // select 下的 option change ，將上一個 transition 移除
    courtAreaSelect.addEventListener('change', function () {
        definitionDiv.style.display = 'none'
        definitionDiv.classList.remove('definition-active')
    })

    // 顯示 div
    // if (definitionDiv.style.display === 'none') {
    //     definitionDiv.style.display = 'block'
    // } else {
    //     definitionDiv.style.display = 'none'
    // }



    // 顯示 div & 加上 DOM 樣式
    if ((definitionDiv.classList.contains('definition-active')) && (definitionDiv.style.display === 'block')) {
        definitionDiv.classList.remove('definition-active')
        definitionDiv.style.display = 'none'
    } else {
        definitionDiv.classList.add('definition-active')
        definitionDiv.style.display = 'block'
    }

    console.log(definitionDiv)
}

function definitionLineDisplay() {
    const courtDefinition = document.querySelector('.court-line-definition')

    const index = courtLineSelect.selectedIndex

    const optionValue = courtLineSelect.options[index].value

    const definitionDiv = document.querySelector(`#${optionValue}`)

    // select 下的 option change ，將上一個 transition 移除
    courtLineSelect.addEventListener('change', function () {
        courtDefinition.style.display = 'none'
        definitionDiv.style.display = 'none'
        definitionDiv.classList.remove('definition-active')
    })

    // 顯示 Div & 加上 DOM 樣式
    if ((definitionDiv.classList.contains('definition-active')) && (definitionDiv.style.display = 'block')) {
        definitionDiv.classList.remove('definition-active')
        definitionDiv.style.display = 'none'
    } else {
        definitionDiv.classList.add('definition-active')
        definitionDiv.style.display = 'block'
    }
}

function courtAreaFunction() {
    courtAreaSelected()
    definitionAreaDisplay()
}

function courtLineFunction() {
    courtLineSelected()
    definitionLineDisplay()
}

function singlesCourtSelected(){
    const singlesCourt = document.querySelectorAll('.singles-court')

        // 加上判斷式，在同樣的 option 下，再點一下 button，會有 toggle 效果
  for (let i = 0; i < singlesCourt.length; i++){
        console.log(singlesCourt[i])
        if (singlesCourt[i].classList.contains('active')) {
           singlesCourt[i].classList.remove('active')
         
        } else {
            singlesCourt[i].classList.add('active')
        }
}
}

function doublesCourtSelected(){
   
    const doublesCourt = document.querySelectorAll('.doubles-court')

        // 加上判斷式，在同樣的 option 下，再點一下 button，會有 toggle 效果
  for (let i = 0; i < doublesCourt.length ; i++){
      console.log(i)
        if (doublesCourt[i].classList.contains('active')) {
           doublesCourt[i].classList.remove('active')
            console.log('active to non-active')
        } else {
            doublesCourt[i].classList.add('active')
            console.log('non-active to active')
        }
}
}

function resetFunction(){
    const singlesCourt = document.querySelectorAll('.singles-court')
    const doublesCourt = document.querySelectorAll('.doubles-court')
    for (let i = 0; i < singlesCourt.length; i++){
        if (singlesCourt[i].classList.contains('active')) {
           singlesCourt[i].classList.remove('active')
            console.log('active to non-active')
        } 
    }
          for (let i = 0; i < doublesCourt.length ; i++){
        if (doublesCourt[i].classList.contains('active')) {
           doublesCourt[i].classList.remove('active')
            console.log('active to non-active')
        }
    }

}

function resetSelected(){
       const activeClass = document.querySelectorAll('.active')
       console.log(activeClass)
    for (let i = 0; i < activeClass.length; i++){
        if (activeClass[i].classList.contains('active')){
            activeClass[i].classList.remove('active')
        }
    }

    
    const lineActive = document.querySelectorAll('.line-active')
    console.log(lineActive)
    for (let i = 0; i < lineActive.length; i++){
        if (lineActive[i].classList.contains('line-active')){
            lineActive[i].classList.remove('line-active')
        } 
    }

    const areaDefinition = document.querySelectorAll('.court-area-definition')
      const lineDefinition = document.querySelectorAll('.court-line-definition')
    console.log(areaDefinition)
    console.log(lineDefinition)
  
    for (let i = 0; i < areaDefinition.length; i++){
        if ((areaDefinition[i].classList.contains('definition-active')) && (areaDefinition[i].style.display = 'block')){
            console.log(areaDefinition[i])
            areaDefinition[i].classList.remove('definition-active')
              areaDefinition[i].style.display = 'none'
        } }

         for (let i = 0; i < lineDefinition.length; i++){
        if ((lineDefinition[i].classList.contains('definition-active')) && (lineDefinition[i].style.display = 'block')){
            console.log(lineDefinition[i])
            lineDefinition[i].classList.remove('definition-active')
              lineDefinition[i].style.display = 'none'
        } }

}

function doublesCourtFunction(){
    resetFunction()
    singlesCourtSelected()
    doublesCourtSelected()
}

function singlesCourtFunction(){
    resetFunction()
    singlesCourtSelected()
}

function resetAll(){
    resetFunction()
    resetSelected()
}

singlesBtn.addEventListener('click', singlesCourtFunction)
doublesBtn.addEventListener('click', doublesCourtFunction)
resetBtn.addEventListener('click', resetAll)

glossaryButtonArea.addEventListener('click', courtAreaFunction)
glossaryButtonLine.addEventListener('click', courtLineFunction)