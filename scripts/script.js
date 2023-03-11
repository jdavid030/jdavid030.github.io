function emailValid(address)
{
    var p = address.search(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})$/);
    if (p == 0)
        return true;
    else
    {
        return false;
    }
}

function contactFormValidate()
{
    var formObj = document.getElementById("contactForm");
    var email = formObj.email.value;
    var emailOK;
    
    emailOK = emailValid(email);
    
    if(emailOK){
        displayDetails(formObj, email);
    } else {
        alert("Error: Invalid e-mail address.");
    }

    return emailOK
}

function displayDetails(formObj, email)
{
    var name = formObj.name.value;
    var number = formObj.number.value;

    var nameLen = name.length;
    var numberLen = number.length;
    var emailLen = email.length;

    var text = "Contact info\n" +
        "Your name: " + name + " Number of letters: " + nameLen + "\n" +
        "Your email: " + email + " Number of letters: " + emailLen + "\n" +
        "Your number: " + number + " Number of letters: " + numberLen + "\n";
    alert(text);
}


//Flag to indicate if a dropdown menu is visible
var isShowing = false;

//Reference to the current dropdown menu
var dropdownMenu = null;

//Show the drop-down menu with the given id, if it exists, and set flag
function show(id)
{
    hide(); /* First hide any previously showing dropdown menu */
    dropdownMenu = document.getElementById(id);
    if (dropdownMenu != null)
    {
        dropdownMenu.style.visibility = 'visible';
        isShowing = true;
    }
}

//Hide the currently visible dropdown menu and set flag
function hide()
{       
    if (isShowing) dropdownMenu.style.visibility = 'hidden';
    isShowing = false;
}

function toggleColorMode(){
    var body = document.body;
    var elem = document.getElementById("toggle");
    body.classList.toggle("light_mode")
    if(body.classList.contains("light_mode")){
        elem.innerHTML = "Dark Mode";
    } else {
        elem.innerHTML = "Light Mode";
    }
}
