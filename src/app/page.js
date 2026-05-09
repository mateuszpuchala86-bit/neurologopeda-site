import ContactForm from "./../components/ContactForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      <section className="h-[90vh] flex items-center justify-center text-center px-6 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold mb-4">
            Katarzyna Puchała
          </h1>

          <p className="text-xl text-gray-700">
            Neurologopeda kliniczny
          </p>

          <p className="text-gray-500 mt-4">
            Terapia karmienia • Wczesna interwencja • Dysfagia • Zaburzenia ustno-twarzowe
          </p>

          <a href="#kontakt" className="inline-block mt-8 bg-black text-white px-6 py-3 rounded-xl">
            Umów konsultację
          </a>

          <p className="text-sm text-gray-400 mt-6">
            tel. 698 042 051 • kpneurologopeda@gmail.com
          </p>
        </div>
      </section>

      <section className="py-24 px-6 max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
        <div className="bg-gray-100 h-96 rounded-2xl flex items-center justify-center text-gray-400">
          Zdjęcie
        </div>

        <div>
          <h2 className="text-3xl font-semibold mb-4">O mnie</h2>
          <p className="text-gray-600 leading-relaxed">
            Neurologopeda kliniczna z doświadczeniem w terapii niemowląt,
            zaburzeń karmienia, dysfagii i wczesnej interwencji.
            Pracuję interdyscyplinarnie z lekarzami i specjalistami.
          </p>
        </div>
      </section>

      <section className="py-24 bg-slate-50 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-10">Zakres terapii</h2>

          <div className="grid md:grid-cols-3 gap-6 text-left">
            {[
              "Terapia karmienia niemowląt",
              "Dysfagia",
              "Wczesna interwencja",
              "Zaburzenia ustno-twarzowe",
              "Pacjenci neurologiczni",
              "Wsparcie laktacyjne"
            ].map((item) => (
              <div key={item} className="p-6 bg-white rounded-xl shadow-sm">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="kontakt" className="py-24 px-6">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-8">
            Kontakt
          </h2>

          <ContactForm />
        </div>
      </section>

      <footer className="text-center py-6 text-gray-400 text-sm">
        © {new Date().getFullYear()} Katarzyna Puchała
      </footer>

    </main>
  );
}