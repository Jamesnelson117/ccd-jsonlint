const expect = require('chai').expect,
  isValidDirectory = require('../../lib/util').isValidDirectory

describe('Is valid directory', () => {
  it('Should return true for a valid directory', () => {
    expect(isValidDirectory('./test')).to.equal(true);
  });

  it('Should throw an error for an invalid directory', () => {
    let dir = './NotAValidDirectory';
    expect(() => isValidDirectory(`${dir}`)).to.throw(Error, `${dir} is not a valid directory`);
  });

  it('Should throw an error for an empty string', () => {
    expect(() => isValidDirectory('')).to.throw(Error, `No directory provided`);
  });

  it('Should throw an error if no directory is provided', () => {
    expect(() => isValidDirectory(null)).to.throw(Error, `No directory provided`);
  });
});