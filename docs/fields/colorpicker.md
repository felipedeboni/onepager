Colorpicker in Onepager is a new way to take control over the color on onepager-enabled theme.

### Arguments

Name  | Type   | Default  | Description
----- | ------ | -------- | ----------------------------------------------------------
type  | string | colorpicker | This Value identifies the field type
name  | string |          | A unique name required to define
label | string |          | Displays as field label
value | string |          | The value should be HEX/RGB/RGBE value

### Example Code

```php
array(
      'name'  => 'title', // Required
      'type'  => 'colorpicker',
      'label' => 'Title', // Optional, name will use instead
      'value' => "" //optional
),
```