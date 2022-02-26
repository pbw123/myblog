import { get,jsonpost,jsonget } from "./base";

export const articleList = params => get("article/articleList");
export const getAllMessage = params => get("message/getAllMessage");
export const login = params => jsonpost("user/login");
