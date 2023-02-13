import { useState } from "react";
import "./Questions.css";

function Questions() {
  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  const [toggle3, setToggle3] = useState(false);
  const [toggle4, setToggle4] = useState(false);

  const toggleHandler = (toggle, setToggle) => {
    setToggle(!toggle);
  };

  return (
    <div className="questions">
      <div className="questionsTitle">
        <h3 className="questionsHeading">Frequently Asked Questions</h3>
      </div>
      <div className="questionsBody">
        <div className="questionsBodyItem">
          <div className="questionsBodyItems">
            <h6 className="questionsItemHeading">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est,
              placeat voluptate. Aspernatur accusamus porro animi debitis. Quia
              placeat corporis nostrum quos! Beatae, culpa aliquid quibusdam
              consequatur iste autem soluta ratione?
            </h6>
            <i
              className={`questionsIcon fa-solid ${
                toggle1 ? "fa-chevron-up" : "fa-chevron-down"
              }`}
              onClick={() => toggleHandler(toggle1, setToggle1)}
            ></i>
          </div>
          <div
            className="questionsParagraph"
            style={{ display: toggle1 ? "block" : "none" }}
          >
            <p className="questionsParagraphItem">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusamus, molestias rerum quas cupiditate voluptates dignissimos,
              nobis repellendus veniam possimus, dolore explicabo corporis
              aliquid consectetur delectus autem at iusto error sequi?
            </p>
          </div>
        </div>
        <div className="questionsBodyItem">
          <div className="questionsBodyItems">
            <h6 className="questionsItemHeading">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est,
              placeat voluptate. Aspernatur accusamus porro animi debitis. Quia
              placeat corporis nostrum quos! Beatae, culpa aliquid quibusdam
              consequatur iste autem soluta ratione?
            </h6>
            <i
              className={`questionsIcon fa-solid ${
                toggle2 ? "fa-chevron-up" : "fa-chevron-down"
              }`}
              onClick={() => toggleHandler(toggle2, setToggle2)}
            ></i>
          </div>
          <div
            className="questionsParagraph"
            style={{ display: toggle2 ? "block" : "none" }}
          >
            <p className="questionsParagraphItem">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusamus, molestias rerum quas cupiditate voluptates dignissimos,
              nobis repellendus veniam possimus, dolore explicabo corporis
              aliquid consectetur delectus autem at iusto error sequi?
            </p>
          </div>
        </div>
        <div className="questionsBodyItem">
          <div className="questionsBodyItems">
            <h6 className="questionsItemHeading">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est,
              placeat voluptate. Aspernatur accusamus porro animi debitis. Quia
              placeat corporis nostrum quos! Beatae, culpa aliquid quibusdam
              consequatur iste autem soluta ratione?
            </h6>
            <i
              className={`questionsIcon fa-solid ${
                toggle3 ? "fa-chevron-up" : "fa-chevron-down"
              }`}
              onClick={() => toggleHandler(toggle3, setToggle3)}
            ></i>
          </div>
          <div
            className="questionsParagraph"
            style={{ display: toggle3 ? "block" : "none" }}
          >
            <p className="questionsParagraphItem">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusamus, molestias rerum quas cupiditate voluptates dignissimos,
              nobis repellendus veniam possimus, dolore explicabo corporis
              aliquid consectetur delectus autem at iusto error sequi?
            </p>
          </div>
        </div>
        <div className="questionsBodyItem">
          <div className="questionsBodyItems">
            <h6 className="questionsItemHeading">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est,
              placeat voluptate. Aspernatur accusamus porro animi debitis. Quia
              placeat corporis nostrum quos! Beatae, culpa aliquid quibusdam
              consequatur iste autem soluta ratione?
            </h6>
            <i
              className={`questionsIcon fa-solid ${
                toggle4 ? "fa-chevron-up" : "fa-chevron-down"
              }`}
              onClick={() => toggleHandler(toggle4, setToggle4)}
            ></i>
          </div>
          <div
            className="questionsParagraph"
            style={{ display: toggle4 ? "block" : "none" }}
          >
            <p className="questionsParagraphItem">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusamus, molestias rerum quas cupiditate voluptates dignissimos,
              nobis repellendus veniam possimus, dolore explicabo corporis
              aliquid consectetur delectus autem at iusto error sequi?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Questions;
