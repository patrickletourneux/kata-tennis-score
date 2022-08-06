const TennisScore = require('./TennisScore');

describe('TennisScore class', () => {
    
    const P1name ='P1' ;
    const P2name = 'P2' ;
    const game = ['P1','P2','P1']; 
    const instance = new TennisScore(P1name, P2name, game);
    
    beforeEach(() => {
        // console.log('beforeEach');
        instance.score=[0,0]
        instance.game = []
      })

      describe('log()', () => {
    
        test('log() return OK', () => {
          expect(instance.log()).toEqual('OK');
        });
    
      });
      
      describe('showData()', () => {
    
        test('showData() return OK', () => {
          instance.score=[0,0]
          instance.game = ['P1','P2','P1'];
          expect(instance.showData()).toEqual([P1name,P2name,game]);
        });
    
      });
      // describe('calculScore()', () => {
      //   // instance.score=[0,0]
      //   instance.game = ['P1','P2','P1'];
      //   instance.calculScore()
      //   console.log(instance.score)
      //   test('this.score toEqual [2,1]', () => {
      //     expect(instance.score).toEqual([2,1]);
      //   });
    
      // });
      describe('result()', () => {
        test('result() return P1 30 P2 15', () => {
          instance.score=[0,0]
          instance.game = ['P1','P2','P1'];
          console.log(instance.score)
          expect(instance.result()).toEqual('P1 30 P2 15');
        });
        test('result() return 15a', () => {
          instance.score=[0,0]
          instance.game = ['P1','P2'];
          expect(instance.result()).toEqual('15a');
        });
        test('result() return 40a', () => {
          instance.score=[0,0]
          instance.game = ['P1','P2','P1','P2','P1','P2','P1','P2','P1','P2'];
          expect(instance.result()).toEqual('40a');
        });
        test('result() return P1 40 P2 30', () => {
          instance.score=[0,0]
          instance.game = ['P1','P2','P1','P2','P1'];
          expect(instance.result()).toEqual('P1 40 P2 30');
        });
        test('result() return P1 wins', () => {
          instance.score=[0,0]
          instance.game = ['P1','P1','P1','P1','P1'];
          expect(instance.result()).toEqual('P1 wins');
        });
        test('result() return P2 avantage', () => {
          instance.score=[0,0]
          instance.game = ['P1','P1','P1','P2','P2','P2','P2'];
          expect(instance.result()).toEqual('P2 avantage');
        });
    
      });
})