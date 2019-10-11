function hitungJumlahKata(kalimat) {
  // you can only write your code here!
  let arr = kalimat.split(" ")
  let result = []
  for(let i = 0; i < arr.length; i++){
//       console.log(arr[i].length)
    if(arr[i].length > 0){
      result.push(arr[i])
    }
  }
  console.log(arr)
  return result.length
}

// TEST CASES
console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5