import type { MouseEvent } from "react";
import type { CardStyle } from "./use-swiping";
import { Heart, MapPin, X } from "lucide-react";

export type PetPost = {
  id: string;
  name: string;
  age: string;
  image: string;
  location: string;
  breed: string;
  tags: string[];
  content: string;
};

export function PetPost({
  cardStyle,
  handleDragEnd,
  handleDragMove,
  handleDragStart,
  dragStart,
  currentPet,
  handleUndo,
  handleCardClick,
  likeOpacity,
  dislikeOpacity,
  dragOffset,
  handleDislike,
  handleLike,
}: {
  cardStyle: CardStyle;
  handleDragEnd: () => void;
  handleDragStart: (clientX: number) => void;
  handleDragMove: (clientX: number) => void;
  dragStart: number;
  currentPet: PetPost;
  handleUndo: () => void;
  handleCardClick: (e: MouseEvent) => void;
  likeOpacity: number;
  dislikeOpacity: number;
  dragOffset: number;
  handleLike: () => void;
  handleDislike: () => void;
}) {
  return (
    <div
      className="bg-white rounded-2xl shadow-xl overflow-hidden"
      style={cardStyle}
      onMouseDown={(e) => handleDragStart(e.clientX)}
      onMouseMove={(e) => dragStart !== null && handleDragMove(e.clientX)}
      onMouseUp={handleDragEnd}
      onMouseLeave={handleDragEnd}
      onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
      onTouchMove={(e) =>
        dragStart !== null && handleDragMove(e.touches[0].clientX)
      }
      onTouchEnd={handleDragEnd}
    >
      <div className="relative h-96">
        <img
          src={"/pets/barney.jpg"}
          alt={currentPet.name}
          className="w-full h-full object-cover"
          draggable={false}
        />

        <button
          onClick={(e) => {
            e.stopPropagation();
            handleUndo();
          }}
          className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-b from-white/95 to-white/75 shadow-md transition hover:from-white hover:to-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        </button>

        {dragOffset > 30 && (
          <div
            className="absolute right-6 top-20 rounded-2xl border-4 border-[#63E363] px-6 py-3 select-none"
            style={{ opacity: likeOpacity }}
          >
            <span className="text-3xl font-bold uppercase tracking-wider text-[#63E363]">
              Нравится
            </span>
          </div>
        )}

        {dragOffset < -30 && (
          <div
            className="absolute left-6 top-20 rounded-2xl border-4 border-red-500 px-6 py-3 select-none"
            style={{ opacity: dislikeOpacity }}
          >
            <span className="text-3xl font-bold uppercase tracking-wider text-red-500">
              Не нравится
            </span>
          </div>
        )}

        {/* Градиент */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 px-4">
          <button
            onClick={handleDislike}
            className="flex-1 py-3 bg-white/90 backdrop-blur-sm rounded-xl font-medium text-red-500 hover:bg-red-50 transition-colors flex items-center justify-center gap-2"
          >
            <X size={20} />
            <span>Нет</span>
          </button>
          <button
            onClick={handleLike}
            className="flex-1 py-3 bg-white/90 backdrop-blur-sm rounded-xl font-medium text-green-500 hover:bg-green-50 transition-colors flex items-center justify-center gap-2"
          >
            <Heart size={20} />
            <span>Да</span>
          </button>
        </div>
      </div>

      {/* Информация */}
      <div className="p-4">
        <div className="flex items-baseline gap-2 mb-1">
          <h3 className="text-xl font-bold">{currentPet.name}</h3>
          <span className="text-gray-600">{currentPet.age}</span>
        </div>

        <div className="flex items-center gap-1 text-gray-500 text-sm mb-3">
          <MapPin size={14} />
          <span>{currentPet.location}</span>
        </div>

        <p className="text-gray-700 text-sm leading-relaxed line-clamp-3">
          {currentPet.content}
        </p>

        <button className="mt-3 text-purple-600 text-sm font-medium">
          Читать полностью
        </button>
      </div>
    </div>
  );
}