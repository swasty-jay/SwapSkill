import { FormField } from "@/components/custom/FormField";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { loginSchema } from "@/types/AuthSchema";
import type { AuthUser } from "@/types/Types";
import { Lock, Mail } from "lucide-react";
import type { z } from "zod";
import { signInWithEmail } from "./AuthServices";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";

type LoginFormData = z.infer<typeof loginSchema>;

// Login Form Component with Firebase Integration
const LoginForm: React.FC<{
  onSwitchToSignUp: () => void;
  onLoginSuccess: (user: AuthUser) => void;
}> = ({ onSwitchToSignUp, onLoginSuccess }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [submitError, setSubmitError] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
  });

  // Handle Firebase login
  const onSubmit = async (data: LoginFormData) => {
    setIsLoading(true);
    setSubmitError("");

    try {
      // Use Firebase Auth Service
      const result = await signInWithEmail({
        email: data.email,
        password: data.password,
      });

      if (result.success && result.user) {
        // Login successful
        const authUser: AuthUser = {
          uid: result.user.uid,
          email: result.user.email ?? "",
          displayName: result.user.displayName ?? undefined,
        };
        onLoginSuccess(authUser);
      } else {
        // Login failed
        setSubmitError(result.error || "Login failed. Please try again.");
      }
    } catch (error: unknown) {
      setSubmitError("An unexpected error occurred. Please try again.");
      console.error("Login error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold text-center">
          Welcome back
        </CardTitle>
        <CardDescription className="text-center">
          Enter your credentials to access your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Email Field */}
          <FormField
            label="Email"
            name="email"
            type="email"
            placeholder="Enter your email"
            icon={<Mail size={20} />}
            error={errors.email?.message}
            register={register}
          />

          {/* Password Field */}
          <FormField
            label="Password"
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            icon={<Lock size={20} />}
            error={errors.password?.message}
            register={register}
            showPassword={showPassword}
            onTogglePassword={() => setShowPassword(!showPassword)}
          />

          {/* Submit Error Alert */}
          {submitError && (
            <Alert className="border-red-200 bg-red-50">
              <AlertDescription className="text-red-800">
                {submitError}
              </AlertDescription>
            </Alert>
          )}

          {/* Submit Button */}
          <Button
            type="button"
            className="w-full"
            disabled={!isValid || isLoading}
            onClick={handleSubmit(onSubmit)}
          >
            {isLoading ? "Signing in..." : "Sign In"}
          </Button>

          {/* Switch to Sign Up */}
          <div className="text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{" "}
              <button
                type="button"
                onClick={onSwitchToSignUp}
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Sign up here
              </button>
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
export default LoginForm;
