# log.js
print log on the window

## WHY

In some case,I can't open the chrome console to show the `console log`,so I create this to log on the window.

## USAGE

* log.init to Init the dom and events.

    ```javascript
    log.init();
    ```

* log.log to log to the window

    ```javascript
    log.log(message);
    ```

* log.destroy to remove the log dom and events

    ```javascript
    log.destroy();
    ```

* log.toggle to toggle the log panel show state

    ```javascript
    log.toggle();
    ```
