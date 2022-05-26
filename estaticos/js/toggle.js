const toggle = document.querySelector('[toggle]')
const drop = document.querySelector('.drop').classList

toggle.addEventListener('click', expandir)

function expandir(){
    drop.toggle('drop')
}