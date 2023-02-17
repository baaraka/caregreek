import "./AboutUs.css";

function AboutUs() {
  return (
    <div>
      <div className="aboutUs">
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
          <h3 className="aboutHeading">About Us</h3>
          <p className="aboutParagraph">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            quidem nobis obcaecati, eaque iure a consectetur sint autem quo
            praesentium delectus minima quia consequatur tempore, facere nulla
            repudiandae aperiam blanditiis? Lorem ipsum,repudiandae aperiam
            blanditiis?
            <br />
            <br />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
            delectus quod obcaecati doloremque accusamus quia quaerat corrupti
            porro repudiandae aliquam, cumque omnis suscipit ipsam facilis iure
            repellat facere nobis sequi?
            <br /> <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            debitis rerum illum deleniti quis ipsum atque possimus, ea amet
            voluptates cumque fuga voluptatum blanditiis ipsam accusantium a
            eaque, omnis sit?
          </p>
        </div>
      </div>
      <div className="team">
        <div className="teamTitle">
          <h3 className="teamHeading">Licenses</h3>
          <p className="aboutUsParagraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
            consequuntur in doloribus quidem ipsam asperiores sed unde
            laboriosam, impedit et iste autem aliquam quia illum eos nihil,
            delectus dolorum! Deserunt!
          </p>
        </div>
        <div className="aboutUsImage">
          <img
            src="http://caregreek.com/static/media/license.d697b9d0b7b9e77e51cb.png"
            alt=""
            className="aboutUsImageItem"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
