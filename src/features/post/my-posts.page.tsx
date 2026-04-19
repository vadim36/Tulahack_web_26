import { useState } from "react";
import { Settings, Plus } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { $privateApi } from "@/shared/api/instance";

const userData = {
  avatar: "/figma/avatar.png",
  cover: "/figma/cover.png",
  name: "Иван Иванов",
};

const userPosts = [
  {
    id: 1,
    image: "/figma/dog-pic.png",
    title: "Жучка, 7 мес",
    description:
      "Практический опыт показывает, что сложившаяся структура организации способствует повышению актуальности существующих финансовых и административных условий. Практический опыт показывает, что сложившаяся структура организации обеспечивает.",
  },
  {
    id: 2,
    image: "/figma/dog-pic.png",
    title: "Барсик, 3 года",
    description:
      "Ласковый и игривый кот, привит, знает лоток. Очень ждет своего человека!",
  },
];

function MyPostsPage() {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = userPosts.length + 1; // +1 для страницы добавления

  const goNext = () =>
    setCurrentPage((p) => Math.min(p + 1, totalPages - 1));
  const goPrev = () => setCurrentPage((p) => Math.max(p - 1, 0));

  const currentPost = userPosts[currentPage];
  const isAddPage = currentPage >= userPosts.length;

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

            <div className="flex-1 min-w-0 relative pt-10 md:pt-28">
              <img
                src={"/figma/image 40.png"}
                className="hidden lg:block absolute z-[1] -top-3 -left-30 w-[600px] h-auto object-contain pointer-events-none"
              />
              <img
                src={"/figma/image 44.png"}
                className="hidden lg:block absolute z-0 top-45 -left-30 w-[580px] h-auto object-contain pointer-events-none"
              />
              <div className="relative mt-5 z-10">
                <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-black leading-none break-words">
                  {userData.name}
                </h1>
                <img
                  src={"/figma/cats-pair.png"}
                  className="hidden lg:block absolute left-175 -top-20 h-60 w-60 pointer-events-none"
                />
              </div>
            </div>
          </div>

          <div className="mt-6 h-[5px] bg-olive rounded-full w-full" />
        </div>

        {/* Книжный разворот */}
        <div className="relative mx-auto max-w-[1400px] px-10 mt-12 pb-20">
          <div className="relative isolate mx-auto flex items-stretch justify-center gap-2 sm:gap-4 w-full max-w-[1200px] aspect-[1200/760] min-h-[420px]">
            <img
              src={"/figma/open-book.png"}
              className="absolute inset-0 -z-10 w-full h-full object-fill pointer-events-none select-none"
              alt=""
            />
            {/* Навигация назад */}
            <button
              onClick={goPrev}
              disabled={currentPage === 0}
              aria-label="Назад"
              className="absolute z-10 left-0 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-olive text-cream flex items-center justify-center shadow-lg disabled:opacity-30 hover:brightness-95 transition z-10"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                className="w-6 h-6"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            {/* Левая страница (анкета) */}
            <div className="flex-1 mt-10 mb-10 max-w-[540px]">
              {!isAddPage && currentPost ? (
                <div className="relative rounded-[44px] bg-white border-[7px] border-olive overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.15)]">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={currentPost.image}
                      alt={currentPost.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 pb-8">
                    <h3 className="font-serif text-3xl md:text-4xl text-olive">
                      {currentPost.title}
                    </h3>
                    <div className="my-4 h-[3px] bg-[#bebebe] rounded-full" />
                    <p
                      className="text-olive leading-snug"
                      style={{
                        fontFamily: "Playball, cursive",
                        fontSize: "18px",
                      }}
                    >
                      {currentPost.description}
                    </p>
                  </div>
                </div>
              ) : (
                <AddCard onClick={() => alert("Создать анкету")} />
              )}
            </div>

            {/* Правая страница (пустой шаблон / кнопка добавить) */}
            <div className="flex-1 mt-10 mb-10 max-w-[540px]">
              <AddCard onClick={() => alert("Создать анкету")} />
            </div>

            {/* Навигация вперёд */}
            <button
              onClick={goNext}
              disabled={currentPage === totalPages - 1}
              aria-label="Вперёд"
              className="absolute z-10 right-0 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-olive text-cream flex items-center justify-center shadow-lg disabled:opacity-30 hover:brightness-95 transition z-10"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                className="w-6 h-6"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>

          {/* Индикатор страниц */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i)}
                className={`h-2 rounded-full transition-all ${
                  i === currentPage ? "w-8 bg-olive" : "w-2 bg-olive/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function AddCard({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="group w-full h-full min-h-[560px] rounded-[44px] bg-white border-[7px] border-olive shadow-[0_10px_30px_rgba(0,0,0,0.12)] flex items-center justify-center hover:brightness-98 transition"
    >
      <div className="w-32 h-32 rounded-full border-[5px] border-olive flex items-center justify-center text-olive group-hover:scale-105 transition-transform">
        <Plus size={56} strokeWidth={2.5} />
      </div>
    </button>
  );
}

export const Component = MyPostsPage;
