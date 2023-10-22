// Problem 4: Given stored username and password and input username and password, Print if the user can login or not.
let username = "Swetha";
let password = "Masai";
let inputUsername = "Swetha";
let inputPassword = "Masai";
if (username===inputUsername){
  if (password===inputPassword) {
    console.log("Welcome Swetha");
  }
  else {
    console.log("inavalid password");
  }
}
else {
  console.log("invalid username");
}