The select field allows to display numerous setting option in drop-down, so that developers can easily select their desire option quickly.

### Arguments

Name   | Type   | Default | Description
------ | ------ | ------- | ---------------------------------------------
type   | string | select  | This Value identifies the field type
name   | string |         | A unique name required to define
label  | string |         | Displays as field label
value  | string |         | String that appears as default selected input
Option | array  |         | All set of option should be serialized here

### Example Code

```php
array(
      'name' => 'title', // Required
      'type' => 'select',
      'label' => 'Title', // Optional, name will use instead
      'value' => 'Value from option' // Default value
       'options'  => array(
        '0'           => 'None',
        'fadeIn'      => 'Fade',
        'fadeInLeft'  => 'Slide Left',
        'fadeInRight' => 'Slide Right',
        'fadeInUp'    => 'Slide Up',
        'fadeInDown'  => 'Slide Down',
      )
),
```