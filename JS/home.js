// Add Money Button Functionality
document.getElementById("add-money-btn").addEventListener('click',function(e){
    e.preventDefault()
    const Bank=document.getElementById("bank").value
    const accountNumber=document.getElementById("account-num").value
    const addAmount=parseInt(document.getElementById("add-amount").value)
    const accountPin=document.getElementById("account-pin").value
    const currentBalance=parseInt(document.getElementById("current-balance").innerText)
    
    
    const newBalance=currentBalance+addAmount
    document.getElementById("current-balance").innerText=newBalance
    
})