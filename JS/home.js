//Function to get Input Values
function getInputValue(id){
    const inputValue=document.getElementById(id).value
    return inputValue;
}

function getInputValueNumber(id){
    const inputValue=document.getElementById(id).value
    const inputValueNumber=parseInt(inputValue)
    return inputValueNumber;
}

// Add Money Button Functionality
document.getElementById("add-money-btn").addEventListener('click',function(e){
    e.preventDefault()
    const Bank=getInputValue("bank")
    const accountNumber=getInputValue("account-num")
    const addAmount=getInputValueNumber("add-amount")
    const accountPin=getInputValueNumber("account-pin")

    // Account Number Validation
    if(accountNumber.length !==11){
        alert("Invalid Account Number or Pin")
        return;
    }
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

// Withdraw Money Button Functionality
document.getElementById("withdraw-btn").addEventListener('click',function(e){
    e.preventDefault()
    const agentNumber=getInputValue("agent-num")
    const withdrawAmount=getInputValueNumber("withdraw-amount")
    const pinNum=getInputValueNumber("your-pin")
    
    // Account Number Validation
    if(agentNumber.length!==11){
        alert("Invalid Agent Number or Pin")
        return;
    }
    //Pin Number Validation
    validPin=1234;
    if(pinNum!==validPin){
        alert("Invalid Agent Number or Pin")
        return;
    }
    const currentMoney=parseInt(document.getElementById("current-balance").innerText)
    //Amount Validation
    if(currentMoney< withdrawAmount)
    {
        alert("You do not have sufficient amount")
        return;
    }
    const newAmount=currentMoney-withdrawAmount;
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