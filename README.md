# Context Menu Library
context menu made as easy to use as possible.

# How to use

```javascript
// Just declare
const ContextMenu = new contextMenu();
```
if you want to use, just use to easy.

when you declare new contextMenu object, context menu created body tag's last one.
and all preparations are completed.

## prepare
but context-menu does not appear everywhere.
only a few conditions are needed.

1. decide a condition's kind.
```javascript
const ContextMenu = new contextMenu({
    allowClassName: 'context-access' // it is default status.
});
```
2. if class is cumbersome, use attribute.
```javascript
/**
 * In this case, the above method is ignored.
 * */
const ContextMenu = new contextMenu({
    allowAttributeName: 'data-context-access'
});
```
