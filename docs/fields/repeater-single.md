Single repeater repeats the single specific content.

## Arguments

Name  | Type   | Default  | Description
----- | ------ | -------- | -------------------------------------
type  | string | text     | This Value identifies the field type
name  | string |          | A unique name required to define
label | string |          | Displays as field label
value | array  |          | value should be a value list in array

## Example Code

```php
array(
      'name'  => 'title', // Required
      'type'  => 'text', // This can be of any type but not repeater
      'label' => 'Title', // Optional, name will use instead
      'value' => array("") // This makes a control single repeatable
),
```