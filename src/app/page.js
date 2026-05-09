
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
    <main id="top" style={{
  fontFamily: "Inter, sans-serif",
  color: "#3A3A3A",
  background: "#F7F3EF"
}}>
{/* MENU */}
<nav style={{
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
}}>

<a href="#o-mnie" style={linkStyle}>O mnie</a>
<a href="#zakres" style={linkStyle}>Zakres</a>
<a href="#wizyta" style={linkStyle}>Pierwsza wizyta</a>
<a href="#cennik" style={linkStyle}>Cennik</a>
<a href="#kontakt" style={linkStyle}>Kontakt</a>
<a href="#top" style={linkStyle}>Start</a>

</nav>
   <section style={{
  
}}>

  <span style={{
    display: "inline-block",
    background: "#EFE7E1",
    padding: "6px 14px",
    borderRadius: "20px",
    fontSize: "12px",
    color: "#7A6A5F",
    marginBottom: "20px"
  }}>
    Neurologopedia kliniczna • Wczesna interwencja
  </span>

  <h1 style={{ fontSize: "46px", marginBottom: "10px", fontWeight: "600" }}>
    Katarzyna Puchała
  </h1>

  <h2 style={{ fontWeight: "300", color: "#8B7D73", marginBottom: "25px" }}>
    Neurologopeda kliniczny
  </h2>

  <p style={{
    maxWidth: "680px",
    margin: "0 auto 30px",
    lineHeight: "1.9",
    fontSize: "17px",
    color: "#4A4A4A"
  }}>
    Wspieram niemowlęta i dzieci w trudnościach z karmieniem, oddychaniem
    oraz rozwojem funkcji ustno-twarzowych.
  </p>

  <a href="#kontakt">
    <button style={{
      background: "#B8956A",
      color: "white",
      border: "none",
      padding: "14px 30px",
      borderRadius: "12px"
    }}>
      Umów konsultację
    </button>
  </a>

</section>   

  {/* BADGE */}
  <span style={{
    display: "inline-block",
    background: "#EFE7E1",
    padding: "6px 14px",
    borderRadius: "20px",
    fontSize: "12px",
    color: "#7A6A5F",
    marginBottom: "20px",
    letterSpacing: "0.5px"
  }}>
    Neurologopedia kliniczna • Wczesna interwencja
  </span>

  {/* IMIĘ */}
  <h1 style={{
    fontSize: "46px",
    marginBottom: "10px",
    letterSpacing: "-0.5px",
    fontWeight: "600"
  }}>
    Katarzyna Puchała
  </h1>

  {/* SPECJALIZACJA */}
  <h2 style={{
    fontWeight: "300",
    color: "#8B7D73",
    marginBottom: "25px"
  }}>
    Neurologopeda kliniczny
  </h2>

  {/* OPIS */}
  <p style={{
    maxWidth: "680px",
    margin: "0 auto 30px",
    lineHeight: "1.9",
    fontSize: "17px",
    color: "#4A4A4A"
  }}>
    Wspieram niemowlęta i dzieci w trudnościach z karmieniem, oddychaniem
    oraz rozwojem funkcji ustno-twarzowych. Pracuję w oparciu o spokojną,
    indywidualną i bezpieczną terapię od pierwszych dni życia.
  </p>

  {/* CTA */}
  <a href="#kontakt">
    <button style={{
      background: "#B8956A",
      color: "white",
      border: "none",
      padding: "14px 30px",
      borderRadius: "12px",
      cursor: "pointer",
      fontSize: "15px",
      boxShadow: "0 10px 25px rgba(0,0,0,0.12)",
    }}>
      Umów konsultację
    </button>
  </a>

  {/* TRUST LINE */}
  <p style={{
    marginTop: "22px",
    fontSize: "13px",
    color: "#9C8F85"
  }}>
    Spokojne, indywidualne podejście • Terapia oparta na wiedzy klinicznej
  </p>

