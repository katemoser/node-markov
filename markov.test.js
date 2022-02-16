"use strict";

const { MarkovMachine } = require("./markov");

describe("getChains", function () {
    let d;

    beforeEach(function () {
        d = new MarkovMachine("egg duck goose apple egg banana");
    });

    test("See if has null at end", function () {
        const dchain = d.getChains();

        expect(dchain["banana"][0]).toEqual(null);
    });

    test("See if it has correct amount of keys", function () {
        const dchain = d.getChains();

        expect(Object.keys(dchain).length).toEqual(5);
    });

    test("Check 'egg' key has two elements in value array", function () {
        const dchain = d.getChains();

        expect(dchain["egg"].length).toEqual(2);
    });
});

describe("getText", function () {
    let machine;

    beforeEach(function () {
        machine = new MarkovMachine("egg duck ham egg Sam eggs duck");
    })

    test("Make sure getText() is returning a string", function () {
        let text = machine.getText();
        expect(text).toEqual(expect.any(String));
    });

    test("String with no repeats should be same as input", function() {
        machine = new MarkovMachine("egg duck ham");
        let text = machine.getText();
        expect(text).toEqual("egg duck ham");
    });

})




