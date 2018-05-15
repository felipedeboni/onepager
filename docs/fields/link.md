A Link field with text, url and target.

### Arguments

Name        | Type   | Default | Description
----------- | ------ | ------- | -----------------------------------------------------
type        | string | link    | This Value identifies the field type
name        | string |         | A unique name required to define
label       | string |         | Displays as field label
text        | string |         | Link text inside a tag
target      | boolean|  false  | true: opens links in new window, false: current window
url         | string |         | should be a url with http://

### Example Code

```php
array(
      'name' => 'title', // Required
      'type' => 'link',
      'label' => 'Title', // Optional, name will use instead
      'url'=> '', // optional
      'target'=> false, // optional
      'text'=> '' // optional
),
```

### Usage

```html
<a href="$contents['link']['url']" target="<?php $contents['link']['target']? '_blank':''?>">
 <?php echo $contents['link']['text']?>
</a>
```