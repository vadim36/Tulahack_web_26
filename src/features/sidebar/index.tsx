import { NavLink } from "react-router-dom";
import {
  User,
  FileText,
  PlusCircle,
  Home,
} from "lucide-react";
import { ROUTES } from "@/shared/model/routes";

const menuItems = [
  { path: ROUTES.ACCOUNT, name: "Профиль", icon: User },
  { path: ROUTES.MY_POSTS, name: "Мои анкеты", icon: FileText },
  { path: ROUTES.CREATE_POST, name: "Создать анкету", icon: PlusCircle },
  { path: ROUTES.FEED, name: "Лента", icon: Home }
];

export function Sidebar() {
  return (
      <aside
        className="min-h-full w-72 bg-linear-to-b from-white to-gray-50 shadow-xl border-r border-gray-200"
      >
        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-2xl font-bold bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Меню
          </h2>
        </div>

        <nav className="p-4 space-y-2">
          {menuItems.map(({ path, name, icon: Icon }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
                  isActive
                    ? "bg-linear-to-r from-purple-600 to-pink-600 text-white shadow-md"
                    : "text-gray-700 hover:bg-gray-100 hover:translate-x-1"
                }`
              }
            >
              <Icon size={20} />
              <span className="font-medium">{name}</span>
            </NavLink>
          ))}
        </nav>
      </aside>
  );
}
