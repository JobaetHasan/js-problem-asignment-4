// problem-1 


function cubeNumber(number) {
    if(typeof number!='number'){
        return 'give numbers only'
       
    }
    return number*number*number;
}
console.log(cubeNumber(4))

// problem-2

function matchFinder(string1, string2) {
   
    if (typeof string1!='string' || typeof string2!='string'){
        return 'please enter any string'
    }
    
        let i=0;
    let j=0;
    let count=0;

    let sln=string1.length-string2.length
    for (i;i<=sln;i++){

        if(string1[i]==string2[j]){

            let l=i;
            for(k=0;k<string2.length;k++){
                if(string1[l]==string2[k]){
                    l++;
                    count ++;
                }
            }

            if(count==string2.length){
                break;
            }
            else count=0;

        }

    }
    if(count==string2.length){
        return true;
    }
    else {
    return false;}
}

let match=matchFinder(4 ,'John')
console.log(match)
console.log(matchFinder('Peter Parker','pet'))
console.log(matchFinder('JavaScript', 'ava'))


// problem-3

function sortMaker(arr) {
    if(arr[0]<0 || arr[1]<0){
        return 'invalid input'
    }
    if(arr[0]==arr[1]){
        return 'equal'
    }
    if(arr[0]< arr[1]){
        let temp;
        temp=arr[0]
        arr[0]=arr[1]
        arr[1]=temp
    }
     return arr;

}

console.log( sortMaker([50,40]))
console.log( sortMaker([50,-40]))
console.log( sortMaker([50,50]))


// problem-4

function findAddress(obj) {

    let valu= Object.values(obj)
      let i=0;
     
    if(valu.length==3){
    return valu[i]+ ',' + valu[i+1] + ',' +valu[i+2] 
    }
    if(valu.length==2){
        
        return valu[i]+ ',' + valu[i+1] + ',' +'__'

    }
    if(valu.length==1){
        return valu[i]+ ',' + '__' + ',' +'__'

    }
    return '__'+ ',' + '__' + ',' +'__'

}

obj={street:10,house:'15A',society:'Eart Perfect'} 
 let abs =findAddress(obj)
console.log(abs)
console.log(findAddress({street:10,society:'Eart Perfect'}))


// problem-5


function canPay(changeArray, totalDue) {

    if(changeArray.length==0){
        return 'tomar kace taka nai tumi cips kete parbe na '
    }

let sum=0;
for(i=0; i<changeArray.length;i++){
    
sum=sum+changeArray[i]

}

if(sum>=totalDue){
    return true
}
return false

}

console.log( canPay([1,23,3], 10))
console.log( canPay([1,2], 10))
console.log( canPay([], 10))


