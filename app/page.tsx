import "./index.css";

import Image from "next/image";

export default function Home() {
  return (
    <div className="container">
      <div className="tom">
        <div className="dotor">
          <p>To Do list</p>

          <div className="input">
            <input
              placeholder="add a new text..."
              className="inputsize"
            ></input>
            <button className="butt">add</button>
          </div>
          <div className="neg">
            <button className="butt2">all</button>
            <button className="butt3">active</button>
            <button className="butt4">completed</button>
          </div>
          <div className="bnnn">
            <p>No tasks yet. Add one above!</p>
          </div>
          <div className="ganshig">
            <p>Create PR 2</p>
          </div>
        </div>

        <div className="gal">
          <p>Powered by</p>
          <button className="button01">Pinecone academy</button>
        </div>
      </div>
    </div>
  );
}
