Menu field is essential tool in Onepager, It bring you all created Menus like primary menu, footer menu and so on.

#### Arguments

Name  | Type   | Default | Description
----- | ------ | ------- | ------------------------------------
type  | string | menu    | This Value identifies the field type
name  | string |         | A unique name required to define
label | string |         | Displays as field label
value | int    |         | Page name should in menu name

#### Example Code

```php
array(
      'name'  => 'title', // Required
      'type'  => 'menu',
      'label' => 'Title', // Optional, name will use instead
      'value' => '' //optional
),
```