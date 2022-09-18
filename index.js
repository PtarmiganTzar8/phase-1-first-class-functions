function receivesAFunction(callback) {
    return callback();
}

function returnsANamedFunction(){
    return function thing(){}
}

function returnsAnAnonymousFunction(){
    return function (){}
}