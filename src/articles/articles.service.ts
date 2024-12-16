import { Injectable, NotFoundException } from '@nestjs/common';
import { ResponseStatusType, responseStatus } from './article.types';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto.';
import { EntityManager, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Article } from './article.entity';
import { PaginationDto } from './dto/pagination.dto';
import { PaginatedArticlesDto } from './dto/paginated-articles';

const DEFAULT_PAGE = 1;
const DEFAULT_PAGE_SIZE = 10;

@Injectable()
export class ArticlesService {
  constructor(
    @InjectRepository(Article)
    private articleRepository: Repository<Article>,
    private entityManager: EntityManager,
  ) {}

  // Get all articles with pagination
  async getAllArticles(
    paginationDTO: PaginationDto,
  ): Promise<PaginatedArticlesDto> {
    const take = paginationDTO.limit
      ? Number(paginationDTO.limit)
      : DEFAULT_PAGE_SIZE;
    const page = paginationDTO.page ? Number(paginationDTO.page) : DEFAULT_PAGE;

    const [articles, total] = await this.articleRepository.findAndCount({
      where: { is_deleted: false },
      select: ['id', 'title', 'image'],
      skip: (page - 1) * take,
      take: take,
    });

    return { articles, total, page, pageCount: Math.ceil(total / take) };
  }

  // Get a specific article by ID
  async getArticle(articleId: string): Promise<Article> {
    const article = await this.articleRepository.findOneBy({
      id: articleId as any,
    });

    if (!article) throw new NotFoundException('Article not found');

    return article;
  }

  // Create a new article
  async createArticle(
    createArticleDto: CreateArticleDto,
  ): Promise<ResponseStatusType> {
    const article = new Article(createArticleDto);
    await this.entityManager.save(article);

    return responseStatus.OK;
  }

  // Edit an existing article
  async editArticle(
    articleId: string,
    updateArticleDto: UpdateArticleDto,
  ): Promise<Article> {
    let article = await this.articleRepository.findOneBy({ id: articleId });
    article = { ...article, ...updateArticleDto };

    const updatedArticle = await this.entityManager.save(new Article(article));

    if (!updatedArticle) throw new NotFoundException('Article not found');
    return updatedArticle;
  }

  // Remove an article
  async removeArticle(articleId: string): Promise<ResponseStatusType> {
    let article = await this.articleRepository.findOneBy({
      id: articleId,
      is_deleted: false,
    });

    if (!article) throw new NotFoundException('Article not found');

    article = { ...article, is_deleted: true };

    await this.entityManager.save(new Article(article));
    return responseStatus.OK;
  }

  // Remove all articles
  async removeAllArticles(): Promise<ResponseStatusType> {
    const articles = await this.articleRepository.findBy({ is_deleted: false });

    // Mark all articles as deleted
    for (const article of articles) {
      article.is_deleted = true;
      await this.entityManager.save(new Article(article));
    }

    return responseStatus.OK;
  }
}
