import Link from "next/link"
import { ArrowRight, Code, Database, Layers, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { HeroSection } from "@/components/hero-section"
import { SkillCard } from "@/components/skill-card"
import { ProjectCard } from "@/components/project-card"
import { CertificateCard } from "@/components/certificate-card"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />

      {/* Skills Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Skills</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Technical Expertise</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                A showcase of my technical skills and proficiencies across various domains.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mt-12">
            <SkillCard
              icon={<Code className="h-10 w-10" />}
              title="Frontend Development"
              description="HTML, CSS, JavaScript, React"
            />
            <SkillCard
              icon={<Database className="h-10 w-10" />}
              title="Backend Development"
              description="Python, C, C++, Java"
            />
            <SkillCard
              icon={<Layers className="h-10 w-10" />}
              title="AI & Data Science"
              description="AI Foundations, Data Analysis"
            />
            <SkillCard
              icon={<Zap className="h-10 w-10" />}
              title="Soft Skills"
              description="Communication, Team Collaboration, Problem Solving"
            />
          </div>
          <div className="flex justify-center mt-12">
            <Button asChild variant="outline" className="group">
              <Link href="/skills">
                View All Skills
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Portfolio</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Projects</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                A selection of my recent work and projects that showcase my abilities.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 mt-12">
            <ProjectCard
              title="ERP System"
              description="A comprehensive Enterprise Resource Planning system with modules for inventory management, human resources, and financial tracking."
              tags={["Web Development", "Inventory Management", "HR"]}
            />
            <ProjectCard
              title="Apollo Clone"
              description="A TypeScript implementation of an Apollo GraphQL client clone."
              tags={["TypeScript", "GraphQL", "API"]}
              link="https://github.com/Sharanbabu-1089/apollo-clone-"
            />
          </div>
          <div className="flex justify-center mt-12">
            <Button asChild variant="outline" className="group">
              <Link href="/projects">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gradient-to-b from-muted to-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Accomplishments</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Achievements</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Professional certifications and accomplishments that showcase my expertise.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 mt-12">
            <CertificateCard
              title="Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate"
              issuer="Oracle"
              date="2023"
            />
            <CertificateCard title="Certified HTML Developer" issuer="Ceeras" date="2023" />
            <CertificateCard title="AI Foundation Certification" issuer="Infosys | Springboard" date="2023" />
            <CertificateCard title="Joy of Computing using Python" issuer="NPTEL" date="2023" />
          </div>
          <div className="flex justify-center mt-12">
            <Button asChild variant="outline" className="group">
              <Link href="/achievements">
                View All Achievements
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Let's Work Together</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Interested in collaborating or have a project in mind? Get in touch and let's create something amazing.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg">
                <Link href="/contact">Contact Me</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
