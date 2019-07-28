function check(){
    var capital = parseFloat(document.getElementById("capital").value)
    var tax = parseFloat(document.getElementById("tax").value)
    var time = parseFloat(document.getElementById("time").value)
    var amount = document.getElementById("amount")

    var percentage = (capital * tax) / 100

    calc = (percentage * time) + capital

    amount.innerHTML = `Amount: R$${calc}`
}