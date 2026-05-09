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
      {/* NAV */}
      <nav
        style={{
          position: "sticky",
          top: 0,
          background: "#F7F3EF",
          padding: "15px 20px",
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          borderBottom: "1px solid #ddd",
          zIndex: 1000
        }}
      >
        <a href="#o-mnie" style={linkStyle}>O mnie</a>
        <a href="#zakres" style={linkStyle}>Zakres</a>
        <a href="#wizyta" style={linkStyle}>Wizyta</a>
        <a href="#cennik" style={linkStyle}>Cennik</a>
        <a href="#kontakt" style={linkStyle}>Kontakt</a>
      </nav>

      {/* HERO PREMIUM */}
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

  <h1
    style={{
      fontSize: "46px",
      marginBottom: "10px",
      fontWeight: "600",
      letterSpacing: "-0.5px"
    }}
  >
    Katarzyna Puchała
  </h1>

  <h2
    style={{
      fontWeight: "300",
      color: "#8B7D73",
      marginBottom: "25px"
    }}
  >
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

  <p
    style={{
      marginTop: "22px",
      fontSize: "13px",
      color: "#9C8F85"
    }}
  >
    Spokojne, indywidualne podejście • Terapia oparta na wiedzy klinicznej
  </p>

</section>

      {/* O MNIE */}
      <section id="o-mnie" style={{ padding: "80px 20px", textAlign: "center" }}>
        <h2>O mnie</h2>
        <p style={{ maxWidth: "700px", margin: "0 auto" }}>
          Jestem neurologopedą klinicznym.
        </p>
      </section>

      {/* ZAKRES */}
      <section id="zakres" style={{ padding: "80px 20px", textAlign: "center" }}>
        <h2>Zakres terapii</h2>
      </section>

      {/* WIZYTA */}
      <section id="wizyta" style={{ padding: "80px 20px", textAlign: "center" }}>
        <h2>Pierwsza wizyta</h2>
        <p>Opis wkrótce</p>
      </section>

      <ReviewsSection />

      {/* CENNIK */}
      <section id="cennik" style={{ padding: "80px 20px", textAlign: "center" }}>
        <h2>Cennik</h2>
        <p>Wkrótce</p>
      </section>

      {/* KONTAKT */}
      <section id="kontakt" style={{ padding: "80px 20px", textAlign: "center" }}>
        <h2>Kontakt</h2>
        <p>📞 698 042 051</p>
        <p>📧 kpneurologopeda@gmail.com</p>

        <ContactForm />
      </section>
    </main>
  );
}