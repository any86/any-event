import EventEmitter from '../src/main';
test('on和emit是否正确?', () => {
    const eventEmitter = new EventEmitter();
    let result = 0;
    const listener = (ev:any) => {
        result = ev;
    };
    eventEmitter.on('abc', listener);
    eventEmitter.emit('abc', 1234567);
    expect(result).toBe(1234567);
});


test('off是否正确?', () => {
    const eventEmitter = new EventEmitter();
    let result = 0;
    const listener = (ev:any) => {
        result = ev;
    };
    eventEmitter.on('abc', listener);
    eventEmitter.off('abc', listener);
    eventEmitter.emit('abc', 1234567);
    expect(result).toBe(0);
});