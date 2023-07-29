/*
Each resistor has a resistance value.
Resistors are small - so small in fact that if you printed the resistance value on them, it would be hard to read.
To get around this problem, manufacturers print color-coded bands onto the resistors to denote their resistance values. 
Each band has a position and a numeric value.

The first 2 bands of a resistor have a simple encoding scheme: each color maps to a single number. 
For example, if they printed a brown band (value 1) followed by a green band (value 5), it would translate to the number 15.

In this exercise you are going to create a helpful program so that you don't have to remember the values of the bands. 
The program will take color names as input and output a two digit number, even if the input is more than two colors!

The band colors are encoded as follows:

Black: 0
Brown: 1
Red: 2
Orange: 3
Yellow: 4
Green: 5
Blue: 6
Violet: 7
Grey: 8
White: 9
From the example above: brown-green should return 15 brown-green-violet should return 15 too, ignoring the third color.
*/
export function decodedValue(colours: string[]) : number {

    function getColourValue (colour : string) : string {
        switch(colour.toLowerCase()) {
            case 'black': return '0';
            case 'brown': return '1';
            case 'red': return '2';
            case 'orange': return '3';
            case 'yellow': return '4';
            case 'green': return '5';
            case 'blue': return '6';
            case 'violet': return '7';
            case 'grey': return '8';
            case 'white': return '9';
            default: return '0';
        }
    }

    //we only want the first 2 colours (no reason to iterate over, just going to index into it)
    const firstColour = getColourValue(colours[0]);
    const secondColour = getColourValue(colours[1]);
    return Number(firstColour + secondColour);
}