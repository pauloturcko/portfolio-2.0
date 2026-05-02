import { Button } from "@/components/ui/button"

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center gap-6 p-6">
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-6xl font-heading font-bold">
          Portfolio 2.0 Base
        </h1>
        <p className="text-lg md:text-xl font-sans text-muted-foreground max-w-lg mx-auto">
          Project skeleton initialized with React, Vite, TypeScript, Tailwind CSS, Shadcn UI, and configured for React Bits components.
        </p>
      </div>

      <div className="flex gap-4">
        <Button size="lg">Primary Action</Button>
        <Button size="lg" variant="secondary">Secondary Action</Button>
      </div>
    </div>
  )
}

export default App
