import "./Gallery.css";

function Gallery() {
  return (
    <div className="gallery">
      <div className="galleryTitle">
        <h3 className="galleryHeading">Our Gallery</h3>
      </div>
      <div className="galleryBody">
        <img
          src="http://caregreek.com/static/media/gallery1.d3cea0a2222ae68acff4.png"
          alt=""
          className="galleryImage"
        />
        <img
          src="http://caregreek.com/static/media/gallery2.17c41f7ed95591b3b82d.png"
          alt=""
          className="galleryImage"
        />
        <img
          src="http://caregreek.com/static/media/gallery3.03b382cae59f0805d406.png"
          alt=""
          className="galleryImage"
        />
        <img
          src="http://caregreek.com/static/media/gallery5.7777ad1b7d1db934bc64.png"
          alt=""
          className="galleryImage"
        />
        <img
          src="http://caregreek.com/static/media/gallery6.3df913961eec66571e5a.png"
          alt=""
          className="galleryImage"
        />
        <img
          src="http://caregreek.com/static/media/gallery7.e645d6f9b455448dcb45.jpeg"
          alt=""
          className="galleryImage"
        />
      </div>
    </div>
  );
}

export default Gallery;
