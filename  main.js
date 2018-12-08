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
        if (me > 32) {
            alert("You are older then Alex and Tom!")
        } else if (me > 21) {
            alert("You are older then Tom and younger then Alex!")
        } else if (me == 21) {
            alert("Same age as Tom and younger then Alex!")
        } else if (me == 32) {
            alert("Same age as Alex and older then Tom!");
        } else if (me < 21 && me != 0) {
            alert("You are younger then Alex and Tom!")
        } else {
            alert("Wrong")
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
    if (ind >= 0 && ind <= 21) {
        alert(arr[ind]);
    } else {
        alert("Incorrect");
    }
}

function repeatNum(id) {
    var arrayNum = [3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99, 100];
    var results = [];
    arrayNum.sort();
    for (var i = 0; i < arrayNum.length - 1; i++) {
        if (arrayNum[i + 1] == arrayNum[i]) {
            results.push(arrayNum[i]);
        }
    }
    alert(results);
}

function reverse_a_number(n) {
    n = n + "";
    return alert(n.split("").reverse().join(""));
}

function aplhabetSort(name) {
    if (name == "WEBMASTER") {
        x = name.split('').sort().join('') + ". It's mixed now.";
    }
    return document.getElementById("inner").innerHTML = x;
}

function uppercase(stringUpper) {
    if (stringUpper == "WEB DEVELOPER") {
        var upperArray = [];
        stringUpper.split(' ');
        for (var i = 0; i < stringUpper.length; i++) {
            upperArray.push(stringUpper[i].charAt(0).toUpperCase() + stringUpper[i].slice(1));
        }
        return document.getElementById("prince").innerHTML = upperArray;
    }
}

function findLongestWord(str) {
    if (str == "WEB DEVELOPMENT GUIDES") {
        const stringArray = str.split(" ");
        const longestWord = stringArray.reduce((a, b) => {
            if (b.length > a.length) {
                return b + ". Which is the longest word";
            } else {
                return a;
            }
        });
        return document.getElementById("longest").innerHTML = longestWord;
    }
}