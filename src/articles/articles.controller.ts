import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import {
  Article,
  purgeArticlesData,
  responseStatus,
  ResponseStatusType,
} from './article.types';
import { ArticlesService } from './articles.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto.';
import { GetArticleDto } from './dto/get-article.dto';
import { PaginationDto } from './dto/pagination.dto';
import { PaginatedArticlesDto } from './dto/paginated-articles';

@Controller('articles')
export class ArticlesController {
  constructor(private articleService: ArticlesService) {}

  @Get()
  getAllArticles(
    @Query(ValidationPipe) paginationDTO: PaginationDto,
  ): Promise<PaginatedArticlesDto> {
    return this.articleService.getAllArticles(paginationDTO);
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

  @Delete('delete/:id')
  removeArticle(
    @Param(ValidationPipe) { id: articleId }: GetArticleDto,
  ): Promise<ResponseStatusType> {
    return this.articleService.removeArticle(articleId.toString());
  }

  @Delete('purge')
  async purgeDatabase(): Promise<ResponseStatusType> {
    await this.articleService.removeAllArticles(); // Rimuove tutti gli articoli
    for (const article of purgeArticlesData) {
      await this.articleService.createArticle(article);
    }
    return responseStatus.OK;
  }
}
