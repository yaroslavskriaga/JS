function dataChecker(id) {
    if (id == TomInput) {
        var tom = document.getElementById("TomInput").value;
        if (tom == 21) {
            alert("Correct")
        } else {
            alert("Wrong")
        }
    } else if (id == AlexInput) {
        var alex = document.getElementById("AlexInput").value
        if (alex == 32) {
            alert("Correct")
        } else {
            alert("Wrong")
        }
    } else if (id == MyAge) {
        var me = document.getElementById("MyAge").value
        if (me > 32 && me != 32) {
            alert("You are older then Alex and Tom!")
        } else if (me < 21 && me != 21) {
            alert("You are younger then Alex and Tom!")
        } else if (me > 21 && me < 32 && me != 21) {
            alert("You are older then Tom and younger then Alex!")
        } else if (me == 21) {
            alert("Same age as Tom and younger then Alex!")
        } else if (me == 32) {
            alert("Same age as Alex and older then Tom!");
        }
    }
}

function sortArray() {
    var classmates = ["Joan", "Wendy", "Lluis", "Li", "Ruben", "Slavik", "Santi", "Sinisa", "Vasil", "Emi", "Deni"];
    classmates.sort();
    alert(classmates);
}

function number(id) {
    odd = [];
    even = [];
    i = 0;
    var ages = [23, 27, 32, 30, 22, 20, 25, 32, 33, 28, 27];
    if (id == showEven) {
        while (i < ages.length) {
            ages[i] % 2 ? even.push(ages[i]) : odd.push(ages[i]);
            i++;
        }
        alert(even)
    } else if (id == showOdd) {
        while (i < ages.length) {
            ages[i] % 2 ? even.push(ages[i]) : odd.push(ages[i]);
            i++;
        }
        alert(odd)
    }
}

function maxMin(id) {
    if (id == max) {
        var maximum = Math.max.apply(null, [243, 12, 45, 2, 13, 6, 4, 56, 51, 57, 82, 14]);
        alert(maximum)
    } else if (id == min) {
        var minimum = Math.min.apply(null, [243, 12, 45, 2, 13, 6, 4, 56, 51, 57, 82, 14]);
        alert(minimum)

    }
}

function indexArray(arr, ind) {
    var Array = [3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99, 100];
    ind = document.getElementById("Index").value
    arr = Array;
    alert(arr[ind]);
}








function repeatNum() {
    var arrayNum = [3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99, 100];
    var results = [];
    arrayNum.sort();
    for (var i = 0; i < res.length - 1; i++) {
        if (res[i + 1] == res[i]) {
            results.push(res[i]);
        }
    }
}




//
//
//var color = ["Red", "Green", "White", "Black"];
//
//function stringcolor(array) {
//    return array.join("  ");
//}
//console.log(stringcolor(color));
//
//
//var revNumber = 32443;
//
//function reverseAnumber(n) {
//    n = n + "";
//    return n.split("").reverse().join("");
//}
//console.log(reverseAnumber(revNumber));
//
//
//var name = "webmaster";
//
//function aplhabetSort(stringSort) {
//    return stringSort.split('').sort().join('');
//}
//console.log(aplhabetSort(name));
//
//
//
//
//
//var uppername = "prince of persia";
//
//function uppercase(stringUpper) {
//    var array1 = stringUpper.split(' ');
//    var newarray1 = [];
//    for (var i = 0; i < array1.length; i++) {
//        newarray1.push(array1[i].charAt(0).toUpperCase() + array1[i].slice(1));
//    }
//    return newarray1.join(' ');
//}
//console.log(uppercase(uppername));
//
//
//
//function longestWord(str) {
//    var newLines = str.split(" ");
//    var longestWord = newLines[0];
//    for (i = 1; i < newLines.length; i++) {
//        if (newLines[i].length > longestWord.length) {
//            longestWord = newLines[i];
//        }
//    }
//    console.log(longestWord);
//}
//
//longestWord("Web Development Tutorial ");