const password = (passPhrase) => {
    // convert the password to uppercase
    passPhrase = passPhrase.toUpperCase()
    // split the password into an array
    const passArray = passPhrase.split('');
    // loop through the array
    for (let i = 0; i < passArray.length-1; i++) {
        // get the current character
        const currentChar = passArray[i];
        // get the next character
        const nextChar = passArray[i+1];
        // get the difference between the current and next character
        const difference = Math.abs(currentChar.charCodeAt(0) - nextChar.charCodeAt(0));
        // check if the difference is 1 or -1
        if (difference === 1 || difference == -1) {
            return 'There is a sequence in the password';
        }
    }
    return 'There is no sequence in the password';
}