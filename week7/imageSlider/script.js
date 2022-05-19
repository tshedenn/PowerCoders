// let div = document.querySelector('div');
// let image = document.createElement('img');
// let imagesTag= div.append(image);
// console.log(imagesTag);

// let api_url = 'https://jsonplaceholder.typicode.com/photos';

// async function fetchFromApiFunction(){
//   const response = await fetch(api_url);
//   var data = await response.json();
//   console.log(data);
//   }

//   let htmlRender = () =>{

//   }
let objData=[];
let objID=[];
let img = [];
async function toFetchImg(){

  let imageFromApi = await fetch('https://jsonplaceholder.typicode.com/photos');
  if(!imageFromApi){
    console.error('sorry error');
  }else{
    let jsonData = await imageFromApi.json();
    objData = jsonData[0].url;
    objID = jsonData[0].id;
    console.log(objData);
    renderToHtml(objData);
    
  }
 }
toFetchImg();

function renderToHtml(data){
    let body = document.body;
    for (let i=0; i<data.length;i++){
      let img = document.createElement('img');
      body.append(img);
      img.setAttribute('src',objData,);
      img.setAttribute('id',objID); 
      console.log(img);
        
    }
    
    let previous = document.createElement('button');
    body.append(previous);
    previous.innerText = 'Previous';
    let next = document.createElement('button');
    body.append(next);
    next.innerText = 'Next';
    next.addEventListener('click',nextBtn('Next'));
    
   function nextBtn(direction){
     if(direction == 'Next'){
       img[indexed]++;
     }
   }
  
  }





