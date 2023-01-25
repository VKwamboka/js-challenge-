let platesBetween=(plateOne, plateTwo) =>{

    plateOne=plateOne.toUpperCase()
    plateTwo=plateTwo.toUpperCase()
  
  // split into two arrays
    let plateOneParts=plateOne.split(" ")
    let plateTwoParts=plateTwo.split(" ")
  
  // get the first array=the first part of the plate(KBA)
    let plateOneCode = plateOneParts[0];
    let plateTwoCode = plateTwoParts[0];
  
    // get the second part of the plate without the last letter
    let plateOneNumber = plateOneParts[1].slice(0, -1);
    let plateTwoNumber = plateTwoParts[1].slice(0, -1);
  
    // get the last letter of the plate
    let plateOneLetters = plateOneParts[1].slice(-1);
    let plateTwoLetters = plateTwoParts[1].slice(-1);
  
    // difference between the last letter of the plate indicate 1000 cars
    let difference = Math.abs(plateTwoLetters.charCodeAt(0) - plateOneLetters.charCodeAt(0));
    let carBtnLastLetter = difference * 1000;
    let carBtnNumber = Math.abs(plateTwoNumber - plateOneNumber)
    
    // get the last  letter of the first part of the plate
    let plateOneCodeLastLetter = plateOneCode.slice(-1);
    let plateTwoCodeLastLetter = plateTwoCode.slice(-1);
  
    // get the difference between the last 2 letters of the first part of the plate
    let codeDifference = Math.abs(plateTwoCodeLastLetter.charCodeAt(0) - plateOneCodeLastLetter.charCodeAt(0));
  
    // get the number of cars between the two plates
    let carBtnCode = codeDifference * 24000;
  
    // get the second last letter of first part of the plate
    let plateOneCodeSecondLastLetter = plateOneCode.slice(-2, -1);
    let plateTwoCodeSecondLastLetter = plateTwoCode.slice(-2, -1);
  
    // get the difference between the second last letters of the first part of the plate
    let codeSecondLastLetterDifference = Math.abs(plateTwoCodeSecondLastLetter.charCodeAt(0) - plateOneCodeSecondLastLetter.charCodeAt(0));
    
    // get the number of cars between the two plates
    let carBtnCodeSecondLastLetter = codeSecondLastLetterDifference * 24000 * 24;
  
    // get total number of cars between the two plates
    let totalCars = carBtnLastLetter + carBtnNumber + carBtnCode + carBtnCodeSecondLastLetter;
  
    return totalCars;
  
  }
  
  console.log(platesBetween('KBA 200A', 'KBA 200A'));