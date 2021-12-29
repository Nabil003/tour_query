// conditional statement;

    var age = 22;
    var gender = "male";

// if statement;

    if(age>=15 && age<=20){
        if(gender== "male"){
          document.write("you are permitted to go with your guardian");
        }
    else{
        document.write("you are not allow to go.");
    }

    }else if(age>=21){
        if (gender == "male"){
            document.write("congrats! you are allowed to travel solo.");
        }
        else if(age>=25 && gender =="female"){
            document.write("you're eligible now.")
        }
        else{
            document.write("you're not eligible")
        }
    }else{
        document.write("try next time.")
    }
       