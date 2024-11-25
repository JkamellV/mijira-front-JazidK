import IconFilter from "../../components/icons/IconFilter";
import IconMore from "../../components/icons/IconMore";
import IconPencil from "../../components/icons/IconPencil";
import IconPlus from "../../components/icons/IconPlus";
import { TaskCard } from "../../components/taskCard/TaskCard";
import "./Board.css";

interface TaskCard {
  code: number;
  task: string;
}

const enCurso: TaskCard[] = [
  {
    code: 1000,
    task: "esta es una tarea con un texto un poco mas largo",
  },
  {
    code: 1001,
    task: "esta es una tarea con un texto un poco mas largo",
  },
  {
    code: 1001,
    task: "esta es una tarea con un texto un poco mas largo",
  },
  {
    code: 1001,
    task: "esta es una tarea con un texto un poco mas largo",
  },
  {
    code: 1001,
    task: "esta es una tarea con un texto un poco mas largo",
  },
  {
    code: 1000,
    task: "esta es una tarea con un texto un poco mas largo",
  },
];
const porHacer: TaskCard[] = [
  {
    code: 1000,
    task: "esta es una tarea con un texto un poco mas largo",
  },
  {
    code: 1000,
    task: "esta es una tarea con un texto un poco mas largo",
  },
  {
    code: 1000,
    task: "esta es una tarea con un texto un poco mas largo",
  },
  {
    code: 1000,
    task: "esta es una tarea con un texto un poco mas largo",
  },
  {
    code: 1000,
    task: "esta es una tarea con un texto un poco mas largo",
  },
];
const Listo: TaskCard[] = [
  {
    code: 1000,
    task: "esta es una tarea con un texto un poco mas largo",
  },

  {
    code: 1000,
    task: "esta es una tarea con un texto un poco mas largo",
  },
  {
    code: 1000,
    task: "esta es una tarea con un texto un poco mas largo",
  },
  {
    code: 1000,
    task: "esta es una tarea con un texto un poco mas largo",
  },
  {
    code: 1000,
    task: "esta es una tarea con un texto un poco mas largo",
  },
];
const Board = () => {
  return (
    <section className="content-bigger">
      <div className="content-child">
        <h1>Tablero</h1>
        <div className="icons">
          <button>
            <IconFilter />
          </button>
          <button className="more">
            <IconMore />
          </button>
        </div>
      </div>
      <div className="contet-body">
        <section className="body-Scroll">
          <div className="background-board">
            <div className="board">
              <div className="head-board">
                <h2 className="titles"> Por Hacer</h2>
                <button className="pencil">
                  <IconPencil />
                </button>
              </div>
              <ul className="listTasksCards">
                {porHacer?.map((task, index) => (
                  <TaskCard code={task?.code} task={task?.task} index={index} />
                ))}
              </ul>
            </div>
          </div>
          <div className="background-board">
            <div className="board"> 
              <div className="head-board">
                <h2 className="titles"> En curso </h2>
                <button className="pencil">
                  <IconPencil />
                </button>
              </div>
              <ul className="listTasksCards">
                {enCurso?.map((task, index) => (
                  <TaskCard code={task?.code} task={task?.task} index={index} />
                ))}
              </ul>
            </div>
          </div>
          <div className="background-board">
            <div className="board">
              <div className="head-board">
                <h2 className="titles"> Listo</h2>
                <button className="pencil">
                  <IconPencil />
                </button>
              </div>
              <ul className="listTasksCards">
                {Listo?.map((task, index) => (
                  <TaskCard code={task?.code} task={task?.task} index={index} />
                ))}
              </ul>
            </div>
          </div>
        </section>
        <button className="plus">
          <div className="Chil-plus">
            <IconPlus />
          </div>
        </button>
      </div>
    </section>
  );
};

export default Board;
