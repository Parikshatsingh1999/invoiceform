 
 
function submit(){
 var n=document.getElementById("txtname").value;
var m=document.getElementById("txtmobile").value;
var p=document.getElementById("txtproductname").value;
var q=document.getElementById("txtquantity").value;
var t=document.getElementById("txttotal").value;
  
localStorage.setItem("txtnvalue",n);
localStorage.setItem("txtmvalue",m);
localStorage.setItem("txtpvalue",p);
localStorage.setItem("txtqvalue",q);
localStorage.setItem("txttvalue",t);
window.location="invoicesheet.html";

}