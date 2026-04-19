import { cn } from "@/shared/lib/css";
import { Check, PartyPopper, Upload, X } from "lucide-react";
import { useState } from "react";

const steps = [
  { title: "Тип питомца", subtitle: "Выберите вид вашего любимца" },
  { title: "Имя", subtitle: "Как зовут вашего друга?" },
  { title: "Возраст", subtitle: "Укажите возраст" },
  { title: "Описание", subtitle: "Расскажите о питомце" },
  { title: "Фотографии", subtitle: "Загрузите фото" },
  { title: "Подтверждение", subtitle: "Почти готово!" },
  { title: "Готово", subtitle: "Анкета создана!" },
];

const petTypes = [
  {
    id: "cat",
    label: "Кошка",
    color: "bg-orange-100 text-orange-600 border-orange-200",
  },
  {
    id: "dog",
    label: "Собака",
    color: "bg-blue-100 text-blue-600 border-blue-200",
  },
  {
    id: "bird",
    label: "Птица",
    color: "bg-green-100 text-green-600 border-green-200",
  },
  {
    id: "fish",
    label: "Рыбка",
    color: "bg-cyan-100 text-cyan-600 border-cyan-200",
  },
  {
    id: "rabbit",
    label: "Кролик",
    color: "bg-pink-100 text-pink-600 border-pink-200",
  },
  {
    id: "hamster",
    label: "Хомяк",
    color: "bg-yellow-100 text-yellow-600 border-yellow-200",
  },
  {
    id: "turtle",
    label: "Черепаха",
    color: "bg-emerald-100 text-emerald-600 border-emerald-200",
  },
  {
    id: "other",
    label: "Другое",
    color: "bg-purple-100 text-purple-600 border-purple-200",
  },
];

