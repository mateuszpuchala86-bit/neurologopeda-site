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
flexWrap: "wrap",
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
      marginBottom: "25px"
    }}
  >
    Neurologopedia kliniczna • Wczesna interwencja
  </span>

  <h1 style={{
  fontSize: "clamp(32px, 6vw, 52px)",
  marginBottom: "12px",
  fontWeight: "600",
  letterSpacing: "-0.8px"
}}>
    Neurologopeda Katarzyna Puchała
  </h1>

  <h2 style={{
  fontSize: "clamp(22px, 4vw, 28px)",
  marginBottom: "25px",
  letterSpacing: "-0.3px"
}}>
    Terapia niemowląt i dzieci – Kielce i okolice
  </h2>
{/* BADGE GOOGLE */}
<a
  href="https://g.page/r/YOUR_GOOGLE_ID/review"
  target="_blank"
  style={{ textDecoration: "none" }}
>
  <div
    style={{
      display: "inline-flex",
      alignItems: "center",
      gap: "10px",
      background: "white",
      padding: "8px 16px",
      borderRadius: "30px",
      boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
      marginBottom: "25px"
    }}
  >
    <span style={{ fontSize: "14px" }}>⭐⭐⭐⭐⭐</span>

    <span
      style={{
        fontSize: "13px",
        color: "#7A6A5F"
      }}
    >
      Opinie Google
    </span>
  </div>
</a>
  <p
    style={{
      maxWidth: "680px",
      margin: "0 auto 30px",
      lineHeight: "1.9",
      fontSize: "clamp(14px, 3.5vw, 17px)",
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
        padding: "15px 32px",
width: "100%",
maxWidth: "320px",
        borderRadius: "14px",
        cursor: "pointer",
        fontSize: "15px",
        boxShadow: "0 10px 25px rgba(0,0,0,0.12)",
transition: "all 0.2 ease"
      }}
    >
      Umów konsultację
    </button>
  </a>

<p style={{
  marginTop: "10px",
  fontSize: "13px",
  color: "#9C8F85"
}}>
  Gabinet: Bilcza (Kielce i Morawica)
</p>

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
{/* DLACZEGO MI ZAUFAĆ */}
<section style={{
  background: "#EFE7E1",
  padding: "110px 20px",
  textAlign: "center"
}}>
  <h2 style={{ fontSize: "26px", marginBottom: "40px" }}>
    Dlaczego warto mi zaufać?
  </h2>

  <div style={{
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "25px"
  }}>

    {[
      "Indywidualne podejście do każdego dziecka",
      "Doświadczenie kliniczne",
      "Spokojna i bezpieczna atmosfera",
      "Współpraca ze specjalistami"
    ].map((item, i) => (
      <div key={i} style={{
        background: "white",
        padding: "25px",
        borderRadius: "16px",
        width: "260px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.06)"
      }}>
        {item}
      </div>
    ))}

  </div>
</section>
{/* ZAUFANIE / FOTO */}
<section
  style={{
    background: "#F7F3EF",
    padding: "70px 16px",
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
  width: "100%",
  maxWidth: "320px",
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
    padding: "110px 20px",
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
          padding: "25px",
          borderRadius: "16px",
          width: "100%",
maxWidth: "320px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
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
<section
  id="o-mnie"
  style={{
    background: "#EFE7E1",
    padding: "110px 20px",
    textAlign: "center"
  }}
>
  <h2 style={{ fontSize: "26px", marginBottom: "25px" }}>
    O mnie
  </h2>

  <p
    style={{
      maxWidth: "750px",
      margin: "0 auto",
      lineHeight: "1.9",
      fontSize: "clamp(14px, 3.5vw, 17px)",
      color: "#4A4A4A"
    }}
  >
    Jestem neurologopedą klinicznym i specjalistą wczesnej interwencji.
    Pracuję z noworodkami, niemowlętami oraz dziećmi z wyzwaniami
    neurologicznymi i genetycznymi.

    <br /><br />

    W terapii kieruję się spokojnym, indywidualnym podejściem,
    dostosowanym do potrzeb dziecka i rodziny. Współpracuję
    z lekarzami, fizjoterapeutami oraz innymi specjalistami,
    aby zapewnić kompleksowe wsparcie.

    <br /><br />

    Moim celem jest nie tylko terapia, ale również wsparcie rodzica
    i budowanie poczucia bezpieczeństwa już od pierwszych dni życia dziecka.
  </p>
</section>

     {/* ZAKRES */}
<section
  id="zakres"
  style={{
    background: "#F7F3EF",
    padding: "70px 16px",
    textAlign: "center"
  }}
>
  <h2 style={{ fontSize: "26px", marginBottom: "30px" }}>
    Zakres terapii
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
      "Problemy z karmieniem niemowląt",
      "Dysfagia i zaburzenia połykania",
      "Terapia ustno-twarzowa",
      "Wsparcie laktacyjne",
      "Wady genetyczne i neurologiczne",
      "Opóźniony rozwój mowy"
    ].map((item, i) => (
      <div
        key={i}
        style={{
          background: "white",
          padding: "25px",
          borderRadius: "16px",
          width: "100%",
maxWidth: "320px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
          fontSize: "15px"
        }}
      >
        {item}
      </div>
    ))}
  </div>
