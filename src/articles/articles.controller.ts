import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { Article, ResponseStatusType, SimpleArticle } from './article.types';
import { ArticlesService } from './articles.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto.';
import { GetArticleDto } from './dto/get-article.dto';

@Controller('articles')
export class ArticlesController {
  constructor(private articleService: ArticlesService) {}

  @Get()
  getAllArticles(): Promise<SimpleArticle[]> {
    return this.articleService.getAllArticles();
  }

  @Get(':id')
  getArticle(
    @Param(ValidationPipe) { id: articleId }: GetArticleDto,
  ): Promise<Article> {
    return this.articleService.getArticle(articleId.toString());
  }

  @Post()
  createArticle(
    @Body(ValidationPipe) createArticleDto: CreateArticleDto,
  ): Promise<ResponseStatusType> {
    return this.articleService.createArticle(createArticleDto);
  }

  @Patch(':id')
  editArticle(
    @Param(ValidationPipe) { id: articleId }: GetArticleDto,
    @Body(ValidationPipe) updateArticleDto: UpdateArticleDto,
  ): Promise<Article> {
    return this.articleService.editArticle(
      articleId.toString(),
      updateArticleDto,
    );
  }

  @Delete(':id')
  removeArticle(
    @Param(ValidationPipe) { id: articleId }: GetArticleDto,
  ): Promise<ResponseStatusType> {
    return this.articleService.removeArticle(articleId.toString());
  }
}
