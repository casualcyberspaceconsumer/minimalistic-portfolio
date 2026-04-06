import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Mail, MapPin, Send, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function ContactSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        setError(null)

        const formData = new FormData(e.currentTarget)
        const name = formData.get("name")
        const email = formData.get("email")
        const subject = formData.get("subject")
        const message = formData.get("message")

        const botToken = import.meta.env.VITE_TELEGRAM_BOT_TOKEN
        const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID

        if (!botToken || !chatId) {
            setError("Bot configuration is missing. Please check the environment variables.")
            setIsLoading(false)
            return
        }

        try {
            // Get IP Address
            const ipResponse = await fetch("https://api.ipify.org?format=json")
            const ipData = await ipResponse.json()
            const ip = ipData.ip

            // Current Timestamp
            const timestamp = new Date().toLocaleString("en-GB", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
            })

            const telegramMessage = `
📥 New Portfolio Inquiry

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}

🕒 Received: ${timestamp}

📍 IP: ${ip}
`

            const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    chat_id: chatId,
                    text: telegramMessage,
                }),
            })

            if (!response.ok) {
                throw new Error("Failed to send to Telegram")
            }

            setIsSubmitted(true)
        } catch (err) {
            console.error("Telegram Error:", err)
            setError("Failed to send message. Please try again or reach out via email.")
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <section id="contact" className="relative py-32 px-6" ref={ref}>
            <div className="mx-auto max-w-7xl">
                <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
                    {/* Left Column - Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="mb-4 inline-block text-sm font-medium uppercase tracking-widest text-accent">Contact</span>
                        <h2 className="mb-6 font-serif text-4xl font-medium leading-tight tracking-tight md:text-5xl">
                            Let's create something amazing together
                        </h2>
                        <p className="mb-10 text-muted-foreground">
                            I'm always interested in hearing about new projects, creative ideas, or opportunities to be part of your
                            vision. Feel free to reach out.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                                    <Mail className="h-5 w-5 text-accent" />
                                </div>
                                <div>
                                    <div className="text-sm text-muted-foreground">Email</div>
                                    <a href="mailto:jalal.amal@outlook.com" className="font-medium hover:text-accent">
                                        jalal.amal@outlook.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                                    <MapPin className="h-5 w-5 text-accent" />
                                </div>
                                <div>
                                    <div className="text-sm text-muted-foreground">Location</div>
                                    <span className="font-medium">Casablanca, Morocco</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column - Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
                            {isSubmitted ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="flex flex-col items-center justify-center py-12 text-center"
                                >
                                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                                        <CheckCircle className="h-8 w-8 text-accent" />
                                    </div>
                                    <h3 className="mb-2 font-serif text-2xl font-medium">Message Sent!</h3>
                                    <p className="text-muted-foreground">Thank you for reaching out. I'll get back to you soon.</p>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid gap-6 sm:grid-cols-2">
                                        <div className="space-y-2">
                                            <Label htmlFor="name">Name</Label>
                                            <Input id="name" name="name" placeholder="Your Name" required className="bg-background" />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="email">Email</Label>
                                            <Input
                                                id="email"
                                                name="email"
                                                type="email"
                                                placeholder="name@example.com"
                                                required
                                                className="bg-background"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="subject">Subject</Label>
                                        <Input id="subject" name="subject" placeholder="Project Inquiry" required className="bg-background" />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="message">Message</Label>
                                        <Textarea
                                            id="message"
                                            name="message"
                                            placeholder="Tell me about your project..."
                                            rows={5}
                                            required
                                            className="resize-none bg-background"
                                        />
                                    </div>

                                    {error && (
                                        <p className="text-sm font-medium text-destructive">{error}</p>
                                    )}

                                    <Button type="submit" className="w-full" size="lg" disabled={isLoading}>
                                        {isLoading ? (
                                            <span className="flex items-center gap-2">
                                                <motion.span
                                                    className="h-4 w-4 rounded-full border-2 border-current border-t-transparent"
                                                    animate={{ rotate: 360 }}
                                                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                                />
                                                Sending...
                                            </span>
                                        ) : (
                                            <span className="flex items-center gap-2">
                                                Send Message
                                                <Send className="h-4 w-4" />
                                            </span>
                                        )}
                                    </Button>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
