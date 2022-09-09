import { Inject, Injectable } from '@nestjs/common';
import { Db } from "mongodb";


@Injectable()
export class MongoService {
  constructor(
    @Inject(`MONGO`) private mongoDatabase: Db) { }
    
  async getPhotos() {
    const photoCollection = this.mongoDatabase.collection(`photo`);
    const photos = await photoCollection.find().toArray();

    return photos;
  }


}
