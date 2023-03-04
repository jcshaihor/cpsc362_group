function validate() 
{
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;
    if(email.includes("@csu.fullerton.edu"))
    {
        window.location.href = "dashboard.html";
    }
    else
    {
        alert("Login Failed");
    }
}
