import * as CryptoJS from "crypto-js";

class Block {
    public index: number;
    public hash: string;
    public previousHash: string;
    public data: string;
    public timestamp: number;

    static calculateBlockHash = (index: number, previousHash: string, timestamp: number, data: string): string => 
        CryptoJS.SHA256(index + previousHash + timestamp + data).toString();
    

    constructor(
        index: number,
        hash: string,
        previousHash: string,
        data: string,
        timestamp: number
    ){
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}

const genesisBlock: Block = new Block(0, "1010101010", "", "Hello", 123456);

let blockchain: Block[] = [genesisBlock];

const getBlockchain = () : Block[] => blockchain;

const getLastestBlcok = (): Block => blockchain[blockchain.length - 1];

const getNewTimeStamp = (): number => Math.round(new Date().getTime() / 10000);

console.log(blockchain);

export {};





/* 
practice for Typescript

learn for class on typeScript 
class Human {
    public name: string;
    public age: number;
    public gender: string;

    constructor(name: string, age: number, gender?: string){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

const batGirl = new Human("batGirl", 18, "female");

const sayHi = (person: Human): string => {
    return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender} !`;
}

console.log(sayHi(batGirl));

export {};


/* 
/* learn for interface
interface Human {
    name:string;
    age:number;
    gender: string;
}

const person = {
    name: "dev4us",
    gender: "male",
    age: 26
};

const sayHi = (person: Human): string => {
    return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender} !`;
}

console.log(sayHi(person));

export {};
*/