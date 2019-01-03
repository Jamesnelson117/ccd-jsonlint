const colors = require('colors'),
  path = require('path'),
  fs = require('fs'),
  Ajv = require('ajv'),
  ajv = new Ajv(),
  check = String.fromCharCode(0x2713).green,
  cross = String.fromCharCode(0x2717).red;

/**
 * Tests wether directory is valid
 *
 * @param {directory} string - Directory to read files from
 * @returns boolean
 */
const isValidDirectory = directory => {
  if (!directory) throw new Error('No directory provided');
  try {
    return fs.lstatSync(directory).isDirectory();
  } catch (expection) {
    throw new Error(`${directory} is not a valid directory`);
  };
};

/**
 * Recursively gets a list of files from a directory
 *
 * @param {directory} string - Directory to read files from
 * @returns array - An array of files
 */
const getFileListFromDirectory = (dir, filelist) => {
  if (!dir) throw new Error('Cannot parse an empty directory');
  try {
    let files = fs.readdirSync(dir);
    filelist = filelist || [];
    files.forEach(function(file) {
      if (fs.statSync(path.join(dir, file)).isDirectory()) {
        filelist = getFileListFromDirectory(path.join(dir, file), filelist);
      }
      else {
        filelist.push(path.join(dir, file));
      }
    });
  } catch (expection) {
    throw new Error(`Failed to read directory ${dir}`);
  };
  return filelist;
};

/**
 * Returns file data from a file
 *
 * @param {String} fileName - File to be read from
 * @returns string - File data as string
 */
const getFileData = fileName => {
  if (!fileName) throw new Error('A file must be provided to be read');
  let data;
  try {
    data = fs.readFileSync(fileName, 'utf8');
  } catch(exception) {
    throw new Error(`Could not read ${fileName}`);
  };
  return data;
};

/**
 * Returns a JSON SCHEMA for a CCD File
 *
 * @param {String} fileName - File to be read from
 * @returns Object - Schema Object
 */
const getSchema = fileName => {
  if (!fileName) throw new Error('Cannot generate schema with no file name');
  let schema = {};
  fileName = extractFileName(fileName);
  try {
    schema = require(`./ccd-schema/${fileName}.schema.js`);
  } catch (e) {}
  return schema;
};

/**
 * Filters an arraylist by an extension
 *
 * @param {String} file - File path
 * @returns boolean
 */
const filterFileListByExtension = (file, ext = 'json') => {
  return file.endsWith(`.${ext}`) ? true : false;
};

/**
 * Removes extension and procedding file meta data from a file path
 *
 * @param {String} filePath - File's full path name
 * @returns string
 */
const extractFileName = filePath => {
  return filePath
    .substring(filePath.lastIndexOf('/') + 1)
    .split('.')[0];
};

/**
 * Parses a directory for CCD Defintion files to validate
 *
 */
const lint = dir => {
  let passed = 0, failed = 0;

  isValidDirectory(dir);

  let files = getFileListFromDirectory(dir)
    .filter(file => filterFileListByExtension(file, 'json'));

  if (!files.length) throw new Error(`Could not find JSON files in ${dir}`);

  console.log('\n');
  console.log('CCD Defintion Validator');
  console.log('\n');

  files.map(file => {
    let fileData = getFileData(file),
      schema = getSchema(file);

    if (ajv.validate(schema, JSON.parse(fileData))) {
      console.log(`${check} ${file}`);
      passed++;
    } else {
      console.log(`${cross} ${file}`);
      ajv.errors.forEach(error => {
        console.log(`  ${error.dataPath} - ${error.message}`);
      });
      failed++;
    };

    if ((passed+failed) == files.length) {
      console.log('\n');
      console.log(`   ${check} ${passed} valid file${passed > 1 ? 's': ''}`);
      console.log(`   ${cross} ${failed} invalid file${passed > 1 ? 's': ''}`);
      console.log('\n');
      process.exit(failed);
    };
  });
}

module.exports = {
  lint,
  extractFileName,
  filterFileListByExtension,
  getSchema,
  getFileListFromDirectory,
  getFileData,
  isValidDirectory
};
