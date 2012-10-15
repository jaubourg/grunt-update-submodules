module.exports = function(grunt) {


  // Project configuration.
  grunt.initConfig({
    pkg: "<json:package.json>",
    lint: {
      files: [ "grunt.js", "tasks/**/*.js" ]
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        node: true,
        es5: true
      },
      globals: {}
    }
  });

  // Default task.
  grunt.registerTask("default", "lint");

};
