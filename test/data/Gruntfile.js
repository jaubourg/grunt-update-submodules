"use strict";

module.exports = function( grunt ) {

	grunt.initConfig({
		"update_submodules": {
			default: {
				options: {
					// default command line parameters will be used: --init --recursive
				}
			},
			withCustomParameters: {
				options: {
					params: "--force" // specifies your own command-line parameters
				}
			},
			withNoParameter: {
				options: {
					params: false // blanks command-line parameters
				}
			}
		}
	});

	// Load tasks
	grunt.loadTasks( "../../tasks" );

	grunt.registerTask( "default", "update_submodules" );
	grunt.registerTask( "withCustomParameters", "update_submodules:withCustomParameters" );
	grunt.registerTask( "withNoParameter", "update_submodules:withNoParameter" );
};
