const surveyBtn = document.querySelector('.serveybtn');
const mainPage = document.querySelector('.surveycontainer');
const surveyPage1 = document.querySelector('.surveypage1');
const surveyPage2 = document.querySelector('.surveypage2');
const surveyPage3 = document.querySelector('.surveypage3');
const surveyPage1Btn = document.querySelectorAll('.btn1');
const surveyPage2Btn = document.querySelectorAll('.btn2');
const surveyPage3Btn = document.querySelectorAll('.btn3');
const surveyPage4Btn = document.querySelectorAll('.btn4');

surveyBtn.addEventListener('click', () => {
    mainPage.classList.add('show-main');
    surveyPage1.setAttribute("style", "display: block");
})

surveyPage1Btn.forEach(btn => {
    btn.addEventListener('click', () => {
        surveyPage1.setAttribute("style", "display: none");
        surveyPage2.setAttribute("style", "display: block")
    })
})

surveyPage2Btn.forEach(btn => {
    btn.addEventListener('click', () => {
        surveyPage2.setAttribute("style", "display: none");
        surveyPage3.setAttribute("style", "display: block")
    })
})

surveyPage3Btn.forEach(btn => {
    btn.addEventListener('click', () => {
        surveyPage3.setAttribute("style", "display: none");
        surveyPage4.setAttribute("style", "display: block")
    })
})


// surveyPage1Btn.addEventListener('click', () => {
//     surveyPage1.setAttribute("style", "display: none");
//     surveyPage2.setAttribute("style", "display: block")
// })

// surveyPage2Btn.addEventListener('click', () => {
//     surveyPage2.setAttribute("style", "display: none");
//     surveyPage3.setAttribute("style", "display: block")
// })