import getFunction from '../src/read.js';

const read = getFunction();

function drinkFlavor(flavor) {
  if (flavor === 'octopus') {
    throw new DisgustingFlavorError('yuck, octopus flavor');
  }
  // Do some other stuff
}

test('throws on octopus', () => {
  function nonexistingPath() {
    getFunction('octopus');
  }

  expect(nonexistingPath).toThrow();
});
