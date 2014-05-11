[![NPM](https://nodei.co/npm/grunt-update-submodules.png?downloads=true&stars=true)](https://www.npmjs.org/package/grunt-update-submodules)

[![Build Status](https://travis-ci.org/jaubourg/grunt-update-submodules.svg?branch=master)](https://travis-ci.org/jaubourg/grunt-update-submodules) [![Dependency Status](https://gemnasium.com/jaubourg/grunt-update-submodules.svg)](https://gemnasium.com/jaubourg/grunt-update-submodules) [![Gittip](https://img.shields.io/gittip/jaubourg.svg)](https://www.gittip.com/jaubourg/)

# grunt-update-submodules

[Grunt](http://gruntjs.com/) task to update git submodules.

## Installing

Install and add to dependencies.
```sh
npm install grunt-update-submodules --save-dev
```

Load the task in `Gruntfile.js`.
```javascript
task.loadNpmTasks( "grunt-update-submodules" );
```

## Usage

```javascript
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
```

## License

Copyright (c) 2012 - 2014 [Julian Aubourg](mailto:j@ubourg.net)
Licensed under the [MIT license](https://raw.githubusercontent.com/jaubourg/grunt-update-submodules/master/LICENSE-MIT).
