Onepager uses a custom page template for rendering Onepager pages. You can override this template to open new possibilities by adding a default sidebar, header, footer.


### Default onepager template
```php
<?php /* Template Name: OnePager */ ?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="profile" href="http://gmpg.org/xfn/11">
<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
<title><?php wp_title(); ?></title>

<?php wp_head(); ?>
</head>

<body <?php body_class(); ?> >

	<div class="op-sections">
			<?php the_content(); ?>
	</div>

	<?php wp_footer(); ?>
</body>
</html>

```
### Override
Onepager template file location

	.
	├── wp-content/plugins/tx-onepager/
	|   ├── templates
	|   |   |   ├── onepage.php

Copy this file inside your theme

	.
	├── wp-content/themes/themename
	|   ├── onepager
	|   |   |   ├── onepage.php


The most important parts of this file are these function calls
- the_content()
- wp_head()
- wp_footer()

As long as you do not remove them you are free to do whatever you wish.

## Related:
- [How to add a new onepager template](./how-to-add-a-new-onepage-template)