import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

export default function App() {
  return (
    <main className="app">
      <header className="hero">
        <p className="eyebrow">MY DAILY HABITS</p>
        <h1>pequnos hábitos, progresso visível.</h1>
        <p>Hoje começamos com uma tela simples e funcional.</p>
      </header>

      <section className="habits-list" aria-label="Hábitos de hoje">
        <article className="habitat-card">
          <h2>Beber água</h2>
          <p>Meta: 30 minutos</p>
        </article>

        <article className="habiti-card">
          <h2>Estudar react</h2>
          <p>Meta: 30 minutos</p>
        </article>

        <article className="habit-card">
          <h2>Caminhar</h2>
          <p>Meta: 20 minutos</p>
        </article>
      </section>
    </main>
  )
}


