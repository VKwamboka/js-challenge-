const password = (passPhrase) => {
    
    passPhrase = passPhrase.toUpperCase()
    const passArray = passPhrase.split('');
    for (let i = 0; i < passArray.length-1; i++) {
        const currentChar = passArray[i];
        const nextChar = passArray[i+1];
        const difference = Math.abs(currentChar.charCodeAt(0) - nextChar.charCodeAt(0));
        if (difference === 1 || difference == -1) {
            return 'There is a sequence in the password';
        }
    }
    return 'There is no sequence in the password';
}