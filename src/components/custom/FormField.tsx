import type { FormFieldProps } from "@/types/Types";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { EyeOff, Eye } from "lucide-react";

export const FormField: React.FC<FormFieldProps> = ({
  label,
  name,
  type = "text",
  placeholder,
  icon,
  error,
  register,
  showPassword,
  onTogglePassword,
}) => {
  return (
    <div className="space-y-2">
      <Label htmlFor={name} className="text-sm font-medium text-gray-700">
        {label}
      </Label>
      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            {icon}
          </div>
        )}
        <Input
          id={name}
          type={type}
          placeholder={placeholder}
          className={`${icon ? "pl-10" : ""} ${error ? "border-red-500" : ""}`}
          {...register(name)}
        />
        {/* Password visibility toggle */}
        {type === "password" && (
          <button
            type="button"
            onClick={onTogglePassword}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        )}
      </div>
      {error && <p className="text-sm text-red-600 mt-1">{error}</p>}
    </div>
  );
};
