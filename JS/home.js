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

// Function to handle toggle
function handleToggling(id){
    const forms=document.getElementsByClassName("form")
    for(const form of forms){
        form.style.display="none"
    }
    document.getElementById(id).style.display="block"  
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

// Transfer Money Button Functionality

//toggling Feature
document.getElementById("addMoneyCard").addEventListener('click',function(){
    handleToggling("addMoney-parent")
    const cardBtns= document.getElementsByClassName("blueFeature")
    for(const cardBtn of cardBtns)
    { 
       cardBtn.classList.remove("border-[#0874f2]","bg-[#0874f20d]")
       cardBtn.classList.add("border-gray-300")
    }
    document.getElementById("addMoneyCard").classList.remove("border-gray-300")
    document.getElementById("addMoneyCard").classList.add("border-[#0874f2]","bg-[#0874f20d]")
    
    
})
document.getElementById("cashOutCard").addEventListener('click',function(){
   handleToggling("cashOut-parent")
    const cardBtns= document.getElementsByClassName("blueFeature")
    for(const cardBtn of cardBtns)
    { 
       cardBtn.classList.remove("border-[#0874f2]","bg-[#0874f20d]")
       cardBtn.classList.add("border-gray-300")
    }
    document.getElementById("cashOutCard").classList.remove("border-gray-300")
    document.getElementById("cashOutCard").classList.add("border-[#0874f2]","bg-[#0874f20d]")
    
})
document.getElementById("transferMoneyCard").addEventListener('click',function(){
  handleToggling("transferMoney-parent")
})
document.getElementById("getBonusCard").addEventListener('click',function(){
  handleToggling("getBonus-parent")
})
document.getElementById("payBillCard").addEventListener('click',function(){
  handleToggling("payBill-parent")
})