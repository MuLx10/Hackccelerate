export interface Post {
  type: string;

  filters: {
    tag?: string,
    author?: string,
    favorited?: string,
    limit?: number,
    offset?: number
  };
}