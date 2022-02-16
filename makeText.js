"use strict";
/** Command-line tool to generate Markov text. */

const fsP = require("fs/promises");

const {MarkovMachine} = require("./markov");

const argv = process.argv;

/**
 * Takes a .txt file, opens and reads it
 * makes it into a Markov Machine
 * returns generated markov chain 
 */
async function getMarkovText(file){
    try{
        const contents = await fsP.readFile(file, "utf8");
        const myMachine = new MarkovMachine(contents);
        const markovText = myMachine.getText();
        console.log(markovText);
        return markovText
    } catch(err){
        console.log(`There was an error reading ${file}: ${err}`);
        process.exit(1);
    }
}

getMarkovText(argv[2]);