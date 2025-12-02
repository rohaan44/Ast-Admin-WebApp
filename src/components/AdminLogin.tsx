import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Mail, Lock } from "lucide-react";
import loginBg from "@/assets/login-bg.jpg.jpg";
import Logo from "@/assets/Logo.png";

interface AdminLoginProps {
  onLogin?: () => void;
}

export default function AdminLogin({ onLogin }: AdminLoginProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accepted, setAccepted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login attempt:", { email, password, accepted });

    // Call onLogin callback if provided
    if (onLogin) {
      onLogin();
    }
  };

  return (
    <div className="min-h-screen w-full relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${loginBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          transform: "rotate(0deg)",
          opacity: 1,
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <a href="#home">
              <img src={Logo} alt="AST Logo" className="h-12 w-auto" />
            </a>
          </div>

          {/* Progress Indicators */}
          {/* <div className="flex justify-center gap-2 mb-8">
            <div className="h-1 w-16 bg-white rounded-full" />
            <div className="h-1 w-16 bg-white/30 rounded-full" />
            <div className="h-1 w-16 bg-white/30 rounded-full" />
          </div> */}

          {/* Title */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">
              Conosciamoti meglio.
            </h2>
            <p className="text-gray-300 text-sm">
              Questo ci aiuta a personalizzare il tuo primo piano di allenamento
              e nutrizione.
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email Input */}
            <div className="relative">
              {/* Icon (NO BLUR) */}
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 z-10">
                <Mail size={20} />
              </div>

              {/* Input background with blur */}
              <div className="backdrop-blur-sm bg-white/10 rounded-xl">
                <Input
                  type="email"
                  placeholder="Indirizzo e-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-12 pr-4 py-6 border-white/20 text-white placeholder:text-gray-400 focus:bg-white/15 focus:border-white/30 transition-all rounded-xl bg-transparent"
                  required
                />
              </div>
            </div>

            {/* Password Input */}


            <div className="relative">
              {/* Icon (NO BLUR) */}
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 z-10">
                <Lock size={20} />
              </div>

              {/* Input background with blur */}
              <div className="backdrop-blur-sm bg-white/10 rounded-xl">
                 <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-12 pr-4 py-6 border-white/20 text-white placeholder:text-gray-400 focus:bg-white/15 focus:border-white/30 transition-all rounded-xl bg-transparent"
                required
              />
              </div>
            </div>


            
            {/* <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                <Lock size={20} />
              </div>
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-12 pr-4 py-6 bg-white/10 border-white/20 text-white placeholder:text-gray-400 rounded-xl backdrop-blur-sm focus:bg-white/15 focus:border-white/30 transition-all"
                required
              />
            </div> */}

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full py-6 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold rounded-xl text-lg shadow-lg shadow-red-500/50 transition-all duration-300"
            >
              Continuare
            </Button>

            {/* Forgot Password */}
            <div className="text-center">
              <a
                href="#"
                className="text-sm text-white hover:text-red-400 transition-colors underline"
              >
                Forgot Password?
              </a>
            </div>

            {/* Terms Checkbox */}
            <div className="flex items-start gap-3 pt-4">
              <Checkbox
                id="terms"
                checked={accepted}
                onCheckedChange={(checked) => setAccepted(checked as boolean)}
                className="mt-1 border-white/30 data-[state=checked]:bg-red-500 data-[state=checked]:border-red-500"
              />
              <label
                htmlFor="terms"
                className="text-sm text-gray-300 leading-tight cursor-pointer"
              >
                Confermo di aver letto e accettato i{" "}
                <a
                  href="#"
                  className="text-red-500 hover:text-red-400 underline"
                >
                  Termini di utilizzo
                </a>{" "}
                e l'
                <a
                  href="#"
                  className="text-red-500 hover:text-red-400 underline"
                >
                  informativa sulla privacy
                </a>
                .
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
