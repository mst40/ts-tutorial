//types

//boolean
    let tsBoolean: boolean = true;

//number
    let tsNumber: number = 99;

//string
    let tsString: string = 'This is string';

//省略可(local scope のみ)
    // let a = 'b';
    // a = 5;　---> err 'number'を'string'に割り当てることができません

//function
//   引数の型 ↓↓             return ↓↓
function returnNumber(a: number, b: number) : number {
    return a+b;
}

//any
    let c: any = 1 ;
    c = 'string';

//Array
let d: number[] = [10, 20];

//associative array(連想配列)
//{[key: インデックスの型]: 値の型}
let e:{[key: string]: number} = {"a": 10, "b": 20};
let f:{[key: string]: HTMLInputElement} = { 'a': document.getElementById("elem") as HTMLInputElement} ;

let obj: Array<{[key:string]: string}> = [{'name': 'taro'}]

//object
interface Hoge {
    a?: number,
    b: string | null,
    c?: string, //cがなくてもerrがでない
    //...
}

let v: Hoge = { a: 2, b: null}