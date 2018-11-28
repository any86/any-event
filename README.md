# mini-events [![NPM Version][npm-image]][npm-url] ![npm bundle size (minified + gzip)](https://img.shields.io/bundlephobia/minzip/mini-events.svg) [![codecov](https://codecov.io/gh/383514580/mini-events/branch/master/graph/badge.svg)](https://codecov.io/gh/383514580/mini-events) [![CircleCI](https://circleci.com/gh/383514580/mini-events.svg?style=svg)](https://circleci.com/gh/383514580/mini-events)
[npm-image]: https://img.shields.io/npm/v/mini-events.svg
[npm-url]: https://npmjs.org/package/mini-events


[downloads-url]: https://npmjs.org/package/mini-events




:cake: 一个mini的事件管理器, 希望能在您的代码中做一块砖, 支持node/browser.

## 安装

``` shell
npm i -S mini-events
```

## 使用

``` javascript
import EventEmitter from  'mini-events';
const emitter = new EventEmitter();
emitter.on('add', data=>{
    console.log(data) // 1
});
emitter.emit('add', 1);
```
## 方法


### on(eventName, listener)
绑定事件

|名称|类型|数据类型|是否必填|说明|
|---|---|---|---|---|
|eventName| 参数 |`String|Symbol`|是|事件名称|
|listener| 参数 |`Function`|是|对应的回调函数|
|emitter| 返回值 |`EventEmitter`|---|实例|

### off(eventName, listener)
解除绑定, 如果不填写`listener`, 那么`eventName`对应的`listener`都会被移除.

|名称|类型|数据类型|是否必填|说明|
|---|---|---|---|---|
|eventName| 参数 |`String|Symbol`|是|事件名称|
|listener| 参数 |`Function`|是|对应的回调函数|
|emitter| 返回值 |`EventEmitter`|---|实例|

``` javascript
const callback = data=>{
    alert(data)
};
emitter.on('add', callback);
// 解除绑定
emitter.on('off', callback);
// add事件不会触发
emitter.emit('add', 1);
```

### once(eventName, listener)
绑定事件, 只触发一次

|名称|类型|数据类型|是否必填|说明|
|---|---|---|---|---|
|eventName| 参数 |`String|Symbol`|是|事件名称|
|listener| 参数 |`Function`|是|对应的回调函数|
|emitter| 返回值 |`EventEmitter`|---|实例|

``` javascript
const callback = data=>{
    alert(data)
};
emitter.once('add', callback);
// add事件触发
emitter.emit('add', 1);
// add事件不会触发
emitter.emit('add', 1);
```

### emit(eventName [, ...args])
触发事件, 支持任意数量参数

|名称|类型|数据类型|是否必填|说明|
|---|---|---|---|---|
|eventName| 参数 |`String|Symbol`|是|事件名称|
| ...args| 参数 |`Any`|是|对应的回调函数|
|emitter| 返回值 |`Boolean`|---|实例|

``` javascript
const callback = (a,b,c,d)=>{
    console(a,b,c,d); // 1,2,3,4
};
emitter.once('add', callback);
// add事件触发
emitter.emit('add', 1,2,3,4);
```

### destroy()
销毁实例

``` javascript
const callback = (a,b,c,d)=>{
    console(a,b,c,d); // 1,2,3,4
};
emitter.once('add', callback);
emitter.destroy();

// add事件不会触发
emitter.emit('add', 1,2,3,4);
```
