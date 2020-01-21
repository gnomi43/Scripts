// The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:
function maxSequence(arr){
    console.log(arr);
    let arr2 = [];
     if(arr.length == 0 || Math.max(...arr) < 0) {
       return(0)
     } else {
       for(let i = 0; i <= arr.length; i++){
        let arr1 = [];
        for(let k = 1; k <= arr.length-i; k++){
            arr1.push( (arr.slice( i,i+k )).reduce( (a,b) => a+b ) );
        }
        arr2.push(Math.max(...arr1));
      }
    return (Math.max(...arr2));
     }
}

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
// should be 6: [4, -1, 2, 1]  