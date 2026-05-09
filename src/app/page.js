import ContactForm from "../components/ContactForm";

export default function Home() {
  return (
    <main style={{
      fontFamily: "Inter, sans-serif",
      color: "#3A3A3A",
      background: "#F7F3EF"
    }}>

      {/* HERO */}
      <section style={{
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
      {/* O MNIE */}
      <section style={{
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
      <section style={{
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

      {/* KONTAKT */}
      <section id="kontakt" style={{
        background: "#EFE7E1",
        padding: "70px 20px",
        textAlign: "center"
      }}>
        <h2 style={{ fontSize: "26px" }}>Kontakt</h2>

        <p style={{ marginTop: "15px" }}>📞 698 042 051</p>
        <p>📧 kpneurologopeda@gmail.com</p>

        <div style={{
          maxWidth: "520px",
          margin: "35px auto"
        }}>
          <ContactForm />
        </div>
      </section>

    </main>
  );
}