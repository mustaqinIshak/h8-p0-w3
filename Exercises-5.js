function palindrome(kata) {
    // you can only write your code here!
    var arr = kata.split("")
    var result = []
    for(let i = arr.length - 1; i >= 0; i--){
        result.push(arr[i])
    }
    var hasilBalik = result.join("")
    
   
    if( hasilBalik === kata) {
        return true
    } else {
        return false
    }
 
  }
  
  // TEST CASES
  console.log(palindrome('katak')); // true
  console.log(palindrome('blanket')); // false
  console.log(palindrome('civic')); // true
  console.log(palindrome('kasur rusak')); // true
  console.log(palindrome('mister')); // false