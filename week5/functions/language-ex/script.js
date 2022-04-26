let allTranslations ={
    "en": "Hello, World",
    "dz": "Kuzu Zangpo",
    "de": "Hallo,Welt",
    "In": "Namastay",
}

// document.write(allTranslations.en.length); to check the length of the string.

let showTranslatedGreet=(selectedLanguage="en")=> {
  if ((!selectedLanguage) || (selectedLanguage !== allTranslations )){
    
    alert(allTranslations[en]);
  }
  else{
    let translation = allTranslations[selectedLanguage];
    alert(translation);
  }
}
showTranslatedGreet(prompt("Type `en` for English, `dz` for Dzongkha, `de` for German and `In` for Indian"));

// showTranslatedGreet()
// showTranslatedGreet("de");



// let helloWorld = lang =>{
//   if(lang==="In"){
//     alert("Namastay");
//   }
//   else if (lang==="de") {
//     alert("Hallo, Welt");
//   } 
//   else if (lang==="dz"){
//     alert("Kuzu zangpo");
//   }
//   else{
//     alert("Hello, World");
//   }
  
// } 

// helloWorld("In");
// helloWorld("de");
// helloWorld("dz");
// helloWorld("po");