const habit = {
    title: "Beber água",
    goal: "8 copos",
};

export default function habitCard({ title, goal, completed }) {
    return (
        <article className={`habit-card}${completed ? "is-complete" : ""}`}>
            <div>
                <h2>{habit.title}</h2>
                <p>Meta: {habit.goal}</p>
            </div>

            <span className="habit-status">
                {completed ? "Concluído" : "Pendente"}
            </span>
        </article>
    );
}