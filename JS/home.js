// Add Money Button Functionality
document.getElementById("add-money-btn").addEventListener('click',function(e){
    e.preventDefault()
    const Bank=document.getElementById("bank").value
    const accountNumber=document.getElementById("account-num").value
   // Account Number Validation
    if(accountNumber.length !==11){
        alert("Invalid Account Number or Pin")
        return;
    }
    
    const addAmount=parseInt(document.getElementById("add-amount").value)
   
    const accountPin=parseInt(document.getElementById("account-pin").value)
   //Pin Number Validation
    validPin=1234;
    if(accountPin!==validPin){
        alert("Invalid Account Number or Pin")
        return;
    }
    
    const currentBalance=parseInt(document.getElementById("current-balance").innerText)
    const newBalance=currentBalance+addAmount;
    document.getElementById("current-balance").innerText=newBalance
       
})

// Withdraw Money Button
document.getElementById("withdraw-btn").addEventListener('click',function(e){
    e.preventDefault()
    const agentNumber=document.getElementById("agent-num").value
    const amount=parseInt(document.getElementById("withdraw-amount").value)
    const pinNum=parseInt(document.getElementById("your-pin").value)
    const currentMoney=parseInt(document.getElementById("current-balance").innerText)
    const newAmount=currentMoney-amount;
    console.log(agentNumber,amount,pinNum,currentMoney,newAmount)
    //Amount Validation
    if(currentMoney< amount)
    {
        alert("You do not have sufficient amount")
        return;
    }
    document.getElementById("current-balance").innerText=newAmount 
    
})

//toggling Feature
document.getElementById("addMoneyCard").addEventListener('click',function(){
    document.getElementById("cashOut-parent").style.display="none"
    document.getElementById("addMoney-parent").style.display="block"
})
document.getElementById("cashOutCard").addEventListener('click',function(){
    document.getElementById("addMoney-parent").style.display="none"
    document.getElementById("cashOut-parent").style.display="block"
})