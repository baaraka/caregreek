import "./Team.css";

function Team() {
  return (
    <div className="team">
      <div className="teamTitle">
        <h3 className="teamHeading">Our Team</h3>
        <p className="teamParagraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
          consequuntur in doloribus quidem ipsam asperiores sed unde laboriosam,
          impedit et iste autem aliquam quia illum eos nihil, delectus dolorum!
          Deserunt!
        </p>
      </div>
      <div className="teamImage">
        <img
          src="https://images.unsplash.com/photo-1579165466741-7f35e4755660?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt=""
          className="teamImageItem"
        />
      </div>
    </div>
  );
}

export default Team;
