Smartlink allows you to pick any page, post or external link. It's a control that merges the types ```link```, ```page``` and ```post```.

#### Arguments

Name  | Type   | Default | Description
----- | ------ | ------- | ------------------------------------
type  | string | page    | This Value identifies the field type
name  | string |         | A unique name required to define
label | string |         | Displays as field label
value | array  |         | Options to create the smartlink

#### Example PHP Code

Default to Page link
```php
array(
  'name'        => 'link',
  'label'       => 'Link',
  'type'        => 'smartlink',
  'value'       => array(
    'linkType' => 'page', // Dropdown defaults to page
    'text'     => '', // Default text
    'pageId'   => '', // Default page id
  )
),
```

Default to Post link
```php
array(
  'name'        => 'link',
  'label'       => 'Link',
  'type'        => 'smartlink',
  'value'       => array(
    'linkType' => 'post', // Dropdown defaults to page
    'text'     => '', // Default text
    'postId'   => '', // Default post id
  )
),
```

Default to External link
```php
array(
  'name'        => 'link',
  'label'       => 'Link',
  'type'        => 'smartlink',
  'value'       => array(
    'linkType' => 'external', // Dropdown defaults to page
    'text'     => '', // Default text
    'url'      => '' // Default external link
  )
),
```

#### Example View Code

Since on SmartLink we store the id of the post or page to prevent broken links, you are encouraged to use the ```OnePager::resolveSmartLink``` helper to normalize it for you, as soon as call it, you can use it just like the ```link``` type.
```html
<?php
  $contents['link'] = OnePager::resolveSmartLink($contents['link']);
?>
<a href="$contents['link']['url']" target="<?php $contents['link']['target']? '_blank':''?>">
 <?php echo $contents['link']['text']?>
</a>
```