var checkIfExist = function(arr) {
    for(let i = 0; i < arr.length ; i++){
  
      if(arr.indexOf(2*arr[i]) !== -1 && arr.indexOf(2*arr[i]) !== i){
         return true
         }
    }
    return false; 
  };
  
  console.log(checkIfExist([0, 0]));//true