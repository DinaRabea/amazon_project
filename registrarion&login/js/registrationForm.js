
let registerName = $("#userName");
let registerMail = $("#userEmail");
let registerPass = $("#userPassword");
let registerrePass = $("#RepeateuserPassword");
let inValidateName = $("#inValidateName");
let inValidateEmail = $("#inValidateEmail");
let successLabel = $("#successLabel");
let emailExistsLabel = $("#emailExistsLabel");
let requiredLabel = $("#requiredLabel");
let signUpBtn = $("#signUpBtn");
let checkValidateName = false, checkValidateEmail = false;
let Container;

if(localStorage.getItem("MyLocalHost")== null)
{
    Container = [];
}
else
{
    Container = JSON.parse(localStorage.getItem("MyLocalHost"));
}

signUpBtn.on("click", addUser);
registerName.on("blur" , function(){
    if(validateName($(this).val()))
    {
        checkValidateName = true;
        inValidateName.removeClass('d-block').addClass("d-none")
    }
    else
    {
        checkValidateName = false;
        inValidateName.removeClass('d-none').addClass("d-block")
    }
})
registerMail.on("blur", function(){
    if(validateEmail($(this).val()))
    {
       
        checkValidateEmail = true ; 
        inValidateEmail.removeClass('d-block').addClass("d-none")
    }
    else
    {
        
        checkValidateEmail = false;
        inValidateEmail.removeClass('d-none').addClass("d-block")
    }
})

function validateName(uName)
{
    let regex = /^[A-Z]([a-z]|[A-Z]|\s){2,20}$/
    return regex.test(uName)
}
function validateEmail(uEmail)
{
    let regex =  /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;;
    return regex.test(uEmail)
}

function checkSignupFilling()
{
    if(registerName.val().trim() == "" || registerMail.val().trim() == "" || registerPass.val().trim() == ""|| registerPass.val().length <8 || registerrePass.val()!=registerPass.val())
    {
       
            requiredLabel.removeClass('d-none').addClass("d-block")
            $('#RepeateuserPassword').css('border','1px solid red')
            return false;
       
    }
    else if(checkValidateName == false || checkValidateEmail == false)
    {
        return false
    }
    else
    {
        requiredLabel.removeClass('d-block').addClass("d-none")
        return true;
    }
}

function checkRepeating()
{
    let check = false ;
    for (let i=0 ; i<Container.length; i++)
    {
        if (registerMail.val() == Container[i].userEmail)
        {
            check = true;
            break;
        }  
        
    }
    if (check) 
    {
       
        emailExistsLabel.removeClass('d-none').addClass("d-block")
        return false;
    }
    else 
    {
        emailExistsLabel.removeClass('d-block').addClass("d-none")
        return true;
    }
}
function addUser()
{
 

    if(checkSignupFilling())
    {
        
        if(checkRepeating())
        {
            let user = {
                userName: registerName.val(),
                userEmail: registerMail.val(),
                userPass: registerPass.val(),
                userRepeatPassword: registerrePass.val()
            }
            Container.push(user);
            localStorage.setItem("MyLocalHost", JSON.stringify(Container));
            clearForm();
           
            emailExistsLabel.removeClass('d-block').addClass("d-none");
            successLabel.removeClass('d-none').addClass("d-block");
        }
        $(document).on('click','#signUpBtn',function(){
            location.assign('../../html/home.html')
        })
    }
}

function clearForm()
{
    registerName.value="";
    registerMail.value="";
    registerPass.value="";
}

