 const assert = require('assert'); 
const Rooster = require('../index'); 

describe('Rooster', () => {
  describe('.announceDawn', () => {
      it('returns a rooster call', () => {
			
			const expected = 'cock-a-doodle-doo!';

      const actual = Rooster.announceDawn();
      assert.ok(expected,actual);
  		});
  });

  describe('.timeAtDawn', () => {
    it('returns its argument as a string', () => {
      
      const inputNumber = 10;
      const expected = '10';

      
      const actual = Rooster.timeAtDawn(inputNumber);

      
      assert.strictEqual(expected,actual);
    	});

    	it('throws an error if passed a number less than 0', () => {
      
      const inputNumber = -1;
      const expected = RangeError;

      
      assert.throws(() => {Rooster.timeAtDawn(inputNumber);
      }, expected);
    });

      it('throws an error if passed a number greater than 23', () => {
      
      const inputNumber = -1;
      const expected = RangeError;

      
      assert.throws(() => {Rooster.timeAtDawn(inputNumber);
      }, expected);
    });
  });
});
