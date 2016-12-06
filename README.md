# ProcessPageListerUrls

Create links to specific ListerPages with predefined selector settings.

### What the Module does

This module is intended to be used as helper module within your own modules. The module allows you to create “runtime” bookmarks for ListerPages.

The module has 1 method named **url()** you most-likely will interact with. The method wil build an URL and wil redirect you to a specific ListerPage with predefined selector, column and sort settings.

The url method has 5 parameters:

1. **$ListerPage**, Page, Required value, the page where the lister lives.
2. **$initSelector**, String or empty string, The init selector of the lister.
3. **$defaultSelector**, String or empty string, The default selector of the lister.
4. **$defaultSelector**, String or empty string, The default selector of the lister.
5. **$defaultSort** String, Where to sort on.

### API usage

```php
// Listerpage, the destination.
$listerPage      = $pages->get('1234');
$initSelector    = 'template=basic-page';
$defaultSelector = 'title!=ProcessWire, parent.id>1234';
$columns         = array('title', 'template', 'parent', 'modified');
$defaultSort     = 'modified';

// Get the instance and build the URL. You need only 1 instance to create multiple URLs.
$plus = $modules->get('ProcessPageListerUrls');
$url = $plus->url($listerPage, $initSelector, $defaultSelector, $columns, $defaultSort);

```

### About the URL

The builded URL is encoded using openssl_encrypt, abstracted and cut in get variables with a max length of 256. This way the client can't manually change the url, so it is save to use init selector.

### Be aware

Be aware that the runtime bookmarks will change settings in your lister config. When you enter the config after using ProcessPageListerUrls and save the lister those settings are also saved, this is the 'nature' of ListerPro


### Thanks 

This Module is partly sponsored by Calago, thanks!
Thanks to Ryan Cramer
