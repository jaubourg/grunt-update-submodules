"use strict";

module.exports = function( grunt ) {

	var lintTargets = [ "Gruntfile.js", "lib/**/*.js", "tasks/**/*.js", "test/**/*.js" ];

	grunt.initConfig( {
		jscs: {
			files: lintTargets,
			options: {
				config: ".jscs.json"
			}
		},
		jshint: {
			files: lintTargets,
			options: {
				jshintrc: ".jshint.json"
			}
		},
		nodeunit: {
			tests: [ "test/*.js" ]
		}
	} );

	// load npm modules
	require( "load-grunt-tasks" )( grunt );

	// Tasks
	grunt.registerTask( "lint", [ "jscs", "jshint" ] );
	grunt.registerTask( "default", [ "lint", "nodeunit" ] );

};
