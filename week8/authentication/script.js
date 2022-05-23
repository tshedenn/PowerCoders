let jsData;
async function reteriveFunc() {
  let jsonData = await fetch('login.json');
  if (!jsonData) {
    console.log('sorry your url is not working');
  }
  else {
    jsData = await jsonData.json();
    console.log(jsData);
  }
}
reteriveFunc();

function authenticationFunc() {
  let button = document.getElementById('btn1');
  let userName = document.getElementById('username');
  let password = document.getElementById('password');
  button.addEventListener('click', () => {
      if((userName.value === jsData.employees[0].username || userName.value === jsData.employees[1].username) && (password.value === jsData.employees[0].password || password.value === jsData.employees[1].password)){
        console.log('login sucessful');
      }
      else{
     //   console.log(jsData.employees[1].username);
       // console.log(userName.value);
        //console.log(jsData.employees[0].username);
        console.log('sorry your username is wrong');
      }
    
  });
}
authenticationFunc();