</section>
        background: "linear-gradient(180deg, #F7F3EF 0%, #EFE7E1 100%)",
        padding: "110px 20px",
        textAlign: "center"
      }}>
        <h1 style={{
          fontSize: "44px",
          marginBottom: "10px",
          letterSpacing: "-0.5px",
          fontWeight: "600"
        }}>
          Katarzyna Puchała
        </h1>

        <h2 style={{
          fontWeight: "300",
          color: "#8B7D73"
        }}>
          Neurologopeda kliniczny
        </h2>

        <p style={{
          maxWidth: "650px",
          margin: "25px auto",
          lineHeight: "1.8",
          fontSize: "17px",
          color: "#4A4A4A"
        }}>
          Wspieram niemowlęta i dzieci w trudnościach z karmieniem,
          oddychaniem oraz rozwojem funkcji ustno-twarzowych,
          zapewniając spokojne i bezpieczne wsparcie od pierwszych dni życia.
        </p>

        <a href="#kontakt">
          <button style={{
            background: "#B8956A",
            color: "white",
            border: "none",
            padding: "14px 28px",
            borderRadius: "12px",
            cursor: "pointer",
            fontSize: "15px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.10)",
            transition: "all 0.2s ease"
          }}>
            Umów konsultację
          </button>
        </a>

        <p style={{
          fontSize: "13px",
          color: "#9C8F85",
          marginTop: "20px"
        }}>
          Spokojne wsparcie dla Ciebie i Twojego dziecka
        </p>
      </section>
{/* ZAUFANIE / FOTO */}
<section style={{
  background: "#F7F3EF",
  padding: "80px 20px",
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "center",
  gap: "50px"
}}>

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
<section style={{
  background: "#F7F3EF",
  padding: "80px 20px",
  textAlign: "center"
}}>

  <h2 style={{ fontSize: "26px", marginBottom: "30px" }}>
    Dla kogo jest terapia?
  </h2>

  <div style={{
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px"
  }}>

    {[
      "Niemowlęta z trudnościami w karmieniu",
      "Problemy z ssaniem i połykaniem",
      "Dzieci z opóźnionym rozwojem mowy",
      "Wady genetyczne i neurologiczne",
      "Wsparcie laktacyjne mam",
      "Dysfunkcje ustno-twarzowe"
    ].map((item, i) => (
      <div key={i} style={{
        background: "white",
        padding: "20px",
        borderRadius: "14px",
        width: "280px",
        boxShadow: "0 10px 25px rgba(0,0,0,0.06)",
        fontSize: "15px",
        lineHeight: "1.6"
      }}>
        {item}
      </div>
    ))}

  </div>
</section>
<section style={{
  background: "#EFE7E1",
  padding: "80px 20px",
  textAlign: "center"
}}>

  <h2 style={{ fontSize: "26px", marginBottom: "20px" }}>
    Doświadczenie kliniczne
  </h2>

  <p style={{
    maxWidth: "750px",
    margin: "0 auto",
    lineHeight: "1.8",
    fontSize: "16px"
  }}>
    Pracuję zarówno w gabinecie prywatnym, jak i w środowisku klinicznym,
    współpracując z zespołami szpitalnymi i specjalistami różnych dziedzin.
    Doświadczenie obejmuje pracę w oddziałach neurologicznych, laryngologicznych
    oraz rehabilitacji neurologicznej.
  </p>

  <div style={{
    marginTop: "30px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "15px"
  }}>

    {[
      "Oddział neurologiczny",
      "Oddział laryngologiczny",
      "Rehabilitacja neurologiczna",
      "Opieka nad noworodkami",
      "Terapia pacjentów OUN"
    ].map((item, i) => (
      <div key={i} style={{
        background: "white",
        padding: "15px 20px",
        borderRadius: "12px",
        fontSize: "14px",
        boxShadow: "0 6px 15px rgba(0,0,0,0.05)"
      }}>
        {item}
      </div>
    ))}

  </div>
</section>
      {/* O MNIE */}
      <section id="o-mnie" style={{
        background: "#EFE7E1",
        padding: "70px 20px",
        textAlign: "center"
      }}>
        <h2 style={{ fontSize: "26px", marginBottom: "15px" }}>O mnie</h2>

        <p style={{
          maxWidth: "750px",
          margin: "0 auto",
          lineHeight: "1.8",
          fontSize: "16px"
        }}>
          Jestem neurologopedą klinicznym i specjalistą wczesnej interwencji.
          Pracuję z noworodkami, niemowlętami oraz dziećmi z wyzwaniami
          neurologicznymi i genetycznymi. W terapii stosuję podejście holistyczne,
          współpracując z zespołem lekarzy, fizjoterapeutów i ortodontów.
        </p>
      </section>

      {/* ZAKRES */}
      <section id="zakres" style={{
        background: "#F7F3EF",
        padding: "70px 20px",
        textAlign: "center"
      }}>
        <h2 style={{ fontSize: "26px" }}>Zakres terapii</h2>

        <div style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "22px",
          marginTop: "35px"
        }}>

          {[
            "Problemy z karmieniem niemowląt",
            "Dysfagia i zaburzenia połykania",
            "Terapia ustno-twarzowa",
            "Wsparcie laktacyjne",
            "Wady genetyczne i neurologiczne",
            "Opóźniony rozwój mowy"
          ].map((item, i) => (
            <div key={i} style={{
              background: "white",
              padding: "22px",
              borderRadius: "14px",
              width: "260px",
              boxShadow: "0 10px 25px rgba(0,0,0,0.06)",
              fontSize: "15px"
            }}>
              {item}
            </div>
          ))}
        </div>
      </section>
