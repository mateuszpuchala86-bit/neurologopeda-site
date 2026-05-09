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
        <a href="#top" style={linkStyle}>Start</a>
      </nav>

      {/* HERO (TYLKO JEDEN - FIX VERCEL) */}
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
              cursor: "pointer",
              fontSize: "15px",
              boxShadow: "0 10px 25px rgba(0,0,0,0.12)"
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
            Bezpieczna i spokojna terapia od pierwszych dni życia
          </h2>

          <p style={{ lineHeight: "1.8", color: "#4A4A4A" }}>
            Praca z niemowlętami i mamami wymaga zaufania, delikatności i doświadczenia.
            Każda terapia prowadzona jest indywidualnie.
          </p>

          <p style={{ marginTop: "15px", color: "#8B7D73" }}>
            ✔ podejście holistyczne<br />
            ✔ współpraca ze specjalistami<br />
            ✔ wsparcie karmienia i rozwoju
          </p>
        </div>
      </section>

      {/* O MNIE */}
      <section id="o-mnie" style={{ background: "#EFE7E1", padding: "70px 20px", textAlign: "center" }}>
        <h2>O mnie</h2>
        <p style={{ maxWidth: "750px", margin: "0 auto", lineHeight: "1.8" }}>
          Jestem neurologopedą klinicznym i specjalistą wczesnej interwencji.
        </p>
      </section>

      {/* ZAKRES */}
      <section id="zakres" style={{ background: "#F7F3EF", padding: "70px 20px", textAlign: "center" }}>
        <h2>Zakres terapii</h2>

        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px", marginTop: "30px" }}>
          {[
            "Karmienie niemowląt",
            "Dysfagia",
            "Terapia ustno-twarzowa",
            "Wsparcie laktacyjne",
            "Opóźniony rozwój mowy"
          ].map((item, i) => (
            <div
              key={i}
              style={{
                background: "white",
                padding: "20px",
                borderRadius: "12px",
                width: "260px"
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* WIZYTA */}
      <section id="wizyta" style={{ background: "#F7F3EF", padding: "80px 20px", textAlign: "center" }}>
        <h2>Jak wygląda pierwsza wizyta?</h2>
        <p style={{ maxWidth: "700px", margin: "0 auto" }}>
          Spokojna diagnoza i rozmowa z rodzicem.
        </p>
      </section>

      <ReviewsSection />

      {/* CENNIK */}
      <section id="cennik" style={{ background: "#F7F3EF", padding: "80px 20px", textAlign: "center" }}>
        <h2>Cennik</h2>
      </section>

      {/* KONTAKT */}
      <section id="kontakt" style={{ background: "#EFE7E1", padding: "90px 20px", textAlign: "center" }}>
        <h2>Kontakt</h2>

        <div
          style={{
            maxWidth: "520px",
            margin: "0 auto",
            background: "white",
            padding: "30px",
            borderRadius: "16px"
          }}
        >
          <p>📞 698 042 051</p>
          <p>📧 kpneurologopeda@gmail.com</p>

          <ContactForm />
        </div>
      </section>

    </main>
  );
}