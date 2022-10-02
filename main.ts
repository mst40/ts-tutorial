import * as fs from 'fs'; // npm install --save-dev @types/node
import * as uuid from "uuid";

interface Data {
    name: string,
    age: number
}

function func(data: Data[]) {
    let t: number = 0;
    data.forEach((item) => {
        t += item.age;
    })
    return t;
}

const content= fs.readFileSync('data.json');
const data: Data[] = JSON.parse(content.toString());
console.log(func(data));