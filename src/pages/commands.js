import Head from "next/head";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { motion } from "framer-motion";

export default function Commands() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{ opacity: 1 }}
    >
      <Head>
        <title>Commandos | Rollins</title>
        <meta
          name="description"
          content="Creado con ❤️"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <section className="about-section">
        <nav className="accordion arrows" id="commands">
          <header className="box">
            <label htmlFor="acc-close" className="box-title h-color">
              ⚡ Funciones/Usos
            </label>
          </header>
          <input type="radio" name="accordion" id="cb1" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb1">
              Funciones ⚙️
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd>Logs</kbd> -{" "}
                  <span className="p-color">Sistema básico de logs.</span>
                </li>
                <li>
                  <kbd>Bienvenidas</kbd> -{" "}
                  <span className="p-color">Sistema personalizable de bienvenidas.</span>
                </li>
                <li>
                  <kbd>AutoMod</kbd> -{" "}
                  <span className="p-color">Sistema avanzado de AutoMod.</span>
                </li>
              </ul>
            </div>
          </section>
          <input type="radio" name="accordion" id="cb2" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb2">
              Comandos 🐛
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd>/exportar</kbd> -{" "}
                  <span className="p-color">Exporta archivo .txt para configurar el servidor.</span>
                </li>
                <li>
                  <kbd>/importar</kbd> -{" "}
                  <span className="p-color">Importa el archivo .txt configurado.</span>
                </li>
                <li>
                  <kbd>/archivo</kbd> -{" "}
                  <span className="p-color">Muestra el archivo .txt actual del servidor.</span>
                </li>
              </ul>
            </div>
          </section>
          <input type="radio" name="accordion" id="cb3" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb3">
            #1 Configuración 👀
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd>Canal de Bienvenida.</kbd> -{" "}
                  <span className="p-color">ID del canal donde se enviará el mensaje de bienvenida: welcomeChannelId=</span>
                </li>
                <li>
                  <kbd>Mensaje de Bienvenida</kbd> -{" "}
                  <span className="p-color">Mensaje que se enviará en el canal de bienvenida. Puedes usar {username} como marcador de posición para el nombre del usuario.
                  welcomeMessage=</span>
                </li>
                <li>
                  <kbd>Rol de Bienvenida</kbd> -{" "}
                  <span className="p-color">ID del rol que se otorgará a los nuevos miembros al entrar al servidor.
                  welcomeRoleId=</span>
                </li>
              </ul>
            </div>
          </section>

          <input type="radio" name="accordion" id="cb4" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb4">
            #2 Configuración 👀
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd>Enviar como Embed</kbd> -{" "}
                  <span className="p-color">Define si el mensaje de bienvenida se enviará como un embed (1) o como un mensaje normal (0).
                  embed=0</span>
                </li>
                <li>
                  <kbd>Color del Embed</kbd> -{" "}
                  <span className="p-color">Color del embed en formato hexadecimal. Ignorado si "Enviar como Embed" está en 0.
                  embedColor=#FFFFFF</span>
                </li>
                <li>
                  <kbd>Imagen del Embed</kbd> -{" "}
                  <span className="p-color">URL de la imagen que se mostrará en el embed. Ignorado si "Enviar como Embed" está en 0.
                  embedImage=</span>
                </li>
              </ul>
            </div>
          </section>

          <input type="radio" name="accordion" id="cb5" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb5">
            #3 Configuración 👀
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd>Autor del Embed (Titulo)</kbd> -{" "}
                  <span className="p-color">Nombre del autor que se mostrará en el embed. Ignorado si "Enviar como Embed" está en 0.
                  embedAuthor=</span>
                </li>
                <li>
                  <kbd>Rol de Staff</kbd> -{" "}
                  <span className="p-color">ID del rol de staff que se utilizará para asignar permisos especiales.
                  staffRoleId=</span>
                </li>
                <li>
                  <kbd>Canal de Logs</kbd> -{" "}
                  <span className="p-color">ID del canal donde se enviarán los logs de eventos (como usuarios que se unen, salen, son baneados, etc.).
                  logsChannelId=</span>
                </li>
              </ul>
            </div>
          </section>

          <input type="radio" name="accordion" id="acc-close" />
        </nav>
      </section>
      <Footer />
    </motion.div>
  );
}
