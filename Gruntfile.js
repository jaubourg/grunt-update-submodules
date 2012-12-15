"use strict";

module.exports = function(grunt) {

	grunt.initConfig({
		jshint: {
			files: [ "Gruntfile.js", "tasks/**/*.js" ],
			options: {
				jshintrc: ".jshintrc"
			}
		}
	});

	// Default task.
	grunt.registerTask("default", "jshint");
	grunt.loadNpmTasks("grunt-contrib-jshint");
	grunt.loadTasks("tasks");
};