<section id="wizyta" style={{
  background: "#F7F3EF",
  padding: "80px 20px",
  textAlign: "center"
}}>

  <h2 style={{ fontSize: "26px", marginBottom: "15px" }}>
    Jak wygląda pierwsza wizyta?
  </h2>

  <p style={{
    maxWidth: "750px",
    margin: "0 auto 40px",
    lineHeight: "1.8",
    fontSize: "16px",
    color: "#4A4A4A"
  }}>
    Pierwsze spotkanie ma na celu spokojną ocenę funkcjonowania dziecka
    oraz rozmowę z rodzicem. Bez presji i bez pośpiechu — w atmosferze bezpieczeństwa.
  </p>

  <div style={{
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px"
  }}>

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
      <div key={i} style={{
        background: "white",
        padding: "22px",
        borderRadius: "14px",
        width: "260px",
        boxShadow: "0 10px 25px rgba(0,0,0,0.06)",
        textAlign: "left"
      }}>
        <h3 style={{ fontSize: "16px", marginBottom: "10px" }}>
          {item.title}
        </h3>
        <p style={{ fontSize: "14px", lineHeight: "1.6", color: "#555" }}>
          {item.text}
        </p>
      </div>
    ))}

  </div>

  <p style={{
    marginTop: "40px",
    fontSize: "14px",
    color: "#8B7D73"
  }}>
    Każde dziecko jest inne — tempo i forma pracy zawsze dostosowane są indywidualnie.
  </p>

</section>
<ReviewsSection />



<section id="cennik" style={{
  background: "#F7F3EF",
  padding: "80px 20px",
  textAlign: "center"
}}>

  <h2 style={{ fontSize: "26px", marginBottom: "10px" }}>
    Cennik
  </h2>

  <p style={{
    maxWidth: "650px",
    margin: "0 auto 40px",
    lineHeight: "1.8",
    fontSize: "15px",
    color: "#4A4A4A"
  }}>
    Transparentność i jasne zasady są podstawą współpracy terapeutycznej.
  </p>

  <div style={{
    maxWidth: "800px",
    margin: "0 auto",
    display: "grid",
    gap: "15px"
  }}>

    {[
      { name: "Diagnoza neurologopedyczna", price: "180 zł" },
      { name: "Konsultacja neurologopedyczna", price: "200 zł" },
      { name: "Terapia neurologopedyczna", price: "150 zł" },
      { name: "Elektrostymulacja (do 30 minut)", price: "50 zł" },
      { name: "Konsultacja noworodka / niemowlaka (90 min)", price: "od 230 zł" },
      { name: "Terapia logopedyczna z Forbrain (30 min)", price: "100 zł" }
    ].map((item, i) => (
      <div key={i} style={{
        background: "white",
        padding: "18px 20px",
        borderRadius: "12px",
        display: "flex",
        justifyContent: "space-between",
        boxShadow: "0 8px 20px rgba(0,0,0,0.05)",
        fontSize: "15px"
      }}>
        <span>{item.name}</span>
        <b>{item.price}</b>
      </div>
    ))}

  </div>

  {/* INFO */}
  <p style={{
    marginTop: "30px",
    fontSize: "13px",
    color: "#8B7D73"
  }}>
    Oferowane narzędzia i metody zawarte są w cenie terapii.
  </p>

</section>
{/* KONTAKT */}
<section id="kontakt" style={{
  background: "#EFE7E1",
  padding: "90px 20px",
  textAlign: "center"
}}>

  <h2 style={{ fontSize: "26px", marginBottom: "10px" }}>
    Kontakt
  </h2>

  <p style={{
    maxWidth: "600px",
    margin: "0 auto 30px",
    lineHeight: "1.8",
    fontSize: "16px",
    color: "#4A4A4A"
  }}>
    Jeśli masz wątpliwości dotyczące karmienia, rozwoju lub funkcjonowania dziecka —
    możesz skontaktować się ze mną bezpośrednio.
  </p>
  {/* KONTAKT BOX */}
  <div style={{
    maxWidth: "520px",
    margin: "0 auto",
    background: "white",
    padding: "30px",
    borderRadius: "16px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
    textAlign: "left"
  }}>

    <p style={{ marginBottom: "10px" }}>📞 <b>698 042 051</b></p>
    <p style={{ marginBottom: "20px" }}>📧 kpneurologopeda@gmail.com</p>

    <p style={{
      fontSize: "13px",
      color: "#8B7D73",
      marginBottom: "20px",
      lineHeight: "1.6"
    }}>
      Odpowiadam na wiadomości w możliwie najkrótszym czasie.
      W pilnych przypadkach proszę o kontakt telefoniczny.
    </p>

    <div style={{ marginTop: "10px" }}>
      <ContactForm />
    </div>

  </div>

  {/* MINI TRUST */}
  <p style={{
    marginTop: "30px",
    fontSize: "13px",
    color: "#9C8F85"
  }}>
    Terapia prowadzona w atmosferze spokoju i bezpieczeństwa
  </p>

</section>

    </main>
  );
}
