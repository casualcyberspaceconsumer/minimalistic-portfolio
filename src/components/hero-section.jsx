import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowDown, ArrowRight, Github, Linkedin } from "lucide-react"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { ParticleField } from "@/components/particle-field"

export function HeroSection() {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    })

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

    return (
        <section ref={ref} className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
            <ParticleField />

            <motion.div className="relative z-10 mx-auto max-w-5xl text-center" style={{ y, opacity }}>
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.5 }}
                    className="mb-6"
                >
                    <span className="inline-block rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-muted-foreground">
                        Available for work
                    </span>
                </motion.div>

                <motion.h1
                    className="mb-6 font-serif text-5xl font-medium leading-[1.1] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.7 }}
                >
                    <span className="block">Hello,</span>
                    <span className="block">This is <span className="text-gradient">Jalal Amal</span></span>
                </motion.h1>

                <motion.p
                    className="mx-auto mb-10 max-w-xl text-lg text-muted-foreground md:text-xl"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.9 }}
                >
                    A creative web developer passionate about transforming ideas into elegant, high-performance digital experiences.
                </motion.p>

                <motion.div
                    className="flex flex-col items-center justify-center gap-4 sm:flex-row"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 2.1 }}
                >
                    <Button size="lg" className="group px-8" asChild>
                        <a href="#projects">
                            View Projects
                            <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
                        </a>
                    </Button>
                    <Button size="lg" variant="outline" className="group px-8 bg-transparent" asChild>
                        <a href="https://drive.google.com/file/d/1dwXMUWHiumoLERiT1taFfvNqWgAGdRNN/view" target="_blank" rel="noopener noreferrer">
                            Get Resume
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </a>
                    </Button>
                    <Button size="lg" className="group px-8" asChild>
                        <a href="#contact">
                            Get in Touch
                            <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
                        </a>
                    </Button>
                </motion.div>

                <motion.div
                    className="mt-16 flex items-center justify-center gap-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 2.3 }}
                >
                    {[
                        { icon: Github, href: "https://github.com/casualcyberspaceconsumer", label: "GitHub" },
                        { icon: Linkedin, href: "https://www.linkedin.com/in/jalal-amal/", label: "LinkedIn" },
                    ].map(({ icon: Icon, href, label }) => (
                        <a
                            key={label}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground transition-colors hover:text-foreground"
                            aria-label={label}
                        >
                            <Icon className="h-5 w-5" />
                        </a>
                    ))}
                </motion.div>
            </motion.div>

            <motion.div
                className="absolute bottom-12 left-1/2 -translate-x-1/2"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.8,
                    delay: 2.5,
                    repeat: Infinity,
                    repeatType: "reverse",
                    repeatDelay: 1,
                }}
            >
                <ArrowDown className="h-5 w-5 text-muted-foreground" />
            </motion.div>
        </section>
    )
}
