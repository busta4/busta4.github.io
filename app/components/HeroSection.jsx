"use client"
import Image from "next/image";
import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left — main content */}
          <div className="lg:col-span-7 order-2 lg:order-1 space-y-6">

            {/* Name + role */}
            <div>
              <p className="text-os-text-dim text-sm font-mono mb-2 tracking-widest uppercase">
                Portfolio
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-os-text leading-tight">
                Bustamante<br />
                <span className="text-os-red">Barrett-Greening</span>
              </h1>
              <div className="mt-3 h-7 flex items-center gap-2 font-mono text-os-text-dim text-sm">
                <span className="text-os-red">$</span>
                <TypeAnimation
                  sequence={[
                    'DevOps Engineer',     1200,
                    'Software Engineer',   1200,
                    'Web Developer',       1200,
                    'Designer',            1200,
                    'Linux Enthusiast',    1200,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
                <span className="cursor-blink text-os-red">▮</span>
              </div>
            </div>

            {/* Bio panel */}
            <div className="console-panel">
              <div className="console-header">
                <span className="text-os-red text-xs font-mono font-semibold uppercase tracking-wider">Overview</span>
              </div>
              <div className="p-5 text-os-text-dim text-sm leading-relaxed space-y-3">
                <p>
                  I&apos;m a DevOps Engineer working at HM Land Registry in the WebOps team where I work with 
                  Linux infrastructure, OpenShift, AWS, and internal tooling. I&apos;m currently
                  completing my final year studying Computer Science at the University of Plymouth before returning full time at 
                  HMLR after my degree.
                </p>
                <p>
                  This portfolio is a showcase of my personal projects and achievements alongside my academic
                  and professional work. 
                </p>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3">
              <a href="mailto:BBarrettGreening@proton.me" className="os-btn-primary">
                Contact Me
              </a>
              <a href="./CV.pdf" className="os-btn-secondary">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download CV
              </a>
            </div>

            {/* Status chips */}
            <div className="flex flex-wrap gap-2 pt-2">
              {[
                { label: 'DevOps',               colour: 'status-red'     },
                { label: 'HM Land Registry',     colour: 'status-running' },
                { label: 'BSc Computer Science', colour: 'status-yellow'  },
                { label: 'Plymouth, UK',         colour: 'status-ready'   },
              ].map((item) => (
                <span key={item.label} className={`status-badge ${item.colour}`}>
                  <span className="status-dot"></span>
                  {item.label}
                </span>
              ))}
            </div>
          </div>

          {/* Right — profile image */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="console-panel mx-auto max-w-sm">
              <div className="console-header justify-between">
                <span className="text-os-text-dim text-xs font-mono">profile.jpg</span>
                <span className="status-badge status-running">
                  <span className="status-dot"></span>
                  Loaded
                </span>
              </div>
              <div className="p-4">
                <div className="aspect-square rounded bg-os-surface overflow-hidden">
                  <Image
                    src="./headshot.jpg"
                    alt="Bustamante Barrett-Greening"
                    className="w-full h-full object-cover"
                    height={400}
                    width={400}
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default HeroSection
