# query-bookmarks-tree

A little RequireJS module be used to Google Chrome extension API `chrome.bookmarks`, that genarate bookmarks tree DOM and load default css into the page of extension. This module reference origenal bookmarks manager and [basic bookmarks sample]. You can use **load unpacked extension** (choose `public_html` folder) to see the module sample. 

![image:query-bookmarks-tree sample](http://i.imgur.com/vqkJNYe.png "query-bookmarks-tree sample")

 [basic bookmarks sample]: <https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/docs/examples/api/bookmarks/basic/>

### Overview
After declare `require(['querybookmarkstree'], function (querybookmarkstree){})`, it will retrun a object contains two properties:
*   `getTreeDOM`: a function that genarate DOM of bookmarks tree.
*   `getTreeCSS`: CSSStyleSheet object form loaded default css.

##### getTreeDOM
The first parameter is jQuery element selector, bookmarks tree will append it.

```javascript 
querybookmarkstree.getTreeDOM($('#bookmarks'), option);
```

Parameter `option`  contains some properties:

* `onlyFolder`:If true, it will generate only bookmark folder.
* `queryId`: a callback function let you get bookmark id when click on a bookmark.

```javascript
var option = {
    onlyFolder: false,
    queryId: function(id){$("#getId").text("The id is : " + id);}
};
```

##### getTreeCSS

you can use `insertRule()` to override default css rule:

```javascript
var stylesheet = querybookmarkstree.getTreeCSS;
stylesheet.insertRule("span.node{color:green}", stylesheet.cssRules.length);
```

### Dependencies

This module require [RequireJS], [require-css] and [JQuery].

[RequireJS]: <http://requirejs.org/>
[require-css]: <https://github.com/guybedford/require-css>
[JQuery]: <https://jquery.com/>

### Installation and Setup
You need to  put dependencies and this module in your `libs` folder. Then in the *.html:
```html
<script src="/js/libs/require.js/require.min.js"></script>
<script src="/js/main.js"></script>
```
In `main.js`, set config as below:
```javascript
require({
    baseUrl:"js/libs",
    paths: {
        "jquery":"jquery/jquery.min",
        "querybookmarkstree":"query-bookmarks-tree/querybookmarkstree"
        //recommand named 'querybookmarkstree'
    },
    map:{
        "*":{
            "css":"require-css/css.min"//setup require-css
        }
    }
});
```