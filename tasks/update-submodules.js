"use strict";

module.exports = function( grunt ) {
	grunt.registerTask( "update_submodules", function() {
		var done = this.async();
		grunt.verbose.writeln( "Updating submodules..." );
		grunt.util.spawn({
			cmd: "git",
			args: [ "submodule" ]
		}, function( error, result ) {
			if ( error ) {
				grunt.verbose.error( error );
				done( error );
				return;
			}
			var args = "submodule update --init --recursive" +
					( /(?:^|\n)-/.test( result.stdout ) ? "" : " --merge" );
			grunt.verbose.writeln( "git " + args );
			grunt.util.spawn({
				cmd: "git",
				args: args.split(" ")
			}, function( error ) {
				if ( error ) {
					grunt.verbose.error( error );
					done( error );
					return;
				}
				done();
			});
		});
	});
};
