document.getElementById("btn1").addEventListener("click",()=>{
var num=Number(document.getElementById("number").value)
var bal=Number(document.getElementById("amount").innerHTML)
console.log(typeof(bal))
console.log(typeof(num))
if((num==-1) || (num==" ") )
{
  alert("Please enter valid")
}

if(num>bal)
{
  document.getElementById("res").innerHTML="Insufficient funds.....!!!!"
  document.getElementById("res").style.backgroundColor="red"
  document.getElementById("res").style.fontSize="30px"

}
else if(num<bal)
{
  document.getElementById("res").innerHTML="The available balance is"
  document.getElementById("res").style.backgroundColor="red"
  
  document.getElementById("amount").innerHTML=bal-num
  document.getElementById("amount").style.backgroundColor="red"
}
else
{
  
  document.getElementById("res").innerHTML="Minimum balance should be 500/-"
  document.getElementById("res").style.backgroundColor="Red"
  
}
if(num<bal)
{

var d=new Date();
var symbol=document.createTextNode("Rs.")
var space=document.createTextNode(" ")
var num=document.getElementById("number").value
var trNode=document.createElement("tr")
var tdNode=document.createElement("td")
var textNode=document.createTextNode(num)
var date=document.createTextNode(d)
tdNode.appendChild(symbol)
tdNode.appendChild(textNode)
tdNode.appendChild(space)
tdNode.appendChild(date)
trNode.appendChild(tdNode)

var element=document.getElementById("with")
element.appendChild(trNode)


}
});

document.getElementById("btn2").addEventListener("click",()=>{

var num=document.getElementById("number").value
var bal=document.getElementById("amount").innerHTML
document.getElementById("res").innerHTML="The available balance is"
document.getElementById("res").style.backgroundColor="green"
document.getElementById("amount").style.backgroundColor="green"
document.getElementById("res").style.fontSize="30px"
document.getElementById("amount").style.fontSize="20px"
  
  document.getElementById("amount").innerHTML=Number(num)+Number(bal)
  
  bal=Number(bal)+Number(num);
  console.log(bal)

  var d=new Date();
  var symbol=document.createTextNode("Rs.")
  var space=document.createTextNode(" ")
  var date=document.createTextNode(d)  
  var tr=document.createElement("tr")
var td=document.createElement("td")
var text=document.createTextNode(num)
td.appendChild(symbol)
td.appendChild(text)
td.appendChild(space)
td.appendChild(date)
tr.appendChild(td)
var newEntry=document.getElementById("dep")
newEntry.appendChild(tr)

})