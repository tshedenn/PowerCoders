
let retirementCal = () =>{
        let currentAge = parseInt(prompt("your current age: "));
        let ageDesiredTORetire = parseInt(prompt("When would you like to retire: "));
        let currentYear = parseInt(prompt ("Enter the current year: "));
        let retirementTime = ageDesiredTORetire - currentAge;
        let yearOfRetirement= currentYear + retirementTime;
        alert(`You still have ${retirementTime} years for the retirement and you will retire in the year ${yearOfRetirement}`);
}  
retirementCal();