"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 text-white px-4 py-10 flex flex-col items-center justify-center">
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="text-4xl sm:text-5xl font-bold mb-6 text-center"
      >
        🚀 SimpleDeploy
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-lg sm:text-xl text-center max-w-md mb-8"
      >
        Deploy your GitHub projects in one click. Fast, Free, and Mobile-friendly.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="w-full max-w-sm"
      >
        <Card className="bg-white text-black rounded-2xl shadow-xl">
          <CardContent className="p-6 space-y-4">
            <p className="text-center text-lg font-medium">Login with GitHub to start</p>
            <Button className="w-full bg-black text-white hover:bg-gray-800">
              <Github className="mr-2" /> Connect GitHub
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    </main>
  );
}
