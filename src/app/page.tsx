"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, BarChart3, Box, Layers, ShieldCheck, Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden selection:bg-primary/20 selection:text-primary">
      {/* Navbar */}
      <header className="fixed top-0 w-full z-50 border-b border-white/5 bg-background/60 backdrop-blur-xl">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tight text-gradient">
            <div className="w-8 h-8 bg-primary/10 border border-primary/20 rounded-lg flex items-center justify-center text-primary shadow-[0_0_15px_rgba(255,255,255,0.1)]">
              <Box size={20} />
            </div>
            InventarisTokoATK
          </div>
          <nav className="hidden md:flex gap-6 text-sm font-medium text-muted-foreground/80">
            <Link href="#features" className="hover:text-foreground transition-colors hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">Features</Link>
            <Link href="#pricing" className="hover:text-foreground transition-colors hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">Pricing</Link>
            <Link href="#about" className="hover:text-foreground transition-colors hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">About</Link>
          </nav>
          <div className="flex gap-4">
            <Link href="/login">
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">Log in</Button>
            </Link>
            <Link href="/register">
              <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_20px_rgba(255,255,255,0.15)] border border-white/10">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4 overflow-hidden">
        {/* Spotlight Effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/20 rounded-full blur-[120px] opacity-20 animate-spotlight pointer-events-none" />
        <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

        <div className="container mx-auto text-center max-w-4xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Badge variant="outline" className="mb-8 px-4 py-1.5 text-sm border-primary/20 bg-primary/5 text-primary-foreground/80 rounded-full backdrop-blur-sm shadow-[0_0_15px_rgba(255,255,255,0.05)]">
              <span className="mr-2 inline-block w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              v1.0 Public Beta is Live
            </Badge>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white via-white/90 to-white/50 drop-shadow-sm">
              Manage your inventory <br /> with precision.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              Experience the next generation of inventory management. Real-time tracking, automated reporting, and a design that feels like the future.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button size="lg" className="h-14 px-8 text-base rounded-full bg-white text-black hover:bg-white/90 shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all hover:scale-105">
                Start for free <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 text-base rounded-full border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all hover:scale-105">
                View Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section (Bento Grid) */}
      <section id="features" className="py-32 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent opacity-20 pointer-events-none" />
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold tracking-tighter mb-4 text-gradient">Everything you need</h2>
            <p className="text-muted-foreground text-lg">Powerful features wrapped in a stunning interface.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: Real-time Tracking (Large) */}
            <motion.div
              className="md:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card className="h-full glass-card hover:border-primary/30 transition-all duration-500 group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-500">
                    <Zap size={24} />
                  </div>
                  <CardTitle className="text-xl">Real-time Stock Tracking</CardTitle>
                  <CardDescription>Monitor your inventory levels instantly as they change.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative h-64 w-full bg-gradient-to-br from-black/40 to-black/20 rounded-xl border border-white/5 overflow-hidden flex items-center justify-center group-hover:border-blue-500/20 transition-colors duration-500">
                    <div className="absolute inset-0 grid grid-cols-8 gap-2 p-4 opacity-20">
                      {[...Array(32)].map((_, i) => (
                        <div key={i} className="bg-white/10 rounded-sm h-full animate-pulse" style={{ animationDelay: `${i * 0.05}s` }}></div>
                      ))}
                    </div>
                    <div className="z-10 bg-black/50 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full text-xs font-mono text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                      ● Live Data Stream
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Card 2: Supplier Management */}
            <motion.div
              className="md:col-span-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Card className="h-full glass-card hover:border-primary/30 transition-all duration-500 group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-4 group-hover:scale-110 transition-transform duration-500">
                    <Layers size={24} />
                  </div>
                  <CardTitle className="text-xl">Supplier Management</CardTitle>
                  <CardDescription>Keep track of all your vendors in one place.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { color: "bg-green-500", width: "w-20" },
                      { color: "bg-yellow-500", width: "w-16" },
                      { color: "bg-red-500", width: "w-24" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5 group-hover:border-purple-500/20 transition-colors duration-300">
                        <div className={`w-8 h-8 rounded-full ${item.color}/20 flex items-center justify-center`}>
                          <div className={`w-2 h-2 rounded-full ${item.color}`} />
                        </div>
                        <div className={`h-2 ${item.width} bg-white/10 rounded-full`}></div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Card 3: Automated Reporting */}
            <motion.div
              className="md:col-span-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Card className="h-full glass-card hover:border-primary/30 transition-all duration-500 group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400 mb-4 group-hover:scale-110 transition-transform duration-500">
                    <BarChart3 size={24} />
                  </div>
                  <CardTitle className="text-xl">Automated PDF Reporting</CardTitle>
                  <CardDescription>Generate detailed reports with a single click.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-40 w-full bg-black/20 border border-white/5 rounded-xl p-4 flex flex-col gap-3 shadow-inner group-hover:border-green-500/20 transition-colors duration-300">
                    <div className="h-2 w-1/3 bg-white/20 rounded-full"></div>
                    <div className="h-2 w-full bg-white/10 rounded-full"></div>
                    <div className="h-2 w-full bg-white/10 rounded-full"></div>
                    <div className="h-2 w-2/3 bg-white/10 rounded-full"></div>
                    <div className="mt-auto flex justify-end">
                      <div className="w-8 h-8 rounded bg-green-500/20 flex items-center justify-center">
                        <ArrowRight size={14} className="text-green-500" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Card 4: Secure & Reliable */}
            <motion.div
              className="md:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Card className="h-full glass-card hover:border-primary/30 transition-all duration-500 group overflow-hidden flex flex-col md:flex-row items-center">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="p-8 flex-1 relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 mb-6 group-hover:scale-110 transition-transform duration-500">
                    <ShieldCheck size={24} />
                  </div>
                  <CardTitle className="mb-3 text-xl">Enterprise-grade Security</CardTitle>
                  <CardDescription className="text-base">Your data is encrypted and backed up daily. We prioritize security so you can focus on your business.</CardDescription>
                </div>
                <div className="flex-1 h-full min-h-[200px] w-full bg-gradient-to-l from-orange-500/5 to-transparent flex items-center justify-center relative">
                  <ShieldCheck size={120} className="text-orange-500/10 absolute right-10 group-hover:scale-110 transition-transform duration-700" />
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 bg-black/20 backdrop-blur-lg">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 font-bold text-lg">
            <div className="w-6 h-6 bg-primary/20 rounded flex items-center justify-center text-primary text-xs border border-primary/20">
              <Box size={14} />
            </div>
            InventarisTokoATK
          </div>
          <div className="text-sm text-muted-foreground">
            &copy; 2025 InventarisTokoATK by Jeffry UNDIRA. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">Terms</Link>
            <Link href="https://twitter.com/mickey_close" target="_blank" className="hover:text-foreground transition-colors">Twitter</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

