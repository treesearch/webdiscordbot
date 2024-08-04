import Link from "next/link";
import Image from "next/image";
import botOnlineStatus from "../utils/images/botStatus.svg";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div>
      <footer className="footer">
        <div className="footer-sec1">
          <div className="footer-header">
            <ul>
              <li>
                <Link className="h-color" href="/">
                  bot.gg
                </Link>
                <span
                  style={{
                    fontSize: "12px",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                  className="p-color"
                >
                  <Image
                    src={botOnlineStatus}
                    width={20}
                    height={20}
                    alt="online-status"
                    className="onlineStatus"
                  />{" "}
                 ¡El bot está en línea!
                </span>
              </li>
            </ul>
          </div>
          <div className="footer-items">
            <ul>
              <li>
                <Link className="p-color" href="/commands">
                  /comandos
                </Link>
              </li>
              <li>
                <Link className="p-color" href="https://discord.gg/TxrYd8jHPv">
                  /soporte
                </Link>
              </li>
              <li>
                <Link className="p-color" href="https://discord.gg/TxrYd8jHPv">
                  /comunidad
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-sec2">
          <hr />
          <div>
            <p className="p-color">
              Web creada con ❤️ por{" "}
              <Link
                href="https://github.com/preetsuthar17"
                className="h-color no-decoration"
              >
                Preet Suthar
              </Link>
            </p>
            <p className="p-color">{year} &copy; Reservados todos los derechos!</p>
          </div>
          <div className="footer-sec2-link">
            <Link className="p-color no-decoration" href="https://github.com/preetsuthar17">
              /support
            </Link>
            <Link
              target="_blank"
              className="p-color no-decoration"
              href="https://github.com/preetsuthar17"
            >
              /about
            </Link>
            <Link className="p-color no-decoration" href="https://github.com/preetsuthar17">
              /privacy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
