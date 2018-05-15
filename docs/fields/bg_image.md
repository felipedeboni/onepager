The field offers the ability to select image from WordPress media manager with WordPress populated settings.

### Arguments

Name  | Type   | Default | Description
----- | ------ | ------- | ------------------------------------
type  | string | image   | This Value identifies the field type
name  | string |         | A unique name required to define
label | string |         | Displays as field label
value | array  |         | Array containing the src of the image

### Example Code

```php
array(
      'name'  => 'title', // Required
      'type'  => 'bg_image',
      'label' => 'Title', // Optional, name will use instead
      'value' => array(
        'src' => '' // Default value
      )
),
```