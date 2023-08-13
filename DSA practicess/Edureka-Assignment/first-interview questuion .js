// // var x = 23;
 
// // (function(){
// //  var x = 43;
// //  (function random(){
// //    x++;
// //    console.log(x);
// //    var x = 21;
// //  })();
// // })(); 

// var b = 1;

// function outer(){

//     var b = 2

//    function inner(){

//        b++;

//        var b = 3;

//        console.log(b)

//    }
//   }

//   /

(function () {

  try {

      throw new Error();

  } catch (x) {

      var x = 1, y = 2;

      console.log(x);

  }

  console.log(x);

  console.log(y);

})();

:~$mongo

// MongoDB shell version:1.65

// Connecting to: test

// Error: Could not connect to the server

// Exception: connect failed




// data duplication in sql how to overcome them ``
