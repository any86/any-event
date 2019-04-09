"use strict";
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
exports.__esModule = true;
var EventEmitter = (function () {
    function EventEmitter() {
        this._listenersMap = {};
    }
    ;
    EventEmitter.prototype.on = function (eventName, listener) {
        if (undefined === this._listenersMap[eventName]) {
            this._listenersMap[eventName] = [];
        }
        this._listenersMap[eventName].push(listener);
        return this;
    };
    ;
    EventEmitter.prototype.once = function (eventName, listener) {
        listener.isOnce = true;
        this.on(eventName, listener);
        return this;
    };
    ;
    EventEmitter.prototype.off = function (eventName, listener) {
        var listeners = this._listenersMap[eventName];
        if (undefined !== listeners) {
            if (undefined === listener) {
                delete this._listenersMap[eventName];
            }
            else {
                var index = listeners.findIndex(function (fn) { return fn === listener; });
                listeners.splice(index, 1);
            }
        }
        return this;
    };
    ;
    EventEmitter.prototype.emit = function (eventName) {
        var payload = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            payload[_i - 1] = arguments[_i];
        }
        var e_1, _a;
        var listeners = this._listenersMap[eventName];
        if (undefined !== listeners && 0 < listeners.length) {
            try {
                for (var _b = __values(listeners.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var _d = __read(_c.value, 2), index = _d[0], listener = _d[1];
                    if (listener.isOnce) {
                        var listenerClone = listener;
                        listeners.splice(index, 1);
                        listenerClone.apply(void 0, __spread(payload));
                    }
                    else {
                        listener.apply(void 0, __spread(payload));
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return true;
        }
        else {
            return false;
        }
    };
    ;
    EventEmitter.prototype.has = function (eventName) {
        return undefined !== this._listenersMap[eventName] && 0 < this._listenersMap[eventName].length;
    };
    ;
    EventEmitter.prototype.destroy = function () {
        this._listenersMap = {};
    };
    ;
    return EventEmitter;
}());
exports["default"] = EventEmitter;
;
//# sourceMappingURL=main.js.map