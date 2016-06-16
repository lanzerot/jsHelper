/**
 * Created by Leandro on 13/06/2016.
 */
/**
 * It replaces all occurrences of a string
 * @param string is the variable that you want to modify
 * @param search is what you want to search and replace
 * @param subject is the new value for each occurrence found
 * @param count is the times that you want to replace.If you dont specify this params or its values is less than 0 the function will replace all occurrences
 * @returns string
 */
function strReplaceAll(string, search, subject, count){
    var result = string;
    var loops = isset(count) && count > 0 ? count : result.length;
    for(var i = 0;i<loops;i++){
        if(result.indexOf(search) != -1){
            result = result.replace(search, subject);
        }else{
            break;
        }
    }
    return result;
}

/**
 * It checks if the variable is not null or undefined
 * @param myVar is the var that you want to check
 * @returns {boolean}
 */
function isset(myVar){
    return myVar !== undefined && myVar !== null;
}

/**
 * @param myStr is the string that you will evaluate
 * @returns {boolean}
 */
function empty(myStr){
    return myStr.length == 0;
}

/**
 * @param arr is the array that you want to check
 * @returns true if the array is empty or false if it has date
 */
function arrEmpty(arr){
    return arr.length == 0 ;
}


/**
 *
 * @param arr is the array that you want to check
 * @param searchedElement the element what you are looking for in the array
 * @returns {boolean}
 */
function in_array(arr, searchedElement){
    return arr.indexOf(searchedElement) != -1
}

//todo hacer que esta funcion acept parametros:
// http://stackoverflow.com/questions/359788/how-to-execute-a-javascript-function-when-i-have-its-name-as-a-string
function callFunction(functionName, args){
    var args1 = Array.prototype.slice.call(args, 2);
    console.log("Pillar argumentos   ",Array.prototype);
    try{
        if(isset(args) && !arrEmpty(args)){
            window[functionName](args);
        }else{
            window[functionName]();
        }
    }catch(e){
        console.log(e);
    }
}

/************************************************/

function show(elementoEliminado,mensaje){
    console.log(elementoEliminado+"  y el mensaje es: "+mensaje);
}

function hola(){
    console.log("Say hello");
}

var arr1 = ['asdasda',12,"aleod",-1];
var arr2 = [];
var leo = " ";

//callFunction("show",['elemento1', 'elemento2']);
/*console.log(Array.prototype);
console.log(String.prototype);
console.log(arr1.entries().next());
*/

String.prototype.strReplaceAll = function(search, subject, count){
    var result = this.valueOf();
    var loops = isset(count) && count > 0 ? count : result.length;
    for(var i = 0;i<loops;i++){
        if(result.indexOf(search) != -1){
            result = result.replace(search, subject);
        }else{
            break;
        }
    }
    return result;
    //console.log(this.valueOf());
};

var testString = "blabla dsdad asdasdc asfasdas";
console.log("blabla dsdad asdasdc asfasdas".strReplaceAll(" ",""));
