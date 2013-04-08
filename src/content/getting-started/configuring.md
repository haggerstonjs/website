#Configuring Haggerston

Once you have [installed](installing.html) Haggerston you can configure it in your `Gruntfile.js`. There are a limited number of configuration options you can pass in when you initialise Haggerston:

 * **src** - The folder where all source files will be found. Defaults to `src/`.
 * **dest** - The folder where the generated HTML will be placed. Defaults to `out/`.
 * **contentPath** - The folder that will be scanned for `.json` files describing the site content. Defaults to `[src]/content` where `[src]` is as defined above.
 * **templatesPath** - The folder containing the [swig](http://paularmstrong.github.io/swig/) templates used to render your site. Defaults to `[src]/templates` where `[src]` is as defined above.
 * **middleware** - An array of the [middleware](middleware.html) that will be used to process the source files into HTML. Defaults to those defined in [lib/middleware/default](https://github.com/haggerstonjs/grunt-haggerston/blob/master/tasks/lib/middleware/default.js).
 * **swigFilters** - Any [filters](http://paularmstrong.github.io/swig/docs/#filters) you want to pass through to Swig for use in your templates.
 * **swigTags** - Any [tags](http://paularmstrong.github.io/swig/docs/#tags) you want to pass through to Swig for use in your templates.
 * **swigExtensions** - Any [third party extensions](http://paularmstrong.github.io/swig/docs/#tags-custom) you want to pass through to Swig for use in your templates.