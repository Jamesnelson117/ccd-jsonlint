const expect = require('chai').expect,
  extractFileName = require('../../lib/util').extractFileName;

describe("Extract file name", function() {
  it("Should strip the extension and path from a file", function() {
    let result = extractFileName('/usr/folder/testFile.json');
    expect(result).to.equal('testFile');
  });

  it("Should stip the extension from a file", function() {
    let result = extractFileName('testFile.json');
    expect(result).to.equal('testFile');
  });
  
  it("Should return an empty string with an empty argument", function() {
    let result = extractFileName('');
    expect(result).to.equal('');
  });
});