function SayHello() {
    console.log("Hello, World!");
}
function ValidateParameter(param) {
    if (param === null) {
        return "Parameter is null";
    }
    return "Parameter is: ".concat(param);
}
console.log(ValidateParameter("Test"));
console.log(ValidateParameter(null));
