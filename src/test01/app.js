export const test01 = {
    template: require('./app.html'),
    controller($http,$log,$scope,$translate) {
		$scope.buttonArray = [{ "text": "Switch to TD" }]; //For one button
		$scope.to_locale = 'fr';

        // $http service to load the data file
		$http.get('./test01/data.json').then(
			function(response){ /*  Success method*/
						
			$scope.buttonArray = response.data; //Assign it to scope variable to access it from view
			if($scope.buttonArray.length >1){
				$scope.moreButtons = true;
			}
			else{
				$scope.moreButtons = false;
			}
			
			//$log.log($scope.buttonArray);
			
		},function(response){ /* Failure Method if the data file can't be loaded */
			$log.log('Failed to load data',response); //Log the failure response
			$scope.moreButtons = false;
		}
			);
			/*
			 *Method to change the Locale
			 */
			$scope.changeLocale = function(language){
				$log.log("locale is changed",language);
				if(language == 'fr'){
					$scope.to_locale = 'en';
				}
				else{
					$scope.to_locale = 'fr';
				}
				$translate.use(language);
			}

    }
};
/*
angular
  .module('app',[])
  .directive('equalheight', function(){
	  return {
		  restrict:'E',
		  scope: {
			},					
			compile:function(element,attributes,$log){
				$log.log('element...',element);
				  element.css("background-color","red");
				  var linkFn = function(element,attributes){
					  $log.log('link element');
				  }
				  return linkFn;
			}
		  
	  };
  });*/

