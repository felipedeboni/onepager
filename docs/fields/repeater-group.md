Repeater is the another time saver in Onepager. It gives you power to repeat group content and single content simultaneously.

## Group Repeater
Group repeater repeats the group content

## Arguments

Name  | Type   | Default  | Description
----- | ------ | -------- | ---------------------------------------------
type  | string | repeater | This Value identifies the field type
name  | string |          | A unique name required to define
label | string |          | Displays as field label
field | array  |          | fields should be a list of groups of controls

## Example Code

```php
array(
      'name'    => 'slider', // Required
      'type'    => 'repeater',
      'label'   => 'Slider', // Optional, name will use instead
      'fields'  => array(
          //repeat group
          array(
            array("name"=>"slider_image", "type"=>"image"),
            array("name"=>"slider_title"),
            //add as many controls as you wish of any type but a repeater
          ),
      )
),
```

## Multiple preset repeat groups:
You can add multiple preset repeat groups

```php
array(
      'name'    => 'slider', // Required
      'type'    => 'repeater',
      'label'   => 'Slider', // Optional, name will use instead
      'fields'  => array(
          //A repeat group
          array(
            array("name"=>"slider_image", "type"=>"image", "value"=>"http://example.com/slider1.jpg"),
            array("name"=>"slider_title", "value"=>"Slider 1 title"),
          ),
          //Another repeat group
          array(
            array("name"=>"slider_image", "type"=>"image", "value"=>"http://example.com/slider2.jpg"),
            array("name"=>"slider_title", "value"=>"Slider 2 title"),
          ),
      )
),
```