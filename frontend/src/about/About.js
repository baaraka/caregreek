import "./About.css";

function About() {
  return (
    <div className="about">
      <div className="aboutImage">
        <img
          src="https://images.unsplash.com/photo-1610055908087-2a644d36bd0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNsZWFuaW5nJTIwaW1hZ2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
          alt=""
          className="aboutImageItem"
        />
        <img
          src="https://images.unsplash.com/photo-1616680802368-03858af6588a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xlYW5pbmclMjBpbWFnZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
          alt=""
          className="aboutImageItem aboutImg"
        />
        <img
          src="https://images.unsplash.com/photo-1610055908087-2a644d36bd0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNsZWFuaW5nJTIwaW1hZ2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
          alt=""
          className="aboutImageItem"
        />
      </div>
      <div className="aboutTitle">
        <h1 className="aboutHeading">About Us</h1>
        <p className="aboutParagraph">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          quidem nobis obcaecati, eaque iure a consectetur sint autem quo
          praesentium delectus minima quia consequatur tempore, facere nulla
          repudiandae aperiam blanditiis? Lorem ipsum,repudiandae aperiam
          blanditiis?
        </p>
        <button className="aboutBtn">Read More</button>
      </div>
    </div>
  );
}

export default About;
