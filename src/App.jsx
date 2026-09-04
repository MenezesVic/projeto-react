import './App.css'
import HabitCard from "./components/HabitCard"
import { initialHabits } from './data/habits'

export default function App() {
  const completedCount = initialHabits.filter(
    (habit) => habit.completed,
  ).length;

  return (
    main

<HabitCard/>      

      <section className="habit-list" aria-label="Hábitos de hoje">
        <article className="habit-card">
          <h2>Beber água</h2>
          <p>Meta: 8 copos</p>
        </article>

        <article className="habit-card">
          <h2>Estudar react</h2>
          <p>Meta: 30 minutos</p>
        </article>

        <article className="habit-card">
          <h2>Caminhar</h2>
          <p>Meta: 20 minutos</p>
        </article>
      </section>
    </main >
  )
}


