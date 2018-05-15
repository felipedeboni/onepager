Lets create a block named my-content

	.
	├── wp-content/themes/themename
	|   ├── onepager
	|   |   ├── blocks
	|   |   |   ├── custom-block
	|   |   |   |   ├── config.php
	|   |   |   |   ├── view.php
	|   |   |   |   ├── style.php
	|   |   |   |   ├── block.css
	|   |   |   |   ├── assets
	|   |   |   |   |   ├── style.css
	|   |   |   |   |   ├── script.js

## block.css

In this block the `block.css` file will be loaded automatically when the block is used inside a page.

## Other assets

The `assets/style.css` and `assets/script.js` will not be loaded automatically so they will need to be loaded manually in the `config.php` file. So we will create a new `assets` key inside config file and define an anonymous function.

```php
return array(
	...
	'assets' => function( $blockRootUrl ){

	}
);
```

The `$blockRootUrl` variable is the url of the block root directory. Now we have the urls of the two assets file. `$blockRootUrl.'/assets/style.css'` and `$blockRootUrl.'/assets/script.js'`.

### Add Style

We will enqueue css files by using special onepager asset function `Onepager::addStyle($uniqueAssetName, $assetUrl)`.

NOTE: `$uniqueAssetName` must be unique to other asset names.
Best practice is to prefix it with blockname and developer name. For example if block name is `custom-block`
and developer name is `John Doe` the asset name could be 'jd-custom-block-style'.

```php
return array(
	...
	'assets' => function( $blockRootUrl ){
		Onepager::addStyle(
			'my-custom-block-style',
			$blockRootUrl.'/assets/style.css'
		);
	}
);
```

We can define style dependencies by using a 3rd parameter.
```php
return array(
	...
	'assets' => function( $blockRootUrl ){
		Onepager::addStyle(
			'my-custom-block-style',
			$blockRootUrl.'/assets/style.css',
			array('tx-bootstrap')
		);
	}
);
```

### Add Script
We will enqueue js files by using another special onepager asset function `Onepager::addStyle($uniqueAssetName, $assetUrl)`.


NOTE: `$uniqueAssetName` must be unique to other asset names.
Best practice is to prefix it with blockname and developer name. For example if block name is `custom-block`
and developer name is `John Doe` the asset name could be 'jd-custom-block-style'.

```php
return array(
...
'assets' => function( $blockRootUrl ){
	Onepager::addScript(
		'my-custom-block-script',
		$blockRootUrl.'/assets/script.js'
	);
}
);
```


We can define script dependencies by using a 3rd parameter.

```php
return array(
	...
	'assets' => function( $blockRootUrl ){
		Onepager::addScript(
	   		'my-custom-block-script',
			$blockRootUrl.'/assets/script.js',
			array('jquery', 'tx-bootstrap')
		);
	}
);
```