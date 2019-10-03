function groupAnimals(animals) {
    // you can only write your code here!
    var result = []
    animals.sort()
    for(let i = 0; i < animals.length; i++){
      var tampung = [animals[i]] 

      for(let j = animals.length-1; j > i; j--){
          if(animals[i][0] === animals[j][0]){
              tampung.push(animals[j])
              animals.splice(j,1)
          }
      }
      
      result.push(tampung)
    }
    return result
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]