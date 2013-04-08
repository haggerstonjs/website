#Installing Haggerston

Before installing Haggerston you will need to install `grunt-cli` globally (version 4.0+) - find out how on [the GruntJS website](http://gruntjs.com/getting-started). Once you have done this there are a number of ways that you can install Haggerston:

##Using `grunt-init` to scaffold a new Haggerston project

If you are starting a new Haggerston project then you can use `grunt-init` to set up a new project. First install `grunt-init` as described on [the GruntJS website](http://gruntjs.com/project-scaffolding). Then install the `grunt-init-haggerston` template:

	git clone git@github.com:haggerstonjs/grunt-init-haggerston.git ~/.grunt-init/haggerston

Once you have done this you can scaffold a project like so:

	cd /path/to/new/directory
	grunt-init haggerston

You will be prompted to answer some questions and the initial files necessary for your project will be created for you.

##Via the `package.json` in your already existing grunt project

If you already have a `grunt` based project set up you can easily add a reference to your `package.json` in the `dependencies` section:

	
	"dependencies": {
	    "grunt": "~0.4.0",
		"grunt-haggerston": "git://github.com/gruntjs/grunt-haggerston.git"
	}

Then a quick `npm install` will download and install the latest Haggerston.

##Via npm into an already existing grunt project

If you already have a `grunt` based project set up you can use `npm` to install the latest version of haggerston.

	npm install git://github.com/gruntjs/grunt-haggerston.git

Optionally use the `--save` flag so that your `package.json` is updated with the dependency on Haggerston.