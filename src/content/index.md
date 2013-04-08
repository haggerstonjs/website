#HaggerstonJS


HaggerstonJS is a simple static site generator built on top of [grunt](http://gruntjs.com/) - "the awesome
JavaScript task runner".

Deliberately simple and non-prescriptive it will convert [swig](http://paularmstrong.github.com/swig/) templates and
[markdown](http://daringfireball.net/projects/markdown/) content into static HTML websites by passing them through a variety of [middleware](getting-started/middleware.html).

##How it works

HaggerstonJS will search through a `content` directory looking for metadata contained in `json` files. It will use this metadata to generate HTML pages for your website. At it's simplest each `json` file will result in a HTML file.

Each page is built from a [swig](http://paularmstrong.github.com/swig/) template. Because of the awesome [template inheritance](http://paularmstrong.github.io/swig/docs/#inheritance) in swig you can...