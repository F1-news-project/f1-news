import { Link } from "react-router-dom";

function About() {
  return (
    <div class="flex flex-wrap justify-center max-w-full mt-4">
      <div class="max-w-sm rounded overflow-hidden shadow-lg m-4 mr-2 ">
        <img
          class="w-full h-80"
          src="https://www.bhalpaca.com/wp-content/uploads/2020/12/10-190126-N-LZ409-0225-2-1.jpg"
          alt="Richard"
        ></img>
        <Link to={"https://github.com/RichardHadzhiev"}>
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Richard</div>
            <p class="text-gray-700 text-base">
              Richard is a passionate software developer with a keen interest in
              front-end technologies. With a background in computer science,
              Richard is dedicated to creating innovative solutions that not
              only meet but exceed client expectations. His expertise lies in
              building responsive and user-friendly web applications using
              modern frameworks like React.js. Driven by a constant desire to
              learn and improve, Richard is always exploring new technologies
              and best practices in the field of web development. He believes in
              the power of collaboration and enjoys working in teams to tackle
              complex challenges and deliver high-quality software products. In
              his free time, Richard enjoys contributing to open-source
              projects, sharing his knowledge through writing and speaking
              engagements, and exploring the latest trends in design and
              development. With a creative mindset and a commitment to
              excellence, Richard is passionate about making a positive impact
              through technology.
            </p>
          </div>
        </Link>
      </div>
      <div class="max-w-sm rounded overflow-hidden shadow-lg m-4 mr-2">
        <img
          class="w-full h-80"
          src="https://alpacasofmontana.com/cdn/shop/files/cutealpacas_1200x.png?v=1707156381"
          alt="Gregori"
        ></img>
        <Link to={"https://github.com/gregscript"}>
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Gregori</div>
            <p class="text-gray-700 text-base">
              Gregori is a dedicated software engineer with a strong passion for
              problem-solving and building scalable web applications. With a
              background in computer science and extensive experience in
              software development, Gregori brings a wealth of knowledge and
              expertise to every project he undertakes. Highly skilled in
              front-end and back-end development, Gregori specializes in
              crafting robust and efficient code using modern technologies such
              as Node.js, React.js, and Express.js. He thrives in dynamic
              environments where he can leverage his analytical skills and
              creative thinking to deliver innovative solutions. Gregori is
              committed to continuous learning and stays up-to-date with the
              latest developments in software engineering and technology. He
              enjoys collaborating with cross-functional teams to brainstorm
              ideas, troubleshoot issues, and drive projects to success. Outside
              of work, Gregori enjoys participating in hackathons, attending
              tech meetups, and contributing to open-source projects. With a
              strong work ethic and a passion for excellence, Gregori is
              dedicated to pushing the boundaries of what's possible in the
              world of software development.
            </p>
          </div>
        </Link>
      </div>
    </div>

    // <div className="text-center text-2xl mt-2">
    //   <h1>Project Created by</h1>
    //   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4  mt-3 justify-center">
    //     <div className="flex flex-col justify-center items-center">
    //       <Link to={"https://github.com/RichardHadzhiev"}>
    //         <div>
    //           <h1>Richard</h1>
    //         </div>
    //         <img
    //           className="w-full sm:w-60 h-auto sm:h-40 border rounded-lg bg-red-500 p-4"
    //           src="https://www.bhalpaca.com/wp-content/uploads/2020/12/10-190126-N-LZ409-0225-2-1.jpg"
    //         />
    //       </Link>
    //     </div>
    //     <div className="flex flex-col justify-center items-center">
    //       <Link to={"https://github.com/gregscript"}>
    //         <div>
    //           <h1>Gregori</h1>
    //         </div>
    //         <img
    //           src="https://alpacasofmontana.com/cdn/shop/files/cutealpacas_1200x.png?v=1707156381"
    //           className="w-full sm:w-60 h-auto sm:h-40 border rounded-lg bg-red-500 p-4"
    //         />
    //       </Link>
    //     </div>
    //   </div>
    // </div>
  );
}
export default About;
