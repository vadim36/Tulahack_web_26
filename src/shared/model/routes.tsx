import "react-router-dom";

export const ROUTES = {
  HOME: "/",
  LOGIN: "/login",
  REGISTER: "/register",
  FEED: "/feed",
  PET_POST: "/pet_post/:petId",
  ACCOUNT: "/account",
  CREATE_POST: "/create_post",
  CHATS: "/chats",
  ERROR: "/error",
  MY_POSTS: "/my_posts",
  ACHIEVEMENTS: "/achievements",
} as const;

export type PathParams = {
  [ROUTES.PET_POST]: {
    petId: string;
  };
};

declare module "react-router-dom" {
  interface Register {
    params: PathParams;
  }
}
