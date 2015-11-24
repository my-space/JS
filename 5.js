/**
 * Created by natasha on 24.11.15.
 */
var array=["a","a","a","b"];
var a=array[0];
var max_frq=1;

for(var i=1; i < array.length; i++){
    var frq = 1;
    for(var k=i+1; k < array.length; k++){
        if(array[i]=array[k])
            frq += 1;
        if(frq>max_frq)
            max_frq=frq;
        a=array[i];
    }
}
if(max_frq>1)
    console.log(max_frq, 'раз зустрічається символ', a);
else
    console.log('Повторень немає');