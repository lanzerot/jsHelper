/**
 * @author : Leandro Otero
 * @email: leandro.ola@gmail.com
 */
class jsHelper{

    /**
     * This initialize all functions that we add to the prototypes
     */
    static init(){
        // This check allows to know if the functions of prototypes are loaded
        if(!String.prototype.strReplaceAll){
            /**
             * It replaces all occurrences of a string
             * @param search is what you want to search and replace
             * @param subject is the new value for each occurrence found
             * @param count is the times that you want to replace.If you dont specify this params or its values is less than 0 the function will replace all occurrences
             * @returns string
             */
            String.prototype.strReplaceAll = function(search, subject, count){
                let result = this.valueOf();
                let loops = jsHelper.isset(count) && count > 0 ? count : result.length;
                for(let i = 0;i<loops;i++){
                    if(result.indexOf(search) != -1){
                        result = result.replace(search, subject);
                    }else{
                        break;
                    }
                }
                return result;
            };

            /**
             * It deletes all white spaces
             * @returns the string without white spaces
             */
            String.prototype.fullTrim = function(){
                return this.valueOf().strReplaceAll(" ","");
            };

            /**
             * @param myStr is the string that you will evaluate
             * @returns {boolean}
             */
            String.prototype.empty = function(){
                return this.valueOf().length == 0;
            };

            /**
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

            /**
             * This function give you the option to use getOwnPropertyNames directly as a function of any object
             * @returns {Array}
             */
            Object.prototype.getPropertiesName = function(){
                return Object.getOwnPropertyNames(this.valueOf());
            }
        }
    }

    /**
     * It checks if the variable is not null or undefined
     * @param myVar is the var that you want to check
     * @returns {boolean}
     */
    static isset(myVar){
        jsHelper.init();
        return myVar !== undefined && myVar !== null;
    }

    /**
     * This function call to another function by name
     * @param functionName is the name of the function
     * @param args is an array with the arguments of your function. If you do not have arguments, do not pass this param
     */
    static callFunctionByName(functionName, args){
        try{
            jsHelper.init();
            if(jsHelper.isset(args) && !args.empty()){
                window[functionName].apply(null,args);
            }else{
                window[functionName]();
            }
        }catch(e){
            console.log(e);
        }
    }

    /**
     * @param element: is the object that you want to check 
     * @returns {boolean}
     */
    static isObject(element){
        jsHelper.init();
        return typeof (element) == "object";
    }

    /**
     * @param element: is the string that you want to check
     * @returns {boolean}
     */
    static isString(element){
        jsHelper.init();
        return typeof (element) == "string";
    }

    /**
     * This method create dom element with the properties thn you specify and in the element that you want
     * @param newElement is and object that can contain 3 properties: name: name of element, text: the text that you want to show in the element and attrs: a object with the list of attributes of the element
     * @param container is the name of the container of the element that you are going to create
     */
    static createDOMElement(newElement,container){

        jsHelper.init();
        let element = document.createElement(newElement.name);
        let parentContainer = document.getElementById(container);

        if(jsHelper.isset(newElement.text)){
            element.appendChild(document.createTextNode(newElement.text));
        }

        if(jsHelper.isset(newElement.attrs) && !newElement.attrs.getPropertiesName().empty()){
            let properties = Object.getOwnPropertyNames(newElement.attrs);
            properties.forEach(function(prop){
                element.setAttribute(prop, newElement.attrs[prop]);
            });
        }

        if(jsHelper.isset(parentContainer)){
            parentContainer.appendChild(element);
        }
    }
}