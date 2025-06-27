import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { signOutUser } from "./auth/SignOut";
import { LogOut } from "lucide-react";
import LoginForm from "./auth/SignIn";
import SignUpForm from "./auth/SignUp";

// Type definitions

// Dashboard Component for authenticated users
interface AuthUser {
  uid: string;
  email: string;
  displayName?: string;
  // Add other fields as needed
}

const Dashboard: React.FC<{ user: AuthUser; onSignOut: () => void }> = ({
  user,
  onSignOut,
}) => {
  const [isSigningOut, setIsSigningOut] = useState(false);

  const handleSignOut = async () => {
    setIsSigningOut(true);
    try {
      const result = await signOutUser();
      if (result.success) {
        onSignOut();
      }
    } catch (error) {
      console.error("Sign out error:", error);
    } finally {
      setIsSigningOut(false);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold text-center">
          Welcome!
        </CardTitle>
        <CardDescription className="text-center">
          You are successfully logged in
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-center space-y-2">
          <div className="p-4 bg-green-50 rounded-lg">
            <p className="text-sm text-gray-600">Email:</p>
            <p className="font-medium">{user.email}</p>
          </div>

          {user.displayName && (
            <div className="p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-gray-600">Name:</p>
              <p className="font-medium">{user.displayName}</p>
            </div>
          )}

          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">User ID:</p>
            <p className="font-mono text-xs">{user.uid}</p>
          </div>
        </div>

        <Button
          onClick={handleSignOut}
          variant="outline"
          className="w-full"
          disabled={isSigningOut}
        >
          <LogOut className="w-4 h-4 mr-2" />
          {isSigningOut ? "Signing out..." : "Sign Out"}
        </Button>
      </CardContent>
    </Card>
  );
};

// Main App Component with Firebase Auth State Management
const AuthApp: React.FC = () => {
  const [currentView, setCurrentView] = useState<"login" | "signup">("login");
  // Define a User type based on your authentication service's user object
  interface AuthUser {
    uid: string;
    email: string;
    displayName?: string;
    // Add other fields as needed
  }

  const [currentUser, setCurrentUser] = useState<AuthUser | null>(null);

  // In a real app, you would use the useAuth hook:
  // const { user, loading, isAuthenticated } = useAuth();

  const handleLoginSuccess = (user: AuthUser) => {
    setCurrentUser(user);
  };

  const handleSignUpSuccess = (user: AuthUser) => {
    setCurrentUser(user);
  };

  const handleSignOut = () => {
    setCurrentUser(null);
    setCurrentView("login");
  };

  // Show dashboard if user is authenticated
  if (currentUser) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <Dashboard user={currentUser} onSignOut={handleSignOut} />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {currentView === "login" ? (
          <LoginForm
            onSwitchToSignUp={() => setCurrentView("signup")}
            onLoginSuccess={handleLoginSuccess}
          />
        ) : (
          <SignUpForm
            onSwitchToLogin={() => setCurrentView("login")}
            onSignUpSuccess={handleSignUpSuccess}
          />
        )}
      </div>
    </div>
  );
};

export default AuthApp;
