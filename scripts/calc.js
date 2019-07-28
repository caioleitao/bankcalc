function check(){
    var capital = parseFloat(document.getElementById("capital").value)
    var tax = parseFloat(document.getElementById("tax").value)
    var time = parseFloat(document.getElementById("time").value)
    var radtime = document.getElementById("year")
    var amount = document.getElementById("amount")

    if(radtime.checked){
        var percentage = (capital * tax) / 100
        var year = time * 12
        calc = (percentage * year) + capital

    } else{
        var percentage = (capital * tax) / 100

        calc = (percentage * time) + capital

    }

    amount.innerHTML = `Amount: R$${calc}`
}