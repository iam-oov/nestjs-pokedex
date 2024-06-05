import { Injectable } from '@nestjs/common';

@Injectable()
export class SeedsService {
  populateDB() {
    return 'This action adds a new seed';
  }
}
