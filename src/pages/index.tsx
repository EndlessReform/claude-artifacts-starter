import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Splash: React.FC = () => (
  <div className="min-h-screen bg-background dark:bg-background text-foreground dark:text-foreground flex flex-col justify-center items-center p-4">
    <Card className="w-[350px] max-w-full">
      <CardHeader>
        <CardTitle className="text-3xl font-bold text-primary">
          Welcome to Your App
        </CardTitle>
        <CardDescription>
          A Vite + TS + Tailwind + shadcn/ui template
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">
          This template provides a minimal setup to get React working in Vite
          with HMR and some ESLint rules.
        </p>
      </CardContent>
      <CardFooter className="flex flex-col sm:flex-row gap-4">
        <Button asChild>
          <a
            href="https://vitejs.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn about Vite
          </a>
        </Button>
        <Button asChild variant="outline">
          <a
            href="https://ui.shadcn.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore shadcn/ui
          </a>
        </Button>
      </CardFooter>
    </Card>
  </div>
);

export default Splash;
