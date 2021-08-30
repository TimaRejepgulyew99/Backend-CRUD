import PostModel from "../models/post.js";

export const getAll = async (limit = 10) => {
  return await PostModel.find().limit(limit);
};
export const getById = async (id) => {
  return await PostModel.findById(id);
};
export const update = async (post) => {
  return await PostModel.findByIdAndUpdate(post._id, post, { new: true });
};
export const create = async (post) => {
  console.log(post);
  const newPost = new PostModel(post);
  await newPost.save();
  return PostModel.findById(newPost._id);
};
export const deletePost = async (id) => {
  return await PostModel.findByIdAndDelete(id);
};
