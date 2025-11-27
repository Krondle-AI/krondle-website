// apps/marketing/src/components/culture/CultureTeam.tsx

"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Linkedin } from "lucide-react"

interface TeamMember {
  name: string
  initials: string
  role: string
  description: string
  gradient: string
  color: string
  photo: string
  linkedin?: string
  objectPosition?: string
  imageScale?: number 
}

const team: TeamMember[] = [
  {
    name: "Afonso Cartaxo",
    initials: "AC",
    role: "Data & AI Specialist",
    description: "Especialista em IA e análise de dados. Responsável pela inteligência do Krondle.",
    gradient: "from-cyan-500 to-blue-600",
    color: "cyan-600 dark:text-cyan-400",
    photo: "/team/Cartaxo.png",
    linkedin: "https://www.linkedin.com/in/afonso-cartaxo-a43555295",
    objectPosition: "center center",
    imageScale: 1.3
  },
  {
    name: "Francisco Ribeiro",
    initials: "FR",
    role: "Business & Marketing Manager",
    description: "Estratégia de negócio e marketing. Define o caminho do Krondle no mercado.",
    gradient: "from-blue-500 to-indigo-600",
    color: "blue-600 dark:text-blue-400",
    photo: "/team/francisco.jpeg",
    linkedin: "https://www.linkedin.com/in/francisco-ribeiro/",
    objectPosition: "center 30%",
    imageScale: 1.1
  },
  {
    name: "João Freire",
    initials: "JF",
    role: "Frontend Developer & UX Designer",
    description: "Design e experiência do utilizador. Torna o Krondle bonito e intuitivo.",
    gradient: "from-purple-500 to-pink-600",
    color: "purple-600 dark:text-purple-400",
    photo: "/team/Freire2.jpeg",
    linkedin: "https://www.linkedin.com/in/joao-freire-0920ba276/",
    objectPosition: "center 30%",
    imageScale: 1.0
  },
  {
    name: "Marta Pinto",
    initials: "MP",
    role: "Operations & Project Manager",
    description: "Gestão de operações e projetos. Mantém tudo a funcionar como um relógio.",
    gradient: "from-pink-500 to-rose-600",
    color: "pink-600 dark:text-pink-400",
    photo: "/team/Marta Pinto.JPG",
    linkedin: "https://www.linkedin.com/in/marta-pinto-7b6576247/",
    objectPosition: "center center",
    imageScale: 1.1
  },
  {
    name: "Miguel Ribeiro",
    initials: "MR",
    role: "Backend Developer & System Architect",
    description: "Arquitetura de sistemas e backend. A espinha dorsal técnica do Krondle.",
    gradient: "from-green-500 to-emerald-600",
    color: "green-600 dark:text-green-400",
    photo: "/team/Miguel.jpg",
    linkedin: "https://www.linkedin.com/in/miguel-ribeiro/",
    objectPosition: "center 35%",
    imageScale: 1.0
  },
  {
    name: "Pedro Primo",
    initials: "PP",
    role: "Full-Stack Developer & Tech Lead",
    description: "Liderança técnica e desenvolvimento. Orquestra toda a tecnologia do Krondle.",
    gradient: "from-red-600 to-orange-600",
    color: "red-600 dark:text-orange-600",
    photo: "/team/Primo2.jpg",
    linkedin: "https://www.linkedin.com/in/pedro-primo-724a0127a/",
    objectPosition: "center 65%",
    imageScale: 1.15
  }
]

function TeamMemberCard({ member, index }: { member: TeamMember; index: number }) {
  const [imageError, setImageError] = useState(false)
  const [isFlipped, setIsFlipped] = useState(false)

  const scale = member.imageScale || 1.0

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group"
    >
      <div className="text-center">
        {/* Avatar with 3D Flip */}
        <div 
          className="relative w-32 h-32 mx-auto mb-6 perspective-1000"
          onMouseEnter={() => setIsFlipped(true)}
          onMouseLeave={() => setIsFlipped(false)}
        >
          {/* Glow effect */}
          <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity`} />
          
          {/* Flip Container */}
          <div 
            className="relative w-full h-full preserve-3d transition-transform duration-500"
            style={{
              transformStyle: 'preserve-3d',
              transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
            }}
          >
            {/* FRONT - Photo */}
            <div 
              className="absolute w-full h-full rounded-full overflow-hidden backface-hidden"
              style={{ backfaceVisibility: 'hidden' }}
            >
              <div className={`w-full h-full rounded-full overflow-hidden bg-gradient-to-br ${member.gradient} flex items-center justify-center`}>
                {!imageError ? (
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    style={{ 
                      objectPosition: member.objectPosition || 'center center',
                      transform: `scale(${scale})`,
                      transformOrigin: 'center center'
                    }}
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <span className="text-white text-3xl font-bold">
                    {member.initials}
                  </span>
                )}
              </div>
            </div>

            {/* BACK - LinkedIn */}
            <div 
              className="absolute w-full h-full rounded-full backface-hidden"
              style={{ 
                backfaceVisibility: 'hidden',
                transform: 'rotateY(180deg)'
              }}
            >
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full h-full rounded-full bg-gradient-to-br ${member.gradient} flex flex-col items-center justify-center text-white hover:scale-105 transition-transform cursor-pointer`}
              >
                <Linkedin className="w-10 h-10 mb-2" />
                <span className="text-sm font-semibold">Ver Perfil</span>
              </a>
            </div>
          </div>
        </div>

        {/* Info */}
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-2">
          {member.name}
        </h3>
        <p className={`text-${member.color} font-medium mb-2`}>
          {member.role}
        </p>
        <p className="text-sm text-slate-600 dark:text-slate-300">
          {member.description}
        </p>
      </div>
    </motion.div>
  )
}

export function CultureTeam() {
  return (
    <section className="py-20 px-4 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 mb-4">
            A Nossa Equipa
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            6 estudantes de IGE no ISCTE apaixonados por tecnologia e empreendedorismo
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <TeamMemberCard key={member.name} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}