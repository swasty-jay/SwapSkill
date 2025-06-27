export interface FormFieldProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  icon?: React.ReactNode;
  error?: string;
  register: any;
  showPassword?: boolean;
  onTogglePassword?: () => void;
}

export interface AuthUser {
  uid: string;
  email: string;
  displayName?: string;
  // Add other fields as needed
}
