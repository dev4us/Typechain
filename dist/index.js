"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CryptoJS = require("crypto-js");
class Block {
    constructor(index, hash, previousHash, data, timestamp) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}
Block.calculateBlockHash = (index, previousHash, timestamp, data) => CryptoJS.SHA256(index + previousHash + timestamp + data).toString();
const genesisBlock = new Block(0, "1010101010", "", "Hello", 123456);
let blockchain = [genesisBlock];
const getBlockchain = () => blockchain;
const getLastestBlcok = () => blockchain[blockchain.length - 1];
const getNewTimeStamp = () => Math.round(new Date().getTime() / 10000);
console.log(blockchain);
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
//# sourceMappingURL=index.js.map