/*
Imagine a bakery that has a holiday offer where you can buy two cookies for the price of one ("two-fer one!"). 
You go for the offer and (very generously) decide to give the extra cookie to a friend. 

Your task is to determine what you will say as you give away the extra cookie.

If your friend likes cookies, and is named Do-yun, then you will say:

One for Do-yun, one for me.
*/

export function twoFer(name?: string) : string {

    if(typeof name === "string") {
        return `One for ${name}, one for me.`;   
    }
    else {
        return 'One for you, one for me.'
    }
}