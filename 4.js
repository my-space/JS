/**
 * Created by natasha on 24.11.15.
 */
var array = [1,1,3,3,2,2,5,3,4,4,5,6,1];

function double(arr){
    for (var i=0; i<arr.length; i++){
        for(var k=i+1; k<arr.length; k++){
            if(arr[i]==arr[k] && i!=k)
                console.log(arr[i]);
            break;
        }

    }}
double(array);