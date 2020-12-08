function CheckForm()
{
    
    /*var x = parseInt(e["err_msg_type"].value);
     
     
     if (isEmptyTextBox(e["fname"], "Please enter first name".x, "first_name_info")) 
     {
         return false;
     }*/
    
    var check = true;
    var regex = new RegExp(/^[A-Za-z]\d[A-Za-z]( )?\d[A-Za-z]\d$/i);
    var age = (document.getElementById("Age").value);
    var password = new RegExp(/^(?=.*\d)[0-9a-zA-Z]{6,}$/)
    var reg = (/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/);
    var msg = "";

    if (document.getElementById("Fname").value == "" || document.getElementById("Fname").value == " ") {
        msg = "Please enter your First Name";
        check = false;

    }
    else if
           (document.getElementById("Lname").value == "" || document.getElementById("Lname").value == " ") {
        msg = "Please enter your Last Name";
        check = false;
    }
    else if
           (document.getElementById("Address").value == "" || document.getElementById("Address").value == " ") {
        msg = "Please enter your Address";
        check = false;
    }
    else if
           (document.getElementById("City").value == "" || document.getElementById("City").value == " ") {
        msg = "Please enter your City";
        check = false;
    }
    else if
           (document.getElementById("Pcode").value == "" || document.getElementById("Pcode").value == " ") {
        msg = "Please enter your Postal Code";
        check = false;
    }
    else if
           (!regex.test(document.getElementById("Pcode").value)) {
        msg = "Please enter your correct Postal Code";
        check = false;


    }
    else if
           (document.getElementById("Province").value == "" || document.getElementById("Province").value == " ") {
        msg = "Please choose one from AB, BC, MN, ON, QC, or SK";
        check = false;
    }
    else if (document.getElementById("Province").value != "AB" && document.getElementById("Province").value != "BC" && document.getElementById("Province").value != "MN" && document.getElementById("Province").value != "ON" && document.getElementById("Province").value != "QC" && document.getElementById("Province").value != "SK") {
        msg = "HELLO!";
        check = false;
    }
    else if
           (document.getElementById("Age").value == "" || document.getElementById("Age").value == " ") {
        msg = "Please enter your Age";
        check = false;
    }
    else if
           (isNaN(age) || age < 18 || age > 100) {
        msg = "Sorry , you must be over 18 to register";
        check = false;
    }


    else if
           (document.getElementById("Pass").value == "" || document.getElementById("Pass").value == " ") {
        msg = "Please enter a Password";
        check = false;
    }
    else if
           (document.getElementById("Confirm").value == "" || document.getElementById("Confirm").value == " ") {
        msg = "Please confirm Password";
        check = false;
    }
    else if (document.getElementById("Confirm").value != document.getElementById("Pass").value) {
        msg = "Passwords do not match.";
        check = false;

    }

    else if (!password.test(document.getElementById("Confirm").value)) {
        msg = "Password needs at least 6 characters with at least one numerical digit";
        check = false;
    }
    else if
           (document.getElementById("Email").value == "" || document.getElementById("Lname").value == " ") {
        msg = "Please enter E-mail Address";
        check = false;
    }
    else if (!reg.test(document.getElementById("Email").value)) {
        msg = "Invalid Email Address";
        check = false;
    }


    if (check) {
        alert("Thanks for registering with our website, your customer record was saved successfully!!!");
        
        return true;
    }
    else {
        alert(msg);
        return false;
    }
   
}
