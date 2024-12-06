import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Article, ArticlesService, ResponseStatus } from './articles.service';

@Controller('articles')
export class ArticlesController {
  constructor(private articleService: ArticlesService) {}

  @Get()
  getAllArticles(): Article[] {
    return this.articleService.getAllArticles();
  }

  @Get(':id')
  getArticle(@Param('id') articleId: number): Article {
    return this.articleService.getArticle(articleId);
  }

  @Post()
  createArticle(@Body() article: Article): Article {
    return this.articleService.createArticle(article);
  }

  @Patch(':id')
  editArticle(
    @Param('id') articleId: number,
    @Body() editedArticle: Partial<Article>,
  ) {
    this.articleService.editArticle(articleId, editedArticle);
  }

  @Delete(':id')
  removeArticle(@Param('id') articleId: number): ResponseStatus {
    return this.articleService.removeArticle(articleId);
  }
}
