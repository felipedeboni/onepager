Media field simultaneously allows you to pick font and images with separate button. Icon button will open the icon pick, and image will open your WordPress media to select image with default wordpress settings.

### Arguments

Name  | Type   | Default | Description
----- | ------ | ------- | -------------------------------------------
type  | string | icon    | This Value identifies the field type
name  | string |         | A unique name required to define
label | string |         | Displays as field label
value | string |         | String that appears as Icon and image input

### Example Code

```php
array(
      'name' => 'title', // Required
      'type' => 'icon',
      'label' => 'Title', // Optional, name will use instead
      'value' => 'Let's make a better website together' // Default value
),
```