export default function BrandonNelsonJazzSite() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-[#f5f1e8] font-serif">
      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/images/piano.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="text-6xl md:text-8xl tracking-wide font-light mb-6">
            Brandon Nelson
          </h1>

          <p className="text-xl md:text-2xl text-[#d4c4a8] italic mb-8">
            Musician • Educator • Composer
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#shows"
              className="border border-[#d4c4a8] px-8 py-3 hover:bg-[#d4c4a8] hover:text-black transition duration-300 rounded-full"
            >
              Upcoming Shows
            </a>

            <a
              href="#contact"
              className="bg-[#d4c4a8] text-black px-8 py-3 rounded-full hover:opacity-90 transition duration-300"
            >
              Booking
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 md:px-16 bg-[#161616]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <div>
            <img
              src="/images/profilepic.jpg"
              alt="Jazz pianist"
              className="rounded-3xl shadow-2xl object-cover h-[600px] w-full"
            />
          </div>

          <div>
            <h2 className="text-5xl mb-8 text-[#d4c4a8]">About</h2>

            <p className="text-lg leading-9 text-[#e7dfcf] mb-6">
              Brandon Nelson is a Portland-based jazz pianist known for engaging
              performances, expressive improvisation, and a deep appreciation
              for the timeless traditions of jazz.
            </p>

            <p className="text-lg leading-9 text-[#e7dfcf] mb-6">
              Whether performing intimate solo sets, collaborating with jazz
              ensembles, or teaching the next generation of musicians, Brandon
              brings warmth, sophistication, and artistry to every experience.
            </p>

            <p className="text-lg leading-9 text-[#e7dfcf]">
              Available for live performances, private events, weddings,
              and lessons.
            </p>
          </div>
        </div>
      </section>

      {/* Shows Section */}
      <section id="shows" className="py-24 px-6 md:px-16 bg-[#0f0f0f]">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <h2 className="text-5xl text-[#d4c4a8] mb-4">Shows</h2>
          <p className="text-lg text-[#d7d0c0]">
            Upcoming performances and appearances.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {[
            {
              venue: 'Jazz Station w/ Tip Top feat. Noah Simpson',
              date: 'May 21st, 2026',
              time: '7-9pm',
            },
            {
              venue: 'Keys Lounge w/ Tip Top',
              date: 'May 23rd, 2026',
              time: '10-midnight',
            },
            {
              venue: 'Jo Bar w/ Tip Top',
              date: 'May 24th, 2026',
              time: '7-10pm',
            },
            {
              venue: 'Xport Lounge w/ Brigitta Teuscher',
              date: 'May 28th, 2026',
              time: '7-9pm',
            },
            {
              venue: 'Alberta St. Pub w/ Donna Jones',
              date: 'June 5th, 2026',
              time: '6-8pm',
            },
            {
              venue: 'Xport Lounge w/ Brigitta Teuscher',
              date: 'June 11th, 2026',
              time: '7-9pm',
            },
            {
              venue: 'Xport Lounge w/ Brigitta Teuscher',
              date: 'June 18th, 2026',
              time: '7-9pm',
            },
            {
              venue: 'Pono Ranch Restaurant & Bar w/ Scott Pemberton',
              date: 'June 19th, 2026',
              time: '9-midnight',
            },
            {
              venue: 'Guemas Island General Store w/ Scott Pemberton',
              date: 'June 20th, 2026',
              time: '6:30-9:30pm',
            },
            {
              venue: 'Christos w/ Paula Byrne',
              date: 'June 27th, 2026',
              time: '7-9pm',
            },
            {
              venue: 'High Sierra Music Festival w/ Scott Pemberton',
              date: 'July 4th, 2026',
              time: '7-9pm',
            },
            {
              venue: 'Xport Lounge w/ Brigitta Teuscher',
              date: 'July 9th, 2026',
              time: '7-9pm',
            },
            {
              venue: 'Xport Lounge w/ Brigitta Teuscher',
              date: 'July 16th, 2026',
              time: '7-9pm',
            },
            {
              venue: 'Xport Lounge w/ Brigitta Teuscher',
              date: 'July 23rd, 2026',
              time: '7-9pm',
            },
            {
              venue: 'Xport Lounge w/ Brigitta Teuscher',
              date: 'July 30th, 2026',
              time: '7-9pm',
            },
          ].map((show, index) => (
            <div
              key={index}
              className="border border-[#2d2d2d] bg-[#171717] rounded-3xl p-8 flex flex-col md:flex-row md:items-center md:justify-between shadow-lg"
            >
              <div>
                <h3 className="text-2xl text-[#f5f1e8] mb-2">
                  {show.venue}
                </h3>
                <p className="text-[#cdbb9a]">{show.date}</p>
              </div>

              <div className="mt-4 md:mt-0 text-lg text-[#e7dfcf]">
                {show.time}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lessons Section */}
      <section id="lessons" className="py-24 px-6 md:px-16 bg-[#161616]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <div>
            <h2 className="text-5xl text-[#d4c4a8] mb-8">Lessons</h2>

            <p className="text-lg leading-9 text-[#e7dfcf] mb-6">
              Brandon offers private piano lessons for students of all levels,
              from beginners to advanced musicians interested in classical music, jazz harmony,
              improvisation, technique, and performance.
            </p>

            <ul className="space-y-4 text-[#e7dfcf] text-lg">
              <li>• Jazz improvisation & soloing</li>
              <li>• Music theory & ear training</li>
              <li>• Piano technique & voicings</li>
              <li>• Performance coaching</li>
              <li>• Personalized lesson plans</li>
            </ul>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1514119412350-e174d90d280e?q=80&w=1200&auto=format&fit=crop"
              alt="Piano keys"
              className="rounded-3xl shadow-2xl object-cover h-[500px] w-full"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-24 px-6 md:px-16 bg-[#0d0d0d]"
      >
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-5xl text-[#d4c4a8] mb-4">Contact Me</h2>

          <p className="text-lg text-[#ddd4c2]">
            Booking inquiries, private lessons, collaborations, and event
            requests.
          </p>
        </div>

        <form
  action="https://formspree.io/f/mykovjwr"
  method="POST"
  className="max-w-3xl mx-auto bg-[#181818] border border-[#2d2d2d] rounded-3xl p-10 shadow-2xl space-y-6"
>
  <div>
    <label className="block mb-2 text-[#d4c4a8]">Name</label>
    <input
      name="name"
      type="text"
      className="w-full bg-[#101010] border border-[#333] rounded-xl px-4 py-3 text-white"
      placeholder="Your name"
    />
  </div>

  <div>
    <label className="block mb-2 text-[#d4c4a8]">Email</label>
    <input
      name="email"
      type="email"
      className="w-full bg-[#101010] border border-[#333] rounded-xl px-4 py-3 text-white"
      placeholder="Your email"
    />
  </div>

  <div>
    <label className="block mb-2 text-[#d4c4a8]">Subject</label>
    <input
      name="subject"
      type="text"
      className="w-full bg-[#101010] border border-[#333] rounded-xl px-4 py-3 text-white"
      placeholder="Booking, lesson, event..."
    />
  </div>

  <div>
    <label className="block mb-2 text-[#d4c4a8]">Message</label>
    <textarea
      name="message"
      rows={8}
      className="w-full bg-[#101010] border border-[#333] rounded-xl px-4 py-3 text-white"
      placeholder="Tell me about your request..."
    />
  </div>

  <button
    type="submit"
    className="w-full bg-[#d4c4a8] text-black py-4 rounded-xl"
  >
    Send Message
  </button>
</form>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#222] py-10 text-center text-[#9e927d] bg-black">
        <p>
          © 2026 Brandon Nelson • PDX
        </p>
      </footer>
    </div>
  );
}
