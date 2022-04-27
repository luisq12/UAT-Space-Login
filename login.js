function login() {
    //Specifies the function name
        var fName = document.getElementById("fname").value;
        var lName = document.getElementById("lname").value;
        var badgenum = document.getElementById("badgenum").value;
        var fullname = fName + " " + lName;
        if (fullname.length >20 || fullname.length <4) {
                 document.getElementById("loginStatus").innerHTML = "Invalid login!";
        } 
        else if (badgenum <100 || badgenum >999) {
            document.getElementById("loginStatus").innerHTML = "Invalid ID Number!";
        }
        else {
            alert(`Access Granted, Welcome ${fullname}  to the UAT Space Program!`);
            window.open("https://www.uat.edu");
        }
    }

  

