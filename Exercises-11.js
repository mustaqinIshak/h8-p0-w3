function tentukanDeretAritmatika(arr) {
    // you can only write your code here!
    let aritmatika = Math.abs(arr[0] - arr[1]) ;
    for(let i = 0; i < arr.length-1; i++){
        if(Math.abs(arr[i] - arr[i+1]) !== aritmatika){
            return false
        }
    }
    return true
  }
  
  // TEST CASES
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
  console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
  console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
  console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false