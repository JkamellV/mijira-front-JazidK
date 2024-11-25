import "./TaskCard.css";
interface TaskCardProps {
  code: number;
  index: number;
  task: string;
}

export const TaskCard = ({ code, index, task }: TaskCardProps) => {
  return (
    <>
      <li className="taskCardContainer">
        <div className="codeContainer">
          <p>Tarea#{index + 1}</p>
          <p>{code}</p>
        </div>
        <div className="textTaskContainer">
          <p>{task}</p>
        </div>
      </li>
    </>
  );
};
