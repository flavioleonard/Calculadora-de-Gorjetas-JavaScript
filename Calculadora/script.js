function calculateTip (event) {
event.preventDefault(); //pra parar de carregar a página toda vez que clica no submit

console.log(event)
let bill = document.getElementById ('bill').value
let serviceQual = document.getElementById ('serviceQual').value
let numOfPeo = document.getElementById ('people').value

if (bill == '' | serviceQual == 0) {
    alert('Por favor, preencha os valores')
}

if (numOfPeo == "" | numOfPeo <=1) {
    numofPeo = 1
    document.getElementById('each').style.display = 'none'
} else {
    document.getElementById('each').style.display = 'block'
}

let total = ( bill*serviceQual/numOfPeo ) 
total = total.toFixed(2)
document.getElementById ('tip').innerHTML = total
document.getElementById('totalTip').style.display = 'block'


}


document.getElementById('totalTip').style.display ='none'
document.getElementById('each').style.display ='none'

document.getElementById('tipsForm').addEventListener('submit', calculateTip)

