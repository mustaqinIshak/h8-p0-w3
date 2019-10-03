function pasanganTerbesar(num) {
    // you can only write your code here!
    var angka = String(num).split("")
    var arr = []
    var result = 0;
    for (let i = 0; i < angka.length-1; i++){
        var angka1 = angka[i]
        var angka2 = angka[i + 1]
        arr.push(angka1.concat(angka2))
    }
    for(let j = 0; j < arr.length; j++){
        if(arr[j] > result){
            var result = arr[j]
        }
    }
    
    return result
  }
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99