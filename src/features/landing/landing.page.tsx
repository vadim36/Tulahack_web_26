import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen overflow-x-hidden" style={{ backgroundColor: "#E4D5BB" }}>
      <div
        className="relative w-full overflow-visible"
        style={{
          height: "50vh",
          minHeight: "700px",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/background/фон.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />

        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.25)" }}
        />

        <div
          style={{
            position: "absolute",
            top: 0,
            left: "calc(50% - 305px - 95px)",
            width: "80px",
            height: "320px",
            zIndex: 15,
          }}
        >
          <img
            src="/red-line.jpg"
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>

        <div
          style={{
            position: "absolute",
            top: 0,
            left: "calc(50% - 300px - 95px + 80px + 15px)",
            width: "20px",
            height: "320px",
            zIndex: 15,
          }}
        >
          <img
            src="/red-line.jpg"
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>

        <div
          style={{
            position: "absolute",
            bottom: "235px",
            right: "calc(50% - 800px)",
            width: "550px",
            height: "80px",
            zIndex: 15,
          }}
        >
          <img
            src="/red-line.jpg"
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>

        <div
          style={{
            position: "absolute",
            bottom: "385px",
            right: "calc(50% - 800px)",
            width: "600px",
            height: "15px",
            zIndex: 15,
            transform: "translateY(60px)",
          }}
        >
          <img
            src="/red-line.jpg"
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>

        <div
          className="absolute z-25"
          style={{
            bottom: "-150px",
            left: "-0px",
            width: "500px",
            height: "auto",
          }}
        >
          <img
            src="/cat2.png"
            alt="Кот"
            style={{
              width: "100%",
              height: "auto",
              objectFit: "contain",
              filter: "drop-shadow(0 10px 20px rgba(0, 0, 0, 0.15))",
            }}
          />
        </div>

        <div
          className="absolute left-1/2 -translate-x-1/2 z-30"
          style={{
            top: "-11px",
            width: "200px",
            height: "200px",
          }}
        >
          <img
            src="/cat.png"
            alt="Кошка"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              filter: "drop-shadow(0 10px 20px rgba(0, 0, 0, 0.2))",
            }}
          />
        </div>

        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
          style={{
            width: "100%",
            maxWidth: "956px",
            padding: "0 16px",
          }}
        >
          <div style={{ position: "relative" }}>
            <video
              style={{
                aspectRatio: "1914/955",
                width: "100%",
                borderRadius: "24px",
                objectFit: "cover",
                border: "4px solid #F4E8D3",
                boxShadow: "0 10px 40px rgba(0, 0, 0, 0.2)",
              }}
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/video/video.mp4" type="video/mp4" />
            </video>

            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                padding: "24px 28px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{ display: "flex", alignItems: "center", gap: "16px" }}
                >
                  <button
                    style={{
                      color: "#E4D5BB",
                      fontFamily: "'Cormorant_Garamond', serif",
                      fontSize: "15px",
                      fontWeight: 600,
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      transition: "color 0.3s ease",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#767D4E")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "#E4D5BB")
                    }
                  >
                    Лента
                  </button>
                  <span
                    style={{
                      color: "#E4D5BB",
                      fontSize: "15px",
                      fontWeight: 300,
                    }}
                  >
                    |
                  </span>
                  <button
                    style={{
                      color: "#E4D5BB",
                      fontFamily: "'Cormorant_Garamond', serif",
                      fontSize: "15px",
                      fontWeight: 600,
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      transition: "color 0.3s ease",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#767D4E")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "#E4D5BB")
                    }
                  >
                    Советы по безопасности
                  </button>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    marginRight: "80px",
                  }}
                >
                  <button
                    style={{
                      color: "#E4D5BB",
                      fontFamily: "'Cormorant_Garamond', serif",
                      fontSize: "15px",
                      fontWeight: 600,
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      transition: "color 0.3s ease",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#767D4E")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "#E4D5BB")
                    }
                  >
                    О нас
                  </button>
                  <span
                    style={{
                      color: "#E4D5BB",
                      fontSize: "15px",
                      fontWeight: 300,
                    }}
                  >
                    |
                  </span>
                  <button
                    style={{
                      color: "#E4D5BB",
                      fontFamily: "'Cormorant_Garamond', serif",
                      fontSize: "15px",
                      fontWeight: 600,
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      transition: "color 0.3s ease",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#767D4E")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "#E4D5BB")
                    }
                  >
                    Контакты
                  </button>
                  <button
                    onClick={() => navigate("/login")}
                    style={{
                      color: "#767D4E",
                      fontFamily: "'Cormorant_Garamond', serif",
                      fontSize: "15px",
                      fontWeight: 600,
                      background: "#E4D5BB",
                      border: "none",
                      borderRadius: "9999px",
                      padding: "8px 22px",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      marginLeft: "8px",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#767D4E";
                      e.currentTarget.style.color = "#E4D5BB";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "#E4D5BB";
                      e.currentTarget.style.color = "#767D4E";
                    }}
                  >
                    Войти
                  </button>
                </div>
              </div>
            </div>

            <div
              style={{
                position: "absolute",
                top: "20px",
                right: "28px",
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                border: "3px solid #E4D5BB",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#767D4E",
              }}
            >
              <img
                src="/logo/logo.png"
                alt="Logo"
                style={{ height: "30px", width: "auto" }}
              />
            </div>

            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                textAlign: "center",
                width: "100%",
                padding: "0 20px",
              }}
            >
              <h2
                style={{
                  marginBottom: "20px",
                  lineHeight: 1.3,
                  whiteSpace: "nowrap",
                  letterSpacing: "-0.5px",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Great Vibes', cursive",
                    fontSize: "48px",
                    fontWeight: 400,
                    color: "#FF0004",
                    textDecoration: "underline",
                    textDecorationThickness: "1px",
                    textUnderlineOffset: "6px",
                    display: "inline-block",
                    marginRight: "12px",
                  }}
                >
                  Найдите
                </span>
                <span
                  style={{
                    fontFamily: "'Playfair Display SC', serif",
                    fontSize: "36px",
                    fontWeight: 400,
                    color: "#E4D5BB",
                    display: "inline-block",
                    marginRight: "8px",
                  }}
                >
                  своего
                </span>
                <span
                  style={{
                    fontFamily: "'Playfair Display SC', serif",
                    fontSize: "36px",
                    fontWeight: 400,
                    color: "#E4D5BB",
                    display: "inline-block",
                  }}
                >
                  питомца.
                </span>
              </h2>

              <p
                style={{
                  fontFamily: "'Advent Pro', sans-serif",
                  fontSize: "16px",
                  fontWeight: 300,
                  color: "#E4D5BB",
                  marginBottom: "4px",
                  maxWidth: "600px",
                  margin: "0 auto 4px",
                }}
              >
                Подарите дом тому, кто подарит вам
                <span
                  style={{
                    fontFamily: "'Great Vibes', cursive",
                    fontSize: "24px",
                    fontWeight: 400,
                    color: "#FF0004",
                    textDecoration: "underline",
                    textDecorationThickness: "1px",
                    textUnderlineOffset: "5px",
                    display: "inline-block",
                    marginLeft: "8px",
                    marginRight: "4px",
                  }}
                >
                  любовь
                </span>
                <span
                  style={{
                    fontFamily: "'Advent Pro', sans-serif",
                    fontSize: "16px",
                    fontWeight: 300,
                    color: "#E4D5BB",
                  }}
                >
                  . Мультиплатформа для людей,
                </span>
              </p>

              <p
                style={{
                  fontFamily: "'Advent Pro', sans-serif",
                  fontSize: "16px",
                  fontWeight: 300,
                  color: "#E4D5BB",
                  maxWidth: "600px",
                  margin: "0 auto 24px",
                }}
              >
                кто хочет завести питомца или найти хозяина.
              </p>

              <button
                onClick={() => navigate("/register")}
                style={{
                  backgroundColor: "#E4D5BB",
                  color: "#767D4E",
                  fontFamily: "'Cormorant_Garamond', serif",
                  fontSize: "16px",
                  fontWeight: 700,
                  padding: "12px 32px",
                  borderRadius: "9999px",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#767D4E";
                  e.currentTarget.style.color = "#E4D5BB";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#E4D5BB";
                  e.currentTarget.style.color = "#767D4E";
                }}
              >
                Начать.
              </button>
            </div>
          </div>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 py-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2"></div>
          </div>
        </div>
      </div>

      <div
        style={{
          width: "100%",
          height: "20px",
          backgroundColor: "#63161B",
        }}
      />

      <div
        style={{
          position: "relative",
          backgroundImage: "url('/background/background2')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8 py-12">
          <div
            className="ml-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            style={{ maxWidth: "900px" }}
          >
            <div
              className="rounded-3xl overflow-hidden relative flex"
              style={{ backgroundColor: "#F4E8D3", minHeight: "140px" }}
            >
              <div className="flex-1 p-4">
                <h3
                  style={{
                    fontFamily: "'Playfair Display SC', serif",
                    fontSize: "16px",
                    fontWeight: 700,
                    color: "#767D4E",
                    marginBottom: "8px",
                  }}
                >
                  ДАННИЛ И ВУЛЬФ
                </h3>
                <p
                  style={{
                    fontFamily: "'Playball', cursive",
                    fontSize: "11px",
                    color: "#767D4E",
                    lineHeight: 1.4,
                    marginBottom: "10px",
                  }}
                >
                  Практический опыт показывает, что сложившаяся структура
                  организации способен вступать под ваш же нашу тушь.
                </p>
                <button
                  style={{
                    fontFamily: "'Playfair Display SC', serif",
                    fontSize: "12px",
                    fontWeight: 700,
                    color: "#767D4E",
                    backgroundColor: "#E4D5BB",
                    border: "none",
                    borderRadius: "9999px",
                    padding: "6px 20px",
                    cursor: "pointer",
                    boxShadow:
                      "0 2px 4px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.05)",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 4px 8px rgba(0, 0, 0, 0.15), 0 2px 4px rgba(0, 0, 0, 0.1)";
                    e.currentTarget.style.transform = "translateY(-1px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 2px 4px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.05)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  ЧИТАТЬ.
                </button>
              </div>
              <div className="w-28 flex-shrink-0 relative">
                <img
                  src="/image/image1.png"
                  alt="История"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    position: "absolute",
                    top: 0,
                    left: 0,
                  }}
                />
              </div>
            </div>

            <div
              className="rounded-3xl overflow-hidden relative flex"
              style={{ backgroundColor: "#F4E8D3", minHeight: "140px" }}
            >
              <div className="flex-1 p-4">
                <h3
                  style={{
                    fontFamily: "'Playfair Display SC', serif",
                    fontSize: "16px",
                    fontWeight: 700,
                    color: "#767D4E",
                    marginBottom: "8px",
                  }}
                >
                  МАРИЯ И ПУШОК
                </h3>
                <p
                  style={{
                    fontFamily: "'Playball', cursive",
                    fontSize: "11px",
                    color: "#767D4E",
                    lineHeight: 1.4,
                    marginBottom: "10px",
                  }}
                >
                  Практический опыт показывает, что сложившаяся структура
                  организации способен вступать под ваш же нашу тушь.
                </p>
                <button
                  style={{
                    fontFamily: "'Playfair Display SC', serif",
                    fontSize: "12px",
                    fontWeight: 700,
                    color: "#767D4E",
                    backgroundColor: "#E4D5BB",
                    border: "none",
                    borderRadius: "9999px",
                    padding: "6px 20px",
                    cursor: "pointer",
                    boxShadow:
                      "0 2px 4px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.05)",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 4px 8px rgba(0, 0, 0, 0.15), 0 2px 4px rgba(0, 0, 0, 0.1)";
                    e.currentTarget.style.transform = "translateY(-1px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 2px 4px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.05)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  ЧИТАТЬ.
                </button>
              </div>
              <div className="w-28 flex-shrink-0 relative">
                <img
                  src="/image/image2.png"
                  alt="История"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    position: "absolute",
                    top: 0,
                    left: 0,
                  }}
                />
              </div>
            </div>

            <div
              className="rounded-3xl overflow-hidden relative flex"
              style={{ backgroundColor: "#F4E8D3", minHeight: "140px" }}
            >
              <div className="flex-1 p-4">
                <h3
                  style={{
                    fontFamily: "'Playfair Display SC', serif",
                    fontSize: "16px",
                    fontWeight: 700,
                    color: "#767D4E",
                    marginBottom: "8px",
                  }}
                >
                  АЛЕКСЕЙ И БАРСИК
                </h3>
                <p
                  style={{
                    fontFamily: "'Playball', cursive",
                    fontSize: "11px",
                    color: "#767D4E",
                    lineHeight: 1.4,
                    marginBottom: "10px",
                  }}
                >
                  Практический опыт показывает, что сложившаяся структура
                  организации способен вступать под ваш же нашу тушь.
                </p>
                <button
                  style={{
                    fontFamily: "'Playfair Display SC', serif",
                    fontSize: "12px",
                    fontWeight: 700,
                    color: "#767D4E",
                    backgroundColor: "#E4D5BB",
                    border: "none",
                    borderRadius: "9999px",
                    padding: "6px 20px",
                    cursor: "pointer",
                    boxShadow:
                      "0 2px 4px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.05)",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 4px 8px rgba(0, 0, 0, 0.15), 0 2px 4px rgba(0, 0, 0, 0.1)";
                    e.currentTarget.style.transform = "translateY(-1px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 2px 4px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.05)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  ЧИТАТЬ.
                </button>
              </div>
              <div className="w-28 flex-shrink-0 relative">
                <img
                  src="/image/image3.png"
                  alt="История"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    position: "absolute",
                    top: 0,
                    left: 0,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer
        style={{
          position: "relative",
          backgroundImage: "url('/background/background2.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "600px",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/Rectangle 36.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            filter: "brightness(0) contrast(100%)",
            zIndex: 5,
          }}
        />

        <img
          src="/image/cat4.png"
          alt="Cat"
          style={{
            position: "absolute",
            right: 0,
            bottom: 320,
            height: "100%",
            width: "auto",
            zIndex: 8,
            objectFit: "contain",
          }}
        />

        <div
          className="relative z-10 px-4 lg:px-8 py-16"
          style={{
            position: "relative",
            zIndex: 10,
            maxWidth: "1200px",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "auto 1fr",
              gap: "80px",
              width: "100%",
            }}
          >
            <div>
              <h3
                style={{
                  fontFamily: "'Playfair Display SC', serif",
                  fontSize: "20px",
                  fontWeight: "bold",
                  color: "#FFFFFF",
                  marginBottom: "20px",
                }}
              >
                Юридическая информация
              </h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                <li style={{ marginBottom: "12px" }}>
                  <span
                    style={{
                      fontFamily: "'Playfair Display SC', serif",
                      fontSize: "14px",
                      color: "#FFFFFF",
                      opacity: 0.8,
                    }}
                  >
                    Конфиденциальность
                  </span>
                </li>
                <li style={{ marginBottom: "12px" }}>
                  <span
                    style={{
                      fontFamily: "'Playfair Display SC', serif",
                      fontSize: "14px",
                      color: "#FFFFFF",
                      opacity: 0.8,
                    }}
                  >
                    Политика конфиденциальности
                  </span>
                </li>
                <li style={{ marginBottom: "12px" }}>
                  <span
                    style={{
                      fontFamily: "'Playfair Display SC', serif",
                      fontSize: "14px",
                      color: "#FFFFFF",
                      opacity: 0.8,
                    }}
                  >
                    Условия
                  </span>
                </li>
                <li style={{ marginBottom: "12px" }}>
                  <span
                    style={{
                      fontFamily: "'Playfair Display SC', serif",
                      fontSize: "14px",
                      color: "#FFFFFF",
                      opacity: 0.8,
                    }}
                  >
                    О нас
                  </span>
                </li>
                <li style={{ marginBottom: "12px" }}>
                  <span
                    style={{
                      fontFamily: "'Playfair Display SC', serif",
                      fontSize: "14px",
                      color: "#FFFFFF",
                      opacity: 0.8,
                    }}
                  >
                    Контакты
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h3
                style={{
                  fontFamily: "'Playfair Display SC', serif",
                  fontSize: "20px",
                  fontWeight: "bold",
                  color: "#FFFFFF",
                  marginBottom: "20px",
                }}
              >
                Частые вопросы
              </h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                <li style={{ marginBottom: "12px" }}>
                  <span
                    style={{
                      fontFamily: "'Playfair Display SC', serif",
                      fontSize: "14px",
                      color: "#FFFFFF",
                      opacity: 0.8,
                    }}
                  >
                    Как сервис подбирает питомца под мой образ жизни?
                  </span>
                </li>
                <li style={{ marginBottom: "12px" }}>
                  <span
                    style={{
                      fontFamily: "'Playfair Display SC', serif",
                      fontSize: "14px",
                      color: "#FFFFFF",
                      opacity: 0.8,
                    }}
                  >
                    Почему мне предлагают кота, если я пришел за собакой?
                  </span>
                </li>
                <li style={{ marginBottom: "12px" }}>
                  <span
                    style={{
                      fontFamily: "'Playfair Display SC', serif",
                      fontSize: "14px",
                      color: "#FFFFFF",
                      opacity: 0.8,
                    }}
                  >
                    Вы сотрудничаете с заводчиками или только с приютами?
                  </span>
                </li>
                <li style={{ marginBottom: "12px" }}>
                  <span
                    style={{
                      fontFamily: "'Playfair Display SC', serif",
                      fontSize: "14px",
                      color: "#FFFFFF",
                      opacity: 0.8,
                    }}
                  >
                    Нужно ли платить сервису за подбор?
                  </span>
                </li>
                <li style={{ marginBottom: "12px" }}>
                  <span
                    style={{
                      fontFamily: "'Playfair Display SC', serif",
                      fontSize: "14px",
                      color: "#FFFFFF",
                      opacity: 0.8,
                    }}
                  >
                    Что делать, если предложенный питомец мне не подошел при
                    личной встрече?
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export const Component = LandingPage;
