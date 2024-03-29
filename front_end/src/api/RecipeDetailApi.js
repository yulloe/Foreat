import { instance } from "../api/Axios";

export const getRecipeDetail = async (recipe_seq) => {
  const response = await instance.get(`/recipes/${recipe_seq}`);
  return response.data;
};

export const getReviewList = async (recipe_seq) => {
  const response = await instance.get(`/recipes/${recipe_seq}/reviews`);
  return response.data;
};

export const likeRecipe = async (recipe_seq) => {
  const response = await instance.get(`/recipes/${recipe_seq}/likes`);
  return response.data;
};