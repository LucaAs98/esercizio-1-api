import { SimpleArticle } from '../article.types';

export class PaginatedArticlesDto {
  articles: SimpleArticle[];
  total: number;
  page: number;
  pageCount: number;
}
