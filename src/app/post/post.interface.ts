export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
  created: string;
  updated: string;
}

export interface Comment {
  postId: number;
  userId: string;
  id: number;
  body: string;
  created: string;
  updated: string;
}
