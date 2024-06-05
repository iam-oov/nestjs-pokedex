import { Module } from '@nestjs/common';
import { CarsModule } from './cars/cars.module';
import { BrandsModule } from './brands/brands.module';
import { SeedsModule } from './seeds/seeds.module';

@Module({
  imports: [CarsModule, BrandsModule, SeedsModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
