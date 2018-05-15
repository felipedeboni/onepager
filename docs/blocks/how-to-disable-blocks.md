To disable core blocks
```php
if(function_exists('onepager')) {
  Onepager::disableCoreBlocks();
}
```

To disable a group of blocks
```php
if(function_exists('onepager')){
  Onepager::disableBlocks(['nav', 'pricing']);
}
```
