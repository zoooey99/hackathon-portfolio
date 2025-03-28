"use client"

import { ArrowDown, Github, Linkedin, Mail, Instagram, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import StatsCard from "@/components/stats-card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import StravaIcon from "@/components/strava-icon"
import { projects } from "./data/projectsData"
import LanguageStatsCard from "@/components/language-stats-card"

// Helper function to get color classes based on project color
const getColorClasses = (color: string, isActive: boolean) => {
  const colorMap: Record<string, { border: string; bg: string; text: string; badge: string }> = {
    emerald: {
      border: "border-emerald-500",
      bg: isActive ? "bg-emerald-500/10" : "hover:bg-emerald-500/5",
      text: "text-emerald-400",
      badge: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
    },
    purple: {
      border: "border-purple-500",
      bg: isActive ? "bg-purple-500/10" : "hover:bg-purple-500/5",
      text: "text-purple-400",
      badge: "bg-purple-500/20 text-purple-300 border-purple-500/30",
    },
    blue: {
      border: "border-blue-500",
      bg: isActive ? "bg-blue-500/10" : "hover:bg-blue-500/5",
      text: "text-blue-400",
      badge: "bg-blue-500/20 text-blue-300 border-blue-500/30",
    },
    amber: {
      border: "border-amber-500",
      bg: isActive ? "bg-amber-500/10" : "hover:bg-amber-500/5",
      text: "text-amber-400",
      badge: "bg-amber-500/20 text-amber-300 border-amber-500/30",
    },
    green: {
      border: "border-green-500",
      bg: isActive ? "bg-green-500/10" : "hover:bg-green-500/5",
      text: "text-green-400",
      badge: "bg-green-500/20 text-green-300 border-green-500/30",
    },
    cyan: {
      border: "border-cyan-500",
      bg: isActive ? "bg-cyan-500/10" : "hover:bg-cyan-500/5",
      text: "text-cyan-400",
      badge: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
    },
  }

  return colorMap[color] || colorMap.emerald
}

export default function Home() {
  const [activeProject, setActiveProject] = useState(projects[0])
  const activeColorClasses = getColorClasses(activeProject.color, true)
  const [scrollY, setScrollY] = useState(0)

  // Track scroll position for parallax effects
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="min-h-screen bg-gray-950 text-gray-200 overflow-hidden">
      {/* Floating Gradient Orbs */}
      <div className="fixed inset-0 z-0 opacity-30 pointer-events-none overflow-hidden">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-rose-500/20 blur-[100px] animate-pulse"
          style={{ transform: `translate(${scrollY * 0.02}px, ${scrollY * -0.01}px)` }}
        ></div>
        <div
          className="absolute top-3/4 right-1/3 w-80 h-80 rounded-full bg-amber-500/20 blur-[100px] animate-pulse"
          style={{ transform: `translate(${scrollY * -0.02}px, ${scrollY * 0.01}px)` }}
        ></div>
        <div
          className="absolute bottom-1/4 left-2/3 w-64 h-64 rounded-full bg-rose-400/20 blur-[100px] animate-pulse"
          style={{ transform: `translate(${scrollY * 0.01}px, ${scrollY * 0.02}px)` }}
        ></div>
      </div>

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-screen px-4 py-20">
        <div className="z-10 flex flex-col items-center justify-center max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-rose-400 via-amber-400 to-rose-300 bg-clip-text text-transparent animate-fade-in pb-2 leading-tight">
            Zoey Lee
          </h1>

          {/* Social Media Buttons */}
          <div className="flex items-center justify-center gap-4 mt-8 animate-fade-in-delayed">
            <Link href="https://linkedin.com/in/zoeylee" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full w-12 h-12 bg-gray-800/50 backdrop-blur-sm hover:bg-rose-500/20 transition-all duration-300 border border-gray-700 hover:border-rose-500/50"
              >
                <Linkedin className="w-5 h-5 text-gray-200" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="https://www.instagram.com/zoeylee.11/" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full w-12 h-12 bg-gray-800/50 backdrop-blur-sm hover:bg-rose-500/20 transition-all duration-300 border border-gray-700 hover:border-rose-500/50"
              >
                <Instagram className="w-5 h-5 text-gray-200" />
                <span className="sr-only">Instagram</span>
              </Button>
            </Link>
            <Link href="https://github.com/zoooey99" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full w-12 h-12 bg-gray-800/50 backdrop-blur-sm hover:bg-rose-500/20 transition-all duration-300 border border-gray-700 hover:border-rose-500/50"
              >
                <Github className="w-5 h-5 text-gray-200" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://strava.app.link/SgigeqsmzRb" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full w-12 h-12 bg-gray-800/50 backdrop-blur-sm hover:bg-rose-500/20 transition-all duration-300 border border-gray-700 hover:border-rose-500/50"
              >
                <StravaIcon className="w-5 h-5 text-gray-200" />
                <span className="sr-only">Strava</span>
              </Button>
            </Link>
          </div>

          <div className="mt-12 animate-bounce">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full text-gray-400 hover:text-gray-200 hover:bg-gray-800/50 backdrop-blur-sm"
              onClick={() => {
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              <ArrowDown className="w-6 h-6" />
              <span className="sr-only">Scroll down</span>
            </Button>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="relative py-8">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-800"></div>
        </div>
        <div className="relative flex justify-center">
          <div className="bg-gray-950 px-4">
            <div className="h-1 w-16 bg-gradient-to-r from-rose-500 to-amber-500 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <section id="projects" className="relative px-4 py-20">
        <div className="container mx-auto max-w-7xl relative">
          <h2 className="text-3xl font-bold tracking-tight text-center sm:text-4xl md:text-5xl bg-gradient-to-r from-rose-400 via-amber-400 to-rose-300 bg-clip-text text-transparent mb-12 pb-1">
            Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-[1fr,2fr] gap-8">
            {/* Project List (Left Side) */}
            <div className="bg-gray-800/50 backdrop-blur-md rounded-lg p-4 border border-gray-700 shadow-xl">
              <ul className="space-y-3">
                {projects.map((project) => {
                  const isActive = activeProject.id === project.id
                  const colorClasses = getColorClasses(project.color, isActive)
                  const Icon = project.icon

                  return (
                    <li
                      key={project.id}
                      className={`p-3 rounded-md transition-all duration-300 cursor-pointer group ${
                        isActive
                          ? `${colorClasses.bg} border-l-4 ${colorClasses.border}`
                          : `hover:${colorClasses.bg} border-l-4 border-transparent hover:border-l-4 hover:${colorClasses.border}`
                      }`}
                      onMouseEnter={() => setActiveProject(project)}
                      onClick={() => setActiveProject(project)}
                    >
                      <div className="flex items-center gap-2">
                        <div
                          className={`p-1.5 rounded-md ${isActive ? colorClasses.bg : "bg-gray-700"} group-hover:${colorClasses.bg} transition-colors duration-300`}
                        >
                          <Icon
                            className={`w-4 h-4 ${isActive ? colorClasses.text : "text-gray-400"} group-hover:${colorClasses.text} transition-colors duration-300`}
                          />
                        </div>
                        <div className="font-medium text-white">{project.name}</div>
                      </div>
                      <div className="flex items-center gap-2 mt-2 ml-7">
                        <Badge
                          variant="outline"
                          className={`text-xs ${
                            isActive
                              ? colorClasses.badge
                              : "bg-gray-700/50 text-gray-300 border-gray-600 group-hover:" +
                                colorClasses.badge
                                  .replace("bg-", "group-hover:bg-")
                                  .replace("text-", "group-hover:text-")
                                  .replace("border-", "group-hover:border-")
                          } transition-colors duration-300`}
                        >
                          {project.hackathon}
                        </Badge>
                        <span className="text-xs text-gray-400">{project.date}</span>
                      </div>
                    </li>
                  )
                })}
              </ul>
            </div>

            {/* Project Details (Right Side) */}
            <div
              className="bg-gray-800/50 backdrop-blur-md rounded-lg p-6 border border-gray-700 transition-all duration-500 relative overflow-hidden shadow-xl"
              style={{
                background: activeProject.bgPattern
                  ? `${activeProject.bgPattern}, rgba(31, 41, 55, 0.5)`
                  : "rgba(31, 41, 55, 0.5)",
              }}
            >
              <div className="flex flex-col h-full relative z-10">
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <div className={`p-1.5 rounded-md ${activeColorClasses.bg}`}>
                      <activeProject.icon className={`w-5 h-5 ${activeColorClasses.text}`} />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{activeProject.name}</h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge className={activeColorClasses.badge}>{activeProject.category}</Badge>
                    <Badge variant="outline" className="bg-gray-700/50 text-gray-300 border-gray-600">
                      {activeProject.hackathon}
                    </Badge>
                    <span className="text-sm text-gray-400">{activeProject.date}</span>
                  </div>
                </div>

                <div className="space-y-4 flex-grow">
                  <div>
                    <p className="text-gray-300">{activeProject.description}</p>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-gray-400 mb-1">Tech Stack:</p>
                    <div className="flex flex-wrap gap-1">
                      {activeProject.techStack.map((tech) => (
                        <Badge
                          key={`${activeProject.id}-${tech}`}
                          variant="secondary"
                          className="font-normal bg-gray-700 text-gray-200"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-gray-400 mb-1">Role:</p>
                    <p className="text-sm text-gray-300">{activeProject.role}</p>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-gray-400 mb-1">Team:</p>
                    <div className="flex flex-wrap gap-2">
                      {activeProject.teamMembers.map((member) => (
                        <Link
                          key={member.name}
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`text-sm ${activeColorClasses.text} hover:underline`}
                        >
                          {member.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 mt-6 pt-4 border-t border-gray-700">
                  <Link href={activeProject.demoLink} target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="outline"
                      size="sm"
                      className={`border-gray-700 hover:bg-gray-700 hover:text-white ${activeColorClasses.text}`}
                    >
                      <ExternalLink className="w-4 h-4 mr-1" /> Demo
                    </Button>
                  </Link>
                  <Link href={activeProject.githubLink} target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="outline"
                      size="sm"
                      className={`border-gray-700 hover:bg-gray-700 hover:text-white ${activeColorClasses.text}`}
                    >
                      <Github className="w-4 h-4 mr-1" /> Code
                    </Button>
                  </Link>
                  <Link href={activeProject.submissionLink} target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="outline"
                      size="sm"
                      className={`border-gray-700 hover:bg-gray-700 hover:text-white ${activeColorClasses.text}`}
                    >
                      <ExternalLink className="w-4 h-4 mr-1" /> Submission
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="relative py-24">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-800"></div>
        </div>
        <div className="relative flex justify-center">
          <div className="bg-gray-950 px-4">
            <div className="h-1 w-16 bg-gradient-to-r from-rose-500 to-amber-500 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* About Me Section */}
      <section id="about" className="relative px-4 py-20">
        <div className="container mx-auto max-w-4xl relative">
          <h2 className="text-3xl font-bold tracking-tight text-center sm:text-4xl md:text-5xl bg-gradient-to-r from-rose-400 via-amber-400 to-rose-300 bg-clip-text text-transparent mb-12 pb-1">
            About Me
          </h2>
          <div className="grid gap-12 md:grid-cols-2">
            <div className="space-y-6">
              <p className="text-lg text-gray-300">
                <span className="block mb-2 text-xl font-medium bg-gradient-to-r from-rose-400 via-amber-400 to-rose-300 bg-clip-text text-transparent pb-1">
                  Hey! My name is Zoey :{")"}
                </span>
                I'm a hacker, entrepreneur, and former D1 athlete who thrives on learning, building, and competition.
                I'm drawn to tough problems and the challenge of taking an idea from 0 to 1—starting with nothing and
                turning it into something real. I love fast-paced execution, working with smart and interesting people,
                and most importantly, building alongside my friends.
              </p>
              <p className="text-lg text-gray-300">
                My passion and strongest skillset lies in building and leading high performing teams. Whether it's
                co-founding and co-leading{" "}
                <Link href="https://www.ktpmiami.com/" className="text-blue-500 hover:underline">
                  KTP's Sigma chapter
                </Link>
                , expanding{" "}
                <Link href="https://www.kappathetapi.org/" className="text-blue-500 hover:underline">
                  KTP Nationals
                </Link>{" "}
                from 15 to 30 chapters as its first ever president, managing an ML research project, or starting a
                venture that raised $17k in grants, I am constantly seeking new challenges to push myself and my teams
                to the next level.
              </p>
              <p className="text-lg text-gray-300">
                If I'm not running, lifting, or competing at a hackathon, you'll find me working on a side project or
                diving into something new. I'm most comfortable with web dev, but I've dabbled into a few other areas as
                well. Domain-wise, I have deep expertise in elite athletics, biometric data, and dietary health.
                However, my projects span a wide range of fields—from sustainable LLM inference and B2B grocery SaaS to
                blockchain-powered charity games and educational tools.{" "}
                <i>In short, I'm interested in almost anything...so reach out if you want to build something cool!</i>
              </p>
              <div className="flex flex-wrap gap-4 pt-4"></div>
              {/* Stats Section */}
              <div className="mt-12 pt-6 border-t border-gray-800">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <StatsCard title="GitHub Contributions" value="258" subtitle="Past Year" />
                  <StatsCard title="Miles Run" value="131" subtitle="2025 (so far)" />
                </div>

                <div className="mt-6">
                  <div className="bg-gray-800/50 backdrop-blur-md rounded-lg p-6 border border-gray-700 shadow-xl">
                    {/* <h3 className="text-xl font-medium text-white mb-4">Language Distribution</h3> */}
                    <LanguageStatsCard />
                  </div>
                </div>
              </div>
            </div>
            <div className="grid gap-4">
              <div className="rounded-lg overflow-hidden transform transition-transform hover:scale-[1.02] shadow-lg">
                <Image
                  src="/images/professional-headshot.jpg"
                  alt="Zoey Lee Professional Headshot"
                  width={300}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>
              <Link
                href="https://youtube.com/shorts/ZAH2elztQaw?si=a-mWFhyqa1Bnlk3D"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg overflow-hidden transform transition-transform hover:scale-[1.02] shadow-lg relative group"
              >
                <div className="relative">
                  <Image
                    src="/images/half-marathon.jpg"
                    alt="Zoey running a half marathon"
                    width={300}
                    height={300}
                    className="object-cover w-full h-full transition-all duration-300 group-hover:blur-sm"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-gray-900/60 rounded-full p-3">
                      <ExternalLink className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
              </Link>
              <div className="rounded-lg overflow-hidden transform transition-transform hover:scale-[1.02] shadow-lg">
                <Image
                  src="/images/soccer-arms-crossed.jpg"
                  alt="Zoey with KTP Co-founder Mia Uy"
                  width={300}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="relative py-8">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-800"></div>
        </div>
        <div className="relative flex justify-center">
          <div className="bg-gray-950 px-4">
            <div className="h-1 w-16 bg-gradient-to-r from-rose-500 to-amber-500 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      {/* <section id="contact" className="relative px-4 py-20">
        <div className="container mx-auto max-w-4xl relative">
          <h2 className="text-3xl font-bold tracking-tight text-center sm:text-4xl md:text-5xl bg-gradient-to-r from-rose-400 via-amber-400 to-rose-300 bg-clip-text text-transparent mb-12 pb-1">
            Co-Founder?
          </h2>
          <div className="flex flex-col items-center justify-center space-y-8">
            <p className="max-w-2xl text-lg text-center text-gray-300">
              I believe the right co-founder comes first, then the idea. If you're a builder looking to work on
              something impactful, let's talk.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="https://linkedin.com/in/zoeylee123" target="_blank" rel="noopener noreferrer">
                <Button className="bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 text-white shadow-lg hover:shadow-rose-500/25 transition-all duration-300">
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </Button>
              </Link>
              <Link href="mailto:zoeylee@miami.edu">
                <Button
                  variant="outline"
                  className="border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white shadow-lg hover:shadow-gray-700/25 transition-all duration-300"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Email Me
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section> */}

      {/* Footer */}
      <footer className="px-4 py-8 text-center text-gray-500">
        <p>© {new Date().getFullYear()} Zoey Lee.</p>
      </footer>
    </main>
  )
}

