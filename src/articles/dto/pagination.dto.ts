import { Type } from 'class-transformer';
import { IsNumber, IsOptional, IsPositive } from 'class-validator';

export class PaginationDto {
  @IsNumber()
  @Type(() => Number)
  @IsPositive()
  @IsOptional()
  page: number;

  @IsNumber()
  @Type(() => Number)
  @IsPositive()
  @IsOptional()
  limit: number;
}
