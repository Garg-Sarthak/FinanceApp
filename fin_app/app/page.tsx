'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertCircle, Loader2, TrendingUp, DollarSign, BarChart2, Github, Search, LineChart, Briefcase } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function AuthPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsLoading(true)
    setError('')

    // Simulating API call
    await new Promise(resolve => setTimeout(resolve, 1500))

    console.log('Form submitted')
    setIsLoading(false)
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-blue-100 to-green-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <TrendingUp className="h-8 w-8 text-green-500 mr-2" />
              <span className="font-bold text-xl">FinTrack</span>
            </div>
            <nav>
              <ul className="flex space-x-4">
                <li>
                  <Button variant="ghost">About</Button>
                </li>
                <li>
                  <Button variant="ghost">Contact</Button>
                </li>
                <li>
                  <Button variant="outline" className="flex items-center">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center p-4">
        <div className="absolute inset-0 overflow-hidden z-0">
          <img
            src="/placeholder.svg?height=1080&width=1920"
            alt="Stock market background"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="flex flex-col lg:flex-row gap-8 w-full max-w-6xl z-10">
          <Card className="w-full lg:w-1/2">
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <CardTitle className="text-2xl font-bold">Welcome to FinTrack</CardTitle>
                <TrendingUp className="h-6 w-6 text-green-500" />
              </div>
              <CardDescription>Sign up or sign in to access your intelligent stock portfolio</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="sign-in">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="sign-in">Sign In</TabsTrigger>
                  <TabsTrigger value="sign-up">Sign Up</TabsTrigger>
                </TabsList>
                <TabsContent value="sign-in">
                  <form id="sign-in-form" onSubmit={handleSubmit}>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="sign-in-email">Email</Label>
                        <Input id="sign-in-email" name="email" type="email" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="sign-in-password">Password</Label>
                        <Input id="sign-in-password" name="password" type="password" required />
                      </div>
                    </div>
                    <Button className="w-full mt-4" type="submit" disabled={isLoading}>
                      {isLoading ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait</> : 'Sign In'}
                    </Button>
                  </form>
                </TabsContent>
                <TabsContent value="sign-up">
                  <form id="sign-up-form" onSubmit={handleSubmit}>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="sign-up-email">Email</Label>
                        <Input id="sign-up-email" name="email" type="email" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="sign-up-password">Password</Label>
                        <Input id="sign-up-password" name="password" type="password" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirm-password">Confirm Password</Label>
                        <Input id="confirm-password" name="confirmPassword" type="password" required />
                      </div>
                    </div>
                    <Button className="w-full mt-4" type="submit" disabled={isLoading}>
                      {isLoading ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait</> : 'Sign Up'}
                    </Button>
                  </form>
                </TabsContent>
              </Tabs>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              {error && (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}
              <div className="flex justify-around w-full">
                <div className="flex flex-col items-center">
                  <DollarSign className="h-8 w-8 text-green-500 mb-2" />
                  <span className="text-sm text-muted-foreground">Smart Investing</span>
                </div>
                <div className="flex flex-col items-center">
                  <BarChart2 className="h-8 w-8 text-blue-500 mb-2" />
                  <span className="text-sm text-muted-foreground">Insightful Analysis</span>
                </div>
              </div>
            </CardFooter>
          </Card>

          <Card className="w-full lg:w-1/2">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Discover FinTrack</CardTitle>
              <CardDescription>Your intelligent companion for stock analysis and portfolio management</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-6">
                <div className="flex items-start space-x-3">
                  <Search className="h-6 w-6 text-blue-500 mt-1" />
                  <div>
                    <h3 className="font-semibold">In-Depth Stock Research</h3>
                    <p className="text-sm text-muted-foreground">Access comprehensive financial data, news, and AI-driven insights for thousands of listed companies.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <LineChart className="h-6 w-6 text-green-500 mt-1" />
                  <div>
                    <h3 className="font-semibold">Intelligent Portfolio Tracking</h3>
                    <p className="text-sm text-muted-foreground">Monitor your investments in real-time with AI-powered performance analytics and risk assessment.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <BarChart2 className="h-6 w-6 text-purple-500 mt-1" />
                  <div>
                    <h3 className="font-semibold">Advanced Fundamental Analysis</h3>
                    <p className="text-sm text-muted-foreground">Evaluate stocks using key financial ratios, growth metrics, and AI-enhanced valuation models.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Briefcase className="h-6 w-6 text-orange-500 mt-1" />
                  <div>
                    <h3 className="font-semibold">Smart Watchlists</h3>
                    <p className="text-sm text-muted-foreground">Create and manage AI-curated watchlists to identify potential investment opportunities aligned with your strategy.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}