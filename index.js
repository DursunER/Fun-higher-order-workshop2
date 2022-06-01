const hof = {};

hof.identity = function (arg) {
return arg
};

hof.identityF = function (arg) {

    function innerFun() {
        return arg
    }

return innerFun

};

hof.add = function(arg1, arg2) {
    return arg1 + arg2;
}
   
hof.subtract = function(arg1, arg2) {
    return arg1 - arg2;
}

hof.multiply = function(arg1, arg2) {
    return arg1 * arg2
};

hof.increment = function(arg1) {

    return arg1 + 1;
      
};

hof.addF = function (num1) {

   return function (num2) {
        return num1 + num2;
    }
    
};

hof.curry = function (myFun, arg1) {

    function innerFun (arg2) {

        return myFun(arg1, arg2) 

    }
    
return innerFun

}; 

hof.liftF = function (myFun) {

     function innerFun1 (a) {
         return function innerFun2 (b)  {
             return myFun (a,b)
         }
     }
    

    return innerFun1
};

hof.twice = function (myFun) {

    function InnerFun (arg) {
        return myFun(arg,arg)
        }
    return InnerFun
};

hof.composeU = function ( UFun1, UFun2) {

    function innerFun (arg) {
        const resultFun1 = UFun1(arg)
         return UFun2(resultFun1)   
    }
    return innerFun;
};

hof.composeB = function (bFun1, bFun2) {

    function innerFun (arg1,arg2,arg3) {
        const resultFun1 = bFun1(arg1,arg2)
        return bFun2(resultFun1,arg3)
    }
    return innerFun;

};

hof.limit = function (bFun, x) {

    function innerFun (a,b) {
        return bFun(a,b)
    }
    return innerFun
};

hof.from = function () {};

hof.to = function () {};

hof.fromTo = function () {};

hof.element = function () {};

hof.collect = function () {};

hof.filter = function () {};

hof.concat = function () {};

hof.fibonacciF = function () {};

hof.genSymF = function () {};

hof.genSymFF = function () {};

hof.counter = function () {};

hof.revokable = function () {};

module.exports = hof;
