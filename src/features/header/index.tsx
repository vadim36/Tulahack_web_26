import { ROUTES } from "@/shared/model/routes";
import { MessageCircle, PawPrint } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

export function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="mb-4 flex items-center justify-center">
      <div className="inline-flex rounded-full bg-gray-100 p-1">
        <button
          onClick={() => navigate(ROUTES.FEED)}
          className={`flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-medium transition ${
            location.pathname.includes(ROUTES.FEED)
              ? "bg-white text-black shadow-sm"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          <PawPrint className="size-4" />
          <span>Поиск</span>
        </button>
        <button
          onClick={() => navigate(ROUTES.CHATS)}
          className={`flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-medium transition ${
            location.pathname.includes(ROUTES.CHATS)
              ? "bg-white text-black shadow-sm"
              : "text-gray-400 hover:text-gray-500"
          }`}
        >
          <MessageCircle className="size-4" />
          <span>Сообщения</span>
        </button>
        <button
          onClick={() => navigate(ROUTES.LIKED_POSTS)}
          className={`flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-medium transition ${
            location.pathname.includes(ROUTES.LIKED_POSTS)
              ? "bg-white text-black shadow-sm"
              : "text-gray-400 hover:text-gray-500"
          }`}
        >
          <span>Сохраненные</span>
        </button>
      </div>
    </div>
  );
}