const expect = require('chai').expect,
  getSchema = require('../../lib/util').getSchema;

describe('Get Schema', () => {
  it('Should get a schema file for a valid CCD JSON file', () => {
    expect(getSchema('State')).to.have.property('definitions');
  });

  it('Should not get a schema file for a non CCD JSON file', () => {
    expect(getSchema('test')).to.be.deep.equal({});
  });

  it('Should throw an error if an empty string is passed as file name', () => {
    expect(() => getSchema('').to.throw(Error, 'Cannot generate schema with no file name'));
  });

  it('Should throw an error if file name is not null', () => {
    expect(() => getSchema(null).to.throw(Error, 'Cannot generate schema with no file name'));
  });
});