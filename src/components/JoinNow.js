import Link from "next/link";

const JoinNow = () => {
  return (
    <>
      <section className="joinUs">
        <div className="h-color joinUs-header">
          <h3>¡Únete a nosotros ahora!</h3>
        </div>
        <div className="joinUs-para p-color">
        ¡Invita a nuestro bot a tu servidor Discord!{" "}
        </div>
        <button className="btn">
          <Link className="h-color no-decoration" href="https://discord.com/oauth2/authorize?client_id=977957516946325527&permissions=8&integration_type=0&scope=bot+applications.commands">
          ¡Invita ahora!
          </Link>
        </button>
      </section>
    </>
  );
};

export default JoinNow;
