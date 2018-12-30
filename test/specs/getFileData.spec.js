const expect = require('chai').expect,
  getFileData = require('../../lib/util').getFileData;

describe('Get file data', () => {
  it('Should read file data', () => {
    const file = './test/mock-ccd-definition/Jurisdiction.json';
    const jurisdictionContents = [
      {
        "LiveFrom": "01/01/2017",
        "ID": "PUBLICLAW",
        "Name": "Family Public Law",
        "Description": "Family Public Law"
      }
    ];

    let result = getFileData(`${file}`);
    expect(JSON.parse(result)).to.deep.eq(jurisdictionContents);
  });

  it('Should throw an error with a non existent file', () => {
    let file = '../NotAValidFilePath.json';
    expect(() => getFileData(`${file}`)).to.throw(Error, `Could not read ${file}`);
  });

  it('Should throw an error for an empty file', () => {
    expect(() => getFileData(null)).to.throw(Error, `A file must be provided to be read`);
  })
});