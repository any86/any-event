import EventEmitter from '../src/main';
test('基础事件绑定和触发是否正确?', ()=>{
    const eventEmitter = new EventEmitter();
    eventEmitter.on('abc', (ev)=>{
        expect(ev).toBe(1234567);
    });
    eventEmitter.emit('abc', 1234567);
});