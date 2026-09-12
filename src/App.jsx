import { initialHabits } from "./data/habits";
import HabitList from "./components/HabitList";
import Panel from "./components/Panel";
import "./App.css";
import { useState } from "react";
import HabitForm from "./components/HabitForm";

export default function App() {
  const [form, setForm] = useState({
    title: "",
    goal: "",
  });

  <input name="title" value={form.title} onChange={handleChange} />;
  const [habits, setHabits] = useState(initialHabits);

  const completedCount = habits.filter((habit) => habit.completed).length;

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((currentForm) => ({
      ...currentForm,
      [name]: value,
    }));
  }

  function handleAddHabit(newHabit) {
    setHabits((currentHabits) => [...currentHabits, newHabit]);
  }

  function handleToggleHabit(habitId) {
    setHabits((currentHabits) =>
      currentHabits.map((habit) =>
        habit.id === habitId
          ? { ...habit, completed: !habit.completed }
          : habit,
      ),
    );
  }

  return (
    <main className="app">
      <header className="hero">
        <p className="eyebrow">MY DAILY HABITS</p>
        <h1>Pequenos hábitos, progresso visível.</h1>
        <p>
          {completedCount} de {habits.length} hábitos concluídos.
        </p>
      </header>

      <Panel title="Novo hábito">
        <HabitForm onAddHabit={handleAddHabit} />
      </Panel>

      <Panel title="Hábitos de hoje">
        <HabitList habits={habits} onToggle={handleToggleHabit}></HabitList>
      </Panel>
    </main>
  );
}
