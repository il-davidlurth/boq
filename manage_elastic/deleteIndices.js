'use strict';

const elasticsearch = require('elasticsearch');
const elastic = new elasticsearch.Client({
  host: 'http://blak-es0:9200'
  //, log: 'trace'
});

var indices = ['booster-*'];

elastic.indices.delete({ index: indices }, (err, res) => {
  if (err)
    console.log(err);
  else {
    console.log(res);
  }
});

process.on('uncaughtException', (err) => {
  console.log(err);
});
