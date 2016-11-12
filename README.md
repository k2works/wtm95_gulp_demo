# gulp

## Node.jsのインストール
[Node.jsインストーラ](https://nodejs.org/ja/)

## gulpのインストール

```
npm install -g gulp
```

## プラグイン

+ browser-sync
+ gulp-sass
+ gulp-plumber
+ gulp-autoprefixer
+ gulp-sourcemaps

### プラグインのインストール

```
npm install --save-dev gulp browser-sync gulp-plumber gulp-sass gulp-autoprefixer gulp-sourcemaps
```


## このでものディレクトリマップ

```
project/
	├ htdocs/
	│		├ common/
	│		│ 	├ sass/
	│		│ 	├ css/
	│		│ 	├ map/
	│		│ 	├ img/
	│		│ 	└ js/	
	│		└index.html
	│
	├ .git/
	├ node_modules/
	├ gulpfile.js
	└ package.json
  
```


## もしプラグインが壊れていた場合

```
npm rebuild [壊れてたプラグイン名]
```
