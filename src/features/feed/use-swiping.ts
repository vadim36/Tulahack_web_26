import { useState } from "react";

export type CardStyle = {
  transform: string;
  transition: string;
  opacity: number;
};

export function useSwiping({ petsLength }: { petsLength: number }) {
  const [dragStart, setDragStart] = useState<number | null>(null);
  const [dragOffset, setDragOffset] = useState<number>(0);
  const [isSwiping, setIsSwiping] = useState<boolean>(false);
  const [postsHistory, setPostsHistory] = useState<number[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const cardStyle: CardStyle = {
    transform: `translateX(${dragOffset}px) rotate(${dragOffset * 0.05}deg)`,
    transition: isSwiping ? "none" : "transform 0.2s ease-out",
    opacity: Math.max(1 - Math.abs(dragOffset) / 500, 0.5),
  };

  function handleDragStart(clientX: number) {
    setDragStart(clientX);
    setIsSwiping(true);
  }

  function handleDragMove(clientX: number) {
    if (dragStart === null) return;
    const offset = clientX - dragStart;
    setDragOffset(offset);
  }

  function handleDragEnd() {
    if (dragStart === null) return;

    const threshold = 100;

    if (dragOffset > threshold) {
      handleLike();
    } else if (dragOffset < -threshold) {
      handleDislike();
    } else {
      setDragOffset(0);
    }

    setDragStart(null);
    setIsSwiping(false);
  }

  function handleLike() {
    setDragOffset(500);
    setTimeout(() => {
      setPostsHistory([...postsHistory, currentIndex]);
      if (currentIndex < petsLength - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setCurrentIndex(-1);
      }
      setDragOffset(0);
    }, 200);
  }

  function handleDislike() {
    setDragOffset(-500);
    setTimeout(() => {
      setPostsHistory([...postsHistory, currentIndex]);
      if (currentIndex < petsLength - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setCurrentIndex(-1);
      }
      setDragOffset(0);
    }, 200);
  }

  function handleUndo() {
    if (postsHistory.length > 0) {
      const prevIndex = postsHistory[postsHistory.length - 1];
      setPostsHistory(postsHistory.slice(0, -1));
      setCurrentIndex(prevIndex);
    }
  }

  const likeOpacity = Math.min(dragOffset / 100, 1);
  const dislikeOpacity = Math.min(-dragOffset / 100, 1);

  return {
    cardStyle,
    handleDragEnd,
    handleDragStart,
    handleDragMove,
    handleLike,
    handleDislike,
    currentIndex,
    likeOpacity,
    dislikeOpacity,
    dragStart,
    dragOffset,
    handleUndo,
  };
}