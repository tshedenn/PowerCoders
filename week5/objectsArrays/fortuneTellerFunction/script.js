let aboutYou = {
  numberOfChildren : 4,
  partnerName : 'Sonam',
  geographicLocation : 'Bhutan',
  jobTitle : 'Data Scientist',
  tellFortune : function (){
    console.log(`You will be ${this.jobTitle} in ${this.geographicLocation}, and married to ${this.partnerName} with ${this.numberOfChildren} kids.`);
  }
};
aboutYou.tellFortune();
