import { franc } from "franc";
import langs from "langs";
import colors from "colors";
const [, , userInput] = process.argv; 
const res = franc(userInput);
if(res !== "und"){
    const languageName = langs.where("3", res).name; 
    console.log(`I guess, it is ${languageName}`);
} else {
    console.log(colors.red("Can not detect your language, sorry"));
}
