# mini-events

:cake: 一个mini的事件管理器, 希望能在您的代码中做一块砖, 支持node/browser.

为了尽可能的小, 所以并没有实现node标准event中的全部API, 只实现了最常用的功能.

## 安装

```
npm i -S mini-events
```

## 使用

```javascript
    const eventEmitter = new EventEmitter();
    eventEmitter.on('add', data=>{
        console.log(data) // 1
    });
    eventEmitter.emit('add', 1);
```

## API



