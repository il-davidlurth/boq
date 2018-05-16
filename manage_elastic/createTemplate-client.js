'use strict';

const elasticsearch = require('elasticsearch');
const elastic = new elasticsearch.Client({
  host: 'http://blak-es0:9200'
  //, log: 'trace'
});

var params = {
  name: 'client',
  //timeout: '10m',
  body: {
    template: 'client-*',
    settings: {
      number_of_shards: 1,
      number_of_replicas: 0
    },
    mappings: {
      doc: {
        properties: {
          TimeStamp: { type: 'date', format: 'strict_date_optional_time' },
          Activity: { type: 'keyword' },
          AvgFrameRate: { type: 'float' },
          BoosterBits: { type: 'integer' },
          CpuCores: { type: 'integer' },
          CpuModel: { type: 'text' },
          CpuSpeed: { type: 'integer' },
          Dataset: { type: 'short' },
          DeviceId: { type: 'keyword' },
          DeviceModel: { type: 'text' },
          DeviceName: { type: 'text' },
          DownloadedBytes: { type: 'integer' },
          Elapsed: { type: 'integer' },
          EngineAddress: { type: 'keyword' },
          Environment: { type: 'keyword' },
          Exception: { type: 'text' },
          GpuVendor: { type: 'text' },
          GpuVersion: { type: 'text' },
          LaunchUrl: { type: 'text' },
          LowestFrameRate: { type: 'float' },
          Measurement: { type: 'long' },
          MediaServer: { type: 'text' },
          MediaVersion: { type: 'keyword' },
          Message: { type: 'text' },
          OSArchitecture: { type: 'long' },
          OSFamily: { type: 'keyword' },
          OSVersion: { type: 'keyword' },
          OperatingSystem: { type: 'text' },
          OsArchitecture: { type: 'text' },
          PeakFrameRate: { type : 'float' },
          Platform: {
            type: 'text',
            fields: {
              raw: { type: 'keyword' }
            }
          },
          PlatformName: { type: 'keyword' },
          PlatformVersion: { type: 'keyword' },
          ProcessId: { type: 'long' },
          Product: { type: 'keyword' },
          Ram: { type: 'integer' },
          Reason: { type: 'text' },
          Server: { type: 'text' },
          SessionElapsedTime: { type: 'double' },
          SessionId: { type: 'keyword' },
          SessionPausedTime: { type: 'double' },
          SessionPrescribedTime: { type: 'double' },
          Severity: { type: 'keyword' },
          ShaderGenerations: { type: 'integer' },
          SiteCode: {
            type: 'text',
            fields: {
              raw: { type: 'keyword' }
            }
          },
          Source: { type: 'keyword' },
          Stack: { type: 'text' },
          ThreadId: { type: 'long' },
          Throughput: { type: 'float' },
          TotalMemory: { type: 'integer' },
          UsedMemory: { type: 'integer' },
          UserAgent: { type: 'text' },
          Username: {
            type: 'text',
            fields: {
              raw: { type: 'keyword' }
            }
          },
          Version: {
            type: 'text',
            fields: {
              raw: { type: 'keyword' }
            }
          },
          XP: { type: 'integer' }
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