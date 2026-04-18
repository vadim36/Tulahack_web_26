import { createBrowserRouter } from "react-router-dom";
import { App } from "./App";
import { ROUTES } from "@/shared/model/routes";
import { Providers } from "./providers";

export const router = createBrowserRouter([
  {
    element: (
      <Providers>
        <App />
      </Providers>
    ),
    children: [
      {
        path: ROUTES.HOME,
        lazy: () => import("@/features/landing/landing.page"),
      },
      {
        path: ROUTES.FEED,
        lazy: () => import("@/features/feed/feed.page"),
      },
      {
        path: ROUTES.PET_POST,
        lazy: () => import("@/features/post/pet-post.page"),
      },
      {
        path: ROUTES.CREATE_POST,
        lazy: () => import("@/features/post/create-pet-post.page"),
      },
      {
        path: ROUTES.LIKED_POSTS,
        lazy: () => import("@/features/feed/feed-liked.page"),
      },
      {
        path: ROUTES.CHATS,
        lazy: () => import("@/features/chats/chats.page"),
      },
      {
        path: ROUTES.LOGIN,
        lazy: () => import("@/features/auth/login.page"),
      },
      {
        path: ROUTES.REGISTER,
        lazy: () => import("@/features/auth/register.page"),
      },
      {
        path: ROUTES.ERROR,
        lazy: () => import("@/features/auth/error.page"),
      },
    ],
  },
]);
