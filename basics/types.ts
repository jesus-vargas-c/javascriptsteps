function SayHello(): void {
    console.log("Hello, World!");
}

function ValidateParameter(param : string | null): string{
    if (param === null) {
        return "Parameter is null";
    }
    return `Parameter is: ${param}`;
}



console.log(ValidateParameter("Test"));
console.log(ValidateParameter(null));