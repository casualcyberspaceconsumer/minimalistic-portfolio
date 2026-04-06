import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Award, Briefcase, Code2, Sparkles } from "lucide-react"

const stats = [
    { value: "8+", label: "Years Experience", icon: Briefcase },
    { value: "50+", label: "Projects Completed", icon: Code2 },
    { value: "30+", label: "Happy Clients", icon: Sparkles },
    { value: "12", label: "Awards Won", icon: Award },
]

const experiences = [
    {
        period: "Feb 2026 — Present",
        role: "Intern Backend Developer",
        company: "Poste Maroc",
        description: "Developed a centralized logistics ERP, with a scalable database architecture and OpenAPI-documented REST services to manage real-time mailbag flows, RBAC security, and automated distribution workflows.",
    },
    {
        period: "Sep 2025 - Present",
        role: "Co-Founder & Technical Lead",
        company: "DocLina",
        description: "Developing an AI-driven platform utilizing Med-LLM models to digitalize the care continuum, bridging the gap in doctor-patient connectivity across both pre-diagnosis tracking and post-diagnosis recovery.",
    },
    {
        period: "Dec 2025 - Feb 2026",
        role: "Intern Fullstack Developer",
        company: "Magna Tech",
        description: "Developed the CEFP Management System, a robust ERP featuring a scalable multi-center architecture and RBAC security to optimize vocational school operations, student enrollment, and data-driven financial reporting.",
    },
]

export function AboutSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
        <section id="about" className="relative py-32 px-6" ref={ref}>
            <div className="mx-auto max-w-7xl">
                <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
                    {/* Left Column - Bio */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="mb-4 inline-block text-sm font-medium uppercase tracking-widest text-accent">About</span>
                        {/* <h2 className="mb-6 font-serif text-4xl font-medium leading-tight tracking-tight md:text-5xl">
                            Building digital products that make a difference
                        </h2> */}
                        <div className="space-y-4 text-muted-foreground">
                            <p>
                                I'm a motivated and enthusiastic developer with a strong self-learning mindset.
                                I continuously work on improving my skills through hands-on projects and by exploring new technologies.
                            </p>
                            <p>
                                I enjoy problem-solving and building practical solutions, particularly in web application development and AI.
                            </p>
                            <p>
                                I have experience working with multiple web technologies and enjoy understanding how different parts of the stack work together.
                                I focus on writing clean, maintainable code and consistently aim to improve performance and usability in the applications I build.
                            </p>
                            <p>
                                I am open to internships, freelance work, and opportunities that align with my skills
                                and allow me to grow as a developer while contributing meaningful value to real-world projects.
                            </p>
                        </div>

                        {/* Stats */}
                        {/* <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
                            {stats.map((stat, i) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                                    className="text-center"
                                >
                                    <stat.icon className="mx-auto mb-2 h-5 w-5 text-accent" />
                                    <div className="font-serif text-3xl font-medium">{stat.value}</div>
                                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div> */}
                    </motion.div>

                    {/* Right Column - Experience */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <span className="mb-4 inline-block text-sm font-medium uppercase tracking-widest text-accent">
                            Experience
                        </span>
                        <div className="space-y-8">
                            {experiences.map((exp, i) => (
                                <motion.div
                                    key={exp.role}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                                    className="group relative border-l-2 border-border pl-6 transition-colors hover:border-accent"
                                >
                                    <div className="absolute -left-[5px] top-0 h-2 w-2 rounded-full bg-border transition-colors group-hover:bg-accent" />
                                    <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                                        {exp.period}
                                    </span>
                                    <h3 className="mt-1 font-medium">
                                        {exp.role} · <span className="text-accent">{exp.company}</span>
                                    </h3>
                                    <p className="mt-2 text-sm text-muted-foreground">{exp.description}</p>
                                </motion.div>
                            ))}
                        </div>

                        {/* Profile Image */}
                        {/* <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="mt-12 overflow-hidden rounded-2xl bg-secondary"
                        >
                            <img
                                src="/professional-developer-portrait-minimal-aesthetic.jpg"
                                alt="Jalal AMAL"
                                className="aspect-[3/2] w-full object-cover"
                            />
                        </motion.div> */}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
