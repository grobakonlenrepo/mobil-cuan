import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Home } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      {/* Futuristic background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 via-background to-primary/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(88,88,232,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(246,85,168,0.15),transparent_50%)]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          {/* 404 Number */}
          <div className="mb-8">
            <h1 className="text-9xl md:text-[12rem] font-bold bg-gradient-to-r from-primary via-foreground to-secondary bg-clip-text text-transparent leading-none">
              404
            </h1>
          </div>

          {/* Error Message */}
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Page Not Found</h2>
            <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
              Looks like you've taken a wrong turn. The page you're looking for doesn't exist or has been moved.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" asChild className="gap-2 bg-primary hover:bg-primary/90">
              <Link href="/">
                <Home className="h-5 w-5" />
                Back to Home
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="gap-2 bg-transparent">
              <Link href="javascript:history.back()">
                <ArrowLeft className="h-5 w-5" />
                Go Back
              </Link>
            </Button>
          </div>

          {/* Decorative Elements */}
          <div className="mt-16 flex items-center justify-center gap-2 text-muted-foreground">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-muted-foreground" />
            <span className="text-sm">Error Code: 404</span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-muted-foreground" />
          </div>
        </div>
      </div>
    </div>
  )
}
