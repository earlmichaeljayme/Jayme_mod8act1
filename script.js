var  fullname = prompt("Please enter your full name: ");
document.getElementById("fname").innerHTML = fullname;

var username = prompt("Please enter your username: ");
document.getElementById("username").innerHTML = username;

if(confirm("What is your gender? \n Press OK if you are Male \n Cancel if Female")){
    alert("Your profile gender is set to MALE");
    document.getElementById("gender").innerHTML = "M";
}
else{
    alert("Your profile gender is set to FEMALE");
    document.getElementById("gender").innerHTML = "F";
}

var description = prompt("Please type a brief description of yourself");
document.getElementById("desc").innerHTML = description;

var birthyear = prompt("Please enter your Birth Year: ");
var age = 2023 - birthyear;
document.getElementById("year").innerHTML = birthyear;
document.getElementById("age").innerHTML = age;

if(confirm("Do you want to use a custom profile picture?")){
    var pfp = prompt("Please enter the file name of the picture. (Ex: wow.jpg)")
    document.getElementById("ppic").src = pfp;
    alert("Profile picture has been updated.")
}
else{
    alert("No image has been set.");
}
