This field type was created in order to allow picking up third party stuff to your blocks.

#### Arguments

Name  | Type   | Default           | Description
----- | ------ | ----------------- | ------------------------------------
type  | string | select_datastore  | This Value identifies the field type
name  | string |                   | A unique name required to define
label | string |                   | Displays as field label
value | mixed  |                   | A string or int usually

#### Example Config Code

```php
array(
  'name'    => 'form',
  'type'    => 'select_datastore',
  'key'     => 'quforms', // The key added to the data on the filter attribute
  'value'   => '' //
),
```

#### Example View Code

```html
<?php
  if ( !empty($contents['form']) ) {
    $embed = '[quform id="' . $contents['form'] . '"]';
    echo do_shortcode($embed);
  }
?>
```

In this case, we want to be sure whenever the block is changed, the QuForm is going to be binded again, so add the next snippet to your ```view.php``` as well.

```html
<?php if ($ONEPAGER_EDITOR && !empty($contents['form'])) { ?>
  <script>
    (function($) {
      if ( typeof $.fn.quform === 'function' ) { // check if plugin exists
        var $form = $("#<?php echo $id;?> .quform-form"); // get the proper form
        if ( typeof $form.data('quform') === 'undefined' ) { // check if it's already binded
          $form.quform(); // if not bind it
        }
      }
    })(jQuery);
  </script>
<?php } ?>
```

**IMPORTANT:** this code is going to be placed only inside the editor, not on your public version.

## Related Article
- [How To Add Third Party Data to OnePager](../extend/how-to-add-third-party-data.md)