
function Click(){
var amount=Number(document.getElementById('amount').value)
var month =Number( document.getElementById('month').value)
var percent =Number( document.getElementById('percent').value)

var monthlypercent=percent/12*month
var comonpay=amount*monthlypercent/100+amount

document.getElementById('comonpay').innerHTML=comonpay.toFixed(2)+'AZN'
document.getElementById('monthpay').innerHTML=(comonpay/month).toFixed(2)+'AZN'
}

window.oncontextmenu = function (e){
    e.preventDefault();
}