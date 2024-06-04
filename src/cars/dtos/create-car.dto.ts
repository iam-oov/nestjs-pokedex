import { IsString } from 'class-validator';

export class createCarDto {
  @IsString()
  readonly brand: string;

  @IsString()
  readonly model: string;
}
