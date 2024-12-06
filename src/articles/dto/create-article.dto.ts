import {
  IsString,
  IsNotEmpty,
  MaxLength,
  IsOptional,
  IsBoolean,
} from 'class-validator';

export class CreateArticleDto {
  @IsString()
  @IsNotEmpty({ message: 'title is required.' })
  @MaxLength(255, { message: 'title must not exceed 255 characters.' })
  title: string;

  @IsString()
  @IsNotEmpty({ message: 'Subtitle is required.' })
  @MaxLength(255, { message: 'subtitle must not exceed 255 characters.' })
  subtitle: string;

  @IsString()
  @IsNotEmpty({ message: 'summary is required.' })
  summary: string;

  @IsNotEmpty({ message: 'date is required.' })
  @IsString()
  date: string;

  @IsString()
  @IsNotEmpty({ message: 'author is required.' })
  @MaxLength(255, { message: 'author name must not exceed 255 characters.' })
  author: string;

  @IsString()
  @IsNotEmpty({ message: 'text is required.' })
  text: string;

  @IsString()
  @IsOptional()
  image?: string;

  @IsBoolean()
  is_deleted: boolean;
}
