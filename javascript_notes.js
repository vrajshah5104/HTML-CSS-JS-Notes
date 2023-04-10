// 1. WAYS TO PRINT IN JAVASCRIPT

  // console.log("Hello World");
  // alert("Kuch bhi");
  // document.write("This is document.write");

// 2. JAVASCRIPT CONSOLE API

console.log("Hello World", 23 * 3, "Another log");
// alert("Get alerted");
document.write("This is document write function");

// 3. JAVASCRIPT VARIABLES

// var number1 = 27;
// var number2 = 69;
// console.log(number1 + number2);

// 4. DATA TYPES IN JAVASCRIPT

// PRIMITIVE : Null, Undefined, Number, String, Boolean, Symbol
// REFERENCE: Arrays, Objects

// NUMBERS
  // var num1 = 420;
  // var num2 = 40.44;
// STRING
  // var str1 = "String";
  // var str2 = 'Also a string';
// BOOLEAN
  // var a = true;
  // var b = false;
// UNDEFINED
  // var und = undefined;
  // var und;
// NULL
  // var n = null;
// OBJECT
  // var marks = {
  //     vraj: 99, neel: 98, riddhi: 97.69
  // };
// ARRAY
  // var arr = [1, 2, 3, "This string will also be a part of array", 4, 5];
// console.log(a, num2, str1, b, num1, str2, und, n, marks, arr);

// 5. OPERATORS IN JAVASCRIPT

// ARITHMETIC OPERATORS
  // var a = 344;
  // var b = 355;
  // console.log("The value of a+b : ",a+b);
  // console.log("The value of a-b : ",a-b);
  // console.log("The value of a*b : ",a*b);
  // console.log("The value of a/b : ",a/b);  
// ASSIGNMENT OPERATORS
  // var c = b;
  // c += 14;
  // c -= 2;
  // c *= 4;
  // c /= 2;
  // console.log("The value of c : ",c);
// COMPARISON OPERATORS
  // console.log(a == b);
  // console.log(a <= b);
  // console.log(a >= b);
  // console.log(a < b);
  // console.log(a > b);
// LOGICAL OPERATORS
  // Logical AND
    // console.log(true && true);
    // console.log(true && false);
    // console.log(false && true);
    // console.log(false && false);
  // Logical OR
    // console.log(true || true);
    // console.log(true || false);
    // console.log(false || true);
    // console.log(false || false);
  // Logical NOT
    // console.log(!false);
    // console.log(!true);

// 6. FUNCTIONS IN JAVASCRIPT

// function avg(f,g) {
//   e = (f+g)/2;
//   return e;
// }
// e1 = avg(6,9);
// console.log(e1);

// 7. CONDITIONALS IN JAVASCRIPT

function drinking(age) {
  if (age > 18) {
      console.log("You cannot drink just yet");
  }
  else if (age > 21) {
      console.log("You can finally drink");
  }
  else {
      console.log("Bacche ho, can't drink");
  }
}
d = drinking(19);
console.log(d);

// 8. LOOPS IN JAVASCRIPT

// USING FOR LOOP
  var arr = [1,2,3,4,5,6];
  // for (var i=0; i<arr.length; i++) {
  //   console.log(arr[i]);
  // }
// USING FOR-EACH LOOP
  // arr.forEach(function(element) {
    // console.log(element);
  // })
// USING WHILE LOOP
  let j=0;
  // while (j < arr.length) {
  //   console.log(arr[j]);
  //   j++;
  // }
// USING DO-WHILE LOOP
  // do {
  //   console.log(arr[j]);
  //   j++;
  // }
  // while (j < arr.length);
// USING BREAK STATEMENT
  // for (i=0; i<arr.length; i++) {
  //   if (i==2) {
  //     break;
  //   }
  //   console.log(arr[i]);
  // }
// USING CONTINUE STATEMENT
  // for (i=0; i<arr.length; i++) {
  //   if (i==2) {
  //     continue;
  //   }
  //   console.log(arr[i]);
  // }

