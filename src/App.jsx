import { ThemeProvider } from '@/components/theme-provider'
import { Navigation } from '@/components/navigation'
import { HeroSection } from '@/components/hero-section'
import { AboutSection } from '@/components/about-section'
import { ProjectsSection } from '@/components/projects-section'
import { SkillsSection } from '@/components/skills-section'
import { EducationSection } from '@/components/education-section'
import { ContactSection } from '@/components/contact-section'
import { Footer } from '@/components/footer'
import { Preloader } from '@/components/preloader'

export default function App() {
    return (
        <ThemeProvider defaultTheme="light">
            <div className="font-sans antialiased">
                <Preloader />
                <Navigation />
                <main className="relative">
                    <HeroSection />
                    <AboutSection />
                    <ProjectsSection />
                    <SkillsSection />
                    <EducationSection />
                    <ContactSection />
                </main>
                <Footer />
            </div>
        </ThemeProvider>
    )
}
