function receivesAFunction(callback){
    return callback();
}
function returnsANamedFunction(){
    const aNamedFunction = function(){}
    return aNamedFunction;
}

function returnsAnAnonymousFunction(){
    return ()=>{}
}