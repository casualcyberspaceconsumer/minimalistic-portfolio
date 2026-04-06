import { motion, useInView } from "framer-motion"
import { useRef } from "react"

// const skillCategories = [
//     {
//         title: "Frontend",
//         skills: [
//             { name: "React / Next.js", level: 95 },
//             { name: "TypeScript", level: 90 },
//             { name: "Tailwind CSS", level: 95 },
//             { name: "Framer Motion", level: 85 },
//         ],
//     },
//     {
//         title: "Backend",
//         skills: [
//             { name: "Node.js", level: 88 },
//             { name: "Python", level: 82 },
//             { name: "PostgreSQL", level: 85 },
//             { name: "GraphQL", level: 80 },
//         ],
//     },
//     {
//         title: "Tools & Design",
//         skills: [
//             { name: "Figma", level: 92 },
//             { name: "Git & GitHub", level: 90 },
//             { name: "Docker", level: 78 },
//             { name: "AWS / Vercel", level: 85 },
//         ],
//     },
// ]

const technologies = [
    { name: "HTML", slug: "html5" },
    { name: "CSS", slug: "css" },
    { name: "Tailwind", slug: "tailwindcss" },
    { name: "Bootstrap", slug: "bootstrap" },
    { name: "Javascript", slug: "javascript" },
    { name: "Typescript", slug: "typescript" },
    { name: "React", slug: "react" },
    { name: "Node.js", slug: "nodedotjs" },
    { name: "PHP", slug: "php" },
    { name: "Laravel", slug: "laravel" },
    { name: "Python", slug: "python" },
    { name: "MySQL", slug: "mysql" },
    { name: "PostgreSQL", slug: "postgresql" },
    { name: "MongoDB", slug: "mongodb" },
    { name: "Wordpress", slug: "wordpress" },
    { name: "C", slug: "c" },
    { name: "Git", slug: "git" },
    { name: "Figma", slug: "figma" },
]

export function SkillsSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
        <section id="skills" className="relative py-32 px-6" ref={ref}>
            <div className="mx-auto max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="mb-16 text-center"
                >
                    <span className="mb-4 inline-block text-sm font-medium uppercase tracking-widest text-accent">Expertise</span>
                    <h2 className="font-serif text-4xl font-medium tracking-tight md:text-5xl">Skills & Technologies</h2>
                </motion.div>

                {/* <div className="grid gap-12 lg:grid-cols-3">
                    {skillCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                            className="rounded-2xl border border-border bg-card p-6"
                        >
                            <h3 className="mb-6 font-serif text-xl font-medium">{category.title}</h3>
                            <div className="space-y-5">
                                {category.skills.map((skill, skillIndex) => (
                                    <div key={skill.name}>
                                        <div className="mb-2 flex items-center justify-between">
                                            <span className="text-sm font-medium">{skill.name}</span>
                                            <span className="text-xs text-muted-foreground">{skill.level}%</span>
                                        </div>
                                        <div className="h-1.5 overflow-hidden rounded-full bg-secondary">
                                            <motion.div
                                                className="h-full rounded-full bg-accent"
                                                initial={{ width: 0 }}
                                                animate={isInView ? { width: `${skill.level}%` } : {}}
                                                transition={{
                                                    duration: 1,
                                                    delay: 0.3 + categoryIndex * 0.1 + skillIndex * 0.05,
                                                    ease: [0.25, 0.46, 0.45, 0.94],
                                                }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div> */}

                {/* Technology Marquee */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="relative mt-16 overflow-hidden select-none"
                >
                    {/* Gradient Masks */}
                    <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
                    <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />

                    {/* Row 1 — scrolls left */}
                    <motion.div
                        className="flex w-max gap-4 py-3"
                        animate={{
                            x: ["0%", "-50%"],
                        }}
                        transition={{
                            duration: 40,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    >
                        {[...technologies, ...technologies].map((tech, i) => (
                            <span
                                key={`row1-${tech.name}-${i}`}
                                className="group inline-flex items-center gap-2.5 rounded-full border border-border bg-secondary/20 px-6 py-2.5 text-sm font-medium whitespace-nowrap transition-all hover:border-accent hover:bg-secondary/40 hover:text-accent"
                            >
                                <div
                                    style={{
                                        WebkitMaskImage: `url(https://cdn.simpleicons.org/${tech.slug})`,
                                        maskImage: `url(https://cdn.simpleicons.org/${tech.slug})`,
                                        WebkitMaskRepeat: "no-repeat",
                                        maskRepeat: "no-repeat",
                                        WebkitMaskSize: "contain",
                                        maskSize: "contain",
                                        WebkitMaskPosition: "center",
                                        maskPosition: "center",
                                    }}
                                    className="h-4 w-4 bg-foreground/70 transition-all duration-300 group-hover:bg-accent group-hover:scale-110"
                                />
                                {tech.name}
                            </span>
                        ))}
                    </motion.div>

                    {/* Row 2 — scrolls right (reversed) */}
                    <motion.div
                        className="flex w-max gap-4 py-3"
                        animate={{
                            x: ["-50%", "0%"],
                        }}
                        transition={{
                            duration: 40,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    >
                        {[...technologies, ...technologies].reverse().map((tech, i) => (
                            <span
                                key={`row2-${tech.name}-${i}`}
                                className="group inline-flex items-center gap-2.5 rounded-full border border-border bg-secondary/20 px-6 py-2.5 text-sm font-medium whitespace-nowrap transition-all hover:border-accent hover:bg-secondary/40 hover:text-accent"
                            >
                                <div
                                    style={{
                                        WebkitMaskImage: `url(https://cdn.simpleicons.org/${tech.slug})`,
                                        maskImage: `url(https://cdn.simpleicons.org/${tech.slug})`,
                                        WebkitMaskRepeat: "no-repeat",
                                        maskRepeat: "no-repeat",
                                        WebkitMaskSize: "contain",
                                        maskSize: "contain",
                                        WebkitMaskPosition: "center",
                                        maskPosition: "center",
                                    }}
                                    className="h-4 w-4 bg-foreground/70 transition-all duration-300 group-hover:bg-accent group-hover:scale-110"
                                />
                                {tech.name}
                            </span>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
