# ProcessPageListerUrls

Create links to specific ListerPages with predefined selector settings. On the module process page you can create & test links for usage in field descriptions and other places. In Process Modules you can use the API to create the links.

This is simple module that leans heavy on ProcessPageListerBookmarks.

### API usage

```php
$listerPage = $pages->get('1234');
$initSelector = 'template=basic-page';
$defaultSelector = 'title!=ProcessWire, parent.id>1234';
$columns = array('title', 'template', 'parent', 'modified');
$defaultSort = 'modified';

// Get the instance and build the URL. You need only 1 instance to create multiple URLs.
$plus = $modules->get('ProcessPageListerUrls');
$url = $plus->url($listerPage, $initSelector, $defaultSelector, $columns, $defaultSort);

```

Thanks @Ryan to point me in the right direction of using Bookmarks.
