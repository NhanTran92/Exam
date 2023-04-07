var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var array_1 = [2, 4, 6, 8, 10];
var array_2 = __spreadArray(__spreadArray([], array_1, true), [5, 7, 9], false);
console.log(" Danh s\u00E1ch c\u00E1c Array2 :  ".concat(array_2, " "));
var array_3 = __spreadArray([], array_2, true);
console.log(" Danh s\u00E1ch c\u00E1c Array3 sau khi coppy :  ".concat(array_3, " "));
