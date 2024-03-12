//task 42
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    }
}
function make_great(magician) {
    for (var i = 0; i < magician.length; i++) //i stand for index string
     {
        magician[i] = magician[i] + '   the great';
    }
}
var magician2 = ["Ali", "hamza", "bilal"];
//make_great(magician2);
//show_magicians(magician2);
//task 43
function make_great2(magician) {
    var greatmagician = [];
    for (var i = 0; i < magician.length; i++) {
        greatmagician.push(magician[i] + ' the great');
    }
    return greatmagician;
}
var magician3 = ["ali", "hamza", "bilal"];
var greatmagician2 = make_great2(magician3);
show_magicians(magician3);
show_magicians(greatmagician2);
