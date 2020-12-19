//1 
 let firstname = 'Lata';
//2
'Geeta'
//3
let flower ='rose';
let tree = 'maple';
//4
'Toe'
//5
'Hardy'
//6
function hello () {
    return 'Hello world!' ;
    }
//7
function a () {
    return 'Hello a!' ;
    }
    function b () {
    return 'Hello b!';
    }
//8

function greet () {

    return 'Haydo!' ;
    }
    
     let salutation = 'Haydo!' ;
//9
    'Hi!'
//10
function echo (sound) {
    return sound ;
    }
//11
 'How do you do?'
//12
function greet(Grace) {

    return 'Hello' + ' ' + Grace + '!' ;
    }

//13
'Where is Jacky?'
//14
'Hi Selva! Hi Pola!'
//15
function log() {
    console.log ('Hello Console!');
    }
//16
function log(name) {
    console.log(name);
    }
    log('ana');
//17
function shout(Fire) {
    let result = Fire + Fire;
    console.log(result);
    return result;
  }
//18
'Roy and Roy'
//19
function length(sun) {

    return sun.length;
   }
   length('sun');
//20
function toCase(name) {
 

    return name.toLowerCase() + '-' + name.toUpperCase();
    
    }
     toCase('Mthatha');
//21
function shortcut(s1, s2) {
    return s1.charAt(0) + s2.charAt(0);
  }
//22
function firstChar(name) {
    return name.trim().charAt(0);
 }

//23
function indexOfIgnoreCase (name, word) {
    return name.toLowerCase().indexOf(word.toLowerCase());
 }
//24
function secondIndexOf(name, word) {
    let index = name.indexOf(word);
    return name.indexOf(word, index+1);
    }
//25
function firstWord(word) {
    let pos = word.indexOf(' ');
      return word.substr(0, pos);
    }
//26
function normalize(date) {
    return date.replaceAll('-', '/');
 }
//27
function add(num1, num2) {
    return Number(num1+num2);
}
//28
7
//29
function toFahrenheit (c) {
    return c*1.8+32;
 }
//30
function onesDigit (num) {
    return num%10;
 }
//31
function mean(num1, num2) {
    return (num1+num2)/2;
 }
//32
function hypotenuse(l1, l2) {
    return Math.sqrt(Math.pow(l1,2)+Math.pow(l2,2));
 }
//33
function midrange(n1,n2,n3) {
    let max = Math.max(n1,n2,n3);
    let min = Math.min(n1,n2,n3);
    return (max+min)/2;
 }
//34
function area(r) {
    return Math.PI*Math.pow(r,2);
 }
//35
function round100(num) {
    return Math.round(num/100)*100
}
//36
function dice() {
    return Math.floor(Math.random() * 6) + 1  
  }
//37
function add (strOfNums) {
    let posOfPlus = strOfNums.indexOf('+');
    let firstNum = strOfNums.slice(0, posOfPlus);
    let secondNum = strOfNums.slice(posOfPlus+1, strOfNums.length+1);
    
   return Number(firstNum) + Number(secondNum);
 }
//38
function nand(val1, val2) {
    if(val1 && val2) {
        return false;
    } else {
      return true;
    }
 }
//39
function nor(val1, val2) {
    if(!val1 && !val2) {
     return true;
    } else {
       return false;
    }
  }
//40

