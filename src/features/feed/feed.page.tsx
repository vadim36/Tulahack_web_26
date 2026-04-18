import { MapPin } from "lucide-react";
import { href, useNavigate } from "react-router-dom";
import { useSwiping } from "./use-swiping";
import { ROUTES } from "@/shared/model/routes";
import { PetPost } from "./pet-post";

const pets = [
  {
    id: "1",
    name: "Барни",
    age: "3,5 года",
    image: "/images/pets/barney.jpg",
    location: "Москва, Парк Горького",
    breed: "Корги пемброк",
    tags: ["Ищет дом"],
    content:
      "Рекс - умный и активный пес. Отлично поддается дрессировке, знает базовые команды. Ищет активную семью.",
  },
];

function FeedPage() {
  const navigate = useNavigate();

  const {
    currentIndex,
    cardStyle,
    handleDragStart,
    handleDragMove,
    handleDragEnd,
    likeOpacity,
    dislikeOpacity,
    dragOffset,
    dragStart,
    handleDislike,
    handleLike,
    handleUndo,
  } = useSwiping({ petsLength: pets.length });

  const currentPet = pets[currentIndex];

  function handleCardClick(e: React.MouseEvent) {
    e.stopPropagation();
    navigate(href(ROUTES.PET_POST, { petId: String(currentPet.id) }));
  }

  return (
    <div className="h-screen bg-linear-to-b from-gray-50 to-white font-['Unbounded',sans-serif]">
      <div className="mx-auto max-w-md px-4 py-4 flex flex-col gap-10">
        <div className="relative h-full flex flex-col gap-5">
          <PetPost
            cardStyle={cardStyle}
            handleCardClick={handleCardClick}
            handleDragEnd={handleDragEnd}
            handleDragStart={handleDragStart}
            handleDragMove={handleDragMove}
            dragStart={dragStart ?? 0}
            dragOffset={dragOffset}
            currentPet={currentPet}
            handleUndo={handleUndo}
            likeOpacity={likeOpacity}
            dislikeOpacity={dislikeOpacity}
            handleLike={handleLike}
            handleDislike={handleDislike}
          />
        </div>

        <div className="px-2">
          <div className="flex items-center justify-center gap-2 text-gray-500">
            <MapPin className="size-5" />
            <span className="text-base">{currentPet.location}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export const Component = FeedPage;
