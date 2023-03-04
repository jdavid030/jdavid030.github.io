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