function xor(val1, val2) {
    if(val1 != val2) {
       return true;
     } else {
        return false;
     }
 }
 //41
 function equals(num1, num2) {
    if(num1 === num2) {
       return true;
    } else {
       return false;
    }
}
 //42
 function equals(n1,n2,n3) {
    if(n1===n2 && n2===n3 && n1===n3) {
        return true;
    } else {
     return false;
 
 }
 
 }
 //43
 function isEven(num) {
    if(num%2==0) {
      return true;
    } else {
      return false;
    }
 }
 //44
 function unequal(n1, n2, n3) {
    if(n1 !== n2 && n2 !== n3 && n1 !== n3) {
       return true;
    }  else {
    return false;
 }
 
 }
 //45
 function isThreeDigit(num) {
    if(num >99 && num < 1000) {
       return true;
 } else {
 return false; 
 }
 
 }
 //46
 function equals(val1, val2) {
    if(val1 === val2) {
       return 'EQUAL';
}  else {
     return 'UNEQUAL';
}

}
 //47
 function repdigit(num) {
    if(String(num).charAt(0) == String(num).charAt(1)) {
     return 'Repdigit!';
   } else {
     return 'No Repdigit!';
   }
 }
 //48
 function addWithSurcharge(num1, num2) {
    if(num1 > 10 && num2 >10) {
     return num1+num2+4;
    } else if(num1 <= 10 && num2 <=10) {
     return num1+num2+2;
    } else if((num1 > 10 && num2 <=10) || (num1 <= 10 && num2 >10)) {
      return num1+num2+3;
    }
 }
 //49
 function addWithSurcharge(num1, num2) {
    if((num1 > 10 && num2 <= 20) && (num2 >10 && num2 <=20)) {
     return num1+num2+4;
    } else if(num1 <= 10 && num2 <=10) {
     return num1+num2+2;
    } else if((num1 > 20) || (num1> 20)) {
      return num1+num2+3;
    }
 }
 //50
 function toArray(n1,n2) {
    return [n1,n2];
 }
 //51
 function getFirstElement(arr) {
    return arr[0];
  }
 //52
 function setFirstElement(arr, num) {
    arr[0]=num;
    return arr;
}
 //53
 function getLastElement(arr) {
    return arr[arr.length-1];
}
 //54
 function sort(arr) {

    return arr.sort();
  }
 //55
 function rotate(arr){
    let first = arr.shift();
   arr.push(first);
   return arr;

}

 //56
 function add(arr, num) {
    let str = arr.join(',');
    let pos = str.indexOf('num');
    if(pos != -1) {
      arr.push(num)
    }
    return arr;
}
 //57
 function concatUp(arr1, arr2) {
    if(arr1.length > arr2.length) {
       return arr2.concat(arr1);
    } else {
    return arr1.concat(arr2);
    }
 }
 //58
 function halve(arr) {
    if(arr.length%2 !==0) {
     return arr.slice(0, (arr.length)/2+1);
} else {
    return arr.slice(0, (arr.length)/2)
}
}
 //59
 function list(arr) {

    if (arr.length === 0) {
      return '';
    }
  
    if (arr.length === 1) {
      return arr[0];
    }
  
    let arrLast = arr.slice(0, arr.length - 1);
    let lastWord = arr[arr.length - 1];
    return arrLast.join(', ') + ' and ' + lastWord;
  }
 //60

 //61
 function median(arr) {
    arr = arr.sort();
    if(arr.length%2 !== 0) {
    return arr[(arr.length)/2+1];
}  else if(arr.lenght==1) {
return arr[0];
}
else {
    return (arr[(arr.length)/2+1] + arr[(arr.length)/2-1])/2;
}
}
 //62
 function hello(name) {
    if(name) {
      return 'Hello ' + name + '!';
    } else {
      return 'Hello world!';
    }
    }
 //63
 function cutComment(str) {
    let pos = str.indexOf('//');
     if(pos !== -1) {
       return str.substr(pos+3, str.length-1);
     } else {
      return null;
     }
   
   }
 //64
 function addTo(num) {
    let sum = 0;
      for(let i=0; i<=num; i++) {
        sum += i;
    }
        return sum;
    }
 //65

 //66
 function mean(arr) {
    let sum = 0;
   for(let i=0; i< arr.length; i++) {
    sum += arr[i];
}
return sum/arr.length;
}
 //67

 //68
 function lcm(a, b) {

    let theLCM = 0;
    let remainderA;
    let remainderB;
  
    do {
  
      theLCM++;
      remainderA = theLCM % a;
      remainderB = theLCM % b;
  
    } while (remainderA !== 0 || remainderB !== 0)
  
    return theLCM;
  }
 //69
 function gcd(n1, n2) {
    if (n2== 0) {
          return n1;
      }
  return gcd(n2, n1% n2);
  }
 //70
 function isPrime(num) {
    for(var i = 2; i < num; i++)
      if(num % i === 0) return false;
    return num > 1;
  }
 //71

 //72

 //73
 function parseFirstInt(input) {

    let inputToParse = input;
  
    for (let i = 0; i < input.length; i++) {
      let firstInt = parseInt(inputToParse);
      if (!Number.isNaN(firstInt)) {
        return firstInt;
      }
      inputToParse = inputToParse.substr(1);
    }
  
    return NaN;
  }
 //74
 function add(str) {
    let arr = str.split('+');
    let sum = 0;
     for(let i=0; i<arr.length; i++) {
       sum= sum + Number(arr[i]);
   }
  
  return sum;
  }
 //75

 //76

 //77

 //78

 //79

 //80
