The field offers the ability to select image from WordPress media manager with WordPress populated settings.

### Arguments

Name  | Type   | Default | Description
----- | ------ | ------- | ------------------------------------
type  | string | image   | This Value identifies the field type
name  | string |         | A unique name required to define
label | string |         | Displays as field label
value | array  |         | Array of image attributes (alt, src)

### Example Code

```php
array(
      'name'  => 'title', // Required
      'type'  => 'image',
      'label' => 'Title', // Optional, name will use instead
      'value' => array(
        'src' => '', // Default value
        'alt' => '' // Default alt value
      )
),
```