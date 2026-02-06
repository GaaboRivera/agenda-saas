import { Header } from "@/components/landing/header"
import { Hero } from "@/components/landing/hero"
import { Features } from "@/components/landing/features"
import { Services } from "@/components/landing/services"
import { Pricing } from "@/components/landing/pricing"
import { Testimonials } from "@/components/landing/testimonials"
import { Contact } from "@/components/landing/contact"
import { Footer } from "@/components/landing/footer"

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Features />
      <Services />
      <Pricing />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}