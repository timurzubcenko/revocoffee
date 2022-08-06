let infoTab1 = document.querySelector('#info_tab_1')
let infoTab2 = document.querySelector('#info_tab_2')
let infoTab3 = document.querySelector('#info_tab_3')

let btnTab1 = document.querySelector('#btn_tab_1')
let btnTab2 = document.querySelector('#btn_tab_2')
let btnTab3 = document.querySelector('#btn_tab_3')

infoTab1.style.height = 'auto'
infoTab2.style.height = '0'
infoTab3.style.height = '0'

function clickTab(index) {
    if (index == 1) {
        infoTab1.style.height = '442px'
        infoTab2.style.height = '0'
        infoTab3.style.height = '0'

        btnTab1.classList.add('active')
        btnTab2.classList.remove('active')
        btnTab3.classList.remove('active')
    }
    else if (index == 2) {
        infoTab1.style.height = '0'
        infoTab2.style.height = '442px'
        infoTab3.style.height = '0'

        btnTab1.classList.remove('active')
        btnTab2.classList.add('active')
        btnTab3.classList.remove('active')
    }
    else if (index == 3) {
        infoTab1.style.height = '0'
        infoTab2.style.height = '0'
        infoTab3.style.height = '442px'

        btnTab1.classList.remove('active')
        btnTab2.classList.remove('active')
        btnTab3.classList.add('active')
    }
}