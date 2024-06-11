import { IsNotEmpty, IsNumber, IsString, Min } from 'class-validator';

export class CreatePokemonDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @Min(1)
  no: number;
}
