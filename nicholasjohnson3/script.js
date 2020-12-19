/* Closure */

// 1
let outer = function() {
    let a = "A Local variable"
    let inner = function() {
      alert(a)
    }
    window.fnc = inner;
  }
  outer();
  fnc();

// 2 
// let a = 12;
// (function() {
//   alert(a);
// })(); // the result is 12

// var a = 5;
// (function() {
//   var a = 12;
//   alert(a);
// })(); // the result is 12 

// var a = 10;
// var x = (function() {
//   var a = 12;
//   return (function() {
//     alert(a);
//   });
// })();
// x();  // the result is 12


// var a = 10;
// var x = (function() {
//   var y = function() {
//     var a = 12;
//   };
//   return function() {
//     alert(a);
//   }
// })();
// x(); // the result is 10

// var a = 10;
// var x = (function() {
//   (function() {
//     a = 12; // 
//   })();
//   return (function() {
//     alert(a);
//   });
// })();
// x(); // the result is 12

// var a = 10;
// (function() {
//   var a = 15;
//   window.x = function() {
//     alert(a);
//   }
// })();
// x(); // thie result is 15

// 3
let x = (function() {
    let addTheBread = function() {
        document.getElementById('product').textContent = 'Add the bread!"';
    };
    let spreadSoyaMargarine = function() {
        document.getElementById('product').textContent = 'Now spreading soya margarine!"';
    };
    let addTheJam = function() {
        document.getElementById('product').textContent = 'Now spreading the jam!"';
    };
    let makeSandwich  = function() {
        
    }
})();



// var a = 10;
// var x = (function() {
//   var y = function() {
//     var a = 12;
//   };
//   return function() {
//     alert(a);
//   }
// })();
// x();