function set(op) {

  document.getElementById("display").value += op;

}

function sqrRoot() {
  var tempStore = document.getElementById("display").value;
  document.getElementById("display").value = eval(Math.sqrt(tempStore));

}

function asine() {
  var tempStore = document.getElementById("display").value;
  document.getElementById("display").value = eval(Math.atan(tempStore));

}

function acosine() {
  var tempStore = document.getElementById("display").value;
  document.getElementById("display").value = eval(Math.atan(tempStore));

}

function fLog() {
  var tempStore = document.getElementById("display").value;
  document.getElementById("display").value = eval(Math.log(tempStore));

}

function atangent() {
  var tempStore = document.getElementById("display").value;
  document.getElementById("display").value = eval(Math.atan(tempStore));

}

function tangent() {
  var tempStore = document.getElementById("display").value;
  document.getElementById("display").value = eval(Math.tan(tempStore));

}

function cosine() {
  var tempStore = document.getElementById("display").value;
  document.getElementById("display").value = eval(Math.cos(tempStore));

}

function sine() {
  var tempStore = document.getElementById("display").value;
  document.getElementById("display").value = eval(Math.sin(tempStore));

}
function pourcentage() {
  var tempStore = document.getElementById("display").value;
  document.getElementById("display").value = document.getElementById("display").value/100;

}

function setOp() {
  alert("gf");
  //document.getElementById("display").value += op;
}

function answer() {
  var Exp = document.getElementById("display");
  var Exp1 = Exp.value;
  var result = eval(Exp1);
  //alert(result);
  Exp.value = result;
}

function ce() {

  var elem = document.getElementById("display").value;
  var length = elem.length;
  length--;
  var a = elem.substr(0, length);

  // document.getElementById("display").value="";
  //for(var i=0;i<length-1;i++)
  //{
  document.getElementById("display").value = "";
  // }
  //alert(length);
}
function exp() {
  var tempStore = document.getElementById("display").value;
  document.getElementById("display").value = eval(Math.exp(tempStore));

}
function log() {
  var tempStore = document.getElementById("display").value;
  document.getElementById("display").value = eval(Math.log10(tempStore));

}


function fact() {
  // Step 1. Create a variable result to store num
  var num = document.getElementById("display").value;
  var result = num;
   
  // If num = 0 OR num = 1, the factorial will return 1
  if (num === 0 || num === 1) 
    return 1; 
 
  // Step 2. Create the WHILE loop 
  while (num > 1) { 
    num--; // decrementation by 1 at each iteration
    result = result * num; // or result *= num; 
    /* 
                    num           num--      var result      result *= num         
    1st iteration:   5             4            5             20 = 5 * 4      
    2nd iteration:   4             3           20             60 = 20 * 3
    3rd iteration:   3             2           60            120 = 60 * 2
    4th iteration:   2             1          120            120 = 120 * 1
    5th iteration:   1             0          120
    End of the WHILE loop 
    */
  }
     
  // Step 3. Return the factorial of the provided integer
  document.getElementById("display").value = result;
}



function puissance() {
  var tempStore = document.getElementById("display").value;
  document.getElementById("display").value = eval(Math.pow(tempStore,3));

}