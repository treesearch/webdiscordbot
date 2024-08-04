import Link from "next/link";

const About = () => {
  return (
    <>
      <section className="about-section" id="about-section">
        <div className="about-header">
          <h3 className="h-color">¿Por qué utilizar este bot?</h3>
        </div>
        <div className="about-container">
          <div className="about-card">
            <div>
              <h4 className="h-color">⚡ Comandos</h4>
              <p className="p-color">
              Comandos entendibles y fáciles de usar.
              </p>
              <hr />
            </div>
            <div>
              <h4 className="h-color">✉️ Soporte</h4>
              <p className="p-color">
              El servidor comunitario de soporte para el bot esta disponible para
              usted en cualquier momento.
              </p>
              <hr />
            </div>
            <div>
              <h4 className="h-color">✏️ Personalización</h4>
              <p className="p-color">
                Funciones totalmente personalizables a tu gusto.
              </p>
              <hr />
            </div>
          </div>
        </div>
        <p>
          <Link href="/commands" className="h-color no-decoration">
          Consulte las funciones &rarr;
          </Link>
        </p>

        <section className="about-stats">
          <div className="about-stats-card">
            <h4 className="h-color">5k+</h4>
            <p className="p-color">Meta de Servers</p>
          </div>
          <div className="about-stats-card">
            <h4 className="h-color">3k+</h4>
            <p className="p-color">Meda de Users</p>
          </div>
          <div className="about-stats-card">
            <h4 className="h-color">20+</h4>
            <p className="p-color">Meta de funciones</p>
          </div>
        </section>
      </section>
    </>
  );
};

export default About;
