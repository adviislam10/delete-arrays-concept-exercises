//Q1
function removeLongNames(names) {

    for (let i = 0; i < names.length; i++) {
        if (names[i].length > 4) {
            names.splice(i--, 1);
        }
    }
}

//Q2
function removeAll(anArray, item) {
    for (let i = 0; i < anArray.length; i++) {
        if (anArray[i] == item) {
            anArray.splice(i--, 1);
        }
    }
}