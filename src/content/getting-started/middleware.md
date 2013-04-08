#Haggerston Middleware

A central feature of Haggerston is the concept of middleware. Loosely modelled off the same concept in [Connect](http://www.senchalabs.org/connect/) the idea is to allow you to easily pick and choose the elements of the rendering pipeline that you want for your application.

Haggerston ships with what we feel is a sensible selection of middleware but you are free to write your own or to disable some of the default middleware.

##Default middleware

Haggerston ships with a set of [default middleware](https://github.com/haggerstonjs/grunt-haggerston/tree/master/tasks/lib/middleware) which is enabled in this order:

 * **json** - Searches for any nodes matching `*.json` and replaces them with the contents of the referenced `json` file.
 * **markdown** - Searches for any nodes matching `*.md` and replaces them with the contents of the referenced [Markdown](http://en.wikipedia.org/wiki/Markdown) file rendered with [marked](https://github.com/chjj/marked)
 * **generate** - Sometimes you want to dynamically generate pages containing links to all content tagged with a certain tag or placed in a certain category. This middleware allows you to do this.
 * **render** - Uses swig to render the referenced template and content for a page down to a HTML string (stored on the `.renderedTemplate` property of the page).
 * **include** - Allows you to reference other files (or lines from other files) and embed them into a page.
 * **highlight** - Uses [highlight.js](http://softwaremaniacs.org/soft/highlight/en/) to highlight any sourcecode on your website.

##Custom middleware

A piece of middleware is essentially a function. Here is an example as a node module:

    var _ = require('underscore');
    
    module.exports = function() {
      'use strict';
    
      // All middleware must return a function with this signature
      return function (pages, next, options) {
      
        // Loop over all of the generated pages
        _(pages).each(function(page, i) {
          // Update page in some manner
        });
        
        // Inform Haggerston that you have finished transforming pages and the 
        // next middleware can take over
        next(pages);
      };
    };

As you can see, the middleware is called with three arguments:

 * **pages** - An array of [Page](https://github.com/haggerstonjs/grunt-haggerston/blob/master/tasks/lib/page.js) objects as created by the preceeding middlewares.
 * **next** - A callback function which should be passed an altered array of pages when the middleware is complete (middleware can act asynchronously)
 * **options** - A hash of options (as passed in via the [grunt configuration](configuring.html))
 
A middleware can transform existing pages or add new pages. The default middleware should give some idea of what is possible but is only a starting point with some sensible defaults.