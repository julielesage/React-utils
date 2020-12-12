const sayNumber = (num: number): string => {
  return num.toString();
}

const sayWord = (word?: string): string => {
  return word || "hello";
}

//default param
const sayTruc = (parent: string = "maman"): string => {
  return parent || "mom";
}

//rest params
const sayMachin = (mot: string, ...rest: [string, number]): string => {
  console.log(rest); // = ["yo", 12]
  return mot + rest[0];
}
sayMachin("steven", "yo", 12);

//union types
let score: number | string = 0;
score = "1"; //ca passe

const renderAge = (age: string | number): string => {
  return "${age} ans";
}
console.log(renderAge(31)); //31 ans : ca passe

//INTERFACES ET TYPE ALIAS
//attention en parametre d'une fonction si optionnal ca doit etre à la fin
// avec type alias on peut computer (??)
type User = {
  firstname?: string | undefined,
  lastname: string
}
// avec interface on peut "extend" ou merger, et VSC informe sur l'interface avec la souris
interface User2 {
  firstname?: string,
  lastname: string
}
const renderString = ({ firstname, lastname }: User): string => {
  return `hello ${firstname} ${lastname}`;
}

const renderUser2 = ({ firstname, lastname }: User2): User => {
  return { firstname, lastname };
}
renderUser2({ lastname: "persia" });

export default renderUser2;