let txt = "We've given some' money in advance', so we'll pay' the 'rest when we get the car. Victoria' doesn't feel well."
let regExp = /\'\s/gi;

if (regExp.test(txt) == true) {
    let newText = txt.replace(regExp, ' ')
    regExp2 = /\s'/gi;
    console.log(newText);
    if (regExp2.test(newText) == true) {
        newText = newText.replace(regExp2, ' ')
        regExp3 = /'\W/gi;
        console.log(newText);
        if (regExp3.test(newText) == true) {
            newText = newText.replace(regExp3, ',')
            console.log(newText);
        }
    }
}

