function login()
{
    var em=document.getElementById("email").value
    var email=document.getElementById("email").value
   var password= document.getElementById("password").value
   if(password==="12345")
   {
       window.open("Welcome.html")
   }
   else{
       alert("Please check your password")
   }
}