document.addEventListener('DOMContentLoaded', function() {
    const body = document.querySelector('body');
    const mode = localStorage.getItem('mode');
    var elem = document.getElementById("toggle");

    if (mode === 'light') {
        elem.innerHTML = "Dark Mode";
        body.classList.add('light_mode');
    } else {
        body.classList.remove('light_mode');
        elem.innerHtml = "Light Mode";
        localStorage.setItem("mode", "dark");
    }
});

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
    
    if(!emailOK){
        alert("Error: Invalid e-mail address.");
    }

    return emailOK
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

    //in light mode switch to dark mode
    if(body.classList.contains("light_mode")){
        elem.innerHTML = "Light Mode";
        body.classList.remove("light_mode");
        localStorage.setItem("mode", "dark");
    // switch from dark to light mode
    } else {
        elem.innerHTML = "Dark Mode";
        body.classList.add("light_mode");
        localStorage.setItem("mode", "light");
    }
}

