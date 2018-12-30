const expect = require('chai').expect,
  getCCDSchema = require('../../lib/util').getCCDSchema;

describe('Get CCD Schema', () => {
  it('Should get a schema file for a valid CCD JSON file', () => {
    expect(getCCDSchema('State')).to.have.property('definitions');
  });

  it('Should not get a schema file for a non CCD JSON file', () => {
    expect(getCCDSchema('test')).to.be.deep.equal({});
  });

  it('Should throw an error if an empty string is passed as file name', () => {
    expect(() => getCCDSchema('').to.throw(Error, 'Cannot generate schema with no file name'));
  });

  it('Should throw an error if file name is not null', () => {
    expect(() => getCCDSchema(null).to.throw(Error, 'Cannot generate schema with no file name'));
  });
});