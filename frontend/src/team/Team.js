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
          src="http://caregreek.com/static/media/team.c23b6ddf20c31ba28605.png"
          alt=""
          className="teamImageItem"
        />
      </div>
    </div>
  );
}

export default Team;
