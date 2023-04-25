const inputValue = document.querySelector("#input")
const submitBtn = document.querySelector("#submit")
const qrCode = document.querySelector("#img")

submitBtn.addEventListener("click",()=>{
    let apiValue ="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data="
    let qrValue = inputValue.value;
    console.log(qrValue);
    if(!qrValue) return;
    qrCode.style.display ="inline"
    qrCode.src =`${apiValue + qrValue}`;
   

})
