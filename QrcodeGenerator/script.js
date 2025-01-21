let imgBox=document.getElementById("imgbox");
let qrimage=document.getElementById("qrImage");
let qrtext=document.getElementById("qrText");

function generateQR(){
if(qrtext.value.length>0)
{
    qrimage.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example"+ qrtext.value;
    imgBox.classList.add("show-img");
}}