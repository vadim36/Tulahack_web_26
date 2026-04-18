import { createBrowserRouter, Outlet } from "react-router-dom";
import { App } from "./App";
import { ROUTES } from "@/shared/model/routes";
import { Providers } from "./providers";
import { Sidebar } from "@/features/sidebar";

export const router = createBrowserRouter([
  {
    element: (
      <Providers>
        <App />
      </Providers>
    ),
    children: [
      {
        element: (
          <div className="flex items-stretch min-h-screen overflow-x-hidden">
            <Sidebar />
            <div className="flex-1">
              <Outlet />
            </div>
          </div>
        ),
        children: [
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
            path: ROUTES.ACCOUNT,
            lazy: () => import("@/features/account/account.page"),
          },
          {
            path: ROUTES.CHATS,
            lazy: () => import("@/features/chats/chats.page"),
          },
          {
            path: ROUTES.MY_POSTS,
            lazy: () => import("@/features/post/my-posts.page")
          },
          {
            path: ROUTES.BOOKMARKS,
            lazy: () => import("@/features/post/bookmarks.page")
          }
        ],
      },
      {
        path: ROUTES.HOME,
        lazy: () => import("@/features/landing/landing.page"),
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
      {},
    ],
  },
]);
