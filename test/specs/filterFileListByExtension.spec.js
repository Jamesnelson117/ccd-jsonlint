const expect = require('chai').expect,
  filterFileListByExtension = require('../../lib/util').filterFileListByExtension

describe('Filter file list by extension', () => {
  it("Should return true if a file with a .json extension", () => {
    let result = filterFileListByExtension('test.json');
    expect(result).to.equal(true);
  });

  it("Should return false if a file with a .txt extension and default arguments.", () => {
    let result = filterFileListByExtension('test.txt');
    expect(result).to.equal(false);
  });

  it("Should return false if a file with a .json extension, filtering on .txt extension", () => {
    let result = filterFileListByExtension('test.json', 'txt');
    expect(result).to.equal(false);
  });

  it("Should return true if a file with a .txt extension, filtering on .txt extension", () => {
    let result = filterFileListByExtension('test.txt', 'txt');
    expect(result).to.equal(true);
  });

  it("Should filter an array of mixed file paths", () => {
    let files = ['fileOne.json', 'fileTwo.txt', 'fileThree.json'];
    let result = files.filter(file => filterFileListByExtension(file));
    expect(result).to.deep.equal(['fileOne.json', 'fileThree.json']);
  });

  it("Filtering on a full array of JSON files will return full set of JSON files", () => {
    let files = ['fileOne.json', 'fileTwo.json', 'fileThree.json'];
    let result = files.filter(file => filterFileListByExtension(file));
    expect(result).to.deep.equal(files);
  });

  it("Filtering on a full array of txt files will return an empty array", () => {
    let files = ['fileOne.txt', 'fileTwo.txt', 'fileThree.txt'];
    let result = files.filter(file => filterFileListByExtension(file));
    expect(result).to.have.length(0);
  });
});
