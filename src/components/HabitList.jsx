import habitCard from "./HabitCard";

export default function HabitList({ habits }) {
    if (habits.lenght === 0) {
        return <p>Nenhum hábito cadastrado.</p>;
    }

    return (
        <section className="habit-list" aria-label="Hábitos de hoje">
            {habits.map((habit) => (
                <habitCard
                    key={habit.id}
                    title={habit.title}
                    goal={habit.goal}
                    completed={habit.completed}
                />
            ))}
        </section>
    )
}