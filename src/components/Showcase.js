import Link from "next/link";
import { motion } from "framer-motion";

const Showcase = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{ opacity: 1 }}
    >
      <main className="showcase">
        <h1 className="showcase-header h-color">Rollins</h1>
        <h2 className="showcase-header-text h-color">
        ¡El único bot de dicord que necesitas!
        </h2>
        <p className="showcase-para p-color">
Uno de los increíbles bots de Discord con toneladas de funciones que satisfarán tus necesidades en tu servidor de Discord.
¡El bot está en línea!
        </p>

        <span className="p-color">¡El bot está en línea!</span>
        <div className="showcase-btn">
          <button className="btn">
            <Link className="h-color no-decoration" href="https://discord.com/oauth2/authorize?client_id=977957516946325527&permissions=8&integration_type=0&scope=bot+applications.commands">
              Añadir!
            </Link>
          </button>

          <button className="btn">
            <Link className="h-color no-decoration" href="https://discord.gg/TxrYd8jHPv">
              Comunidad!
            </Link>
          </button>
        </div>
      </main>
    </motion.div>
  );
};

export default Showcase;
