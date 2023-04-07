function multiply_2() {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    var multiply_3 = 1;
    a.forEach(function (element) { return (multiply_3 *= element); });
    return multiply_3;
}
console.log(multiply_2(5));
console.log(multiply_2(5, 3));
console.log(multiply_2(5, 3, 2));
