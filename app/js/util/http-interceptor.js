var app = angular.module( 'app' );
app.factory( 'SessionInjector', [ '$q', 'localStorageService', 'Constants',
  function( $q, localStorageService, Constants ) {
    var sessionInjector = {
      request: function( config ) {
        if ( localStorageService.get( Constants.AUTH_TOKEN_KEY ) && ( config.url.indexOf( 'facebook.com' ) == -
            1 ) && ( config.url.indexOf( 'maps.googleapis.com' ) == -1 ) ) {
          config.headers[ Constants.AUTH_TOKEN_KEY ] = localStorageService.get( Constants.AUTH_TOKEN_KEY );
        } else {
          if ( ( config.url.indexOf( 'maps.googleapis.com' ) > -1 ) || ( config.url.indexOf( 'facebook.com' ) >
              -1 ) ) {
            config.headers = [];
          }
        }
        return config;
      }
    };
    return sessionInjector;
  }
] );
app.factory( 'ResponseInterceptor', [ '$q', '$injector',
  function( $q, $injector ) {
    return {
      response: function( response ) {
        // do something on success
        return response;
      },
      responseError: function( response ) {
        // do something on error
        var status = response.status;
        if ( status === 401 || status === 403 ) {
          $injector.get( '$state' ).go( 'login' );
        }
        return $q.reject( response );
      }
    };
  }
] );
