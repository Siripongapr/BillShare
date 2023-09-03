let userBillName,userValue,billName,cout,value,formCheck,userShare

function submitBill() {
    value = document.getElementById('userValue').value
    billName = document.getElementById('userBill').value
    formCheck = document.querySelectorAll('.form-check')
    value = parseInt(value)
    console.log(value === Number);
    console.log(typeof value );
    cout = 0
    // check valueInput
    if (value === 0 || isNaN(value) || billName == "") {
        document.getElementById("userCheckError").innerHTML = `Please enter bill name and value`
        document.getElementById("result").classList.remove("hidden");
        document.getElementById("billHeader").innerHTML = `Error`
        return
    }
    document.getElementById("userCheckError").innerHTML = ``
    for(let i=0; i< formCheck.length; i++) {
        let check = formCheck[i].querySelector('.form-check-input').checked
        if (check) cout +=1
    }
    document.getElementById("billHeader").innerHTML = `${billName}`
    userShare = calStart(cout,value)
    getUserResult(userShare)

}
function clearBill() {
    document.getElementById('userValue').value = ''
    document.getElementById("userResult").innerHTML = ''
    document.getElementById('userBill').value = ''
    document.getElementById("result").classList.add("hidden");

}

function calStart(temp1,temp2) {
    return temp2 / temp1
}

function getUserResult(value) {
    let temp = ``
    for(let i=0; i< formCheck.length; i++) {
        let check = formCheck[i].querySelector('.form-check-input').checked
        let name = formCheck[i].innerText
        if (check) {
            temp += `${name} : ${value}<br>`
        }
    }
    document.getElementById("userResult").innerHTML = temp
    document.getElementById("result").classList.remove("hidden");

}
