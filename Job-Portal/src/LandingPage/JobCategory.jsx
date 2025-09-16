import { CategoryList } from "../DataStore/Data";
import Slider from "react-slick";

const JobCategory = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // number of cards visible
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1024, // tablets
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 600, // mobile
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="job-category py-4 mt-4">
      <div className="container">
        <div className="text-center mb-2">
          <h2 className="fw-bold fs-1 text-white">
            Browse <span>Jobs</span> Category
          </h2>
          <p>
            Explore a wide range of job categories from IT and engineering to
            marketing, finance, healthcare, and more.
            <br />
            Find the right role that matches your skills, interests, and goals,
            and take the next step toward building your future.
          </p>
        </div>

        {/* Carousel */}
        <Slider {...settings}>
          {CategoryList.map((items, key) => (
            <div key={key} className="">
              {" "}
              {/* padding for spacing */}
              <div className="card mx-3 text-center shadow">
                <img
                  src={`${items.img}`}
                  className="card-img-top"
                  alt={items.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{items.title}</h5>
                  <p className="card-text">{items.description}</p>
                  <p className="text-info">
                    <small className="text-muted">{items.jobs}</small>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default JobCategory;
