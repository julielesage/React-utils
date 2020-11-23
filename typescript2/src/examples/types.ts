const isOnLine: boolean = false;
const firstname: string = "steven";
const age: number = 4;
//let big: bigint = 100n; // = long

const arr: string[] = ["a", "b", "c"];
let list: Array<number> = [1, 2, 3];
// tuple triple, toujours dans le bon ordre 
const arr2: [string, number, boolean] = ["ste", 6, true];

const something: any = 'Twitch';
//void pour une fonction qui ne retourne rien

enum Color {
  Red = 1,
  Green,
  Blue,
}
//ici on peut changer le départ de calcul d'enum à 1 au lieu de 0
let colorName: string = Color[2];

declare const maybe: unknown;
// 'maybe' could be a string, object, boolean, undefined, or other types
//WRONG : const aNumber: number = maybe;
//Type 'unknown' is not assignable to type 'number'.

if (maybe === true) {
  // TypeScript knows that maybe is a boolean now
  const aBoolean: boolean = maybe;
  // So, it cannot be a string
  // WRONG : const aString: string = maybe;
  //Type 'boolean' is not assignable to type 'string'.
}
if (typeof maybe === "string") {
  // TypeScript knows that maybe is a string
  const aString: string = maybe;
  // So, it cannot be a boolean
  // WRONG :const aBoolean: boolean = maybe;
  //Type 'string' is not assignable to type 'boolean'.
}

function warnUser(): void {
  console.log("This is my warning message");
}

let u: undefined = undefined;
let n: null = null;

function error(message: string): never {
  throw new Error(message);
}

declare function create(o: object | null): void;
//mais on utilise pas "object" on le décrit en type ou interface

let someValue: unknown = "this is a string";
let strLength: number = (someValue as string).length;

export default someValue;
