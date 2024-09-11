
function calculateTax(income, expenses) {
    if(income <= 0 || expenses <= 0 || expenses > income){
        return "Invalid Input";
    }
    const savings = income - expenses;
    const tax = savings * .20;
    return tax;
}


function sendNotification(email) {
    if(!email.includes('@')){
    return "Invalid Email" 
    }
    let notiFication = email.split("@");
    let finalNotification = notiFication[0] + " " + "sent you an email from" + " " + notiFication[1];
    return finalNotification;
}

function checkDigitsInName(name) {
    if(typeof name !== "string") {
        return "Invalid Input"  
    }
    for(let i = 0; i < name.length; i++){
        if(!isNaN(name[i]))
            return true;
    }
    return false;
}

function calculateFinalScore(obj) {
    if(typeof obj !== "object"){
    return "Invalid Input"
    };
   let finalScore = obj.testScore + obj.schoolGrade;
   if(obj.isFFamily){
    finalScore = finalScore + 20;
   }
   if(finalScore >= 80){
    return true;
   }
   else{
    return false;
   }
}


function waitingTime(waitingTimes, serialNumber) {
    if(!Array.isArray(waitingTimes) || typeof serialNumber !== 'number'){
    return "Invalid Input"
    }
    let sum = 0;
    for (let i = 0; i < waitingTimes.length; i++) {
      sum = waitingTimes[i] + sum;
    }
    let average = sum / waitingTimes.length;
    average = Math.round(average); 
    return (serialNumber-(waitingTimes.length)-1)*average;
  }







