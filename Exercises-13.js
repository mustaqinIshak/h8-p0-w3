function targetTerdekat(arr) {
    // you can only write your code here!
    var posisiO = arr.indexOf('o');
    var posisiX = [];
    for(let i = 0; i < arr.length ; i++) {
        if(arr[i] == 'x'){
            posisiX.push(Math.abs(posisiO - i))
        }
    }
    posisiX.sort()
    if (posisiX.length == 0){
        return 0
    } else {
        return posisiX[0]
    }
    
  }
  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2