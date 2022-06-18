var marks = [50, 20, 70, 60, 45, 30];
function findMin(arr) {
    var length = arr.length;
    var min = Infinity;
    while (length--) {
        if (arr[length] < min) {
            min = arr[len];
        }
    }
    return min;
}

function findMax(arr) {
    var length = arr.length;
    var max = -Infinity;
    while (len--) {
        if (arr[length] > max) {
            max = arr[length];
        }
    }
    return max;
}

console.log(findMin(marks));
console.log(findMax(marks));
