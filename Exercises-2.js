function balikString(str) {
    let result = []
    let arr = str.split("");
    for(let i = arr.length -1; i >= 0; i-- ){
      result.push(arr[i]);
    }
    return result.join("")
}

console.log(balikString("hello world!"))//output "!dlrow olleh"