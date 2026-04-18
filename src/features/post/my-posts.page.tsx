import { useState, useRef } from "react";
import {
  MapPin,
  Mail,
  Camera,
  Edit3,
  ChevronLeft,
  ChevronRight,
  Plus,
  Heart,
  MessageCircle,
  Bookmark,
} from "lucide-react";

// Данные пользователя
const userData = {
  avatar: "https://i.pravatar.cc/300?img=7",
  cover:
    "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=1200&h=400&fit=crop",
  name: "Анна Иванова",
  email: "anna.ivanova@example.com",
  city: "Москва, Россия",
};

// Посты пользователя
const userPosts = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=800&h=600&fit=crop",
    title: "Барсик ищет дом",
    description:
      "Ласковый и игривый кот, привит, знает лоток. Очень ждет своего человека!",
    location: "Москва",
    date: "2 дня назад",
    likes: 124,
    comments: 18,
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=800&h=600&fit=crop",
    title: "Мурка - ласковая кошечка",
    description:
      "Спокойная кошка, любит сидеть на руках и мурлыкать. Идеальна для квартиры.",
    location: "Санкт-Петербург",
    date: "5 дней назад",
    likes: 89,
    comments: 12,
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=800&h=600&fit=crop",
    title: "Рекс - верный друг",
    description:
      "Молодой и энергичный пес, нуждается в активных прогулках. Отлично ладит с детьми.",
    location: "Казань",
    date: "1 неделя назад",
    likes: 256,
    comments: 34,
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=800&h=600&fit=crop",
    title: "Пушок - пушистое счастье",
    description:
      "Пушистый комочек счастья, очень игривый и любопытный котенок.",
    location: "Екатеринбург",
    date: "2 недели назад",
    likes: 67,
    comments: 8,
  },
];

function MyPostsPage() {
  const [currentPage, setCurrentPage] = useState(0);
  const [likedPosts, setLikedPosts] = useState(new Set());
  const [savedPosts, setSavedPosts] = useState(new Set());
  const bookRef = useRef(null);

  const totalPages = userPosts.length;
  const isLastPage = currentPage === totalPages - 1;

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleLike = (postId: number) => {
    setLikedPosts((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(postId)) {
        newSet.delete(postId);
      } else {
        newSet.add(postId);
      }
      return newSet;
    });
  };

  const handleSave = (postId: number) => {
    setSavedPosts((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(postId)) {
        newSet.delete(postId);
      } else {
        newSet.add(postId);
      }
      return newSet;
    });
  };

  const handleAddNewPost = () => {
    console.log("Добавить новый пост");
    // navigate('/create-post');
  };

  const currentPost = userPosts[currentPage];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Шапка профиля */}
      <div className="relative h-64 md:h-80 bg-gradient-to-r from-purple-600 to-pink-600 overflow-hidden">
        <img
          src={userData.cover}
          alt="Cover"
          className="w-full h-full object-cover"
        />
        <button className="absolute bottom-4 right-4 flex items-center gap-2 px-4 py-2 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg hover:bg-white hover:-translate-y-0.5 transition-all duration-200">
          <Camera size={20} />
          <span className="hidden sm:inline text-gray-700 font-medium">
            Изменить обложку
          </span>
        </button>
      </div>

      {/* Информация профиля */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex items-end justify-between -mt-12 sm:-mt-16">
          <div className="relative">
            <img
              src={userData.avatar}
              alt={userData.name}
              className="w-28 h-28 sm:w-36 sm:h-36 rounded-full border-4 border-white shadow-lg object-cover bg-white"
            />
            <button className="absolute bottom-1 right-1 w-9 h-9 bg-white rounded-full shadow-md flex items-center justify-center hover:scale-110 transition-transform duration-200">
              <Camera size={16} className="text-gray-600" />
            </button>
          </div>

          <button className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-2.5 mb-4 sm:mb-5 bg-white border border-gray-200 rounded-xl shadow-sm hover:bg-gray-50 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
            <Edit3 size={18} className="text-gray-600" />
            <span className="hidden sm:inline font-medium text-gray-700">
              Редактировать
            </span>
          </button>
        </div>

        <div className="mt-4 pb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
            {userData.name}
          </h1>

          <div className="flex flex-wrap gap-4 sm:gap-6 mt-3">
            <div className="flex items-center gap-2 text-gray-600">
              <Mail size={16} />
              <span className="text-sm sm:text-base">{userData.email}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <MapPin size={16} />
              <span className="text-sm sm:text-base">{userData.city}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Заголовок раздела с постами */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 mt-4">
        <div className="flex items-baseline justify-between">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
            Мои анкеты
          </h2>
          <span className="text-sm sm:text-base text-gray-500">
            {totalPages} анкет
          </span>
        </div>
      </div>

      {/* Книжный слайдер */}
      <div className="max-w-4xl mx-auto px-4 mt-8">
        <h2 className="text-xl font-bold mb-4">Мои анкеты ({totalPages})</h2>

        <div className="relative">
          <div className="flex bg-white rounded-2xl shadow-xl overflow-hidden">
            {isLastPage ? (
              <div className="w-full p-12 text-center">
                <button onClick={handleAddNewPost} className="group">
                  <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 group-hover:bg-purple-600 rounded-full flex items-center justify-center transition-colors">
                    <Plus
                      size={40}
                      className="text-gray-600 group-hover:text-white"
                    />
                  </div>
                  <h3 className="text-xl font-bold">Добавить анкету</h3>
                  <p className="text-gray-500 mt-2">Создайте новую анкету</p>
                </button>
              </div>
            ) : (
              <>
                <div className="w-1/2 p-6 border-r">
                  <img
                    src={currentPost.image}
                    alt=""
                    className="w-full aspect-square object-cover rounded-xl"
                  />
                </div>
                <div className="w-1/2 p-6">
                  <h3 className="text-xl font-bold">{currentPost.title}</h3>
                  <p className="text-gray-500 text-sm mt-1 flex items-center gap-1">
                    <MapPin size={14} /> {currentPost.location}
                  </p>
                  <p className="mt-4 text-gray-700">
                    {currentPost.description}
                  </p>
                  <div className="flex gap-4 mt-6">
                    <button className="flex items-center gap-1 text-gray-600">
                      <Heart size={18} /> {currentPost.likes}
                    </button>
                    <span className="flex items-center gap-1 text-gray-600">
                      <MessageCircle size={18} /> {currentPost.comments}
                    </span>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Навигация */}
          <button
            onClick={prevPage}
            disabled={currentPage === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 p-3 bg-white rounded-full shadow-lg disabled:opacity-30"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={nextPage}
            disabled={isLastPage}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 p-3 bg-white rounded-full shadow-lg disabled:opacity-30"
          >
            <ChevronRight />
          </button>
        </div>

        {/* Индикатор */}
        <div className="flex justify-center gap-1 mt-6">
          {userPosts.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i)}
              className={`h-2 rounded-full transition-all ${i === currentPage ? "w-6 bg-purple-600" : "w-2 bg-gray-300"}`}
            />
          ))}
        </div>
      </div>

      {/* Быстрые действия */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pb-10 flex justify-center">
        <button
          onClick={handleAddNewPost}
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-medium shadow-lg shadow-purple-200 hover:shadow-xl hover:shadow-purple-300 hover:-translate-y-0.5 transition-all duration-200"
        >
          <Plus size={22} />
          <span>Новая анкета</span>
        </button>
      </div>
    </div>
  );
}

export const Component = MyPostsPage;
