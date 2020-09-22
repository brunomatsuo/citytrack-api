import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Servicos} from '../models';
import {ServicosRepository} from '../repositories';

export class ServicosController {
  constructor(
    @repository(ServicosRepository)
    public servicosRepository : ServicosRepository,
  ) {}

  @post('/servicos', {
    responses: {
      '200': {
        description: 'Servicos model instance',
        content: {'application/json': {schema: getModelSchemaRef(Servicos)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Servicos, {
            title: 'NewServicos',
            exclude: ['id'],
          }),
        },
      },
    })
    servicos: Omit<Servicos, 'id'>,
  ): Promise<Servicos> {
    return this.servicosRepository.create(servicos);
  }

  @get('/servicos/count', {
    responses: {
      '200': {
        description: 'Servicos model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Servicos) where?: Where<Servicos>,
  ): Promise<Count> {
    return this.servicosRepository.count(where);
  }

  @get('/servicos', {
    responses: {
      '200': {
        description: 'Array of Servicos model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Servicos, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Servicos) filter?: Filter<Servicos>,
  ): Promise<Servicos[]> {
    return this.servicosRepository.find(filter);
  }

  @patch('/servicos', {
    responses: {
      '200': {
        description: 'Servicos PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Servicos, {partial: true}),
        },
      },
    })
    servicos: Servicos,
    @param.where(Servicos) where?: Where<Servicos>,
  ): Promise<Count> {
    return this.servicosRepository.updateAll(servicos, where);
  }

  @get('/servicos/{id}', {
    responses: {
      '200': {
        description: 'Servicos model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Servicos, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Servicos, {exclude: 'where'}) filter?: FilterExcludingWhere<Servicos>
  ): Promise<Servicos> {
    return this.servicosRepository.findById(id, filter);
  }

  @patch('/servicos/{id}', {
    responses: {
      '204': {
        description: 'Servicos PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Servicos, {partial: true}),
        },
      },
    })
    servicos: Servicos,
  ): Promise<void> {
    await this.servicosRepository.updateById(id, servicos);
  }

  @put('/servicos/{id}', {
    responses: {
      '204': {
        description: 'Servicos PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() servicos: Servicos,
  ): Promise<void> {
    await this.servicosRepository.replaceById(id, servicos);
  }

  @del('/servicos/{id}', {
    responses: {
      '204': {
        description: 'Servicos DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.servicosRepository.deleteById(id);
  }
}
