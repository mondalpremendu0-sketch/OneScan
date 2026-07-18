import { useUser } from "@clerk/react";
import { Navigate, Outlet } from "react-router";

export default function ProtectedRoute({children}) {
  const { isLoaded, isSignedIn } = useUser();

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (!isSignedIn) {
    return <Navigate to="/" replace />;
  }

  return children;
}