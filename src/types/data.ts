export interface IPost{
    userId: number;
    id: number;
    title: string;
    body: string;
}
export interface IPosts {
    posts: IPost[];
  }

export interface IComment {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}

export interface IPhoto{
    albumId: number
    id: number
    title: string
    url: string
    thumbnailUrl?: string
}

export interface ITodo{
    userId: number;
    id: number;
    title: string;
    completed: boolean;
} 