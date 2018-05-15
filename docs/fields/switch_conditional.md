Any field type can depend on a switch. If the switch is on the dependent field will be visible and if off it will be invisible.

### Example Code
If a `show_sub_title` is switched on the `sub_title` field will be visible.

```php
"contents"=>array(
array('name' => 'title','type' => 'text'),
array('name' => 'show_sub_title','type' => 'switch', value=>false),
array('name' => 'sub_title', 'type' => 'text', 'depends'=>'show_sub_title'),
),
```

### Example usage
```html
//view.php
<h1><?php echo $contents['title']?></h1>
<?php if($contents['show_sub_title']):?>
   <?php echo $contents['sub_title']; ?>
<?php endif; ?>
```