"use strict";

const {MarkovMachine} = require("./markov");

describe("getChains", function() {
    let d;
    
    beforeEach(function(){
        d = new MarkovMachine("egg duck goose apple egg banana");
    });
    
    test("See if has null at end", function(){
        const dchain = d.getChains();

        expect(dchain["banana"][0]).toEqual(null);
    });

    test("See if it has correct amount of keys", function(){
        const dchain = d.getChains();

        expect(Object.keys(dchain).length).toEqual(5);
    })
});




  