# grunt-update-submodules
> [Grunt](http://gruntjs.com/) task to update git submodules.

[![NPM version](https://badge.fury.io/js/grunt-update-submodules.svg)](http://badge.fury.io/js/grunt-update-submodules)
[![Build Status](https://travis-ci.org/jaubourg/grunt-update-submodules.svg?branch=master)](https://travis-ci.org/jaubourg/grunt-update-submodules)
[![Dependency Status](https://david-dm.org/jaubourg/grunt-update-submodules.svg)](https://david-dm.org/jaubourg/grunt-update-submodules)
[![devDependency Status](https://david-dm.org/jaubourg/grunt-update-submodules/dev-status.svg)](https://david-dm.org/jaubourg/grunt-update-submodules#info=devDependencies)
[![Gittip](https://img.shields.io/gittip/jaubourg.svg)](https://www.gittip.com/jaubourg/)

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
