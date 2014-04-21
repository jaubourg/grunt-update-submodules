"use strict";

module.exports = {

	name: "update_submodules",

	display: "Updating submodules",

	run: function( runner, options ) {

		runner.exec( "git submodule", function( result ) {
			var merge =  /(?:^|\n)-/.test( result.stdout ) ? "" : " --merge";
			var gitArgs = options.hasOwnProperty( "gitArgs" ) ? options.gitArgs || "" : "--init --recursive" + merge;
			var command = "git submodule update " + gitArgs;
			runner.exec( command.trim(), runner.ok );
		} );

	}

};
