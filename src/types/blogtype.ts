export interface IBlogInput {
  objectId?: string;
  title?: string;
  tags?: string;
  creator?: string;
  content?: string;
  datetime?: string;
}

export interface IBlogForm {
  title: string;
  tags: string;
  content: string;
}
