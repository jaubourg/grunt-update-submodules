"use strict";

module.exports = {

	name: "update_submodules",

	display: "Updating submodules",

	run: function( runner ) {

		runner.exec( "git submodule", function( result ) {

			var merge =  /(?:^|\n)-/.test( result.stdout ) ? "" : " --merge";

			runner.exec( "git submodule update --init --recursive" + merge, runner.ok );

		} );

	}

};
