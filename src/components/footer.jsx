import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Github, Linkedin, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

const footerLinks = [
    {
        title: "Navigation",
        links: [
            { name: "About", href: "#about" },
            { name: "Projects", href: "#projects" },
            { name: "Skills", href: "#skills" },
            { name: "Education", href: "#education" },
            { name: "Contact", href: "#contact" },
        ],
    },
    {
        title: "Social",
        links: [
            { name: "GitHub", href: "https://github.com/casualcyberspaceconsumer", icon: Github },
            { name: "LinkedIn", href: "https://www.linkedin.com/in/jalal-amal/", icon: Linkedin },
        ],
    },
]

export function Footer() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    const [isHovered, setIsHovered] = useState(false)

    return (
        <footer ref={ref} className="relative border-t border-border bg-secondary/30 px-6 py-16">
            <div className="mx-auto max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="grid gap-12 md:grid-cols-4"
                >
                    {/* Brand */}
                    <div className="md:col-span-2">
                        <a
                            href="#"
                            className="font-serif text-2xl font-medium tracking-tight"
                        >
                            JA
                        </a>
                        <p className="mt-4 max-w-sm text-muted-foreground">
                            Let's build something amazing together.
                        </p>
                    </div>

                    {/* Links */}
                    {footerLinks.map((section) => (
                        <div key={section.title}>
                            <h3 className="mb-4 text-sm font-medium uppercase tracking-widest text-muted-foreground">
                                {section.title}
                            </h3>
                            <ul className="space-y-3">
                                {section.links.map((link) => (
                                    <li key={link.name}>
                                        <a
                                            href={link.href}
                                            target={
                                                link.href.startsWith("http") ? "_blank" : undefined
                                            }
                                            rel={
                                                link.href.startsWith("http")
                                                    ? "noopener noreferrer"
                                                    : undefined
                                            }
                                            className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                                        >
                                            {"icon" in link && link.icon && (
                                                <link.icon className="h-4 w-4" />
                                            )}
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </motion.div>

                {/* Bottom Bar */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row"
                >
                    <p className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} Jalal Amal. All rights reserved.
                    </p>

                    <Button
                        variant="outline"
                        size="icon"
                        onClick={scrollToTop}
                        className="group relative bg-transparent overflow-hidden"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        aria-label="Scroll to top"
                    >
                        <motion.div
                            animate={{ y: isHovered ? -4 : 0 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                            <ArrowUp className="h-4 w-4" />
                        </motion.div>
                    </Button>
                </motion.div>
            </div>
        </footer>
    )
}
