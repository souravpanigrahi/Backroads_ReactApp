import img from "../images/about.jpeg";
import Title from "./Title.js";
export const About = () => {
  return (
    <section className="section" id="about">
      <Title title="about" subTitle="us" />
      <div className="section-center about-center">
        <div className="about-img">
          <img
            src={img} // import the image from the images folder"
            className="about-photo"
            alt="awesome beach"
          />
        </div>
        <article className="about-info">
          <h3>explore the difference</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
            unde dolor?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
            unde dolor?
          </p>
          <a href="#About" className="btn">
            read more
          </a>
        </article>
      </div>
    </section>
  );
};