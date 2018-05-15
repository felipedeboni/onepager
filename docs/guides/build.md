## Develop

If you want to build onepager yourself make sure you have installed `node`, `npm`, `gulp` and `composer` (it's the PHP one, not the one on NPM) and available system wide. Now run this command
```
npm install
bower install
composer install
```

## Compile and Watch
```
gulp
```
Gulp will automatically compile your `LESS` and `JS` changes into `dist` folder.

## Generating the package
You can run `gulp package` to build a wordpress plugin package with only required files