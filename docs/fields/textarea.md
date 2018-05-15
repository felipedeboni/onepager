If you want, your visitors should enter more than single line input, then use Textarea Text fields are used for single-line input whereas but Textarea takes both single and multi line input.

### Arguments

Name        | Type   | Default  | Description
----------- | ------ | -------- | -----------------------------------------------------
type        | string | textarea | This Value identifies the field type
name        | string |          | A unique name required to define
label       | string |          | Displays as field label
placeholder | string |          | Text to display in the input when no value is present
value       | string |          | String that appears in the textarea input

### Example Code

```php
array(
      'name'  => 'title', // Required
      'type'  => '‘textarea’',
      'label' => 'Title', // Optional, name will use instead
      'placeholder' => 'Your title here', // Optional, name will use instead
      'value' => 'Let's make a better website together' // Default value
),
```