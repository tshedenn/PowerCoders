const body = document.body;
const header = document.createElement('header');
body.append(header);
header.innerText = 'This is a header';

const button = document.createElement('button');
body.append(button);
// button.setAttribute("type","submit");
button.innerText = "click";
button.addEventListener('click',
() => {
  let url = 'https://app.netlify.com/teams/tshedenn/overview';
  let openWindow = window.open(url);
  console.log(openWindow);
  setTimeout(() => {
    openWindow.close()
  }, 5000);
})


