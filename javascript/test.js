//var first_name = "jason"; two forward
//slashes mean single line comment
//var last_name = "zeringue";

/*
 
 BLOCK COMMENT
 
            */
var greeting = "hello!";

var first_name = "Jason";

var last_name = "Zeringue";

var message1 = "Don't forget to pick up these items";

var message2 = "also, make sure to gather wood, for dooms day prepping";

var favorite_quote = "\"Four Score ....\"";
var my_image = '<img src=\"images/myImage.png"\ /> ';

//use single quotes if you have alot of illigal character
var my_image = '<img src=\"images/myImage.png"\ /> ';

var goodbye = "see you later";

//BAD variable names (errors!!!)

// var first_name = "";
// var 2first_name = "";
// var math = "";

//operators

// "=" assigns values

// "+=" (concatenation assignment operator, with string) adds to what variable currently has

//output variables to the console!!!!
/*  console.log(greeting);
console.log(first_name);
console.log(last_name);
console.log(message1);
console.log(message2);
console.log(goodbye);
console.log(favorite_quote); */

//console.log(greeting + " " + first_name + " " + last_name + " " + message1 + " " + message2 + " " + favorite_quote + " " + goodbye);

//my quote... the parts in asteriks are the variables that will change...

//Each generation *goes further* than the generation preceding it because *it stands* on the shoulders of *that generation*. You will *have opportunities* beyond anything *we've ever known*.

//lets create some variables to hold the parts that dont change...
var static_words1 = "Each generation ";
var static_words2 = " than the generation preceding it because ";
var static_words3 = " on the shoulders of ";
var static_words4 = " You will ";
var static_words5 = " beyond anything ";

//create a variable that is used as referrence to your form button
//we use the unique ID attribute to do this
var button = document.getElementById("submit");

//then we add the ability to have a mouse click fire off a function when clicked on
button.addEventListener("click", onClick, false);

function onClick(evt)
{
  evt.preventDefault(evt);//this line stops the form from submiting
  //by preventing its default action
  
  
  //Forms
  var element1 = document.getElementById("form1").elements.item(0).value;
  var element2 = document.getElementById("form1").elements.item(1).value;
  var element3 = document.getElementById("form1").elements.item(2).value;
  var element4 = document.getElementById("form1").elements.item(3).value;
  var element5 = document.getElementById("form1").elements.item(4).value;
  console.log(static_words1 + element1 + static_words2 + element2 + static_words3 + element3 + static_words4 + element4 + static_words5 + element5);
  // document.getElementById("myForm").elements.item(0).value;
  // return false;
}