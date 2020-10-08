//Q1
function removeLongNames(names) {
    let array = names;

    for (let i = 0; i < array.length; i++) {
        if (array[i].length > 4) {
            array.splice(i--, 1);
        }
    }
}

//Q2
function removeAll(anArray, item) {
    let array = anArray;
    for (let i = 0; i < array.length; i++) {
        if (array[i] == item) {
            array.splice(i--, 1);
        }
    }
}

