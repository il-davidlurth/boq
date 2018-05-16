'use strict';

const elasticsearch = require('elasticsearch');
const elastic = new elasticsearch.Client({
  host: 'http://blak-es0:9200'
  //, log: 'trace'
});

var params = {
  name: 'portal',
  //timeout: '10m',
  body: {
    template: 'portal-*',
    settings: {
      number_of_shards: 1,
      number_of_replicas: 0
    },
    mappings: {
      doc: {
        properties: {
          TimeStamp: { type: 'date', format: 'strict_date_optional_time' },
          Details: { type: 'text' },
          Environment: { type: 'keyword' },
          Message: { type: 'text' },
          OSArchitecture: { type: 'text' },
          OSFamily: { type: 'keyword' },
          OSVersion: { type: 'keyword' },
          PlatformName: { type: 'keyword' },
          PlatformVersion: { type: 'keyword' },
          ReferrerUrl: { type: 'text' },
          RequestedUrl: { type: 'text' },
          Service: { type: 'keyword' },
          Severity: { type: 'keyword' },
          SiteCode: { type: 'keyword' },
          Source: { type: 'keyword' },
          Stack: { type: 'text' },
          StatusCode: { type: 'keyword' },
          UserAgent: { type: 'text' },
          Username: { type: 'keyword' },
          Version: { type: 'keyword' }
        }
      }
    }
  }
};


elastic.indices.putTemplate(params, (err, res) => {
  if (err)
    console.log(err);
  else
    console.log(res);
});

process.on('uncaughtException', (err) => {
  console.log(err);
});