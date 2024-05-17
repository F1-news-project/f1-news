import { Link } from "react-router-dom";

function About() {
  return (
    <div>
      <div className="flex flex-wrap justify-center max-w-full mt-1">
        <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 mr-2 ">
          <img
            className="w-full h-80 rounded"
            src="https://www.bhalpaca.com/wp-content/uploads/2020/12/10-190126-N-LZ409-0225-2-1.jpg"
            alt="Richard"
          ></img>
          <Link to={"https://github.com/RichardHadzhiev"} target="_blank">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Richard</div>
              <p className="text-gray-700 text-base">
                Richard is a passionate software developer with a keen interest
                in front-end technologies. With a background in computer
                science, Richard is dedicated to creating innovative solutions
                that not only meet but exceed client expectations. His expertise
                lies in building responsive and user-friendly web applications
                using modern frameworks like React.js. Driven by a constant
                desire to learn and improve, Richard is always exploring new
                technologies and best practices in the field of web development.
                He believes in the power of collaboration and enjoys working in
                teams to tackle complex challenges and deliver high-quality
                software products. In his free time, Richard enjoys contributing
                to open-source projects, sharing his knowledge through writing
                and speaking engagements, and exploring the latest trends in
                design and development. With a creative mindset and a commitment
                to excellence, Richard is passionate about making a positive
                impact through technology.
              </p>
            </div>
          </Link>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 mr-2">
          <img
            className="w-full h-80 rounded"
            src="https://alpacasofmontana.com/cdn/shop/files/cutealpacas_1200x.png?v=1707156381"
            alt="Grigori"
          ></img>
          <Link to={"https://github.com/gregscript"} target="_blank">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Grigori</div>
              <p className="text-gray-700 text-base">
                Grigori is a dedicated web developer with a strong passion for
                problem-solving and building scalable web applications. Highly
                skilled in front-end and back-end development, Grigori
                specializes in crafting robust and efficient code using modern
                technologies such as React.js He thrives in dynamic environments
                where he can leverage his analytical skills and creative
                thinking to deliver innovative solutions. Grigori is committed
                to continuous learning and stays up-to-date with the latest
                developments in software engineering and technology. He enjoys
                collaborating with cross-functional teams to brainstorm ideas,
                troubleshoot issues, and drive projects to success. With a
                strong work ethic and a passion for excellence, Grigori is
                dedicated to pushing the boundaries of what's possible in the
                world of software development.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default About;
