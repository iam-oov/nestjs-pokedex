import { Module } from '@nestjs/common';
import { SeedsService } from './seeds.service';
import { SeedsController } from './seeds.controller';
import { CarsModule } from 'src/cars/cars.module';
import { BrandsModule } from 'src/brands/brands.module';

@Module({
  controllers: [SeedsController],
  providers: [SeedsService],
  imports: [CarsModule, BrandsModule],
})
export class SeedsModule {}
