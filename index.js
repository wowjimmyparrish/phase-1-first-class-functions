function receivesAFunction(cb){
    cb()
}
function returnsANamedFunction(){
    const innerFunction = () => { 
        console.log('hello')
    }
    return innerFunction
}
function returnsAnAnonymousFunction(){
    return function(){
        
    }
}