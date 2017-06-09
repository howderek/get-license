#! /usr/bin/env node

var program = require('commander')
var request = require('request')
var cheerio = require('cheerio')

var spdx;

program
  .version('1.0.0')
  .arguments('<SPDX_short_identifier>')
  .action((SPDX_short_identifier) => {
    spdx = SPDX_short_identifier
  })
  .parse(process.argv)

if (typeof spdx === 'undefined') {
   console.error('\n  You must specify a command');
   program.help()
}

var substituions = {
  'GPL': 'GPL-3.0',
  'AFL': 'AFL-3.0',
  'Apache': 'Apache-2.0',
  'CCO': 'CC0-1.0',
  'BSD': 'BSD-2-Clause',
  'LGPL': 'LGPL-2.0',
  'MPL': 'MPL-2.0'
}

for (var name in substituions) {
  if (spdx === name) {
    spdx = substituions[name]
  }
}

request('https://spdx.org/licenses/' + spdx + '.html', (err, res, html) => {
  if (!err && res.statusCode == 200) {
    let $ = cheerio.load(html)
    console.log($('[property^="spdx:licenseText"]').text())
  }
})