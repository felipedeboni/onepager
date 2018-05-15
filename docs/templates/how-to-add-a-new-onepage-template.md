Onepager uses a custom page template for rendering Onepager pages. You can add new custom onepager templates thus opening possibilities of adding a default sidebar, header, footer.

	.
	├── wp-content/themes/themename
	|   ├── onepager-with-sidebar.php

Create any custom page template file that starts with `onepager-` will be considered as a onepager template. You can select this template from WordPress page editor.

```php
//onepager-with-sidebar.php
<?php /* Template Name: OnePager With Sidebar */ ?>
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
    <?php get_header() ?>
	<div class="op-sections">
	   <?php the_content(); ?>
	</div>
    <?php get_sidebar() ?>
    <?php get_footer() ?>

	<?php wp_footer(); ?>
</body>
</html>
```

## Related:
- [How to override default onepager template](./how-to-override-default-onepager-template.md)