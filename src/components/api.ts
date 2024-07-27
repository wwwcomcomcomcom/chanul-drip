import axios from "axios";
import { generatePosts } from "./apiMockup";

export interface Post {
  id: number;
  title: string;
  body: string;
}

export function getPosts(): Promise<Post[]> {
  return axios
    .get<Post[]>("http://localhost:5173/api/posts")
    .then((response) => {
      return [...response.data, ...generatePosts()];
    })
    .catch((error) => {
      console.error("Error fetching posts:", error);
      return generatePosts();
    });
}
