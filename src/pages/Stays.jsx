import mountain from "../assets/mountain.jpg";
import forest from "../assets/forest.jpg";
import river from "../assets/river.jpg";

function Stays() {
  return (
    <section className="stays-page">

      <p className="section-tag">DISCOVER</p>

      <h1 className="stays-heading">
        Featured Escapes
      </h1>

      <div className="stays-grid">

        <div className="stay-full-card">
          <img src={mountain} alt="Mountain Cabin" />

          <div className="stay-info">
            <h3>🏔 Himalayan Sunrise Cabin</h3>

            <p>
              Wake above the clouds, sip chai on a wooden balcony and
              watch the mountains glow gold at sunrise.
            </p>

            <button>View Stay</button>
          </div>
        </div>

        <div className="stay-full-card">
          <img src={forest} alt="Forest Hideaway" />

          <div className="stay-info">
            <h3>🌲 Cedar Forest Hideaway</h3>

            <p>
              A cozy retreat tucked between pine trees, perfect for
              reading, journaling and disconnecting from city life.
            </p>

            <button>View Stay</button>
          </div>
        </div>

        <div className="stay-full-card">
          <img src={river} alt="River Cottage" />

          <div className="stay-info">
            <h3>🌊 Riverstone Cottage</h3>

            <p>
              Fall asleep to flowing water and spend evenings beside
              warm bonfires under star-filled skies.
            </p>

            <button>View Stay</button>
          </div>
        </div>

      </div>

    </section>
  );
}

export default Stays;