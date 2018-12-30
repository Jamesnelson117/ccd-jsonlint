const expect = require('chai').expect,
  getFileListFromDirectory = require('../../lib/util').getFileListFromDirectory;

describe("Get file list from a directory", () => {
  it("Should return an array of files from a directory", () => {
    let expectedFiles = ['test/mock-ccd-definition/AuthorisationCaseEvent.json',
    'test/mock-ccd-definition/AuthorisationCaseField.json',
    'test/mock-ccd-definition/AuthorisationCaseState.json',
    'test/mock-ccd-definition/AuthorisationCaseType.json',
    'test/mock-ccd-definition/CaseEvent.json',
    'test/mock-ccd-definition/CaseEventToFields.json',
    'test/mock-ccd-definition/CaseField.json',
    'test/mock-ccd-definition/CaseType.json',
    'test/mock-ccd-definition/CaseTypeTab.json',
    'test/mock-ccd-definition/ComplexTypes.json',
    'test/mock-ccd-definition/FixedLists.json',
    'test/mock-ccd-definition/Jurisdiction.json',
    'test/mock-ccd-definition/SearchInputFields.json',
    'test/mock-ccd-definition/SearchResultFields.json',
    'test/mock-ccd-definition/State.json',
    'test/mock-ccd-definition/UserProfile.json',
    'test/mock-ccd-definition/WorkBasketInputFields.json',
    'test/mock-ccd-definition/WorkBasketResultFields.json',];

    let result = getFileListFromDirectory('./test/mock-ccd-definition');
    expect(result).to.have.members(expectedFiles);
  });

  it("Should recursively read all files from a directory", () => {
    let expectedFiles = [
      "test/mock-recursive-json/recursive/recursive-test.json",
      "test/mock-recursive-json/test.json"
    ];
    
    let result = getFileListFromDirectory('./test/mock-recursive-json');
    expect(result).to.have.members(expectedFiles);
  });

  it("Should throw an error if an invalid directory is provided", () => {
    let path = './notValid';
    expect(() => getFileListFromDirectory(`${path}`)).to.throw(Error, `Failed to read directory ${path}`);
  });

  it("Should throw an error if an empty string is passed in", () => {
    expect(() => getFileListFromDirectory('')).to.throw(Error, 'Cannot parse an empty directory');
  });
});