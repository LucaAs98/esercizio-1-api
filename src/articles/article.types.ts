export type Article = {
  id?: string;
  title: string;
  subtitle: string;
  summary: string;
  date: string;
  author: string;
  text: string;
  image?: string;
};

export type SimpleArticle = Pick<Article, 'id' | 'title' | 'image'>;

export const responseStatus = {
  OK: 'OK',
  ERROR: 'ERROR',
} as const;

export type ResponseStatusType =
  (typeof responseStatus)[keyof typeof responseStatus];
