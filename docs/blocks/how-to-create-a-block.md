Lets create a test block for onepager. (writing in progress..)


	.
	├── wp-content/themes/themename
	|   ├── onepager
	|   |   ├── blocks
	|   |   |   ├── test
	|   |   |   |   ├── config.php
	|   |   |   |   ├── view.php
	|   |   |   |   ├── style.php
	|   |   |   |   ├── block.css
	|   |   |   |   ├── block.js
	|   |   |   |   ├── block.jpg


## Configuration file
```php
//config.php
return array(
    'slug' => 'nt-test' //must be unique, add prefix if necessary
    'name' => 'NT Test' //Could be anything,
    'groups' => array('block-category-1', 'block-category-2'),
    'assets' => function($blockRootUrl){
    	Onepager::addScript('nt-test', $blockRootUrl."/block.js");
    },

    'contents'=>array(
    	array(
    		'name'=>'title',
    		'label'=> 'Title',
    		'type'='text',
    		'value'=>'Hello world',
    		'placeholder'=>'Some title'
    	),
    	array(
    		'name'=>'description',
    		'label'=> 'Description',
    		'type'='editor',
    		'value'=>'lorem ipsum dolor emmet',
    		'placeholder'=>'Some description'
    	)
    ),

    'settings'=>array(
			array(
		    'name'     => 'animation',
		    'label'    => 'Animation',
		    'type'     => 'select',
		    'value'    => 'fadeInUp',
		    'options'  => array(
	        '0'             => 'None',
	        'fadeIn'        => 'Fade',
	        'fadeInLeft'    => 'Slide Left',
	        'fadeInRight'   => 'Slide Right',
	        'fadeInUp'      => 'Slide Up',
	        'fadeInDown'    => 'Slide Down',
	      ),
	    ),
    ),

    'styles'=>array(
			array(
	      'name'    => 'bg_color',
	      'label'   => 'Background Color',
	      'type'    => 'colorpicker',
	      'value'   => '#fff'
	    ),
    )
);
```
### slug (string)
No two slug of two blocks can be same. So make sure you prefix your name with your block slug. For example if your name is Robert make your block slug `rt-test`

### name (string)
Name of your slug appears on the block image. The name should represt its behaviour. Again prefix your block with your name. For example if its Robert make your block name `RT Test`

### groups (array)
`Groups` is an array. The block can fall under these categories

```php
'groups'=> array(
	"navbars",
	"headers",
	"contents",
	"portfolios",
	"teams",
	"testimonials",
	"blogs",
	"sliders",
	"pricings",
	"footers"
)
```

or you are free to write your own catgories.

### assets (anonymous function)
You can add assets to your blocks. Follow [this article](./how-to-add-js-css-to-a-block.md)  for in depth assets loading information.

### contents (array of fields)
Contents should be only text contents of a block. No settings or style information should be preset on `contents` array. You can add as much fields as you want. Find the list of fields available [in this article](../fields/summary.md).

### settings (array of fields)
You can use any field type in settings but keep it under select, switch or something meaninful. Settings should not deal with content or style.

### styles (array of fields)
You can use any field type in styles but keep it under color, image, margin, padding or something meaninful for styles. Styles should not deal with content or settings.

## View File
```html
<section id="<?php echo $id?>" class="nt-test">
	<h1><?php echo $contents['title']?></h1>
	<p><?php echo $contents['description']?></p>
</section>
```

view.php file has access to `$id`, `$contents` (array), `$settings` (array), `$styles` (array). View.php is the visual representation of your block.

## Style File
```php
#<?php echo $id?> {
	background: <?php echo $styles['bg_color']?>;
}
```
view.php file has access to `$id`, `$styles` (array). Put your dynamic styles here. `$id` is the id of the block html container that we defined earlier in view.php

## Block style
`block.css` file on block root is autoloaded if preset. Try to add your block styles in block.css and not in theme `style.css`. It will make your block more decoupled and block like.

## Block screenshot
`block.jpg` file is the screenshot of how the blocks looks like. Can be of any size. Standard is 300*200px