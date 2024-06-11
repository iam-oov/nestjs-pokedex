import { IsOptional, Min } from 'class-validator';

export class PaginationDto {
  @IsOptional()
  @Min(1)
  limit?: number;

  @IsOptional()
  @Min(0)
  offset?: number;
}
