// Coercion is the process of conversion of data from one type to another

//in implicit the js automatically converts from one datatype to another


// Coercion applies to every data type present in the JavaScript world. An example of coercion is shown below:
// let number = Number("35");
// Here, we’re explicitly converting a string to a number by passing the string to the inbuilt Number() function.
//Type conversion is done explicitly in code using the inbuilt functions like Number(), String(), Boolean(), etc.

var testString="hello"
var testNumber=9
var testSum= testString + testNumber
console.log(testSum)
console.log(typeof(testSum)) //it gives output as string as number is automatically converted into string after concatination


var num= 2>='2'
console.log(num)
console.log(typeof(num))



if ('RAT' + 5) {
    console.log('True')
} else {
    console.log('False')
}
