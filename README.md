# Context Menu Library
context menu made as easy to use as possible.

# How to use

```javascript
// Just declare
const contextMenu = new ContextMenu();
```
if you want to use, just use to easy.

when you declare new contextMenu object, context menu created body tag's last one.
and all preparations are completed.

# prepare
first, attach style sheet.
```javascript
require('eeeasy-context-menu/contextMenu.css');
```


but context-menu does not appear everywhere.
only a few conditions are needed.

1. decide a condition's kind.
```javascript
import ContextMenu from 'eeeasy-context-menu'

const contextMenu = new ContextMenu({
    allowClassName: 'context-access' // it is default status.
});
```
2. if class is cumbersome, use attribute.
```javascript
const contextMenu = new ContextMenu({
    allowAttributeName: 'data-context-access'
});
```

# add management list
Finally, should to add option.

```html
<div class="square context-access"></div>
<!-- or -->
<div class="square" data-context-access></div>
```

```javascript
const contextMenu = new ContextMenu();
contextMenu.addOptions('square', [
    // optionClassName, callBack
    ['alert', () => {
        alert('!');
    }],
    ['remove', () => {
        document.querySelector('.square').outerHTML = 'die';
    }]
]);
```
