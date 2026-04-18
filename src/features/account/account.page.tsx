import { useState } from "react";
import {
  MapPin,
  Mail,
  Edit3,
  Camera,
  Bookmark,
  Heart,
  MessageCircle,
  Share2,
  Grid,
  List,
} from "lucide-react";

// Пример данных пользователя
const userData = {
  avatar: "https://i.pravatar.cc/300?img=7",
  cover:
    "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=1200&h=400&fit=crop",
  name: "Анна Иванова",
  email: "anna.ivanova@example.com",
  city: "Москва, Россия",
  bio: "Люблю животных и помогаю им найти дом 🏡",
};

// Пример сохраненных постов
const savedPosts = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&h=400&fit=crop",
    title: "Барсик ищет дом",
    location: "Москва",
    likes: 124,
    comments: 18,
    saved: true,
    liked: false,
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400&h=400&fit=crop",
    title: "Мурка - ласковая кошечка",
    location: "Санкт-Петербург",
    likes: 89,
    comments: 12,
    saved: true,
    liked: true,
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=400&h=400&fit=crop",
    title: "Рекс - верный друг",
    location: "Казань",
    likes: 256,
    comments: 34,
    saved: true,
    liked: false,
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=400&h=400&fit=crop",
    title: "Пушок - пушистое счастье",
    location: "Екатеринбург",
    likes: 67,
    comments: 8,
    saved: true,
    liked: true,
  },
];

function AccountPage() {
  const [activeTab, setActiveTab] = useState("saved");
  const [posts, setPosts] = useState(savedPosts);
  const [viewMode, setViewMode] = useState("grid"); // grid или list

  const handleLike = (postId: number) => {
    setPosts(
      posts.map((post) =>
        post.id === postId
          ? {
              ...post,
              liked: !post.liked,
              likes: post.liked ? post.likes - 1 : post.likes + 1,
            }
          : post,
      ),
    );
  };

  const handleSave = (postId: number) => {
    setPosts(
      posts.map((post) =>
        post.id === postId ? { ...post, saved: !post.saved } : post,
      ),
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 min-w-full">
      {/* Шапка профиля */}
      <div className="relative h-64 md:h-80 bg-gradient-to-r from-purple-600 to-pink-600">
        <img
          src={userData.cover}
          alt="Cover"
          className="w-full h-full object-cover"
        />
        <button className="absolute bottom-4 right-4 flex items-center gap-2 px-4 py-2 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg hover:bg-white transition-all hover:-translate-y-0.5">
          <Camera size={20} />
          <span className="hidden sm:inline">Изменить обложку</span>
        </button>
      </div>

      {/* Информация профиля */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="flex items-end justify-between -mt-12 sm:-mt-16">
          <div className="relative">
            <img
              src={userData.avatar}
              alt={userData.name}
              className="w-28 h-28 sm:w-36 sm:h-36 rounded-full border-4 border-white shadow-lg object-cover"
            />
            <button className="absolute bottom-1 right-1 w-9 h-9 bg-white rounded-full shadow-md flex items-center justify-center hover:scale-110 transition-transform">
              <Camera size={16} />
            </button>
          </div>

          <button className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-2.5 bg-white border border-gray-200 rounded-xl shadow-sm hover:bg-gray-50 hover:shadow transition-all">
            <Edit3 size={18} />
            <span className="hidden sm:inline">Редактировать</span>
          </button>
        </div>

        <div className="mt-4 pb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
            {userData.name}
          </h1>

          <div className="flex flex-wrap gap-4 sm:gap-6 mt-3">
            <div className="flex items-center gap-2 text-gray-600">
              <Mail size={16} />
              <span>{userData.email}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <MapPin size={16} />
              <span>{userData.city}</span>
            </div>
          </div>

          {userData.bio && <p className="mt-4 text-gray-700">{userData.bio}</p>}
        </div>
      </div>

      {/* Вкладки */}
      <div className="border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex gap-8">
            <button className="flex items-center gap-2 py-4 border-b-2 border-purple-600 text-purple-600 font-medium">
              <Bookmark size={18} />
              <span className="hidden sm:inline">Сохраненные</span>
              <span className="bg-purple-100 text-purple-600 px-2 py-0.5 rounded-full text-sm">
                {posts.filter((p) => p.saved).length}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Сетка постов */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all hover:-translate-y-1 border border-gray-100"
            >
              <div className="relative aspect-square">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <button className="absolute top-2 right-2 w-9 h-9 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                  <Bookmark
                    size={18}
                    className={
                      post.saved
                        ? "fill-purple-600 text-purple-600"
                        : "text-gray-600"
                    }
                  />
                </button>
              </div>
              <div className="p-3 sm:p-4">
                <h3 className="font-semibold text-gray-800 mb-1 line-clamp-1">
                  {post.title}
                </h3>
                <div className="flex items-center gap-1 text-gray-500 text-sm mb-2">
                  <MapPin size={12} />
                  <span className="line-clamp-1">{post.location}</span>
                </div>
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-1 text-gray-600 hover:text-red-500 transition-colors">
                    <Heart
                      size={16}
                      className={post.liked ? "fill-red-500 text-red-500" : ""}
                    />
                    <span className="text-sm">{post.likes}</span>
                  </button>
                  <div className="flex items-center gap-1 text-gray-600">
                    <MessageCircle size={16} />
                    <span className="text-sm">{post.comments}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export const Component = AccountPage;
