Category field gives you access to comprehend WordPress categories in Onepager, so that you can show category specify post easily.

#### Arguments

Name  | Type   | Default  | Description
----- | ------ | -------- | ------------------------------------------------
type  | string | category | This Value identifies the field type
name  | string |          | A unique name required to define
label | string |          | Displays as field label
value | int    |          | The value should be category id

#### Example Code

```php
array(
      'name'  => 'title', // Required
      'type'  => 'category',
      'label' => 'Title', // Optional, name will use instead
      'value' => 'categroy id'
),
```