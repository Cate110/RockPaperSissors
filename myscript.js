const options = ['rock', 'paper', 'sissors'];

function computerPlay (){
    return options[~~(Math.random() * options.length)];
}