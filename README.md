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

first, decide a condition kind.
```javascript
const ContextMenu = new contextMenu({
    allowClassName: 'context-access' // it is default status.
});
```