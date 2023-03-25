let loginEmail=$('#loginEmail');
let loginPassword=$('#loginPassword');
let incorrectLabel=$('#incorrectLabel');
let loginRequiredLabel=$('#loginRequiredLabel');
let loginBtn=$('#loginBtn');

let Container;

if(localStorage.getItem("MyLocalHost")== null)
{
    Container = [];
}
else
{
    Container = JSON.parse(localStorage.getItem("MyLocalHost"));
}

loginBtn.on("click" , logIn)

function checkLoginFilling()
{
    if(loginEmail.val().trim() == "" || loginPassword.val().trim() =="")
    {
        loginRequiredLabel.removeClass('d-none').addClass("d-block");
        return false;
    }
    else
    {
        loginRequiredLabel.removeClass('d-block').addClass("d-none");
        return true;
    }
}


function logIn()
{
    let logincheck = false;
    let uname = "";
    if(checkLoginFilling())
    {
        for(let i =0 ; i < Container.length ; i++)
        {
            if(Container[i].userEmail == loginEmail.val() && Container[i].userPass == loginPassword.val())
            {
                logincheck = true;
                uname = Container[i].userName;
                break;
            }
        }
        if(logincheck)
        {
            sessionStorage.setItem("newUserName" , uname);
            window.open("../../html/home.html", "_self");
        }
        else
        {
            incorrectLabel.removeClass('d-none').addClass("d-black");
        }
    }
}
