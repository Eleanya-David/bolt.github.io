var login = 
[
        {
        username: "soma",
        password: "soma",
    }
];

alert("welcome to my page")
 var username = prompt("what is your username");
var password = prompt("what is you password");

function coupon(user, pass){
  if ((user === login[0].username) && (pass === login[0].password)) {
      alert("Welcome, please check the console using ctrl shift i on your laptop to find your one time offer coupon code, Thank you")
      console.log("here is your 100% free coupon valid for a month for being our first and best customer 21112345");
  }else {
      alert("inavlid credentials, sorry but you are not valid for this one time offer");
  }
};

coupon(username, password);