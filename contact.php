<!DOCTYPE html>
<html lang="en">
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact me!</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="css/style.css">
    <script src="scripts/script.js"></script> 
    <script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.4.456/pdf.min.js"></script>
</head>

<body>
    <nav class="flex_cont" onmouseout="hide()">
        <div class="flex_item nav_item">
            <a href="index.html">Home</a>
        </div>
        <div class="flex_item nav_item">
            <a href="experience.html">Resume</a>
        </div>
        <div class="flex_item nav_item">
            <a>Contact Me</a>
        </div>
        <div class="flex_item nav_item">
            <button id="toggle" type="button" class="btn btn-primary" onclick="toggleColorMode()">Light Mode</button>
        </div>
    </nav>
    <div class="flex_cont">
        <div class="flex_item contact_details">
            <h1>Connect with me!</h1>
            <p>random@gmail.com</p>
            <p>999-999-9999</p>
        </div>
        <div class="flex_item contact_form">
            <form id="contactForm" method="post" action="contact.php">
                <input type="text" id="name" name="name" placeholder="Your Name">
                <input type="text" id="email" name="email" placeholder="Your Email">
                <input type="text" id="phone" name="phone" placeholder="Your Phone Number">
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    </div>

    <?php

    $dbLocation = 'localhost';
    $dbUsername = 'root';
    $dbPassword = 'root';
    $dbName = 'Quiz_DB';

    $db = mysqli_connect($dbLocation,
                        $dbUsername,
                        $dbPassword,
                        $dbName);



    if($_SERVER["REQUEST_METHOD"] == "POST"){
        $email = $_POST['email'];
        $name = $_POST['name'];
        $phoneNumber = $_POST['phone'];
    

        if (mysqli_connect_errno() || ($db == null))
        {
            printf("Database connection failed: %s<br>
                Connection script now terminating.",
                mysqli_connect_error());
            exit(0);
        }

        if (emailAlreadyExists($db, $email))
        {
            function_alert("Email already exists in the contact list."); 
        }
        else
        {
            $query = "INSERT INTO Contact(
                Email,
                Name,
                Phone
            )
            VALUES ('$email', '$name', '$phoneNumber');";
            $success = mysqli_query($db, $query);
            function_alert("Thank you for registering!"); 
        }
        mysqli_close($db);
    }

    function emailAlreadyExists($db, $email)
    {
        $query =
        "SELECT *
        FROM Contact
        WHERE Email = '$email'";
        $contacts = mysqli_query($db, $query);
        $numRecords = mysqli_num_rows($contacts);
        return ($numRecords > 0) ? true : false;
    }

    function function_alert($msg) {
        echo "<script type='text/javascript'>alert('$msg');</script>";
    }
    ?>
</body>
