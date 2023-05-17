const fn = (a, b, c)=>{
    console.log(a + b + c);
}

const arr = [1, 2 , 3];

// fn(arr[0], arr[1], arr[2]); //Mismo resultado que usando ...arr
fn(...arr);

const arr1 = [5, 6];

// const arr2 = arr.concat(arr1); // Mismo resultado
const arr2 = [...arr, ...arr1];
console.log(arr2);

const arr3 = [...arr, ...arr1, 7];
console.log(arr3);

// Con objetos
const obj1 = {
    a : 1,
    b : 2
}
const obj2 = {
    b : 5,
    c : 'propiedad c'
}

const obj3 = {...obj1}
obj1.a = 10;
console.log(obj1, obj3);

const obj4 = {...obj1, ...obj2}
console.log(obj4);