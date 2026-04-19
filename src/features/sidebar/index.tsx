import { NavLink } from "react-router-dom";
import { ROUTES } from "@/shared/model/routes";

const menuItems = [
  {
    path: ROUTES.ACCOUNT,
    name: "Профиль",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M12 12c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm0 2c-3.33 0-10 1.67-10 5v3h20v-3c0-3.33-6.67-5-10-5z" />
      </svg>
    ),
  },
  {
    path: ROUTES.MY_POSTS,
    name: "Мои Анкеты",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
        <rect x="4" y="3" width="16" height="18" rx="1" />
        <line x1="8" y1="8" x2="16" y2="8" />
        <line x1="8" y1="12" x2="16" y2="12" />
        <line x1="8" y1="16" x2="13" y2="16" />
      </svg>
    ),
  },
  {
    path: ROUTES.CREATE_POST,
    name: "Создать анкету",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <path d="M4 4h12l4 4v12H4z" />
        <path d="M16 4v4h4" />
        <path d="M12 11v6M9 14h6" />
      </svg>
    ),
  },
  {
    path: ROUTES.FEED,
    name: "Лента",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
        <path d="M3 7l9-4 9 4-9 4-9-4z" />
        <path d="M3 12l9 4 9-4" />
        <path d="M3 17l9 4 9-4" />
      </svg>
    ),
  },
  /*{
    path: ROUTES.BOOKMARKS,
    name: "Закладки",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.5" fill="none" />
      </svg>
    ),  
  },*/
];

export function Sidebar() {
  return (
    <aside
      className="relative min-h-full w-56 shrink-0 overflow-hidden"
      style={{
        backgroundImage: "url('/figma/notebook-left.png')",
        backgroundSize: "cover",
        backgroundPosition: "right center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative z-10 pt-28 pl-10 pr-6 pb-10 flex flex-col gap-5 font-serif">
        {menuItems.map(({ path, name, icon }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `group flex items-center gap-3 text-[22px] leading-none transition-colors ${
                isActive ? "text-olive" : "text-black hover:text-olive"
              }`
            }
          >
            {({ isActive }) => (
              <>
                <span className="text-black/70">{icon}</span>
                <span
                  className={`${
                    isActive
                      ? "bg-[#cdd6b2]/70 px-2 py-0.5 rounded-sm"
                      : ""
                  }`}
                >
                  {name}
                </span>
              </>
            )}
          </NavLink>
        ))}
      </div>
        <div className="absolute bottom-0 left-0 w-full">
            <img src={"/figma/flowers-left.png"} className="absolute bottom-0 left-10 rotate-30" />
            <img src={"/figma/flowers-left.png"} className="absolute bottom-0 -left-5 -rotate-5" />
        </div>
    </aside>
  );
}
