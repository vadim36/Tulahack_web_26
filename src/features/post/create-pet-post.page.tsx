import { useState, type ChangeEvent } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Check,
  Dog,
  Cat,
  Bird,
  Fish,
  Rabbit,
  HelpCircle,
  Upload,
  X,
  PartyPopper,
} from "lucide-react";

// Типы животных
const petTypes = [
  { id: "cat", label: "Кошка", icon: Cat, color: "bg-orange-100 text-orange-600 border-orange-200" },
  { id: "dog", label: "Собака", icon: Dog, color: "bg-blue-100 text-blue-600 border-blue-200" },
  { id: "bird", label: "Птица", icon: Bird, color: "bg-green-100 text-green-600 border-green-200" },
  { id: "fish", label: "Рыбка", icon: Fish, color: "bg-cyan-100 text-cyan-600 border-cyan-200" },
  { id: "rabbit", label: "Кролик", icon: Rabbit, color: "bg-pink-100 text-pink-600 border-pink-200" },
  { id: "hamster", label: "Хомяк", icon: HelpCircle, color: "bg-yellow-100 text-yellow-600 border-yellow-200" },
  { id: "turtle", label: "Черепаха", icon: HelpCircle, color: "bg-emerald-100 text-emerald-600 border-emerald-200" },
  { id: "other", label: "Другое", icon: HelpCircle, color: "bg-purple-100 text-purple-600 border-purple-200" },
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
  const [errors, setErrors] = useState<Record<string, any>>({});

  const steps = [
    { title: "Тип питомца", subtitle: "Выберите вид вашего любимца" },
    { title: "Имя", subtitle: "Как зовут вашего друга?" },
    { title: "Возраст", subtitle: "Укажите возраст" },
    { title: "Описание", subtitle: "Расскажите о питомце" },
    { title: "Фотографии", subtitle: "Загрузите фото" },
    { title: "Подтверждение", subtitle: "Почти готово!" },
    { title: "Готово", subtitle: "Анкета создана!" },
  ];

  function updateFormData<T>(field: string, value: T): void {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  const handleFileUpload = (e: ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
    const files = Array.from((e.target as HTMLInputElement).files! as FileList);
    const newPhotos = [...formData.photos, ...files].slice(0, 6);
    updateFormData("photos", newPhotos);
    
    const newPreviewUrls = files.map(file => URL.createObjectURL(file));
    setPreviewUrls(prev => [...prev, ...newPreviewUrls].slice(0, 6));
  };

  const removePhoto = (index: number) => {
    const newPhotos = formData.photos.filter((_, i) => i !== index);
    updateFormData("photos", newPhotos);
    
    URL.revokeObjectURL(previewUrls[index]);
    setPreviewUrls(prev => prev.filter((_, i) => i !== index));
  };

  const validateStep = () => {
    const newErrors: Record<string, string> = {};
    
    switch (currentStep) {
      case 0:
        if (!formData.petType) newErrors.petType = "Выберите тип питомца";
        break;
      case 1:
        if (!formData.petName.trim()) newErrors.petName = "Введите имя питомца";
        else if (formData.petName.length < 2) newErrors.petName = "Имя должно быть не менее 2 символов";
        break;
      case 2:
        if (!formData.ageYears && !formData.ageMonths) {
          newErrors.age = "Укажите возраст питомца";
        }
        break;
      case 3:
        if (!formData.description.trim()) newErrors.description = "Расскажите о питомце";
        else if (formData.description.length < 20) newErrors.description = "Минимум 20 символов";
        break;
      case 4:
        if (formData.photos.length === 0) newErrors.photos = "Загрузите хотя бы одну фотографию";
        break;
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep()) {
      setCurrentStep(prev => Math.min(prev + 1, steps.length - 1));
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 0));
  };

  const handleSubmit = () => {
    console.log("Отправка формы:", formData);
    nextStep();
  };

  const renderStepIndicator = () => (
    <div className="mb-8">
      <div className="flex items-center justify-between max-w-md mx-auto">
        {steps.slice(0, 6).map((_, index) => (
          <div key={index} className="flex items-center">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all ${
                index < currentStep
                  ? "bg-green-500 text-white"
                  : index === currentStep
                  ? "bg-purple-600 text-white ring-4 ring-purple-100"
                  : "bg-gray-200 text-gray-400"
              }`}
            >
              {index < currentStep ? <Check size={16} /> : index + 1}
            </div>
            {index < 5 && (
              <div
                className={`w-8 sm:w-12 h-0.5 mx-1 ${
                  index < currentStep ? "bg-green-500" : "bg-gray-200"
                }`}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Давай познакомимся! 🐾
              </h3>
              <p className="text-gray-600">
                Расскажите о своем питомце — это поможет ускорить поиск хозяина
              </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {petTypes.map((type) => {
                const Icon = type.icon;
                return (
                  <button
                    key={type.id}
                    onClick={() => updateFormData("petType", type.id)}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      formData.petType === type.id
                        ? `${type.color} border-current shadow-lg scale-105`
                        : "border-gray-200 bg-white hover:border-gray-300 hover:shadow-md"
                    }`}
                  >
                    <div className="flex flex-col items-center gap-2">
                      <Icon size={32} />
                      <span className="font-medium">{type.label}</span>
                    </div>
                  </button>
                );
              })}
            </div>
            
            {errors.petType && (
              <p className="text-red-500 text-sm text-center">{errors.petType}</p>
            )}
          </div>
        );

      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Как зовут вашего питомца? ✨
              </h3>
              <p className="text-gray-600">
                Как корабль назовешь — так он и поплывет
              </p>
            </div>
            
            <div className="max-w-sm mx-auto">
              <input
                type="text"
                value={formData.petName}
                onChange={(e) => updateFormData("petName", e.target.value)}
                placeholder="Введите имя"
                className="w-full px-4 py-3 text-lg text-center border-2 border-gray-200 rounded-xl focus:border-purple-400 focus:outline-none transition-colors"
                autoFocus
              />
              {errors.petName && (
                <p className="text-red-500 text-sm text-center mt-2">{errors.petName}</p>
              )}
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Укажите возраст
                {formData.petName && <span className="text-purple-600">, {formData.petName}</span>}
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
                    onChange={(e) => updateFormData("ageYears", e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-400 focus:outline-none"
                  >
                    <option value="">Выбрать</option>
                    {Array.from({ length: 21 }, (_, i) => (
                      <option key={i} value={i}>{i} {i === 1 ? "год" : i < 5 ? "года" : "лет"}</option>
                    ))}
                  </select>
                </div>
                
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-600 mb-2">
                    Месяцы
                  </label>
                  <select
                    value={formData.ageMonths}
                    onChange={(e) => updateFormData("ageMonths", e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-400 focus:outline-none"
                  >
                    <option value="">Выбрать</option>
                    {Array.from({ length: 12 }, (_, i) => (
                      <option key={i} value={i}>{i} {i === 1 ? "месяц" : i < 5 ? "месяца" : "месяцев"}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              {errors.age && (
                <p className="text-red-500 text-sm text-center mt-2">{errors.age}</p>
              )}
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
                onChange={(e) => updateFormData("description", e.target.value)}
                placeholder="Опишите характер, привычки, особенности вашего питомца..."
                rows={6}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-400 focus:outline-none resize-none"
              />
              <div className="flex justify-between mt-2">
                <span className={`text-sm ${formData.description.length < 20 ? "text-gray-400" : "text-green-600"}`}>
                  {formData.description.length} / 20+ символов
                </span>
              </div>
              {errors.description && (
                <p className="text-red-500 text-sm mt-2">{errors.description}</p>
              )}
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
              <p className="text-gray-600">
                Давайте вместе полюбуемся!
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-3 max-w-md mx-auto">
              {previewUrls.map((url, index) => (
                <div key={index} className="relative aspect-square rounded-xl overflow-hidden">
                  <img src={url} alt="" className="w-full h-full object-cover" />
                  <button
                    onClick={() => removePhoto(index)}
                    className="absolute top-1 right-1 p-1 bg-red-500 text-white rounded-full hover:bg-red-600"
                  >
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
                    onChange={(e) => handleFileUpload(e)}
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
            
            {errors.photos && (
              <p className="text-red-500 text-sm text-center">{errors.photos}</p>
            )}
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
                <h4 className="font-semibold text-gray-700 mb-4">Проверьте данные:</h4>
                <div className="space-y-2 text-left">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Тип:</span>
                    <span className="font-medium">{petTypes.find(t => t.id === formData.petType)?.label}</span>
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
                    <span className="font-medium">{formData.photos.length} шт.</span>
                  </div>
                </div>
              </div>
            </div>
            
            <button
              onClick={handleSubmit}
              className="w-full max-w-sm mx-auto py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl hover:shadow-purple-200 transition-all"
            >
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
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Шапка */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Создание анкеты
          </h1>
        </div>
        
        {/* Индикатор шагов (скрыт на последнем шаге) */}
        {currentStep < 6 && renderStepIndicator()}
        
        {/* Основной контент */}
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
          {currentStep < 6 && (
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-gray-400">
                Шаг {currentStep + 1} из 6
              </h2>
            </div>
          )}
          
          {renderStep()}
          
          {/* Навигация */}
          {currentStep > 0 && currentStep < 5 && (
            <div className="flex gap-3 mt-8">
              <button
                onClick={prevStep}
                className="flex-1 py-3 px-4 border-2 border-gray-200 text-gray-600 font-medium rounded-xl hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
              >
                <ChevronLeft size={20} />
                Назад
              </button>
              <button
                onClick={nextStep}
                className="flex-1 py-3 px-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-xl hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                Далее
                <ChevronRight size={20} />
              </button>
            </div>
          )}
          
          {currentStep === 0 && (
            <div className="mt-8">
              <button
                onClick={nextStep}
                className="w-full py-3 px-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-xl hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                Далее
                <ChevronRight size={20} />
              </button>
            </div>
          )}
          
          {currentStep === 5 && (
            <div className="flex gap-3 mt-8">
              <button
                onClick={prevStep}
                className="flex-1 py-3 px-4 border-2 border-gray-200 text-gray-600 font-medium rounded-xl hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
              >
                <ChevronLeft size={20} />
                Назад
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export const Component = CreatePetPost;