</section>

      
{/* PIERWSZA WIZYTA */}
<section
  id="wizyta"
  style={{
    background: "#F7F3EF",
    padding: "70px 16px",
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
      lineHeight: "1.9",
  fontSize: "clamp(14px, 3.5vw, 17px)",
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
          padding: "25px",
          borderRadius: "16px",
          width: "100%",
maxWidth: "320px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
          textAlign: "left"
        }}
      >
        <h3 style={{ fontSize: "16px", marginBottom: "14px" }}>
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
      {/* OPINIE GOOGLE */}
<section
  style={{
    background: "#EFE7E1",
    padding: "100px 20px",
    textAlign: "center"
  }}
>

  <h2 style={{ fontSize: "26px", marginBottom: "10px" }}>
    Opinie rodziców
  </h2>

  <p style={{
    color: "#7A6A5F",
    marginBottom: "40px",
    fontSize: "14px"
  }}>
    Zaufanie budowane doświadczeniem i spokojną terapią
  </p>

  <div style={{
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "25px",
    maxWidth: "1100px",
    margin: "0 auto"
  }}>

    {[
      {
        text: "Bardzo profesjonalne i spokojne podejście do dziecka. Już po kilku spotkaniach widoczna poprawa.",
        author: "Mama 3-miesięcznego chłopca"
      },
      {
        text: "Ogromna wiedza i cierpliwość. Czuliśmy się zaopiekowani od pierwszej wizyty.",
        author: "Rodzice wcześniaka"
      },
      {
        text: "Najlepsza decyzja. Terapia prowadzona w bardzo bezpiecznej atmosferze.",
        author: "Mama 2-letniej dziewczynki"
      }
    ].map((item, i) => (
      <div key={i} style={{
        background: "white",
        padding: "25px",
        borderRadius: "16px",
        width: "300px",
        boxShadow: "0 15px 35px rgba(0,0,0,0.08)",
        textAlign: "left"
      }}>
        <p style={{
          fontSize: "15px",
          lineHeight: "1.7",
          marginBottom: "15px"
        }}>
          ⭐⭐⭐⭐⭐
        </p>

        <p style={{
          fontSize: "15px",
          lineHeight: "1.7",
          color: "#4A4A4A"
        }}>
          {item.text}
        </p>

        <p style={{
          marginTop: "15px",
          fontSize: "13px",
          color: "#8B7D73"
        }}>
          — {item.author}
        </p>
      </div>
    ))}

  </div>

  {/* CTA DO GOOGLE */}
  <div style={{ marginTop: "40px" }}>
    <a
      href="https://g.page/r/CZfjWy3cB2SnEBM/review"
      target="_blank"
      style={{
        textDecoration: "none"
      }}
    >
      <button
        style={{
          background: "#B8956A",
          color: "white",
          border: "none",
          padding: "14px 28px",
          borderRadius: "12px",
          cursor: "pointer",
          fontSize: "15px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.12)"
        }}
      >
        Zobacz opinie w Google
      </button>
    </a>
  </div>

</section>

      {/* CENNIK */}
      {/* CENNIK PREMIUM */}
<section
  id="cennik"
  style={{
    background: "#F7F3EF",
    padding: "110px 20px",
    textAlign: "center"
  }}
