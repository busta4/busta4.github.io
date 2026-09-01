"use client"
import React from 'react'
import TabButton from './TabButton'

const SKILLS = [
  {
    id: 'version-control',
    label: 'Version Control',
    tools: ['Git', 'GitHub', 'GitLab'],
    color: '#3db93d',
    desc: 'Used Git across GitHub and GitLab for source control and CI/CD on professional, personal, and university projects.',
  },
  {
    id: 'cicd',
    label: 'CI/CD Automation',
    tools: ['Jenkins'],
    color: '#3db93d',
    desc: 'Built and maintained Jenkins pipelines to deploy applications to OpenShift at HM Land Registry, troubleshooting pipeline and configuration issues along the way.',
  },
  {
    id: 'deployment-automation',
    label: 'Deployment Automation',
    tools: ['Helm'],
    color: '#3db93d',
    desc: 'Wrote and debugged Helm charts at HM Land Registry to define application deployments for OpenShift, ensuring correct environment setups across regions.',
  },
  {
    id: 'kubernetes',
    label: 'Enterprise Kubernetes',
    tools: ['OpenShift'],
    color: '#EE0000',
    desc: 'Daily use at HM Land Registry — OpenShift receives Helm chart deployments from Jenkins and orchestrates containerised workloads in production.',
  },
  {
    id: 'sysadmin',
    label: 'Systems Administration',
    tools: ['Linux', 'RHEL', 'openSUSE', 'Ubuntu'],
    color: '#EE0000',
    desc: 'Supported Linux systems day to day — software updates and removal, storage management, and configuring additional monitors using Puppet.',
  },
  {
    id: 'containerization',
    label: 'Containerization',
    tools: ['Docker'],
    color: '#4da3ff',
    desc: 'Containerised microservices for HM Land Registry, using Docker alongside Git to orchestrate a shared development environment.',
  },
  {
    id: 'backend',
    label: 'Backend Development',
    tools: ['Python', 'FastAPI', 'Flask', 'Java', 'Spring Boot'],
    color: '#4da3ff',
    desc: 'Developed FastAPI and Flask microservices at HM Land Registry using Gunicorn, DBOSS, routing, and SSO/RBAC; also built Spring Boot web services — including a Spotify playlist automation tool — and academic projects at the University of Plymouth.',
  },
  {
    id: 'iac',
    label: 'Infrastructure as Code',
    tools: ['Terraform'],
    color: '#f0ab00',
    desc: 'Used Terraform to provision and manage AWS resources — upgrading RDS instances to Graviton and migrating Redis instances across accounts and regions.',
  },
  {
    id: 'cloud',
    label: 'Cloud Infrastructure',
    tools: ['AWS'],
    color: '#f0ab00',
    desc: 'Provisioned and upgraded RDS instances, migrated Redis instances across accounts and regions, and managed supporting cloud resources for applications running on OpenShift.',
  },
]

const SKILL_GROUPS = {
  '#3db93d': 'Delivery Pipeline',
  '#EE0000': 'Platform Operations',
  '#4da3ff': 'Application Development',
  '#f0ab00': 'Cloud & Infrastructure',
}

function SkillsList({ selected, onSelect, large = false }) {
  let lastColor = null
  return (
    <div className="font-mono">
      {SKILLS.map((skill, i) => {
        const showHeader = skill.color !== lastColor
        lastColor = skill.color
        return (
          <React.Fragment key={skill.id}>
            {showHeader && (
              <p className={`text-[10px] uppercase tracking-widest text-os-muted ${i === 0 ? 'mb-2' : 'mt-5 mb-2'}`}>
                {SKILL_GROUPS[skill.color]}
              </p>
            )}
            <SkillRow
              skill={skill}
              index={i + 1}
              open={selected === skill.id}
              onToggle={() => onSelect(selected === skill.id ? null : skill.id)}
              large={large}
            />
          </React.Fragment>
        )
      })}
    </div>
  )
}

