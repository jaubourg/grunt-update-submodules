"use strict";

module.exports = function( grunt ) {

	grunt.initConfig({
		"update_submodules": {
			default: {
				options: {
					// gitArgs: undefined // really commented to have this undefined
				}
			},
			withCustomArgs: {
				options: {
					gitArgs: "--force"
				}
			},
			withBlankArgs: {
				options: {
					gitArgs: null
				}
			}
		}
	});

	// Load tasks
	grunt.loadTasks( "../../tasks" );

	grunt.registerTask( "default", "update_submodules" );
	grunt.registerTask( "withArgs", "update_submodules:withCustomArgs" );
	grunt.registerTask( "blankArgs", "update_submodules:withBlankArgs" );
};
