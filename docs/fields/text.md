A text field is a basic text control, accept small of text in any form of user input. When a user indicated that text entry is completed, the text field fires and subsequent event, else pops up with error.

### Arguments

Name        | Type   | Default | Description
----------- | ------ | ------- | -----------------------------------------------------
type        | string | text    | This Value identifies the field type
name        | string |         | A unique name required to define
label       | string |         | Displays as field label
placeholder | string |         | Text to display in the input when no value is present
prepend     | string |         | Add content prefix in the text field
append      | string |         | Add content suffix in the text field
value       | string |         | String that appears in the text input

### Example Code

```php
array(
      'name' => 'title', // Required
      'type' => 'text',
      'label' => 'Title', // Optional, name will use instead
      'placeholder' => 'Your title here', // Optional, name will use instead
      'prepend' => 'Text', // Optional
      'append' => 'Text', // Optional
      'value' => 'Let's make a better website together' // Default
),
```