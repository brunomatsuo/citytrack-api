import {DefaultCrudRepository} from '@loopback/repository';
import {Servicos, ServicosRelations} from '../models';
import {DatatrackDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ServicosRepository extends DefaultCrudRepository<
  Servicos,
  typeof Servicos.prototype.id,
  ServicosRelations
> {
  constructor(
    @inject('datasources.datatrack') dataSource: DatatrackDataSource,
  ) {
    super(Servicos, dataSource);
  }
}
