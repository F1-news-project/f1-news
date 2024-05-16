import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <footer className="footer flex  items-center text-center no-underline decoration-black text-lg p-4 mt-4 ">
        <Link to="https://github.com/F1-news-project/f1-news" className="">
          GITHUB REPOSITORY
        </Link>
      </footer>
    </div>
  );
}

export default Footer;
