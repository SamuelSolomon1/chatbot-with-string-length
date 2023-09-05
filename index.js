// function that runs when the button is clicked
function chat() {
  alert("Hello i'm Lovely the Chatbot!");

  const myName = prompt("What is your name?");
  alert("Hello, " + myName + "!");

  const subject = prompt("Are you single?");
  if (subject == "Yes") {
    alert("Being single is awesome!");
  }
  if (subject == "yes") {
    alert("Being single is awesome!");
  } else if (subject == "No") {
    alert("Sweet!");
  } else if (subject == "no") {
    alert("Sweet!");
  } else {
    alert("Just answer yes or no");
  }
  const food = prompt("What is your favorite food?");
  alert("I like " + food + " too!");

  const ageYear = prompt("Do you like strawberries?");
  if (subject == "Yes") {
    alert("Same i like strawberries too!");
  }
  if (subject == "yes") {
    alert("Same i like strawberries too!");
  } else if (ageYear == "No") {
    alert("awww!");
  } else if (ageYear == "no") {
    alert("awww!");
  } else {
    alert("Again, yes or no :P");
  }


  // string method length
  let greeting = "Hello, world!";
  console.log(greeting.length);
  let user = prompt("Enter some text:");
  let maxLength = 150;
  let inputLength = user.length;
  let remainingCharacters = maxLength - inputLength;
  if (remainingCharacters < 0) {
    alert(
      "You have exceeded the character limit by " +
        remainingCharacters +
        " characters. "
    );
  } else {
    alert(
      "You have written " +
        inputLength +
        " characters. You only have " +
        remainingCharacters +
        " remaining characters."
    );
  }
}
// end bracket to close the function
