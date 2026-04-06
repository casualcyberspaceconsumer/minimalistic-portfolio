import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ArrowUpRight, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const projects = [
    {
        title: "DocLina",
        description: "An intelligent healthcare assistant that supports both doctors and patients by analyzing symptoms, explaining medical conditions in simple terms, and helping manage medications and daily health tracking. It leverages AI to make healthcare more accessible, personalized, and empowering.",
        image: "",
        tags: ['OpenAI API', 'Gemini API', 'TypeScript', 'React', 'Node.js', 'Express', 'MongoDB'],
        liveUrl: "#",
        githubUrl: "#",
        featured: false,
    },
    {
        title: "Barid Media Logistics System",
        description: "A centralized logistics ERP for Barid Media featuring multi-center mailbag tracking, RBAC, and automated parcel lifecycles. Designed the scalable database architecture for tracking entry/exit bag flows and built automated workflows for barcode generation, shipping scheduling, and PHPWord-based document reporting.",
        image: "",
        tags: ['PHP', 'Symfony', 'MySQL', 'Bootstrap', 'jQuery', 'Barcode API', 'Docker'],
        liveUrl: "#",
        githubUrl: "#",
        featured: false,
    },

    {
        title: "CEFP Management System",
        description: "A centralized ERP for the CEFP vocational training center featuring multi-center management, RBAC, and real-time financial analytics. Designed the scalable database architecture and built automated workflows for enrollment, scheduling, and expense tracking.",
        image: "",
        tags: ['PHP', 'MySQL', 'JavaScript', 'Tailwind CSS', 'Chart.js'],
        liveUrl: "#",
        githubUrl: "#",
        featured: false,
    },
    {
        title: "Neon Themed Personal Portfolio",
        description: "A responsive portfolio website featuring animated sections, a project showcase, a working contact form with email integration, SEO optimization, and Google Analytics tracking",
        image: "",
        tags: ["React.js", "Tailwind", "D3.js"],
        liveUrl: "#",
        githubUrl: "#",
        featured: false,
    },


]

export function ProjectsSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })
    const [hoveredIndex, setHoveredIndex] = useState(null)

    return (
        <section id="projects" className="relative py-32 px-6 bg-secondary/30" ref={ref}>
            <div className="mx-auto max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="mb-16 text-center"
                >
                    <span className="mb-4 inline-block text-sm font-medium uppercase tracking-widest text-accent">
                        Selected Work
                    </span>
                    <h2 className="font-serif text-4xl font-medium tracking-tight md:text-5xl">Featured Projects</h2>
                </motion.div>

                <div className="grid gap-8 md:grid-cols-2">
                    {projects.map((project, i) => (
                        <motion.article
                            key={project.title}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            className={`group relative overflow-hidden rounded-2xl bg-card ${project.featured ? "md:col-span-2 md:grid md:grid-cols-2 md:gap-8" : ""
                                }`}
                            onMouseEnter={() => setHoveredIndex(i)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            data-cursor-hover
                        >
                            {project.image && (
                                <div className={`relative overflow-hidden ${project.featured ? "" : "aspect-[4/3]"}`}>
                                    <motion.img
                                        src={project.image}
                                        alt={project.title}
                                        className={`w-full object-cover transition-transform duration-700 ${project.featured ? "h-80 md:h-full" : "h-full"
                                            }`}
                                        animate={{
                                            scale: hoveredIndex === i ? 1.05 : 1,
                                        }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                                </div>
                            )}

                            <div className={`p-6 ${project.featured ? "flex flex-col justify-center" : ""}`}>
                                <div className="mb-4 flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <Badge
                                            key={tag}
                                            variant="secondary"
                                            className="text-xs transition-all duration-300 hover:scale-110 hover:bg-accent hover:text-accent-foreground cursor-default"
                                        >
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>

                                <h3 className="mb-2 font-serif text-2xl font-medium">{project.title}</h3>
                                <p className="mb-6 text-muted-foreground">{project.description}</p>

                                <div className="flex gap-3">
                                    <Button size="sm" className="group/btn" asChild>
                                        <a href={project.liveUrl}>
                                            View Project
                                            <ArrowUpRight className="ml-1 h-3 w-3 transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
                                        </a>
                                    </Button>
                                    <Button size="sm" variant="outline" asChild>
                                        <a href={project.githubUrl}>
                                            <Github className="mr-1 h-3 w-3" />
                                            Code
                                        </a>
                                    </Button>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-12 text-center"
                >
                    <Button variant="outline" size="lg" asChild>
                        <a href="https://github.com/casualcyberspaceconsumer" target="_blank" rel="noopener noreferrer">
                            View All Projects on GitHub
                            <ArrowUpRight className="ml-2 h-4 w-4" />
                        </a>
                    </Button>
                </motion.div>
            </div>
        </section>
    )
}
