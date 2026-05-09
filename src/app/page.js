import ContactForm from "../components/ContactForm";
import ReviewsSection from "../components/ReviewsSection";

const linkStyle = {
  textDecoration: "none",
  color: "#4A4A4A",
  fontSize: "14px",
  fontWeight: "500"
};

export default function Home() {
  return (
    <main
      id="top"
      style={{
        fontFamily: "Inter, sans-serif",
        color: "#3A3A3A",
        background: "#F7F3EF"
      }}
    >
      {/* MENU */}
      <nav
        style={{
          position: "sticky",
          top: 0,
          background: "rgba(247, 243, 239, 0.75)",
          boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
          backdropFilter: "blur(10px)",
          padding: "15px 20px",
          display: "flex",
          justifyContent: "center",
          gap: "25px",
          zIndex: 1000,
          borderBottom: "1px solid rgba(0,0,0,0.05)"
        }}
      >
        <a href="#o-mnie" style={linkStyle}>O mnie</a>
        <a href="#zakres" style={linkStyle}>Zakres</a>
        <a href="#wizyta" style={linkStyle}>Pierwsza wizyta</a>
        <a href="#cennik" style={linkStyle}>Cennik</a>
        <a href="#kontakt" style={linkStyle}>Kontakt</a>
      </nav>

      {/* HERO */}
      <section
        style={{
          background: "linear-gradient(180deg, #F7F3EF 0%, #EFE7E1 100%)",
          padding: "120px 20px 90px",
          textAlign: "center"
        }}
      >
        <span
          style={{
            display: "inline-block",
            background: "#EFE7E1",
            padding: "6px 14px",
            borderRadius: "20px",
            fontSize: "12px",
            color: "#7A6A5F",
            marginBottom: "20px"
          }}
        >
          Neurologopedia kliniczna • Wczesna interwencja
        </span>

        <h1 style={{ fontSize: "46px", marginBottom: "10px", fontWeight: "600" }}>
          Katarzyna Puchała
        </h1>

        <h2 style={{ fontWeight: "300", color: "#8B7D73", marginBottom: "25px" }}>
          Neurologopeda kliniczny
        </h2>

        <p
          style={{
            maxWidth: "680px",
            margin: "0 auto 30px",
            lineHeight: "1.9",
            fontSize: "17px",
            color: "#4A4A4A"
          }}
        >
          Wspieram niemowlęta i dzieci w trudnościach z karmieniem, oddychaniem
          oraz rozwojem funkcji ustno-twarzowych.
        </p>

        <a href="#kontakt">
          <button
            style={{
              background: "#B8956A",
              color: "white",
              border: "none",
              padding: "14px 30px",
              borderRadius: "12px",
              cursor: "pointer"
            }}
          >
            Umów konsultację
          </button>
        </a>
      </section>

      {/* ZAUFANIE / FOTO */}
      <section
        style={{
          background: "#F7F3EF",
          padding: "80px 20px",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          gap: "50px"
        }}
      >
        <img
          src="/doctor.jpg"
          alt="Gabinet neurologopedy"
          style={{
            width: "320px",
            borderRadius: "16px",
            boxShadow: "0 15px 40px rgba(0,0,0,0.12)"
          }}
        />

        <div style={{ maxWidth: "500px" }}>
          <h2 style={{ fontSize: "26px", marginBottom: "15px" }}>
            Bezpieczna i spokojna terapia
          </h2>

          <p style={{ lineHeight: "1.8", color: "#4A4A4A" }}>
            Każda terapia prowadzona jest indywidualnie, w oparciu o potrzeby dziecka i rodziny.
          </p>
        </div>
      </section>

      {/* O MNIE */}
      <section id="o-mnie" style={{ padding: "70px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "26px", marginBottom: "15px" }}>O mnie</h2>
        <p style={{ maxWidth: "750px", margin: "0 auto", lineHeight: "1.8" }}>
          Jestem neurologopedą klinicznym. Pracuję z niemowlętami i dziećmi z trudnościami
          neurologicznymi oraz karmieniem.
        </p>
      </section>

      {/* ZAKRES */}
      <section id="zakres" style={{ padding: "70px 20px", textAlign: "center" }}>
        <h2>Zakres terapii</h2>
      </section>

      {/* WIZYTA */}
      <section id="wizyta" style={{ padding: "80px 20px", textAlign: "center" }}>
        <h2>Jak wygląda pierwsza wizyta?</h2>

        <p style={{ maxWidth: "700px", margin: "0 auto 30px", lineHeight: "1.8" }}>
          Pierwsza wizyta to spokojna ocena funkcjonowania dziecka i rozmowa z rodzicem.
        </p>

        <div>
          <p>✔ Rozmowa z rodzicem</p>
          <p>✔ Obserwacja dziecka</p>
          <p>✔ Diagnoza funkcjonalna</p>
          <p>✔ Plan terapii</p>
        </div>
      </section>

      <ReviewsSection />

      {/* CENNIK */}
      <section id="cennik" style={{ padding: "80px 20px", textAlign: "center" }}>
        <h2>Cennik</h2>

        <p>Diagnoza – 180 zł</p>
        <p>Konsultacja – 200 zł</p>
        <p>Terapia – 150 zł</p>
      </section>

      {/* KONTAKT */}
      <section id="kontakt" style={{ padding: "90px 20px", textAlign: "center" }}>
        <h2>Kontakt</h2>

        <p>📞 698 042 051</p>
        <p>📧 kpneurologopeda@gmail.com</p>

        <ContactForm />
      </section>
    </main>
  );
}