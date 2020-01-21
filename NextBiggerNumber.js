// Next bigger number with the same digits

function nextBigger(n){

  let sort = function (x) { 
  return Number(x.toString().split('').sort(
    function (a,b) {
      return b-a
    }).join(''))};
  
  if (sort(n) === n) {return -1}
  
  for (let i = n+1; i <= (sort(n)); i++) {
    if (sort(i) === sort(n)) {
      return i;
    }
  }
}


nextBigger(12); //21
nextBigger(513); //531
nextBigger(2017); //2071