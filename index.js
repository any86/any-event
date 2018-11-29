/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
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
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

var EventEmitter = (function () {
    function EventEmitter() {
        this.listenersMap = {};
    }
    EventEmitter.prototype.on = function (eventName, listener) {
        if (undefined === this.listenersMap[eventName]) {
            this.listenersMap[eventName] = [];
        }
        this.listenersMap[eventName].push(listener);
        return this;
    };
    EventEmitter.prototype.once = function (eventName, listener) {
        listener.isOnce = true;
        this.on(eventName, listener);
        return this;
    };
    EventEmitter.prototype.off = function (eventName, listener) {
        var listeners = this.listenersMap[eventName];
        if (undefined !== listeners) {
            if (undefined === listener) {
                delete this.listenersMap[eventName];
            }
            else {
                var index = listeners.findIndex(function (fn) { return fn === listener; });
                listeners.splice(index, 1);
            }
        }
        return this;
    };
    EventEmitter.prototype.emit = function (eventName) {
        var payload = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            payload[_i - 1] = arguments[_i];
        }
        var e_1, _a;
        var listeners = this.listenersMap[eventName];
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
    EventEmitter.prototype.destroy = function () {
        this.listenersMap = {};
    };
    return EventEmitter;
}());

export default EventEmitter;
