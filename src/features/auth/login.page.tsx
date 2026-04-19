import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff, ArrowRight, ArrowLeft } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { $api } from "@/shared/api/instance";
import { ROUTES } from "@/shared/model/routes";

function LoginPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const loginMutation = useMutation({
    onMutate: (formData: { email: string; password: string }) => {
      return $api.post<{accessToken: string; refreshToken: string }>("/auth/login", formData).then(res => {
        localStorage.setItem("access_token", res.data.accessToken);
        return res;
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      loginMutation.mutate({
        email: formData.email,
        password: formData.password,
      });
      navigate(ROUTES.ACCOUNT);
    } catch {
      alert(loginMutation.error);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/video/video2.mp4" type="video/mp4" />
      </video>

      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.35)" }}
      />

      <button
        onClick={() => navigate(ROUTES.REGISTER)}
        className="fixed left-4 top-4 z-20 rounded-full p-3 transition-all hover:opacity-80 hover:scale-105"
        style={{
          backgroundColor: "#767D4E",
          color: "#E4D5BB",
        }}
      >
        <ArrowLeft className="size-5" />
      </button>

      <div className="relative z-10 flex min-h-screen flex-col items-center px-4 pt-8">
        <div className="w-full max-w-4xl">
          <div className="relative">
            <h1
              className="mb-8 text-left text-5xl font-bold leading-tight"
              style={{
                fontFamily: "'Playfair Display SC', serif",
                color: "#767D4E",
              }}
            >
              С ВОЗВРАЩЕНИЕМ
            </h1>

            <div
              className="absolute w-1 bg-[#767D4E]"
              style={{
                left: "calc(1.2rem - 0px)",
                bottom: "70px",
                height: "120px",
              }}
            />

            <div
              className="absolute h-1 bg-[#767D4E]"
              style={{
                left: "365px",
                bottom: "10px",
                width: "1000px",
              }}
            />

            <img
              src="/image/cat3.png"
              alt="Cat"
              className="absolute"
              style={{
                right: "400px",
                bottom: "-75px",
                width: "150px",
                height: "auto",
                zIndex: 20,
              }}
            />
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <Mail
                className="absolute left-5 top-1/2 size-5 -translate-y-1/2"
                style={{ color: "#767D4E" }}
              />
              <input
                type="email"
                placeholder="ВАШ EMAIL"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full rounded-full border-none py-5 pl-14 pr-6 text-base placeholder:font-medium focus:outline-none focus:ring-2 focus:ring-white/30"
                style={{
                  backgroundColor: "#E4D5BB",
                  fontFamily: "'Playfair Display SC', serif",
                  color: "#767D4E",
                }}
                required
              />
            </div>

            <div className="relative">
              <Lock
                className="absolute left-5 top-1/2 size-5 -translate-y-1/2"
                style={{ color: "#767D4E" }}
              />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="ВАШ ПАРОЛЬ"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                className="w-full rounded-full border-none py-5 pl-14 pr-14 text-base placeholder:font-medium focus:outline-none focus:ring-2 focus:ring-white/30"
                style={{
                  backgroundColor: "#E4D5BB",
                  fontFamily: "'Playfair Display SC', serif",
                  color: "#767D4E",
                }}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-5 top-1/2 -translate-y-1/2"
                style={{ color: "#767D4E" }}
              >
                {showPassword ? (
                  <EyeOff className="size-5" />
                ) : (
                  <Eye className="size-5" />
                )}
              </button>
            </div>

            <div className="mt-6 flex items-center gap-4">
              <button
                type="submit"
                className="rounded-full px-8 py-3 text-base font-bold transition-all hover:opacity-90"
                style={{
                  backgroundColor: "#767D4E",
                  fontFamily: "'Playfair Display SC', serif",
                  color: "#E4D5BB",
                }}
              >
                ВОЙТИ
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export const Component = LoginPage;
