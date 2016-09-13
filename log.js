(function() {
    // get the root reference of window
    var root = this;
    var log = {};

    if (typeof exports !== 'undefined') {
        if (typeof module !== 'undefined' && module.exports) {
            exports = module.exports = log;
        }
        exports.log = log;
    } else {
        root.log = log;
    };

    // version
    log.VERSION = '0.0.1';

    log.init = function() {
        log.wrapperDom = document.createElement('div');
        log.wrapperDom.className = 'log-wrapper';
        log.listDom = document.createElement('ul');
        log.listDom.className = 'log-list';
        log.toggleBtnDom = document.createElement('button');
        log.toggleBtnDom.className = 'log-toggle-btn';
        log.toggleBtnDom.innerText = 'toggle log';
        log.toggleBtnDom.onclick = log.toggle;
        log.wrapperDom.appendChild(log.listDom);
        log.wrapperDom.appendChild(log.toggleBtnDom);
        document.body.appendChild(log.wrapperDom);
    };

    log.destroy = function() {
        log.wrapperDom.remove();
        log.wrapperDom = null;
        log.toggleBtnDom = null;
        log.listDom = null;
    };

    log.log = function(message) {
        var messageDom = document.createElement('li');
        messageDom.innerText = message;
        log.listDom.appendChild(messageDom);
        log.listDom.scrollTop = 1000000;
    };

    log.toggle = function() {
        log.listDom.style.display = log.listDom.style.display === 'none' ? 'block' : 'none';
    };

    log.hide = function() {
        log.wrapperDom.style.display = 'none';
    };

    log.show = function() {
        log.wrapperDom.style.display = 'block';
    };
}.call(window));