function CreatePetPost() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    petType: "",
    petName: "",
    ageYears: "",
    ageMonths: "",
    description: "",
    photos: [],
  });
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);

  function nextStep() {
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  }

  function prevStep() {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  }

  function renderCurrentStep(currentStep: number) {
    switch (currentStep) {
      case 0:
        return (
          <>
            <h2
              className="mb-2"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "34px",
                fontWeight: "600",
                color: "#000000",
                textAlign: "left",
              }}
            >
              Познакомимся поближе!
            </h2>

            <p
              className="mb-8"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "16px",
                fontWeight: "400",
                color: "#646363",
                textAlign: "left",
              }}
            >
              Расскажи о своем питомце - это поможет ускорить поиск хозяина
            </p>

            {/* Кнопки животных - зеленые с белым текстом */}
            <div className="space-y-3">
              <div className="flex flex-wrap gap-3 justify-start">
                {["Собака", "Кошка", "Хомяк", "Лошадь", "Кролик"].map(
                  (animal) => (
                    <button
                      key={animal}
                      onClick={() =>
                        setFormData((prev) => {
                          nextStep();
                          return { ...prev, petType: animal };
                        })
                      }
                      className="px-5 py-2 rounded-full pointer-events-auto transition-all hover:scale-105 bg-[#767D4E] text-white"
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: "14px",
                        border: "none",
                      }}
                    >
                      {animal}
                    </button>
                  ),
                )}
              </div>
              <div className="flex flex-wrap gap-3 justify-start">
                {["Бурмалдот", "Черепаха", "Попугай"].map((animal) => (
                  <button
                    key={animal}
                    onClick={(prev) => {
                      nextStep();
                      return { ...prev, petType: animal };
                    }}
                    className="px-5 py-2 rounded-full pointer-events-auto transition-all hover:scale-105 bg-[#767D4E] text-white"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "14px",
                      border: "none",
                    }}
                  >
                    {animal}
                  </button>
                ))}
              </div>
              <div className="flex flex-wrap gap-3 justify-start">
                {["Рыба", "Енот", "Лиса", "Крыса", "Ёж", "Ещё..."].map(
                  (animal) => (
                    <button
                      key={animal}
                      onClick={(prev) => {
                        nextStep();
                        return { ...prev, petType: animal };
                      }}
                      className="px-5 py-2 rounded-full pointer-events-auto transition-all hover:scale-105 bg-[#767D4E] text-white"
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: "14px",
                        border: "none",
                      }}
                    >
                      {animal}
                    </button>
                  ),
                )}
              </div>
            </div>
          </>
        );
      case 1:
        return (
          <>
            <h2
              className="mb-2"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "34px",
                fontWeight: "600",
                color: "#000000",
                textAlign: "left",
              }}
            >
              Как зовут вашего питомца?
            </h2>

            <p
              className="mb-8"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "16px",
                fontWeight: "400",
                color: "#646363",
                textAlign: "left",
              }}
            >
              Как корабль назовешь - так он и поплывет
            </p>

            <div className="flex gap-5 items-baseline">
              <div className="flex justify-start mb-8">
                <input
                  type="text"
                  value={formData.petName}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      petName: e.target.value,
                    }))
                  }
                  placeholder="Имя"
                  className="px-6 py-3 rounded-full w-64 text-left pointer-events-auto"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "16px",
                    border: "2px solid #767D4E",
                    outline: "none",
                    backgroundColor: "white",
                  }}
                />
              </div>
              <button
                className="px-5 py-2 rounded-full pointer-events-auto transition-all hover:scale-105 bg-[#767D4E] text-white"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "14px",
                  border: "none",
                }}
                onClick={() => {
                  if (formData.petName.length > 2) {
                    nextStep();
                  }
                }}
              >
                Дальше
              </button>
            </div>
          </>
        );
      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Укажите возраст
                {formData.petName && (
                  <span className="text-purple-600">, {formData.petName}</span>
                )}
              </h3>
              <p className="text-gray-600">
                Используйте реальный возраст — поменять будет нельзя
              </p>
            </div>

            <div className="max-w-sm mx-auto">
              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-600 mb-2">
                    Годы
                  </label>
                  <select
                    value={formData.ageYears}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        ageYears: e.target.value,
                      }))
                    }
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-400 focus:outline-none"
                  >
                    <option value="">Выбрать</option>
                    {Array.from({ length: 21 }, (_, i) => (
                      <option key={i} value={i}>
                        {i} {i === 1 ? "год" : i < 5 ? "года" : "лет"}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-600 mb-2">
                    Месяцы
                  </label>
                  <select
                    value={formData.ageMonths}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        ageMonths: e.target.value,
                      }))
                    }
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-400 focus:outline-none"
                  >
                    <option value="">Выбрать</option>
                    {Array.from({ length: 12 }, (_, i) => (
                      <option key={i} value={i}>
                        {i} {i === 1 ? "месяц" : i < 5 ? "месяца" : "месяцев"}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Расскажите о вашем питомце 📝
              </h3>
              <p className="text-gray-600">
                Пользователи обязательно прочтут это!
              </p>
            </div>

            <div className="max-w-lg mx-auto">
              <textarea
                value={formData.description}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    description: e.target.value,
                  }))
                }
                placeholder="Опишите характер, привычки, особенности вашего питомца..."
                rows={6}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-400 focus:outline-none resize-none"
              />
              <div className="flex justify-between mt-2">
                <span
                  className={`text-sm ${formData.description.length < 20 ? "text-gray-400" : "text-green-600"}`}
                >
                  {formData.description.length} / 20+ символов
                </span>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Загрузите фотографии 📸
              </h3>
              <p className="text-gray-600">Давайте вместе полюбуемся!</p>
            </div>

            <div className="grid grid-cols-3 gap-3 max-w-md mx-auto">
              {previewUrls.map((url, index) => (
                <div
                  key={index}
                  className="relative aspect-square rounded-xl overflow-hidden"
                >
                  <img
                    src={url}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                  <button className="absolute top-1 right-1 p-1 bg-red-500 text-white rounded-full hover:bg-red-600">
                    <X size={14} />
                  </button>
                </div>
              ))}

              {formData.photos.length < 6 && (
                <label className="aspect-square border-2 border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center cursor-pointer hover:border-purple-400 hover:bg-purple-50 transition-colors">
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    className="hidden"
                  />
                  <Upload size={24} className="text-gray-400 mb-1" />
                  <span className="text-xs text-gray-500">Загрузить</span>
                </label>
              )}
            </div>

            <p className="text-center text-sm text-gray-500">
              Можно загрузить до 6 фотографий
            </p>
          </div>
        );

      case 5:
        return (
          <div className="space-y-8 text-center">
            <div className="py-8">
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center">
                <PartyPopper size={48} className="text-purple-600" />
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                Практически закончили! 🎉
              </h3>
              <p className="text-gray-600 mb-8">
                Осталось только нажать на эту кнопку
              </p>

              <div className="bg-gray-50 rounded-xl p-6 max-w-sm mx-auto">
                <h4 className="font-semibold text-gray-700 mb-4">
                  Проверьте данные:
                </h4>
                <div className="space-y-2 text-left">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Тип:</span>
                    <span className="font-medium">
                      {petTypes.find((t) => t.id === formData.petType)?.label}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Имя:</span>
                    <span className="font-medium">{formData.petName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Возраст:</span>
                    <span className="font-medium">
                      {formData.ageYears && `${formData.ageYears} г. `}
                      {formData.ageMonths && `${formData.ageMonths} мес.`}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Фото:</span>
                    <span className="font-medium">
                      {formData.photos.length} шт.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <button className="w-full max-w-sm mx-auto py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl hover:shadow-purple-200 transition-all">
              Выложить анкету 🚀
            </button>
          </div>
        );

      case 6:
        return (
          <div className="space-y-8 text-center py-12">
            <div className="w-20 h-20 mx-auto bg-green-100 rounded-full flex items-center justify-center">
              <Check size={40} className="text-green-600" />
            </div>

            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-3">
                Вы выложили анкету! 🎊
              </h3>
              <p className="text-gray-600 text-lg">
                Теперь пользователи могут взаимодействовать с ней
              </p>
            </div>

            <button
              onClick={() => console.log("Переход к моим анкетам")}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl hover:shadow-purple-200 transition-all"
            >
              Перейти в мои анкеты
            </button>
          </div>
        );
      default:
        return null;
    }
  }

  return (
    <div
      className="min-h-screen min-w-full"
      style={{
        backgroundImage: "url('/public/image/background.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Контент - изображение list.png */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-6">
        <div className="relative flex items-center justify-center">
          <img
            src="/image/list.png"
            alt="List"
            className="w-full h-auto object-contain"
          />

          {/* list2.png */}
          <div className="absolute inset-0 flex items-center pointer-events-none">
            <div
              className="relative"
              style={{
                width: "750px",
                maxWidth: "100%",
                marginLeft: "130px",
              }}
            >
              <img
                src="/public/image/list2.png"
                alt="List2"
                style={{
                  width: "100%",
                  height: "auto",
                }}
                className="object-contain"
              />

              {/* Текст поверх list2.png */}
              <div className="absolute top-20 left-10 right-10 z-10">
                {renderCurrentStep(currentStep)}

                {/* Пагинация внизу */}
                <div className="flex items-center justify-center gap-3 mt-16">
                  <button
                    onClick={prevStep}
                    className={`pointer-events-auto transition-colors ${currentStep === 1 ? "text-[#767D4E] hover:text-[#5a6b3a]" : "text-gray-300 cursor-not-allowed"}`}
                    style={{ fontSize: "20px" }}
                    disabled={currentStep === 0}
                  >
                    ‹
                  </button>
                  <div className="flex items-center gap-3">
                    {Array(currentStep).map((s) => {
                      return (
                        <div
                          className={cn(
                            "w-2.5 h-2.5 rounded-full",
                            s === currentStep ? "bg-[#767D4E]" : "bg-gray-400",
                          )}
                        ></div>
                      );
                    })}
                  </div>
                  <span
                    className="text-gray-500 ml-3"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "18px",
                    }}
                  >
                    ♥
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const Component = CreatePetPost;
