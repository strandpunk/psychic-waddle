import "./Footer.css";

const Footer = () => {
  return (
    <div id="footer">
      <p>© 2007-{new Date().getFullYear()} ГУП «Петербургский метрополитен»</p>
    </div>
  );
};

export default Footer;
