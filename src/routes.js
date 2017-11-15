export default routesConfig;

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider,$translateProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('app', {
      url: '/',
      component: 'app'
    })
    .state('test01', {
      url: '/test01',
      component: 'test01'
    })
    .state('test02', {
      url: '/test02',
      component: 'test02'
    });
	//ANgular translations - More translations can be added if needed
	var eng_translations = {
		"tooltipData":"More Information"
	}
	var fre_translations = {
		"tooltipData":"Plus d'information"
	}
	$translateProvider.translations("en",eng_translations);
	$translateProvider.translations("fr",fre_translations);
	$translateProvider.preferredLanguage('en');
}
