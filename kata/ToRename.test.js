const ToRename = require('./ToRename');

describe('ToRename class', () => {
    
    const instance = new ToRename();
    
    beforeEach(() => {
        console.log('beforeEach');
      })

      describe('log()', () => {
    
        test('log() return OK', () => {
          expect(instance.log()).toEqual('OK');
        });
    
    });
})