>
  <h2 style={{ fontSize: "26px", marginBottom: "14px" }}>
    Cennik
  </h2>

  <p
    style={{
      maxWidth: "650px",
      margin: "0 auto 40px",
      lineHeight: "1.9",
  fontSize: "clamp(14px, 3.5vw, 17px)",
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
          padding: "25px",
          borderRadius: "16px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
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
{/* LOKALIZACJA PREMIUM */}
<section
  style={{
    padding: "100px 20px",
    background: "#F7F3EF"
  }}
>
  <div
    style={{
      maxWidth: "1100px",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "40px",
      alignItems: "center"
    }}
  >

    {/* LEWA STRONA - TEKST */}
    <div>
      <h2 style={{ marginBottom: "20px", fontSize: "26px" }}>
        Lokalizacja gabinetu
      </h2>

      <p style={{
        lineHeight: "1.8",
        color: "#4A4A4A",
        marginBottom: "20px"
      }}>
        Gabinet znajduje się w <b>Bilczy</b> pod Kielcami.
        Przyjmuję pacjentów z Kielc, Morawicy oraz okolicznych miejscowości.
      </p>

      <p style={{
        color: "#8B7D73",
        fontSize: "14px"
      }}>
        ✔ dogodny dojazd<br/>
        ✔ spokojna lokalizacja<br/>
        ✔ bezpłatny parking
      </p>
    </div>

    {/* PRAWA STRONA - MAPA */}
    <div
      style={{
        borderRadius: "16px",
        overflow: "hidden",
        boxShadow: "0 15px 40px rgba(0,0,0,0.1)"
      }}
    >
      <iframe
        src="https://www.google.com/maps?q=Bilcza&output=embed"
        width="100%"
        height="350"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>

  </div>
</section>

{/* KONTAKT PREMIUM */}
<section id="kontakt" style={{
  background: "#EFE7E1",
  padding: "110px 20px"
}}>

  <div style={{
    maxWidth: "1100px",
    margin: "0 auto",
    display: "flex",
    flexWrap: "wrap",
    gap: "40px",
    alignItems: "center",
    justifyContent: "center"
  }}>

    {/* LEWA STRONA */}
    <div style={{ flex: "1", minWidth: "280px" }}>

      <h2 style={{ fontSize: "30px", marginBottom: "15px" }}>
        Umów wizytę
      </h2>

      <p style={{
        lineHeight: "1.8",
        color: "#4A4A4A",
        marginBottom: "25px"
      }}>
        Jeśli masz pytania dotyczące rozwoju dziecka, karmienia lub terapii —
        skontaktuj się ze mną. Odpowiem i dobierzemy najlepszą formę wsparcia.
      </p>

      <p style={{ marginBottom: "12px", fontSize: "16px" }}>
        📞 <a href="tel:727411741" style={{ textDecoration: "none", color: "#3A3A3A" }}>
          <b>727 411 741</b>
        </a>
      </p>

      <p style={{ marginBottom: "25px", fontSize: "16px" }}>
        📧 kpneurologopeda@gmail.com
      </p>

      <p style={{
        fontSize: "13px",
        color: "#8B7D73"
      }}>
        Gabinet: Bilcza (Kielce i Morawica)
      </p>

    </div>

    {/* PRAWA STRONA */}
    <div style={{
      flex: "1",
      minWidth: "280px",
      background: "white",
      padding: "30px",
      borderRadius: "16px",
      boxShadow: "0 15px 40px rgba(0,0,0,0.08)"
    }}>
      <ContactForm />
    </div>
<p style={{
  marginTop: "15px",
  fontSize: "14px",
  color: "#7A6A5F"
}}>
  Gabinet neurologopedyczny znajduje się w Bilczy – przyjmuję również pacjentów z Kielc i okolicznych miejscowości.
</p>
  </div>

</section>
      
{/* STICKY CALL BUTTON MOBILE */}
<a
  href="tel:727411741"
  style={{
    position: "fixed",
    bottom: "15px",
    left: "50%",
    transform: "translateX(-50%)",
    background: "#B8956A",
    color: "white",
    padding: "14px 22px",
    borderRadius: "30px",
    textDecoration: "none",
    fontSize: "15px",
    fontWeight: "500",
    boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
    zIndex: 9999,
    display: "none"
  }}
  className="mobile-call"
>
  📞 Zadzwoń teraz
</a>
    </main>
  );
}