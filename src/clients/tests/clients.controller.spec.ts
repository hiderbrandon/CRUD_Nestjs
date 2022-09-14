import { Test, TestingModule } from '@nestjs/testing';
import { ClientsController } from '../controllers/clients.controller';
import { CreateClientDto } from '../dtos/create-Client.dto';
import { ClientsService } from '../services/clients.service';

describe('ClientsController', () => {
  let controller: ClientsController;
  const mockClientService = {
    create: jest.fn(dto => {
      return { ...dto }
    }
    )
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClientsController],
      providers: [ClientsService]
    })
      .overrideProvider(ClientsService)
      .useValue(mockClientService)
      .compile();

    controller = module.get<ClientsController>(ClientsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it(`should create a User`, () => {
    expect(controller.create({ firstName: "hider", lastName: "vargas", age: 26, id: 1, idType: "cc", city: "cali" })).toEqual({ firstName: "hider", lastName: "vargas", age: 26, id: 1, idType: "cc", city: "cali" })
  })
});
