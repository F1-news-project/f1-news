import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <footer className="text-center no-underline decoration-black text-2xl m-auto">
        <Link to="https://github.com/F1-news-project/f1-news" className="">
          GITHUB REPOSITORY
        </Link>
      </footer>
    </div>
  );
}

export default Footer;
