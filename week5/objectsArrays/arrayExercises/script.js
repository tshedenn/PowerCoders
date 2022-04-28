// var array = ["Banana","Apples","Oranges","Blueberries"];


// array[2];
// array.shift();
// array.sort();
// array.push("Kiwi");
// array.shift();
// array.reverse();
// console.log(array);


let choicesList = ["Royal Blue","Peach","Baby Pink"];
let choiceSuffix;
let choicesPriority = () => {
  for(let i=0; i<choicesList.length; i++){
      choiceNum=i+1;
      switch(choiceNum){
      case 1: choiceSuffix='st';
      break;
      case 2: choiceSuffix='nd';
      break;
      case 3: choiceSuffix='rd';
      break;
      default: choiceSuffix='th';
    }
    console.log(`My #${i+1} choice is  ${choicesList[i]}`);

    console.log('My ' + choiceNum + choiceSuffix + ' choice is ' + choicesList[i]);
  }    
}
choicesPriority();

    


    // if(choiceNum==1){
    //   
    // }
    // else if(choiceNum==2){
    //   choiceSuffix='nd';
    // }
    // else if(choiceNum==3){
    //   choiceSuffix='rd';
    // }
    // else{
    // choiceSuffix='th';
    // }
    





