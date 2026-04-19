import { cn } from "@/shared/lib/css";
import { useState } from "react";

function CreatePetPost() {
  const [step, setStep] = useState(0);
  const [selectedPetType, setSelectedPetType] = useState("");
  const [petName, setPetName] = useState("");

  const handlePetTypeClick = (animal: string) => {
    setSelectedPetType(animal);
    setTimeout(() => {
      setStep(1);
    }, 300);
  };

  const handlePrevStep = () => {
    if (step === 1) {
      setStep(0);
      setPetName("");
    }
  };

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
                {step === 0 && (
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
                      Расскажи о своем питомце - это поможет ускорить поиск
                      хозяина
                    </p>

                    {/* Кнопки животных - зеленые с белым текстом */}
                    <div className="space-y-3">
                      <div className="flex flex-wrap gap-3 justify-start">
                        {["Собака", "Кошка", "Хомяк", "Лошадь", "Кролик"].map(
                          (animal) => (
                            <button
                              key={animal}
                              onClick={() => handlePetTypeClick(animal)}
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
                            onClick={() => handlePetTypeClick(animal)}
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
                              onClick={() => handlePetTypeClick(animal)}
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
                )}
                {step === 1 && (
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
                          value={petName}
                          onChange={(e) => setPetName(e.target.value)}
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
                          if (petName.length > 2) {
                            setStep((prev) => (prev += 1));
                          }
                        }}
                      >
                        Дальше
                      </button>
                    </div>
                  </>
                )}

                {step === 3 && (
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
                          value={petName}
                          onChange={(e) => setPetName(e.target.value)}
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
                          if (petName.length > 2) {
                            setStep((prev) => (prev += 1));
                          }
                        }}
                      >
                        Дальше
                      </button>
                    </div>
                  </>
                )}

                {/* Пагинация внизу */}
                <div className="flex items-center justify-center gap-3 mt-16">
                  <button
                    onClick={handlePrevStep}
                    className={`pointer-events-auto transition-colors ${step === 1 ? "text-[#767D4E] hover:text-[#5a6b3a]" : "text-gray-300 cursor-not-allowed"}`}
                    style={{ fontSize: "20px" }}
                    disabled={step === 0}
                  >
                    ‹
                  </button>
                  <div className="flex items-center gap-3">
                    {Array(step).map((s) => {
                      return (
                        <div
                          className={cn(
                            "w-2.5 h-2.5 rounded-full",
                            s === step ? "bg-[#767D4E]" : "bg-gray-400",
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
