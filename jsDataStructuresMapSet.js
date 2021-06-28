'use strict';

//Map

// Пусть даны 2 массива. Создайте коллекцию Map из этих массивов.

const array1 = [['0', 1], [{}, 2], [function (){
    console.log('helloJs')}, 34]];

const array2 = [[25, 'FreshCode'],[[2], true],[{color: 'yellow'}],[{20: 'Hello'}]];

const map3 = new Map([...array1,...array2]);

// Получите список ключей и значений отдельно.

map3.forEach((value, key) => {
    console.log(value);
    console.log(key);
});

// Получите текущее количество элементов.

 console.log(map3.size);

// Добавьте и удалите элемент

map3.set('AddedElement', 'Let it be a string');
map3.delete('AddedElement');

//Set

// Создайте коллекцию Set с начальными значениями 1,2,3.

const set1 = new Set([1, 2, 3]);

// С помощью метода has проверьте наличие элемента со значением 3, а затем элемента со значением 4.

console.log(set1.has(3));
console.log(set1.has(4));

// Добавите еще несколько элементов.

set1.add(10);
set1.add(20);

// С помощью цикла for-of переберите ее значения и выведите в консоль.

for (let value of set1) {
    console.log(value)
};

// Найдите сумму этих значений.

const toArray = Array.from(set1);

const result = toArray.reduce(sumValue,0); // with initial value to avoid when the array is empty

function sumValue(accumulator, a) {
    return accumulator + a;
};

const fromArray = new Set([result]);

fromArray.add(4);

fromArray.add(3);

fromArray.delete(3);

fromArray.delete(4);

// Очистите всю коллекцию.

fromArray.clear();






