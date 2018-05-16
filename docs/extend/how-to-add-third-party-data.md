If you want to add third party data to integrate with other plugins like QuForms you can easily do it, just follow the guide below.

1. Inside your theme ```functions.php``` add a snippet like the one below.
```php
function addQuForms($data) {
  try {
    if ( !is_plugin_active('quform/quform.php') ) {
      throw new Exception("Plugin Inactive");
    }
    global $wpdb;

    $sql = "SELECT `id`, `name` FROM `{$wpdb->prefix}quform_forms` ORDER BY `name`";
    $forms = $wpdb->get_results($sql, OBJECT_K);
  } catch (Exception $e) {
    $forms = array();
  }

  $data['quforms'] = [ "Select" ] + obj_to_array( $forms, 'id', 'name' );

  return $data;
}

add_filter('onepager_third_party_data', 'addQuForms');
```

2. Now all you need to do is to use the [select_datastore](../fields/select_datastore.md) type.