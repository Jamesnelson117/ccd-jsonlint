#!/usr/bin/env node
const lint = require('./util.js').lint;
lint(process.argv.slice(2)[0]);