angular.module('app').service('AppUtils', [
    function() {
        var _this = this;
       /* _this.showSuccessToast = function(message) {
            $mdToast.show(
                $mdToast.simple()
                .textContent(message)
                .hideDelay(5000)
                .position('top right')
                );
        };
        _this.showFailureToast = function(message) {
            // An unexpected error occured. Please contact support if the problem persist
            $mdToast.show(
                $mdToast.simple()
                .theme('error-toast')
                .textContent(message)
                .hideDelay(5000)
                .position('top right')
                );
        };

        _this.setInDataLocalStorage = function(key, value) {
            localStorageService.set(key, value);
        };

        _this.getFromLocalStorage = function(key) {
            localStorageService.get(key);
        };

        _this.removeFromLocalStorage = function(key) {
            localStorageService.remove(key);
        };
*/
        _this.removeFromArrayByField = function(array,fieldName,value){
           for(var i=0;i<array.length; i++){
            console.log("array,fieldName,value",array[i],fieldName,value);
            if(array[i][fieldName] == value[fieldName]){
                array.splice(i,1);
            }
        }
        return array;
    };
}
    ]);

