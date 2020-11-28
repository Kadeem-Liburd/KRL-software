function CheckForm()
{
    
    /*var x = parseInt(e["err_msg_type"].value);
     
     
     if (isEmptyTextBox(e["name"], "Please enter Name".x, "first_name_info")) 
     {
         return false;
     }*/
    
    var check = true;
    var regex = new RegExp(/^[A-Za-z]\d[A-Za-z]( )?\d[A-Za-z]\d$/i);
    var age = (document.getElementById("Age").value);
    var password = new RegExp(/^(?=.*\d)[0-9a-zA-Z]{6,}$/)
    var reg = (/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/);
    var msg = "";

    if (document.getElementById("Name").value == "" || document.getElementById("Name").value == " ") {
        msg = "Please enter your Name";
        check = false;

    }
   
    else if
           (document.getElementById("Email").value == "" || document.getElementById("Name").value == " ") {
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

