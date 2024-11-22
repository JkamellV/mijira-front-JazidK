import IconPencil from "../../components/icons/IconPencil";
import IconPlus from "../../components/icons/IconPlus";
import "./Board.css";

const Board = () => {
  return (
    <section className="content-bigger">
      <div className="content-chil">
        <h1>Tablero</h1>
        <div className="icons">xd</div>
      </div>
      <div className="contet-body">
        <section className="background-board">
          <div className="board">
            <div className="head-board">
              <h2 className="titles"> Por Hacer</h2>
              <button className="pencil">
                <IconPencil />
              </button>
            </div>
            <label className="titles-labels">Tarea#1</label>
            <input type="texto" />
          </div>
        </section>
        <section className="background-board">
          <div className="board">
            <div className="head-board">
              <h2 className="titles"> En curso </h2>
              <button className="pencil">
                <IconPencil />
              </button>
            </div>
            <label className="titles-labels">
              Tarea#1
              <div className="number-homework"></div>
            </label>
            <input type="texto" />
          </div>
        </section>
        <section className="background-board">
          <div className="board">
            <div className="head-board">
              <h2 className="titles"> Listo</h2>
              <button className="pencil">
                <IconPencil />
              </button>
            </div>
            <label className="titles-labels">Tarea#1</label>
            <input type="texto" />
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
