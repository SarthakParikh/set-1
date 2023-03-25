let arr = [10, 20, 30, 40, 50];
let new_arr = [];

function create_new_arr(arr) {

    for (let i = 0; i < arr.length; i++) {
        let new_ele = 0
       for (let j = i; j < arr.length; j++) {
                new_ele = new_ele+arr[j]
        
       }

       new_arr[i]=new_ele
        new_ele=0
    }
  return new_arr;
}

console.log(create_new_arr(arr));
