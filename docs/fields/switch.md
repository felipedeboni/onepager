In onepager, we have programmed innumerous options, some of the options runs with boolean value. To deal with the boolean option, we enabled Switch field, so that you can easily switch between true and false based option easily.

### Arguments

Name  | Type    | Default | Description
----- | ------- | ------- | ---------------------------------------------
type  | string  | switch  | This Value identifies the field type
name  | string  |         | A unique name required to define
label | string  |         | Displays as field label
value | boolean |         | boolean that appears as default True or False

### Example Code

```php
array(
      'name' => 'title', // Required
      'type' => 'switch',
      'label' => 'Title', // Optional, name will use instead
      'value' => true // Default value `false`
),
```