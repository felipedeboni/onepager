We have developed an Opensource icon picker to lessen the effort of developers. In onepager Icon field type enable the picker, that allow you to select fontawesome icons with essential size variation.

### Arguments

Name  | Type   | Default | Description
----- | ------ | ------- | ------------------------------------
type  | string | icon    | This Value identifies the field type
name  | string |         | A unique name required to define
label | string |         | Displays as field label
value | string |         | String that appears as Icon input

### Example Code

```php
array(
      'name' => 'title', // Required
      'type' => 'icon',
      'label' => 'Title', // Optional, name will use instead
      'value' => 'Let's make a better website together' // Default value
),
```