//Functions to get Input Values
function getInputValue(id){
    const inputValue=document.getElementById(id).value
    return inputValue;
}

function getInputValueNumber(id){
    const inputValue=document.getElementById(id).value
    const inputValueNumber=parseInt(inputValue)
    return inputValueNumber;
}

// Function to get Inner Text
function getInnerText(id){
    const element=document.getElementById(id)
    const elementValue=element.innerText
    const elementValueNumber=parseInt(elementValue)
    return elementValueNumber;
}
// Function to set Inner Text
function setInnerText(value){
    document.getElementById("current-balance").innerText=value;
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
    
    const currentBalance=getInnerText("current-balance")
    const newBalance=currentBalance+addAmount;
    setInnerText(newBalance)
       
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
    
    const currentMoney=getInnerText("current-balance")
    //Amount Validation
    if(currentMoney< withdrawAmount)
    {
        alert("You do not have sufficient amount")
        return;
    }
    const newAmount=currentMoney-withdrawAmount;
    setInnerText(newAmount)
    
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