// 9. STRING AND OBJECT MANIPULATION IN JAVASCRIPT

  // STRING OPERATIONS
    // var data = "Hope everyone is fine"
    // console.log("Statement : ", data);
    // console.log("In Uppercase : ", data.toUpperCase());
    // console.log("In Lowercase : ", data.toLowerCase());
  // SLICE OPERATION
    // (index, index-1) where index starts from 0
    // console.log("Slice : ",data.slice(2,9));
  // LENGTH OPERATION
    // console.log("Length : ", data.length);
  // REPLACE OPERATION
    // newData = data.replace("fine", "doing fine");
    // console.log("Original Statement : ", data);
    // console.log("Replaced Statement : ",  newData);
    // console.log("New length : ",newData.length);
  // INLCUDES OPERATION
    // Will give me true or false
    // console.log("Does it inlcude : ",data.includes("Hoe"));
  // SPLIT OPERATION
    // It will split a string into an array according to the de-eliminator
    // var varSplitDemo="Good Morning";
    // console.log("After Split : ",varSplitDemo.split("M"));

  // CONVERT A STRING INTO INTEGER
    // var var1="1234";
    // console.log("String(White) : ", var1);
    // console.log("Converted to Integer(Purple)  : ", parseInt(var1));

    // var varInvalidNum="123pvs4"
    // Will only print from starting till a number is there, char pe stop ho jayega
    // console.log(parseInt(varInvalidNum));
  // CONVERT A NUMBER INTO STRING
    // var var2=5678
    // console.log("Number(Purple) : ", var2);
    // console.log("Converted to String(White) : ",var2.toString());
    // console.log("Converted to String(White) written like a number : ",var2.toLocaleString());

  // GET THE KEYS AND VALUES OF THE OBJECT
    // var obj1 = {
    //   name: "Vraj",
    //   age: 19
    // };
    // console.log(obj1);
    // console.log(Object.values(obj1));
    // console.log(Object.keys(obj1));
  // UPDATE THE VALUES OF THE OBJECT
    // obj1.name="Vraj Shah";
    // console.log(obj1.name);

// 10. ARRAY METHODS IN JAVASCRIPT

  // MAP
    // var arr2 = [1,2,3,4,5,6];
    // console.log("Current Array : ", arr2);

    // var arr3 = arr2.map((item) => item*2);
    // console.log("New Array : ", arr3);
  // FILTER
    //const arr4 = arr2.filter((data) => {
    //   if (data>=4)
    //     return data;
    // });
    // console.log("Filter => ",arr4);
  // FIND
    // var arr5 = arr3.find((data) => data<10);
    // console.log("Find method result : ", arr5);
  // REDUCE
    // First acc=0, then acc+2, now acc=2, then acc+4, now acc=6, ese finally acc+12 and acc=42 output
    // var totalSum = arr3.reduce((accumulation, currentValue) => {
    //   return accumulation+currentValue;
    // }, 0);
    // console.log("Total Sum of the Array3 : ", totalSum);

// 11. PROMISES IN JAVASCRIPT

  // It is an object that returns a value that we hope to recieve in the future but not immediately
  // Eg. playing a yt video, 2:20sec buffer 2:50sec
  // 1. Pending state (need to watch) 2. Fulfill state (playing) 3. Reject (not able to play)
  // var myPromise = new Promise(function (resolve,reject) {
  //   setTimeout(function() {
  //     resolve("Success");
  //   }, 4000);
  //   setTimeout(function() {
  //     reject("Error occured");
  //   }, 6000);
  // });
  // myPromise
  // .then((data) => {console.log(data)})
  // .catch((err) => {console.log(err)});

// 12. ASYNC AND AWAIT IN JAVASCRIPT

  // var myPromise = new Promise(function (resolve, reject) {
  //   setTimeout(function () {
  //     resolve ("Success");
  //   }, 3000);
  // });
  // let getOutPromiseResult;
  // var getOutPromise = async () => {
  //   getOutPromiseResult = await myPromise;
  //   console.log(getOutPromiseResult);
  // };

// 13. DOM (DOCUMENT OBJECT MODEL) TREE IN JAVASCRIPT

  // var arr6 = [1, 2, "animal", 3, "animal", 4, "animal", "animal"]
  // let name = document.getElementsByName("animal").length;