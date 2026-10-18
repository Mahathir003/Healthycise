import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";
import { PlanProvider } from "@/context/PlanContext";

export const metadata = {
  title: "Healthycise — Fitness & Nutrition Made Simple",
  description:
    "Track your calories, plan your workouts, and reach your fitness goals.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <PlanProvider>{children}</PlanProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
