#Haggerston Metadata

The `.json` files which describe Haggerston pages contain a number of different properties. Some of these properties are treated specially by Haggerston and some are treated specially by certain [middleware](middleware.html). 

Here is a brief overview of those properties:

 * **template** - The name of the swig template to use when rendering this page (relative to the `templatesPath` passed in to Haggerston)
 * **templateData** - This object is passed in to the template when it is rendered. You can define any properties that might be useful for your template
 * **extension** - The extension of the generated page. The filename of the generated page will be the same as the filename of the json metadata and the extenstion will default to `.html`. If you set an extension you can render e.g. an `.xml` or `.txt` file instead.