function SkillRow({ skill, index, open, onToggle, large }) {
  const tag = (tool) => (
    <span
      key={tool}
      className="text-[9px] px-1.5 py-0.5 rounded border whitespace-nowrap"
      style={{ borderColor: skill.color + '55', color: skill.color + 'dd', background: skill.color + '0a' }}
    >
      {tool}
    </span>
  )

  return (
    <div className="border-b border-os-border last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-3 py-3 text-left group cursor-pointer"
        aria-expanded={open}
      >
        <span
          className="shrink-0 inline-block transition-transform duration-200"
          style={{ transform: open ? 'rotate(90deg)' : 'rotate(0deg)', color: open ? skill.color : 'var(--os-muted)' }}
        >
          ▸
        </span>
        <span className="shrink-0 text-os-muted text-[10px] tabular-nums">{String(index).padStart(2, '0')}</span>
        <span
          className={`font-bold group-hover:opacity-80 transition-opacity ${large ? 'text-sm' : 'text-xs'}`}
          style={{ color: skill.color }}
        >
          {skill.label}
        </span>
        <span className="hidden sm:flex flex-wrap gap-1.5 ml-auto justify-end">
          {skill.tools.map(tag)}
        </span>
      </button>

      <div className="grid transition-[grid-template-rows] duration-300 ease-out" style={{ gridTemplateRows: open ? '1fr' : '0fr' }}>
        <div className="overflow-hidden">
          <div className="pl-8 pr-2 pb-4">
            <div className="sm:hidden flex flex-wrap gap-1.5 mb-2">
              {skill.tools.map(tag)}
            </div>
            <p className="text-os-muted text-[10px] mb-1">$ whatis {skill.id}</p>
            <p className="text-os-text-dim text-xs leading-relaxed">{skill.desc}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

const TAB_DATA = [
  {
    title: "Education",
    id: "education",
    content: (
      <div className="space-y-3">
        {[
          {
            title: 'BSc (Hons) Computer Science — Stage 3',
            sub:   'University of Plymouth · 2023–Present',
          },
          {
            title: 'A-Levels: Computer Science, Mathematics, Psychology',
            sub:   'Thomas Hardye Sixth Form · 2021–2023',
          },
        ].map((item) => (
          <div key={item.title} className="console-panel-accent">
            <p className="text-os-text font-semibold text-sm">{item.title}</p>
            <p className="text-os-text-dim text-xs mt-1 font-mono">{item.sub}</p>
          </div>
        ))}
      </div>
    )
  },
  {
    title: "Achievements",
    id: "achievements",
    content: (
      <div className="space-y-3">
        {[
          {
            title: 'Head of Henning College Award',
            desc:  'Recognised for perseverance and performance during studies at Thomas Hardye secondary school.',
          },
          {
            title: 'Brown Belt — Gojo-Ryu Karate',
            desc:  'Achieved brown belt at Wessex Karate, demonstrating dedication and commitment to the sport.',
          },
          {
            title: 'First Aid Certified',
            desc:  'Completed a First Aid at Work course with HMLR to become a certified first aider.',
          },
        ].map((item) => (
          <div key={item.title} className="console-panel-accent">
            <p className="text-os-red font-semibold text-sm">{item.title}</p>
            <p className="text-os-text-dim text-xs mt-1 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    )
  }
]

const AboutSection = () => {
  const [tab, setTab] = React.useState("education");
  const [selectedSkill, setSelectedSkill] = React.useState(null);
  const [expanded, setExpanded] = React.useState(false);

  React.useEffect(() => {
    document.body.style.overflow = expanded ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [expanded]);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">

        {/* Section heading */}
        <div className="mb-10">
          <p className="text-os-text-dim text-xs font-mono uppercase tracking-widest mb-2">
            About
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-os-text">
            About <span className="text-os-red">Me</span>
          </h2>
          <div className="os-divider mt-3"></div>
        </div>

        <div className="md:grid md:grid-cols-5 gap-10 items-start">

          {/* Left — interactive skills diagram (wider) */}
          <div className="md:col-span-3 mb-8 md:mb-0">
            {/* Expanded overlay */}
            <style>{`
              @keyframes overlay-in {
                from { opacity: 0; transform: translateY(16px); }
                to   { opacity: 1; transform: translateY(0); }
              }
              @keyframes overlay-out {
                from { opacity: 1; transform: translateY(0); }
                to   { opacity: 0; transform: translateY(16px); }
              }
              .overlay-enter { animation: overlay-in 0.25s cubic-bezier(0.16,1,0.3,1) forwards; }
              .overlay-exit  { animation: overlay-out 0.2s ease-in forwards; }
            `}</style>
            {expanded && (
            <div className="overlay-enter fixed inset-0 top-14 z-40 overflow-auto p-4"
              style={{ background: 'var(--os-navy)' }}
            >
              <div className="console-panel w-full min-h-full flex flex-col">
                <div className="console-header justify-between shrink-0">
                  <span className="text-os-text-dim text-xs font-mono">My Skills</span>
                  <div className="flex items-center gap-3">
                    <span className="text-os-muted text-[10px] font-mono hidden sm:block">click a skill to expand</span>
                    <button
                      onClick={() => setExpanded(false)}
                      aria-label="Close fullscreen"
                      title="Close"
                      className="text-os-text-dim hover:text-os-red transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="p-6 overflow-auto flex-1">
                  <SkillsList selected={selectedSkill} onSelect={setSelectedSkill} large />
                </div>
              </div>
            </div>
            )}

            {/* Normal panel */}
            <div className="console-panel w-full">
              <div className="console-header justify-between">
                <span className="text-os-text-dim text-xs font-mono">My Skills</span>
                <div className="flex items-center gap-3">
                  <span className="text-os-muted text-[10px] font-mono hidden sm:block">click a skill to expand</span>
                  <button
                    onClick={() => setExpanded(true)}
                    aria-label="Expand skills list"
                    title="Expand to fullscreen"
                    className="hidden md:block text-os-text-dim hover:text-os-red transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-5h-4m4 0v4m0-4l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="p-6">
                <SkillsList selected={selectedSkill} onSelect={setSelectedSkill} />
              </div>
            </div>
          </div>

          {/* Right — tabs */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <div className="flex flex-wrap gap-2">
              {TAB_DATA.map((t) => (
                <TabButton
                  key={t.id}
                  selectTab={() => setTab(t.id)}
                  active={tab === t.id}
                >
                  {t.title}
                </TabButton>
              ))}
            </div>
            <div className="console-panel p-5 flex-1">
              {TAB_DATA.find((t) => t.id === tab).content}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default AboutSection
