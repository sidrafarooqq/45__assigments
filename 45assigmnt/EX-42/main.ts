

 
 //task 42
 
 function show_magicians(magicians : string[]): void{
    for(const magician of magicians) {
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    }
}



function make_great(magician : string[]): void{
    for ( let i = 0; i < magician.length ; i++) //i stand for index string
    {
        magician[i] = magician[i] + '   the great'
    }
}

const magician2: string [] = ["Ali","hamza","bilal"];
//make_great(magician2);
//show_magicians(magician2);








//task 43
function make_great2(magician : string[]): string[] {
const greatmagician : string [] = [] 
for ( let i = 0; i < magician.length ; i++) {
    greatmagician.push(magician[i] + ' the great')
}
return greatmagician;
}

const magician3 : string[] = ["ali","hamza","bilal"];
const greatmagician2 : string[] = make_great2 ( magician3);
show_magicians(magician3);
show_magicians(greatmagician2);