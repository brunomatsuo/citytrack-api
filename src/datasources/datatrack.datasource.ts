import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'datatrack',
  connector: 'postgresql',
  url: 'postgres://hmiqkccgsqvayy:d8e5ab98c355b4a310b5b3f4745ded709d21be68336e6cd89900294ae11dc7ae@ec2-23-22-156-110.compute-1.amazonaws.com:5432/d3l11p98g7h5c',
  host: 'ec2-23-22-156-110.compute-1.amazonaws.com',
  port: 5432,
  user: 'hmiqkccgsqvayy',
  password: 'd8e5ab98c355b4a310b5b3f4745ded709d21be68336e6cd89900294ae11dc7ae',
  database: 'd3l11p98g7h5c'
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
