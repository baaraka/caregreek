import "./Says.css";

export default function Says() {
  return (
    <div className="says">
      <div className="saysItem">
        <div className="saysTitle">
          <div className="saysHeading">
            <h1 className="saysHead">What People Say About Us</h1>
          </div>
          <div className="sayIcon">
            <ul className="saysIcon">
              <li className="saysIconList">
                <i class="saysIconItemLeft fa-solid fa-arrow-left"></i>
              </li>
              <li className="saysIconList">
                <i className="saysIconItemRight fa-solid fa-arrow-right"></i>
              </li>
            </ul>
          </div>
        </div>
        <div className="saysBox">
          <div className="sayBox1">
            <div className="saysBoxImg">
              <img
                src="https://thumbs.dreamstime.com/b/portrait-handsome-bearded-man-grey-background-over-studio-empty-space-middle-aged-posing-male-magazine-blog-youth-205328712.jpg"
                alt=""
                className="saysBoxItemImg"
              />
            </div>
            <div className="sayBoxItem1">
              <p className="saysParagraph1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                ipsa veritatis cupiditate libero, accusantium veniam ipsam
                itaque at odio minus, optio ad omnis molestiae fugit beatae
                error facilis tempora dolore. Lorem ipsum dolor sit amet
                consectetur, adipisicing elit. Enim eaque temporibus accusamus
                repellat magni tenetur nostrum tempore neque
              </p>
              <span className="saysSpan">Ik Nosa</span>
              <br />
              <span className="starL fa fa-star checked"></span>
              <span className="starL fa fa-star checked"></span>
              <span className="starL fa fa-star checked"></span>
              <span className="starL fa fa-star checked"></span>
            </div>
          </div>
          <div className="sayBox2">
            <div className="saysBoxImg">
              <img
                src="https://thumbs.dreamstime.com/b/portrait-handsome-bearded-man-grey-background-over-studio-empty-space-middle-aged-posing-male-magazine-blog-youth-205328712.jpg"
                alt=""
                className="saysBoxItemImg"
              />
            </div>
            <div className="sayBoxItem2">
              <p className="saysParagraph2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                ipsa veritatis cupiditate libero, accusantium veniam ipsam
                itaque at odio minus, optio ad omnis molestiae fugit beatae
                error facilis tempora dolore. Lorem ipsum dolor sit amet
                consectetur, adipisicing elit. Enim eaque temporibus accusamus
                repellat magni tenetur nostrum tempore neque
              </p>
              <span className="saysSpan">Joy Nosa</span>
              <br />
              <span className="starL fa fa-star checked"></span>
              <span className="starL fa fa-star checked"></span>
              <span className="starL fa fa-star checked"></span>
              <span className="starL fa fa-star checked"></span>
            </div>
          </div>
          <div className="sayBox3">
            <div className="saysBoxImg">
              <img
                src="https://thumbs.dreamstime.com/b/portrait-handsome-bearded-man-grey-background-over-studio-empty-space-middle-aged-posing-male-magazine-blog-youth-205328712.jpg"
                alt=""
                className="saysBoxItemImg"
              />
            </div>
            <div className="sayBoxItem3">
              <p className="saysParagraph3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                ipsa veritatis cupiditate libero, accusantium veniam ipsam
                itaque at odio minus, optio ad omnis molestiae fugit beatae
                error facilis tempora dolore. Lorem ipsum dolor sit amet
                consectetur, adipisicing elit. Enim eaque temporibus accusamus
                repellat magni tenetur nostrum tempore neque
              </p>
              <span className="saysSpan">Sam Odion</span>
              <br />
              <span className="starL fa fa-star checked"></span>
              <span className="starL fa fa-star checked"></span>
              <span className="starL fa fa-star checked"></span>
              <span className="starL fa fa-star checked"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
