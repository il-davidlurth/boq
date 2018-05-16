'use strict';

const elasticsearch = require('elasticsearch');
const elastic = new elasticsearch.Client({
  host: 'http://blak-es0:9200'
  //, log: 'trace'
});

var params = {
  name: 'booster',
  //timeout: '10m',
  body: {
    template: 'booster-*',
    settings: {
      number_of_shards: 1,
      number_of_replicas: 0
    },
    mappings: {
      doc: {
        properties: {
          TimeStamp: { type: 'date', format: 'strict_date_optional_time' },
          AssetTag: { type: 'keyword' },
          CODE_FILE: { type: 'keyword' },
          CODE_FUNC: { type: 'text' },
          CODE_FUNCTION: { type: 'text' },
          CODE_LINE: { type: 'text' },
          COREDUMP_CGROUP: { type: 'text' },
          COREDUMP_CMDLINE: { type: 'text' },
          COREDUMP_COMM: { type: 'text' },
          COREDUMP_CWD: { type: 'text' },
          COREDUMP_ENVIRON: { type: 'text' },
          COREDUMP_EXE: { type: 'text' },
          COREDUMP_FILENAME: { type: 'text' },
          COREDUMP_GID: { type: 'text' },
          COREDUMP_OPEN_FDS: { type: 'text' },
          COREDUMP_OWNER_UID: { type: 'text' },
          COREDUMP_PID: { type: 'text' },
          COREDUMP_PROC_CGROUP: { type: 'text' },
          COREDUMP_PROC_LIMITS: { type: 'text' },
          COREDUMP_PROC_MAPS: { type: 'text' },
          COREDUMP_PROC_STATUS: { type: 'text' },
          COREDUMP_RLIMIT: { type: 'text' },
          COREDUMP_ROOT: { type: 'text' },
          COREDUMP_SESSION: { type: 'text' },
          COREDUMP_SIGNAL: { type: 'text' },
          COREDUMP_SLICE: { type: 'text' },
          COREDUMP_TIMESTAMP: { type: 'text' },
          COREDUMP_UID: { type: 'text' },
          COREDUMP_UNIT: { type: 'text' },
          CPU: { type: 'double' },
          Channel: { type : 'keyword' },
          ConfigVersion: { type: 'keyword' },
          CoreosVersion: { type: 'keyword' },
          DiskGBFree: { type: 'long' },
          DiskGBUsed: { type: 'long' },
          District: { type: 'keyword' },
          DockerTag: { type: 'keyword' },
          Duration_mins: { type: 'float' },
          ERRNO: { type: 'text' },
          EXECUTABLE: { type: 'text' },
          Environment: { type: 'keyword' },
          From: { type: 'text' },
          Gateway: { type: 'text' },
          Guid: { type: 'keyword' },
          Http2XXs: { type: 'long' },
          Http3XXs: { type: 'long' },
          Http4XXs: { type: 'long' },
          Http5XXs: { type: 'long' },
          HttpMisses: { type: 'long' },
          HttpRequests: { type: 'long' },
          HttpUsers: { type: 'long' },
          INTERFACE: { type: 'text' },
          IpAddress: { type: 'keyword' },
          MESSAGE: { type: 'text' },
          MESSAGE_ID: { type: 'text' },
          MacAddress: { type: 'text' },
          MediaFiles: { type: 'long' },
          MediaVersion: { type: 'keyword' },
          MemorySize: { type: 'integer' },
          Message: { type: 'text' },
          MissingFiles: { type: 'text' },
          NetInMBPS: { type: 'double' },
          NetInPPS: { type: 'double' },
          NetMask: { type: 'text' },
          NetOutMBPS: { type: 'double' },
          NetOutPPS: { type: 'double' },
          PRIORITY: { type: 'keyword' },
          Platform: { type: 'text' },
          PrimaryDNS: { type: 'text' },
          Processor: { type: 'text' },
          ProcessorCores: { type: 'integer' },
          ProcessorType: { type: 'text' },
          RESULT: { type: 'text' },
          SYSLOG_FACILITY: { type: 'text' },
          SYSLOG_IDENTIFIER: { type: 'text' },
          SYSLOG_PID: { type: 'text' },
          ScanCount: { type: 'long' },
          ScanErrors: { type: 'long' },
          School: { type: 'keyword' },
          Severity: { type: 'keyword' },
          SiteCode: { type: 'keyword' },
          SizeMB: { type: 'integer' },
          Source: { type: 'keyword' },
          State: { type: 'keyword' },
          To: { type: 'text' },
          UMediaOverride: { type: 'text' },
          UNIT: { type: 'text' },
          UpTime: { type: 'long' },
          UserAgent: { type: 'text' },
          Vendor: { type: 'text' },
          Virtualization: { type: 'text' }
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