import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'postgresql-curly-77241',
  connector: 'postgresql',
  url: 'postgres://uafvbivfcaunrx:908d239c1132ec67294c4b68529b6bf37afd3573162e7adc535278bb6a6b8cfe@ec2-35-169-92-231.compute-1.amazonaws.com:5432/d13hf6t016a9gs',
  host: 'ec2-35-169-92-231.compute-1.amazonaws.com',
  port: 5432,
  user: 'uafvbivfcaunrx',
  password: '908d239c1132ec67294c4b68529b6bf37afd3573162e7adc535278bb6a6b8cfe',
  database: 'd13hf6t016a9gs'
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class DatatrackDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'datatrack';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.datatrack', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
