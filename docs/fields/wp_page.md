Sometime you need show page in sidebar or somewhere else in you website, In one page you will have the facility, you can incorporate all WordPress page.

#### Arguments

Name  | Type   | Default | Description
----- | ------ | ------- | ------------------------------------
type  | string | page    | This Value identifies the field type
name  | string |         | A unique name required to define
label | string |         | Displays as field label
value | int    |         | The value should WordPress page id

#### Example Code

```php
array(
      'name' => 'title', // Required
      'type' => 'page',
      'label' => 'Title', // Optional, name will use instead
      'value' => '' //optional
),
```