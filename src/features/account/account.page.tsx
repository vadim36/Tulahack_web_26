import { Settings, ChevronDown } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { $privateApi } from "@/shared/api/instance";
import type { PetPost } from "../feed/pet-post";

const userData = {
  avatar: "/figma/avatar.png",
  cover: "/figma/cover.png",
  name: "Иван Иванов",
  email: "nikkul3006@gmail.com",
  city: "Тула, Россия",
};

const savedPosts = [
  { id: 1, image: "" },
  { id: 2, image: "" },
  { id: 3, image: "" },
  { id: 4, image: "" },
];

function AccountPage() {
  const savedPostsQuery = useQuery<{pets: PetPost[]}>({
    queryKey: ["saved_posts"],
    queryFn: () => $privateApi.get("/pets/bookmarks").then(r => r.data),
  });

  if (savedPostsQuery.isLoading) {
    return <span>Загрузка...</span>;
  }

  if (savedPostsQuery.isError) {
    return <span>Error: {savedPostsQuery.error.message}</span>;
  }

  return (
    <div
      className="relative min-h-screen w-full overflow-hidden font-serif"
      style={{
        backgroundImage: "url('/figma/paper-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-cream/40 pointer-events-none" />

      <div className="relative">
        {/* Обложка */}
        <div className="relative mx-auto max-w-[1600px] px-6 pt-6">
          <div className="relative h-56 md:h-72 rounded-b-[46px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.15)]">
            <img
              src={userData.cover}
              alt="Cover"
              className="w-full h-full object-cover"
            />
            <button
              aria-label="Назад"
              className="absolute top-4 left-4 w-16 h-16 rounded-full bg-olive shadow-[0_1px_10px_3px_rgba(0,0,0,0.25)] flex items-center justify-center hover:brightness-95 transition"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="#f5ebda"
                strokeWidth="2.5"
                className="w-7 h-7"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              aria-label="Настройки"
              className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/80 hover:bg-white transition flex items-center justify-center text-olive shadow"
            >
              <Settings size={22} />
            </button>
          </div>
        </div>

        {/* Профиль */}
        <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 md:px-10 mt-[-80px]">
          <div className="flex flex-wrap items-start gap-4 sm:gap-6 md:gap-8">
            <div className="relative z-10 shrink-0">
              <div className="w-32 h-32 sm:w-44 sm:h-44 md:w-56 md:h-56 rounded-full overflow-hidden border-[6px] border-cream shadow-lg bg-white">
                <img
                  src={userData.avatar}
                  alt={userData.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="flex-1 min-w-[240px] relative pt-10 md:pt-28">
              <img
                src={"/figma/image 40.png"}
                className="hidden lg:block absolute z-[1] top-0 -left-30 w-[600px] h-auto object-contain pointer-events-none"
              />
              <img
                src={"/figma/image 44.png"}
                className="hidden lg:block absolute z-0 top-45 -left-30 w-[580px] h-auto object-contain pointer-events-none"
              />
              <div className="relative z-10">
                <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-black leading-none break-words">
                  {userData.name}
                </h1>
                <p className="mt-4 text-paper-muted text-base sm:text-lg md:text-xl break-all">
                  {userData.email}
                </p>
                <p className="mt-1 text-paper-muted text-base sm:text-lg md:text-xl">
                  {userData.city}
                </p>
              </div>
            </div>

            <div className="w-full md:w-auto flex flex-col items-start md:items-end gap-4 md:pt-28">
              <div className="flex flex-wrap relative gap-3">
                <img
                  src={"/figma/ibuprofen-patch.png"}
                  className="hidden lg:block absolute top-1/3 -left-3/5 w-40 h-40 object-cover pointer-events-none"
                />
                <button className="px-6 sm:px-8 py-3 rounded-full bg-olive text-cream text-base sm:text-lg hover:brightness-95 transition">
                  Редактировать
                </button>
                <button className="px-6 sm:px-8 py-3 rounded-full border-[3px] border-olive text-olive text-base sm:text-lg hover:bg-olive hover:text-cream transition">
                  Настройки
                </button>
                <img
                  src={"/figma/flower.png"}
                  className="hidden lg:block absolute top-1/3 left-1/2 h-100 object-cover pointer-events-none"
                />
              </div>
            </div>
          </div>

          <div className="mt-6 h-[5px] bg-olive rounded-full w-full" />
        </div>

        {/* Сохраненные */}
        <div className="relative mx-auto max-w-[1400px] px-10 mt-10">
          <button className="flex items-center gap-3 px-6 py-3 rounded-full border-[3px] border-olive text-olive text-xl font-serif">
            Сохраненные
            <ChevronDown size={22} />
          </button>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 pb-16">
            {!savedPostsQuery.data?.pets?.length && <>Пока нет сохраненных записей</>}

            {savedPostsQuery.data?.pets.map((post) => (
              <div
                key={post.id}
                className="h-64 rounded-[44px] bg-white shadow-[0_6px_24px_rgba(0,0,0,0.08)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.12)] transition"
              >
                {post.image && (
                  <img
                    src={post.image}
                    alt=""
                    className="w-full h-full object-cover rounded-[44px]"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export const Component = AccountPage;
