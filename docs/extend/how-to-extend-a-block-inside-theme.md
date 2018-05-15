You can extend the `view.php`, `style.php` and `block.css` file of any block inside a theme.
To do this you need to create a folder named after the blocks slug that you want to edit, inside a theme.

###Example:


	.
	├── wp-content/plugins/tx-onepagger
	|   ├── blocks
	|   |   ├── blogs
	|   |   |   ├── blog-1
	|   |   |   |   ├── config.php
	|   |   |   |   ├── view.php
	|   |   |   |   ├── style.php
	|   |   |   |   ├── block.css
	|   |   |   |   ├── block.jpg

Lets extend the `blog-1` block. Find the Onepager default blocks folder. Open the `config.php` file and find the slug.


```php
return array(
  'slug' => 'blog-1',

  ...
```

Create `blog-1` folder inside themes blocks folder `your-theme/onepager/overrides/blog-1`


	.
	├── wp-content/themes/themename
	|   ├── onepager
	|   |   ├── overrides
	|   |   |   ├── blog-1
	|   |   |   |   ├── view.php
	|   |   |   |   ├── style.php
	|   |   |   |   ├── block.css

Copy the `view.php` ,`style.php` and `block.css` file inside `blog-1` folder. Now you can edit them up to your needs. `view.php` and `style.php`  files have access to these variables. You can keep all 3 of the files or one of them.

### $id

different for every section that implements a block

**example:**
```php
<section id="<?php echo $id?>">
  ....
</section>
```

### $url

url of the block folder

**example:**
```php
<section id="<?php echo $id?>">
  <img src="<?php echo $url?>/assets/block-image.png"/>
</section>
```

### $content, $settings, $styles

**example:**
```php
<section id="<?php echo $id?>">
  <img src="<?php echo $content['logo']?>"/>
</section>
```