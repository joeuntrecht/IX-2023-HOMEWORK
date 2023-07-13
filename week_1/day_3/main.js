function printEven(number){
    for(let i = 0; i <= number; i+=2){
        console.log(i);
    }
}
//printEven(50);

function fibonacci(number){
    let i = 0;
    let prevNum = 0;
    let newNum = 1;
    let nextTerm
    while(i<number){
        console.log(newNum);
        nextTerm = prevNum + newNum;
        prevNum = newNum;
        newNum = nextTerm;
        i++;
    }
}
//fibonacci(6);

function averageArray(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum+=arr[i];
    }
    let average = sum / arr.length;
    console.log(sum);
}
//averageArray([1,2,3]);

function maxArray(arr){
    let max = arr[0];
    for(let i = 0; i< arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    console.log(max);
}
//maxArray([1,2,3]);

function minArray(arr){
    let min = arr[0];
    for(let i = 0; i< arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
        }
    }
    console.log(min);
}
minArray([1,2,3]);

function vowels(str){
    let num = 0;
    const vowelArr = ['a','e','i','o','u'];
    for(let i = 0; i < str.length; i++){
        if(vowelArr.includes(str[i])){
            num++;
        }
    }
    console.log(num);
}
//vowels('banana');

function add(num1,num2){
    console.log(num1+num2);
}

function mult(num1, num2){
    console.log(num1*num2);
}

function postal(city){
    switch(city){
        case 'Portola Valley': 
            console.log(94028);
        case 'Lisbon':
            console.log(1000001);
        case 'Madison':
            console.log(53703);
    }
    
}

function alphabeticalSort(strArr){
    strArr.sort(function(a,b){
        a = a.toLowerCase();
        b = b.toLowerCase();
    
    
    if(a < b){
        return -1;
    }else if (a > b){
        return 1
    }else{
        return 0;
    }
    });
    return strArr;
}
const strings = ['b', 'a', 'c'];
console.log(alphabeticalSort(strings));

function ascendingNums(arr){
    let min = arr[0];
    let minIndex;
    let temp;
    for(let j = 0; j < arr.length; j++){
        min = arr[j];
        minIndex = j;
        for(let i=j; i< arr.length; i++){
            if(arr[i] < min){
                min = arr[i];
                minIndex = i;
            }
        }
        temp = arr[j];
        arr[j] = min;
        arr[minIndex] = temp;
    }
    return arr;
}
console.log(ascendingNums([3,2,1]));

function reverseNum(num){
    let str = num.toString();
    console.log(str);
    let reverseStr = [];
    for(let i = str.length - 1; i >= 0; i--){
        reverseStr.push(str[i]);
    }
    console.log(reverseStr);
    let reverse = 0;
    for(let i = 0; i < reverseStr.length; i++){
        reverse += (reverseStr[i] * Math.pow(10,reverseStr.length - 1 - i));
    }
    console.log(reverse);
}
reverseNum(12345);

function capitalize(str){
    let arr = str.split(' ');
    console.log(arr);
    for(let i = 0; i< arr.length; i++){
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].substring(1);
    }
    
    let newString = '';
    for(let i = 0; i<arr.length; i++){
        newString += arr[i] +' ';
    }
    console.log(newString);
}
capitalize('banana phone');

function returnOccurences(str, letter){
    let sum = 0;
    for(let i = 0; i< str.length; i++){
        if(str[i] == letter){
            sum++
        }
    }
    return sum;
}
console.log(returnOccurences('bbb', 'b'));

function filterString(arr, str){
    let newArr = arr.filter(word => word != str);
    console.log(newArr);
}
filterString(['abc', 'bca', 'cba'], 'abc');

function filterNumber(arr, num){
    let newArr = arr.filter(x => x != num)
    console.log(newArr);
}
filterNumber([1,2,3],2);

function filterObject(arr, id){
    let newArr = arr.filter(object => object.id != id);
}

function printDate(){
    const date = new Date();
    let str = (date.getMonth()+1)+ '/' + (date.getDate()) + '/' + (date.getFullYear())
    console.log(str);
}
printDate();

let randomObjectArray = [
    {
      name: 'Cam',
      surname: 'Kirkpatrick',
      goalsScored: 5,
    },
    {
      name: 'Michelle',
      surname: 'Visser',
      goalsScored: 10,
    },
    {
      name: 'John',
      surname: 'Doe',
      goalsScored: 25,
    },
  ];
function higherThanTen(arr){
    let newArray = arr.filter(people => people.goalsScored <= 10)
    return newArray;
}
console.log(higherThanTen(randomObjectArray));