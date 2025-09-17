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