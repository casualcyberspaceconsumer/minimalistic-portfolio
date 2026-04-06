import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { GraduationCap, Award, ExternalLink, Calendar, MapPin } from "lucide-react"

const education = [
    {
        period: "2024 — Present",
        degree: "Specialized Technology Diploma in Software Development",
        school: "CMC, Casablanca",
        description:
            "Ranked 1st in class and region within the 'Excellence Class' program. Specializing in Full-Stack architecture (React, Laravel, Node.js), database optimization, and scalable system design.",
        highlights: ["Ranked 1st in Promotion", "Full-Stack Development", "System Design", "Project Management"],
    },
    {
        period: "2022 — 2023",
        degree: "Baccalaureate in Physical Sciences",
        school: "Nouaceur, Morocco",
        description:
            "Developed strong analytical and problem-solving skills through advanced mathematics, physics, and scientific methodology.",
        highlights: ["Mathematics", "Physics", "Analytical Thinking"],
    },
]

const certifications = [
    {
        title: "Functional Programming with PHP",
        issuer: "LinkedIn Learning",
        date: "2024",
        credentialUrl: "#",
    },
    {
        title: "Learning the JavaScript Language",
        issuer: "LinkedIn Learning",
        date: "2025",
        credentialUrl: "#",
    },
    {
        title: "Frontend Development Libraries",
        issuer: "freeCodeCamp",
        date: "2025",
        credentialUrl: "#",
    },
    {
        title: "Responsive Web Design",
        issuer: "freeCodeCamp",
        date: "2025",
        credentialUrl: "#",
    },
]

export function EducationSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })
    const [hoveredCert, setHoveredCert] = useState(null)

    return (
        <section id="education" className="relative py-32 px-6 bg-secondary/30" ref={ref}>
            <div className="mx-auto max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="mb-16 text-center"
                >
                    <span className="mb-4 inline-block text-sm font-medium uppercase tracking-widest text-accent">Background</span>
                    <h2 className="font-serif text-4xl font-medium tracking-tight md:text-5xl">Education & Certifications</h2>
                </motion.div>

                <div className="grid gap-16 lg:grid-cols-2 lg:gap-12">
                    {/* Left Column - Education Timeline */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.1 }}
                    >
                        <div className="mb-8 flex items-center gap-3">
                            <div className="inline-flex rounded-xl bg-accent/10 p-2.5">
                                <GraduationCap className="h-5 w-5 text-accent" />
                            </div>
                            <h3 className="font-serif text-2xl font-medium">Education</h3>
                        </div>

                        <div className="space-y-8">
                            {education.map((edu, i) => (
                                <motion.div
                                    key={edu.degree}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
                                    className="group relative border-l-2 border-border pl-6 transition-colors hover:border-accent"
                                >
                                    <div className="absolute -left-[5px] top-0 h-2 w-2 rounded-full bg-border transition-colors group-hover:bg-accent" />

                                    <div className="flex flex-wrap items-center gap-3 mb-1">
                                        <span className="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-widest text-muted-foreground">
                                            <Calendar className="h-3 w-3" />
                                            {edu.period}
                                        </span>
                                    </div>

                                    <h4 className="mt-1 font-medium text-lg leading-snug">{edu.degree}</h4>

                                    <span className="mt-1 inline-flex items-center gap-1.5 text-sm text-accent">
                                        <MapPin className="h-3 w-3" />
                                        {edu.school}
                                    </span>

                                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{edu.description}</p>

                                    <div className="mt-4 flex flex-wrap gap-2">
                                        {edu.highlights.map((tag) => (
                                            <span
                                                key={tag}
                                                className="rounded-full border border-border bg-secondary/40 px-3 py-1 text-xs font-medium text-muted-foreground transition-colors group-hover:border-accent/30 group-hover:text-foreground"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Column - Certifications */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="mb-8 flex items-center gap-3">
                            <div className="inline-flex rounded-xl bg-accent/10 p-2.5">
                                <Award className="h-5 w-5 text-accent" />
                            </div>
                            <h3 className="font-serif text-2xl font-medium">Certifications</h3>
                        </div>

                        <div className="space-y-4">
                            {certifications.map((cert, i) => (
                                <motion.div
                                    key={cert.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                                    className="group relative overflow-hidden rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:border-accent"
                                    onMouseEnter={() => setHoveredCert(i)}
                                    onMouseLeave={() => setHoveredCert(null)}
                                >
                                    <motion.div
                                        className="absolute inset-0 bg-accent/5"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: hoveredCert === i ? 1 : 0 }}
                                        transition={{ duration: 0.3 }}
                                    />

                                    <div className="relative z-10 flex items-start justify-between gap-4">
                                        <div className="flex-1 min-w-0">
                                            <h4 className="font-medium leading-snug">{cert.title}</h4>
                                            <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground">
                                                <span>{cert.issuer}</span>
                                                <span className="hidden sm:inline text-border">•</span>
                                                <span className="inline-flex items-center gap-1">
                                                    <Calendar className="h-3 w-3" />
                                                    {cert.date}
                                                </span>
                                            </div>
                                        </div>

                                        {cert.credentialUrl && cert.credentialUrl !== "#" && (
                                            <a
                                                href={cert.credentialUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="mt-1 shrink-0 rounded-lg border border-border p-2 text-muted-foreground transition-all hover:border-accent hover:text-accent"
                                            >
                                                <ExternalLink className="h-4 w-4" />
                                            </a>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
