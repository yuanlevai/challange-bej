function countChar(text, char) {
    let newText = [];
    for (let i = 0; i < text.length; i++) {
        if (char===text[i]) {
            newText++
        }
    }
    return newText;
}

console.log(countChar("sepak bola", "a"))