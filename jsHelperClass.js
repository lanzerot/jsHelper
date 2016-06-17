/**
 * Created by Leandro on 17/06/2016.
 */
class jsHelper{

    /**
     * This initialize all functions that we add to the prototypes
     */
    static init(){
        //@todo hacer que compruebe si todas estas funciones estan cargadas y si no lo estan que no las cargue. Asi puedo incluir esta funcion en todas las demas y no hay necesidad de llamarla fuera de la clase
        /**
         * It replaces all occurrences of a string
         * @param string is the variable that you want to modify
         * @param search is what you want to search and replace
         * @param subject is the new value for each occurrence found
         * @param count is the times that you want to replace.If you dont specify this params or its values is less than 0 the function will replace all occurrences
         * @returns string
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
        };

        /**
         *
         * @param arr is the array that you want to check
         * @param searchedElement the element what you are looking for in the array
         * @returns {boolean}
         */
        Array.prototype.in_array = function(searchedElement){
            return this.indexOf(searchedElement) != -1
        };

        /**
         * @param arr is the array that you want to check
         * @returns true if the array is empty or false if it has date
         */
        Array.prototype.empty = function(){
            return this.length == 0 ;
        };

        jsHelper.loadPrototypes = true;
    }

    /**
     * It checks if the variable is not null or undefined
     * @param myVar is the var that you want to check
     * @returns {boolean}
     */
    static isset(myVar){
        return myVar !== undefined && myVar !== null;
    }

    //@todo meter esto en los prototipos
    /**
     * @param myStr is the string that you will evaluate
     * @returns {boolean}
     */
    static empty(myStr){
        return myStr.length == 0;
    }

    /**
     * This function call to another function by name
     * @param functionName is the name of the function
     * @param args is an array with the arguments of your function. If you do not have arguments, do not pass this param
     */
    static callFunctionByName(functionName, args){
        try{
            if(jsHelper.isset(args) && !args.empty()){
                window[functionName].apply(null,args);
            }else{
                window[functionName]();
            }
        }catch(e){
            console.log(e);
        }
    }

    static isObject(element){
        return typeof (element) == "object";
    }

    static isString(element){
        return typeof (element) == "string";
    }
}
// *****************************************
jsHelper.init();


var test = "d";
function saludo(primero,segundo){
    alert(primero+" -------------------------  "+segundo);
}
var arr = ["dsds",2,123,4,"ei"];

var obj = {
    name: function(){alert()}
};

if(jsHelper.isString(test)){
    console.log("dsadasdasd");
}

