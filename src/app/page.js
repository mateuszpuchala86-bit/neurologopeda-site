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

  {/* ZDJĘCIE */}
  <img
    src="/doctor.jpg"
    alt="Gabinet neurologopedy"
    style={{
      width: "320px",
      borderRadius: "16px",
      boxShadow: "0 15px 40px rgba(0,0,0,0.12)"
    }}
  />

  {/* TEKST */}
  <div style={{ maxWidth: "500px" }}>
    <h2 style={{ fontSize: "26px", marginBottom: "15px" }}>
      Bezpieczna i spokojna terapia od pierwszych dni życia
    </h2>

    <p style={{ lineHeight: "1.8", color: "#4A4A4A" }}>
      Praca z niemowlętami i mamami wymaga zaufania, delikatności i doświadczenia.
      Każda terapia prowadzona jest indywidualnie, w oparciu o potrzeby dziecka
      i rodziny.
    </p>

    <p style={{ marginTop: "15px", color: "#8B7D73" }}>
      ✔ podejście holistyczne<br/>
      ✔ współpraca ze specjalistami<br/>
      ✔ wsparcie karmienia i rozwoju
    </p>
  </div>

</section>
{/* DLA KOGO */}
<section
  style={{
    background: "#F7F3EF",
    padding: "80px 20px",
    textAlign: "center"
  }}
>

  <h2 style={{ fontSize: "26px", marginBottom: "30px" }}>
    Dla kogo jest terapia?
  </h2>

  <div
    style={{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "20px"
    }}
  >
    {[
      "Niemowlęta z trudnościami w karmieniu",
      "Problemy z ssaniem i połykaniem",
      "Dzieci z opóźnionym rozwojem mowy",
      "Wady genetyczne i neurologiczne",
      "Wsparcie dla mam",
      "Dysfunkcje ustno-twarzowe"
    ].map((item, i) => (
      <div
        key={i}
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "14px",
          width: "260px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.06)",
          fontSize: "15px",
          lineHeight: "1.6"
        }}
      >
        {item}
      </div>
    ))}
  </div>

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
{/* PIERWSZA WIZYTA */}
<section
  id="wizyta"
  style={{
    background: "#F7F3EF",
    padding: "80px 20px",
    textAlign: "center"
  }}
>
  <h2 style={{ fontSize: "26px", marginBottom: "15px" }}>
    Jak wygląda pierwsza wizyta?
  </h2>

  <p
    style={{
      maxWidth: "750px",
      margin: "0 auto 40px",
      lineHeight: "1.8",
      fontSize: "16px",
      color: "#4A4A4A"
    }}
  >
    Pierwsze spotkanie ma na celu spokojną ocenę funkcjonowania dziecka
    oraz rozmowę z rodzicem. Bez presji i bez pośpiechu — w atmosferze bezpieczeństwa.
  </p>

  <div
    style={{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "20px"
    }}
  >
    {[
      {
        title: "Rozmowa z rodzicem",
        text: "Poznaję historię rozwoju dziecka i główne trudności."
      },
      {
        title: "Obserwacja dziecka",
        text: "Delikatna ocena funkcji ssania, połykania i oddychania."
      },
      {
        title: "Diagnoza funkcjonalna",
        text: "Określenie przyczyn trudności i planu dalszego działania."
      },
      {
        title: "Plan terapii",
        text: "Rodzic otrzymuje jasne wskazówki i plan wsparcia."
      }
    ].map((item, i) => (
      <div
        key={i}
        style={{
          background: "white",
          padding: "22px",
          borderRadius: "14px",
          width: "260px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.06)",
          textAlign: "left"
        }}
      >
        <h3 style={{ fontSize: "16px", marginBottom: "10px" }}>
          {item.title}
        </h3>
        <p style={{ fontSize: "14px", lineHeight: "1.6", color: "#555" }}>
          {item.text}
        </p>
      </div>
    ))}
  </div>

  <p
    style={{
      marginTop: "40px",
      fontSize: "14px",
      color: "#8B7D73"
    }}
  >
    Każde dziecko jest inne — tempo i forma pracy zawsze dostosowane są indywidualnie.
  </p>
</section>
      <ReviewsSection />

      {/* CENNIK */}
      {/* CENNIK PREMIUM */}
<section
  id="cennik"
  style={{
    background: "#F7F3EF",
    padding: "80px 20px",
    textAlign: "center"
  }}
>
  <h2 style={{ fontSize: "26px", marginBottom: "10px" }}>
    Cennik
  </h2>

  <p
    style={{
      maxWidth: "650px",
      margin: "0 auto 40px",
      lineHeight: "1.8",
      fontSize: "15px",
      color: "#4A4A4A"
    }}
  >
    Transparentność i jasne zasady są podstawą współpracy terapeutycznej.
  </p>

  <div
    style={{
      maxWidth: "800px",
      margin: "0 auto",
      display: "grid",
      gap: "18px"
    }}
  >
    {[
      { name: "Diagnoza neurologopedyczna", price: "180 zł" },
      { name: "Konsultacja neurologopedyczna", price: "200 zł" },
      { name: "Terapia neurologopedyczna", price: "150 zł" },
      { name: "Elektrostymulacja (do 30 minut)", price: "50 zł" },
      { name: "Konsultacja noworodka / niemowlaka (90 min)", price: "od 230 zł" },
      { name: "Terapia logopedyczna z Forbrain (30 min)", price: "100 zł" }
    ].map((item, i) => (
      <div
        key={i}
        style={{
          background: "white",
          padding: "20px 24px",
          borderRadius: "14px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          boxShadow: "0 10px 25px rgba(0,0,0,0.06)",
          fontSize: "15px"
        }}
      >
        <span>{item.name}</span>
        <b style={{ fontSize: "16px" }}>{item.price}</b>
      </div>
    ))}
  </div>

  <p
    style={{
      marginTop: "30px",
      fontSize: "13px",
      color: "#8B7D73"
    }}
  >
    Oferowane narzędzia i metody zawarte są w cenie terapii.
  </p>
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