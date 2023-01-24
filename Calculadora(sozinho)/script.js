function calculateTip (event) {
    event.preventDefault();
    
    console.log(event)
    let bill = window.document.getElementById('bill').value
    let serviceQual = window.document.getElementById('serviceQual').value
    let numOfPeo = window.document.getElementById('people').value

    if ( bill == '' | serviceQual == 0) 
    { window.alert('Por favor, digite um número')}

     if ( numOfPeo == '' | numOfPeo <= 1) {
        numOfPeo = 1
        document.getElementeByid('each').style.display = 'none'
    }

    else {

        document.getElementeByid('each').style.display = 'block'
    }

    let total = (bill*serviceQual/numOfPeo)
    total = total.toFixed(2)
    document.getElementById('tip').innerHTML = total
    document.getElementById('totalTip').style.display='block'

}

document.getElementById('totalTip').style.display='none'
document.getElementById('each').style.display='none'

document.getElementById('tipsForm').addEventListener('submit', calculateTip)