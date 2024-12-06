import { Injectable } from '@nestjs/common';

export type Article = {
  id: number;
  title: string;
  subtitle: string;
  summary: string;
  date: Date;
  author: string;
  text: string;
  image?: string;
};

export const articleExample: Article = {
  id: 0,
  title: 'Sample Title',
  subtitle: 'Sample Subtitle',
  summary: 'This is a summary of the article.',
  date: new Date('2024-12-06'),
  author: 'Author Name',
  text: 'This is the full text of the article. It contains all the details and content of the article.',
  image: 'https://example.com/image.jpg',
};

export enum ResponseStatus {
  'OK',
  'ERROR',
}

@Injectable()
export class ArticlesService {
  private articles: Article[] = [articleExample];

  // Get all articles
  getAllArticles(): Article[] {
    return this.articles;
  }

  // Get a specific article by ID
  getArticle(articleId: number): Article {
    const article = this.articles.find((article) => article.id === articleId);
    if (!article) {
      throw new Error('Article not found');
    }
    return article;
  }

  // Create a new article
  createArticle(article: Article): Article {
    const newArticle = { ...article, id: this.articles.length + 1 }; // Assign a new ID
    this.articles.push(newArticle);
    return newArticle;
  }

  // Edit an existing article
  editArticle(articleId: number, editedArticle: Partial<Article>): Article {
    const articleIndex = this.articles.findIndex(
      (article) => article.id === articleId,
    );
    if (articleIndex === -1) {
      throw new Error('Article not found');
    }
    const updatedArticle = { ...this.articles[articleIndex], ...editedArticle };
    this.articles[articleIndex] = updatedArticle;
    return updatedArticle;
  }

  // Remove an article
  removeArticle(articleId: number): ResponseStatus {
    const articleIndex = this.articles.findIndex(
      (article) => article.id === articleId,
    );
    if (articleIndex === -1) {
      throw new Error('Article not found');
    }
    this.articles.splice(articleIndex, 1); // Remove the article

    return ResponseStatus.OK;
  }
}
