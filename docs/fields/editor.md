Use text editor field to accept formatted input from user input instead of distorted text box. Editor field in Onepager enables you WYSIWYG editing  capability and interface.

### Arguments

Name  | Type   | Default | Description
----- | ------ | ------- | --------------------------------------
type  | string | editor  | This Value identifies the field type
name  | string |         | A unique name required to define
label | string |         | Displays as field label
value | string |         | String that appears in the text editor

### Example Code

```php
array(
      'name' => 'title', // Required
      'type' => 'editor',
      'label' => 'Title', // Optional, name will use instead
      'value' => 'Let\'s make a better website together' // Default value
),
```