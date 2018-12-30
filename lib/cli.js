#!/usr/bin/env node
const lint = require('./util/index').lint;
lint(process.argv.slice(2)[0]);