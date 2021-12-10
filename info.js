// Nicholas Yu 128186186

function validateForm() 
{
    var fname = document.forms["myForm"]["fname"].value;
    console.log(fname);
    var lname = document.forms["myForm"]["lname"].value;
  
    var password = document.forms["myForm"]["password"].value;
  
    var confirm_password = document.forms["myForm"]["confirm_password"].value;
    
    const age = parseInt(document.getElementById('age').value);
  
    if (fname === "") 
    {
      window.alert("Please enter your first name.");
  
      fname.focus();
  
      return false;
    }
  
    if (lname.value === "") {
      window.alert("Please enter your last name.");
  
      lname.focus();
  
      return false;
    }
  
    if (password === "") {
      window.alert("Please enter your Password.");
  
      password.focus();
  
      return false;
    }
  
    if (confirm_password === "") {
      window.alert("Please confirm your Password.");
  
      confirm_password.focus();
  
      return false;
    }
  
    if (password === "") {
      window.alert("Please enter your password");
  
      password.focus();
  
      return false;
    }
  
    let first_name = fname.split(" ");
    console.log(first_name);
    first_name?.map((element) => 
    {
      if (first_name?.length > 0 && element[0] === element[0].toUpperCase()) 
      {
        return true;
      } else 
      {
        window.alert("First name should start with Caps");
        return false;
      }
    });
  
    let last_name = lname.split(" ");
    last_name?.map((element) => 
    {
      if (last_name?.length > 0 && element[0] === element[0].toUpperCase()) 
      {
        return true;
      } 
      else 
      {
        window.alert("Last name should start with Caps");
        return false;
      }
    });
    console.log(password);
    console.log(confirm_password);
    if (password !== confirm_password) 
    {
      window.alert("Passwords does not match");
      return false;
    }

    return true;
  }