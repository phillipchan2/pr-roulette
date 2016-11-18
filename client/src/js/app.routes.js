prroulette.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

	$urlRouterProvider.otherwise('/');

	$locationProvider.html5Mode({
        enabled: false,
        requireBase: false
    });

	$stateProvider
		.state('dashboard', {
			url: '/dashboard',
			templateUrl: 'src/js/components/dashboard/dashboard.html'
		})

		.state('login', {
			url: '/login',
			templateUrl: 'src/js/components/authentication/login.html',
			params: {
				prevPage: null
			}
		})

		.state('registration', {
			url: '/registration',
			templateUrl: 'src/js/components/authentication/registration.html'
		})

		.state('public', {
			url: '/public/:id/:email',
			templateUrl: 'src/js/components/publicListPage/publicListPage.view.html'
		})

		.state('requests', {
			url: '/requests',
			templateUrl: 'src/js/components/requestLists/requestLists.view.html'
		})

		.state('request', {
			url: '/request/:id',
			templateUrl: 'src/js/components/request/request.view.html'
		})

			.state('request.main', {
				url: '/main',
				templateUrl: 'src/js/components/request/main/main.view.html'
			})

			.state('request.settings', {
				url: '/settings',
				templateUrl: 'src/js/components/request/settings/settings.view.html'
			})

			.state('request.criteria', {
				url: '/criteria',
				templateUrl: 'src/js/components/request/criteria/criteria.view.html'
			})

			.state('request.subscribers', {
				url: '/subscribers',
				templateUrl: 'src/js/components/request/subscribers/subscribers.view.html'
			})

		.state('settings', {
			url: '/settings',
			templateUrl: 'src/js/components/settings/settings.view.html'
		})

		.state('404', {
			url: '/404',
			templateUrl: 'src/js/components/authentication/404.html'
		})
});
