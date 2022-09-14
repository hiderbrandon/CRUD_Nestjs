import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { CreateClientDto } from '../dtos/create-Client.dto';
import { Client } from '../entities/client.entity';
import { ClientsService } from '../services/clients.service';

describe('ClientsService', () => {
  const myClient: CreateClientDto = { firstName: "hider", lastName: "vargas", age: 26, id: 1, idType: "cc", city: "cali" }
  let service: ClientsService;

  const mockClientReppository = {
    create: jest.fn().mockImplementation((aClient) => { aClient: Client }),
    findOneBy: jest.fn().mockImplementation((aClient) => { Promise.resolve({ ...aClient }) }),
    save: jest.fn().mockImplementation((aClient) => { Promise.resolve({ ...aClient }) })
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ClientsService,
        {
          provide: getRepositoryToken(Client),
          useValue: mockClientReppository,
        }
      ],
    }).compile();

    service = module.get<ClientsService>(ClientsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it(`it should create a new Client , verifying if it exist before`, async () => {
    expect(await service.create(myClient)).toEqual(myClient)
  });

});
