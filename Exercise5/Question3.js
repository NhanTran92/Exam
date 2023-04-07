function printInformation(name, email) {
    if (email != undefined) {
        console.log(" T\u00F4i l\u00E0 ".concat(name, ". Email c\u1EE7a t\u00F4i l\u00E0 ").concat(email, " "));
    }
    else {
        console.log(" T\u00F4i l\u00E0 ".concat(name, ". T\u00F4i ch\u01B0a c\u00F3 Email  "));
    }
}
printInformation("Nam", "Namvv20@gmail.com");
printInformation("Nam");
