module.exports = function( grunt ) {
	grunt.registerTask( "update_submodules", function() {
		var done = this.async(),
			cp = require("child_process");
		grunt.verbose.writeln( "Updating submodules..." );
		cp.exec( "git submodule", function( err, stdout, stderr ) {
			if ( err || stderr ) {
				grunt.verbose.error();
				done( err || stderr );
				return;
			}
			var cmd = "git submodule update --init --recursive" +
					( /(?:^|\n)-/.test( stdout ) ? "" : " --merge" );
			grunt.verbose.writeln( cmd );
			cp.exec( cmd, function( err, stdout, stderr ) {
				if ( err || stderr ) {
					grunt.verbose.error();
					done( err || stderr );
					return;
				}
				done();
			});
		});
	}); 
};
