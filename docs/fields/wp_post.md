Sometime you need show a post in sidebar or somewhere else in you website, In one page you will have the facility, you can incorporate all WordPress posts.

#### Arguments

Name  | Type   | Default | Description
----- | ------ | ------- | ------------------------------------
type  | string | post    | This Value identifies the field type
name  | string |         | A unique name required to define
label | string |         | Displays as field label
value | int    |         | The value should WordPress post id

#### Example Code

```php
array(
      'name' => 'title', // Required
      'type' => 'post',
      'label' => 'Title', // Optional, name will use instead
      'value' => '' //optional
),
```