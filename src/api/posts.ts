import { Post } from '../types/Post';
import { getRequest, deleteRequest } from './api';

export const getUsersPosts = async (): Promise<Array<Post>> => {
  return getRequest('/posts');
};

export const getUserPostsById
  = async (userId: number): Promise<Array<Post>> => {
    return getRequest(`/posts?userId=${userId}`);
  };

export const getPostDetailsById = async (postId: number): Promise<Post> => {
  return getRequest(`/posts/${postId}`);
};

export const deletePostById = async (postId: number) => {
  return deleteRequest(`/posts/${postId}`);
};
