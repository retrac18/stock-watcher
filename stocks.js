'use strict';

var request = require( 'request' );

module.exports = {
	getAllStocks: function ( reply ) {
		request( 'http://phisix-api.appspot.com/stocks.json', function ( error, response, body ) {
			if ( !error && response.statusCode === 200 ) {
				reply( body );
			} else {
				reply( error );
			}
		} );
	}
};