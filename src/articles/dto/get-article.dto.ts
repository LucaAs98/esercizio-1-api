import { IsUUID } from 'class-validator';

export class GetArticleDto {
  @IsUUID()
  id: string;
}
