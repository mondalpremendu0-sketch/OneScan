import { useUser } from "@clerk/react";
import { Navigate } from "react-router";
import Loader from '../features/auth/components/Loader.jsx'

export default function ProtectedRoute({children}) {
  const { isLoaded, isSignedIn } = useUser();

  if (!isLoaded) {
    return <Loader />
  }

  if (!isSignedIn) {
    return <Navigate to="/" replace />
  }

  return children;
}