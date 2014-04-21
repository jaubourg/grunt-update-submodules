# grunt-update-submodules

Updates git submodules

## Getting Started

Add to `Gruntfile.js`:
```javascript
task.loadNpmTasks( "grunt-update-submodules" );
```

Install and add to dependencies:
```
npm install grunt-update-submodules --save-dev
```

Use `update_submodules` and initialize it:
###Basic Initialization
```javascript
grunt.initConfig({
	"update_submodules": {
		default: {
			options: {
				// don't specify a gitArgs so the default arguments will be used: git submodule update --init --recursive
			}
		}
	}
});
```

###Custom/Blank Arguments
You can have your own custom `git submodule update` arguments by defining the `gitArgs` option in your task target.
e.g.
```javascript
grunt.initConfig({
	"update_submodules": {
		withCustomArgs: {
			options: {
				gitArgs: "--force" // specify your own git arguments
			}
		},
		withBlankArgs: {
			options: {
				gitArgs: null // using null or '' will result to blank git arguments
			}
		}
	}
});
```

## License
Copyright (c) 2012 - 2014 Julian Aubourg <j@ubourg.net>
Licensed under the MIT license.
