

let firstName ="";
      do {
        firstName = prompt("Enter your firstname: ");
        let lastName = prompt("Enter your lastname: ");
        if (firstName === "") {
          alert("Firstname field can't be empty ");
        } else {

          firstName = firstName.toUpperCase();
          lastName = lastName.toUpperCase();

          alert(`Firstname is ${firstName} Lastname is ${lastName}`);
          // console.log(firstName);

        }
      } while (firstName === "");
