import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Servicos extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  nome: string;

  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'date',
    required: true,
  })
  dataCriacao: string;

  @property({
    type: 'date',
  })
  dataAlteracao?: string;

  @property({
    type: 'string',
    required: true,
  })
  estado: string;

  @property({
    type: 'string',
    required: true,
  })
  cidade: string;

  @property({
    type: 'string',
    required: true,
  })
  bairro: string;

  @property({
    type: 'string',
    required: true,
  })
  endereco: string;

  @property({
    type: 'number',
  })
  numeroEndereco?: number;

  @property({
    type: 'string',
    required: true,
  })
  status: string;

  @property({
    type: 'string',
    required: true,
  })
  categoria: string;

  @property({
    type: 'string',
    required: true,
  })
  descricao: string;

  @property({
    type: 'string',
  })
  comentarios?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Servicos>) {
    super(data);
  }
}

export interface ServicosRelations {
  // describe navigational properties here
}

export type ServicosWithRelations = Servicos & ServicosRelations;
