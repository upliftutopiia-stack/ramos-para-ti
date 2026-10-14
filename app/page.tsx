
"use client";

import { useState, type FormEvent } from "react";

const instagram = "https://www.instagram.com/ramosparati214/";

const collections = [
  {
    number: "01",
    title: "Classic Romance",
    subtitle: "Timeless gestures, beautifully expressed.",
    tone: "classic",
    flower: "✿",
  },
  {
    number: "02",
    title: "Grand Gestures",
    subtitle: "For moments worth remembering.",
    tone: "grand",
    flower: "❀",
  },
  {
    number: "03",
    title: "Made For You",
    subtitle: "Your idea, your occasion, your bouquet.",
    tone: "custom",
    flower: "✾",
  },
];

function BouquetArt({ variant = "hero" }: { variant?: string }) {
  return (
    <div className={`bouquet-art bouquet-${variant}`} aria-hidden="true">
      <div className="bouquet-glow" />
      <div className="flower-head f1"><span /></div>
      <div className="flower-head f2"><span /></div>
      <div className="flower-head f3"><span /></div>
      <div className="flower-head f4"><span /></div>
      <div className="flower-head f5"><span /></div>
      <div className="flower-head f6"><span /></div>
      <div className="flower-head f7"><span /></div>
      <div className="flower-head f8"><span /></div>
      <div className="flower-head f9"><span /></div>
      <div className="flower-head f10"><span /></div>
      <div className="flower-head f11"><span /></div>
      <div className="flower-head f12"><span /></div>
      <div className="bouquet-leaves leaf-one" />
      <div className="bouquet-leaves leaf-two" />
      <div className="bouquet-wrap wrap-back" />
      <div className="bouquet-wrap wrap-left" />
      <div className="bouquet-wrap wrap-right" />
      <div className="bouquet-ribbon" />
      <span className="art-sparkle sparkle-a">✧</span>
      <span className="art-sparkle sparkle-b">✧</span>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [name, setName] = useState("");
  const [occasion, setOccasion] = useState("");
  const [quantity, setQuantity] = useState("");
  const [date, setDate] = useState("");
  const [fulfillment, setFulfillment] = useState("");
  const [details, setDetails] = useState("");
  const [prepared, setPrepared] = useState(false);
  const [copied, setCopied] = useState(false);

  const message = [
    "Hi Ramos Para Ti 214! I'd like to enquire about a bouquet.",
    "",
    `Name: ${name}`,
    `Occasion: ${occasion || "Not specified"}`,
    `Rose count / size: ${quantity || "Please advise"}`,
    `Preferred date: ${date || "Flexible"}`,
    `Pickup or delivery: ${fulfillment || "Please advise"}`,
    `Design details: ${details || "Open to suggestions"}`,
    "",
    "Could you confirm availability, options, pricing, and next steps?",
  ].join("\n");

  function submitEnquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPrepared(true);
    setCopied(false);
  }

  async function copyEnquiry() {
    try {
      await navigator.clipboard.writeText(message);
      setCopied(true);
    } catch {
      const field = document.getElementById("prepared-enquiry") as
        | HTMLTextAreaElement
        | null;
      field?.focus();
      field?.select();
    }
  }

  return (
    <>
      <div className="concept-notice">
        INDEPENDENT WEBSITE CONCEPT · NOT THE OFFICIAL RAMOS PARA TI 214 WEBSITE
      </div>

      <header className="header">
        <a href="#home" className="logo" aria-label="Ramos Para Ti 214 home">
          <span className="logo-mark">✿</span>
          <span>ramos <i>para ti</i><small>214</small></span>
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#collections">Collections</a>
          <a href="#story">Our Story</a>
          <a href="#how-it-works">How to Order</a>
        </nav>

        <a href="#order" className="header-button">
          ORDER ENQUIRY <span>↗</span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </header>

      <nav
        id="mobile-menu"
        className={`mobile-menu ${menuOpen ? "is-open" : ""}`}
        aria-label="Mobile navigation"
        inert={!menuOpen}
      >
        {[
          ["Collections", "#collections"],
          ["Our Story", "#story"],
          ["How to Order", "#how-it-works"],
          ["Order Enquiry", "#order"],
        ].map(([label, href]) => (
          <a
            href={href}
            key={href}
            onClick={() => setMenuOpen(false)}
          >
            {label} <span>↗</span>
          </a>
        ))}
      </nav>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="eyebrow-line" />
              FORNEY, TEXAS · DALLAS AREA
            </div>

            <h1>
              Flowers that
              <br />
              <em>say it all.</em>
            </h1>

            <p className="hero-description">
              Some feelings deserve more than words. Celebrate love,
              friendship, and life&apos;s unforgettable moments with a
              beautiful rose bouquet.
            </p>

            <div className="hero-buttons">
              <a href="#order" className="button button-dark">
                ENQUIRE ABOUT A BOUQUET <span>↗</span>
              </a>
              <a href="#collections" className="inline-link">
                EXPLORE THE COLLECTIONS ↓
              </a>
            </div>

            <div className="hero-bottom">
              <span className="hero-flower">✳</span>
              <div>
                <strong>MADE FOR THE MOMENT</strong>
                <small>Rose bouquets & custom floral enquiries</small>
              </div>
            </div>
          </div>

          <div className="hero-art-panel">
            <div className="hero-art-circle" />
            <span className="vertical-caption">A LITTLE LOVE, WRAPPED BEAUTIFULLY</span>
            <BouquetArt />
            <div className="hero-stamp">
              <span>FROM THE HEART</span>
              <strong>para ti.</strong>
              <span>✿</span>
            </div>
            <div className="hero-art-bottom">THE ART OF GIVING FLOWERS · 214</div>
          </div>
        </section>

        <div className="ticker">
          <span>FLOWERS FOR EVERY FEELING</span>
          <b>✿</b>
          <span>MADE TO CELEBRATE</span>
          <b>✿</b>
          <span>FROM THE HEART</span>
          <b>✿</b>
          <span>FLOWERS FOR EVERY FEELING</span>
        </div>

        <section className="intro section-space" id="story">
          <div className="section-label">01 / THE BEAUTY OF FLOWERS</div>
          <div className="intro-grid">
            <div>
              <span className="overline">MORE THAN A BOUQUET</span>
              <h2>
                A thoughtful gesture.
                <br />
                <em>A lasting feeling.</em>
              </h2>
            </div>
            <div className="intro-text">
              <p>
                A bouquet can turn an ordinary day into a memory.
                From romantic surprises to birthday celebrations,
                flowers help you say what matters most.
              </p>
              <p>
                Explore bouquet inspiration and reach out to
                Ramos Para Ti 214 directly to discuss your vision.
              </p>
              <a href={instagram} target="_blank" rel="noopener noreferrer" className="text-underline">
                SEE THE REAL BOUQUETS ON INSTAGRAM ↗
              </a>
            </div>
          </div>
        </section>

        <section className="collections section-space" id="collections">
          <div className="section-label">02 / BOUQUET INSPIRATION</div>
          <div className="collections-heading">
            <div>
              <span className="overline">EVERY OCCASION DESERVES FLOWERS</span>
              <h2>
                Pick a feeling.
                <br />
                <em>Make it memorable.</em>
              </h2>
            </div>
            <p>
              A little inspiration for your next bouquet.
              Discuss designs, rose counts, colors, and pricing
              directly with the florist.
            </p>
          </div>

          <div className="collection-grid">
            {collections.map((item) => (
              <article className="collection-card" key={item.number}>
                <div className={`collection-visual ${item.tone}`}>
                  <span className="collection-number">{item.number} / 03</span>
                  <div className="collection-flower">
                    <span>{item.flower}</span>
                  </div>
                  <span className="collection-art-caption">
                    WITH LOVE, ALWAYS
                  </span>
                </div>
                <div className="collection-details">
                  <h3>{item.title}</h3>
                  <p>{item.subtitle}</p>
                  <a href="#order">
                    ENQUIRE ABOUT THIS STYLE <span>↗</span>
                  </a>
                </div>
              </article>
            ))}
          </div>

          <p className="collection-disclaimer">
            Collection names and artwork are illustrative website concepts,
            not verified products or photographs from Ramos Para Ti 214.
          </p>
        </section>

        <section className="statement">
          <div className="statement-art">
            <span className="statement-arch" />
            <span className="statement-flower">✿</span>
            <span className="statement-small">A BEAUTIFUL WAY TO SAY</span>
            <span className="statement-script">I love you.</span>
          </div>
          <div className="statement-copy">
            <span className="overline">A MOMENT WORTH REMEMBERING</span>
            <h2>
              Big love.
              <br />
              <em>Beautiful flowers.</em>
            </h2>
            <p>
              Whether it&apos;s a special date, a heartfelt thank-you,
              or simply a surprise, the right bouquet can make
              the moment feel extraordinary.
            </p>
            <a href="#order" className="button button-cream">
              PLAN YOUR BOUQUET <span>↗</span>
            </a>
          </div>
        </section>

        <section className="occasions section-space">
          <div className="section-label">03 / CELEBRATE EVERY MOMENT</div>
          <div className="occasions-heading">
            <span className="overline">SOMETHING FOR EVERY REASON</span>
            <h2>
              There&apos;s always a reason
              <br />
              <em>to send flowers.</em>
            </h2>
          </div>
          <div className="occasion-grid">
            {[
              ["01", "Anniversaries", "For the love that keeps growing."],
              ["02", "Birthdays", "Make their day bloom."],
              ["03", "Just Because", "The sweetest surprises need no reason."],
              ["04", "Special Moments", "Celebrate something unforgettable."],
            ].map(([number, title, description]) => (
              <a href="#order" className="occasion-item" key={number}>
                <span>{number}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
                <strong>↗</strong>
              </a>
            ))}
          </div>
        </section>

        <section className="steps section-space" id="how-it-works">
          <div className="section-label">04 / YOUR FLOWER ENQUIRY</div>
          <div className="steps-heading">
            <span className="overline">LET'S MAKE IT SPECIAL</span>
            <h2>
              Your bouquet,
              <br />
              <em>your way.</em>
            </h2>
          </div>

          <div className="steps-grid">
            <article>
              <span className="step-index">01</span>
              <span className="step-symbol">✿</span>
              <h3>Find your inspiration.</h3>
              <p>
                Browse the florist&apos;s Instagram for real bouquet
                designs, colors, and rose arrangements.
              </p>
            </article>
            <article>
              <span className="step-index">02</span>
              <span className="step-symbol">✎</span>
              <h3>Share your idea.</h3>
              <p>
                Tell the florist about your occasion, preferred
                date, rose count, and any design requests.
              </p>
            </article>
            <article>
              <span className="step-index">03</span>
              <span className="step-symbol">♡</span>
              <h3>Confirm the details.</h3>
              <p>
                Discuss availability, pickup or delivery,
                final pricing, and payment directly with the business.
              </p>
            </article>
          </div>
        </section>

        <section className="order section-space" id="order">
          <div className="section-label">05 / START YOUR BOUQUET ENQUIRY</div>
          <div className="order-grid">
            <div className="order-intro">
              <span className="overline">SOMETHING BEAUTIFUL STARTS HERE</span>
              <h2>
                Let&apos;s make
                <br />
                someone&apos;s
                <br />
                <em>day.</em>
              </h2>
              <p>
                Have an occasion coming up? Prepare your bouquet
                enquiry and send it directly to Ramos Para Ti 214
                through Instagram.
              </p>
              <div className="order-contact">
                <span>CONNECT WITH THE FLORIST</span>
                <a href={instagram} target="_blank" rel="noopener noreferrer">
                  @ramosparati214 ↗
                </a>
                <small>FORNEY, TX · DALLAS AREA</small>
              </div>
              <div className="order-watermark">✿</div>
            </div>

            <div className="form-card">
              <div className="form-card-header">
                <span>YOUR BOUQUET ENQUIRY</span>
                <span>♡</span>
              </div>

              <form onSubmit={submitEnquiry}>
                <label>
                  YOUR NAME *
                  <input
                    required
                    maxLength={100}
                    placeholder="Your name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                  />
                </label>

                <div className="form-row">
                  <label>
                    OCCASION
                    <select
                      value={occasion}
                      onChange={(event) => setOccasion(event.target.value)}
                    >
                      <option value="">Select occasion</option>
                      <option>Birthday</option>
                      <option>Anniversary</option>
                      <option>Romantic surprise</option>
                      <option>Just because</option>
                      <option>Other</option>
                    </select>
                  </label>
                  <label>
                    ROSE COUNT / SIZE
                    <select
                      value={quantity}
                      onChange={(event) => setQuantity(event.target.value)}
                    >
                      <option value="">Select preference</option>
                      <option>25 roses</option>
                      <option>50 roses</option>
                      <option>100 roses</option>
                      <option>Custom / unsure</option>
                    </select>
                  </label>
                </div>

                <div className="form-row">
                  <label>
                    PREFERRED DATE
                    <input
                      type="date"
                      value={date}
                      onChange={(event) => setDate(event.target.value)}
                    />
                  </label>
                  <label>
                    PICKUP OR DELIVERY?
                    <select
                      value={fulfillment}
                      onChange={(event) => setFulfillment(event.target.value)}
                    >
                      <option value="">Select preference</option>
                      <option>Pickup enquiry</option>
                      <option>Delivery enquiry</option>
                      <option>Not sure yet</option>
                    </select>
                  </label>
                </div>

                <label>
                  TELL US ABOUT YOUR DREAM BOUQUET *
                  <textarea
                    required
                    maxLength={1200}
                    rows={5}
                    placeholder="Preferred colors, inspiration, message, budget, or other details..."
                    value={details}
                    onChange={(event) => setDetails(event.target.value)}
                  />
                </label>

                <button className="button button-dark form-submit" type="submit">
                  PREPARE MY ENQUIRY <span>↗</span>
                </button>

                <p className="form-note">
                  This concept website does not send or store orders.
                  You can copy your message and contact the florist directly.
                  Availability and pricing must be confirmed.
                </p>
              </form>

              {prepared && (
                <div className="prepared" role="status">
                  <h3>Your message is ready ♡</h3>
                  <p>
                    Copy the message below, open Instagram,
                    and paste it into a DM to the florist.
                  </p>
                  <textarea
                    id="prepared-enquiry"
                    aria-label="Prepared bouquet enquiry"
                    readOnly
                    rows={11}
                    value={message}
                  />
                  <div className="prepared-actions">
                    <button type="button" onClick={copyEnquiry}>
                      {copied ? "✓ COPIED" : "COPY MESSAGE"}
                    </button>
                    <a href={instagram} target="_blank" rel="noopener noreferrer">
                      OPEN INSTAGRAM ↗
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="closing">
          <span className="closing-flower">✿</span>
          <span className="overline">MADE FOR THE PEOPLE YOU LOVE</span>
          <h2>
            Say it with
            <br />
            <em>flowers.</em>
          </h2>
          <a href="#order" className="button button-cream">
            ENQUIRE ABOUT A BOUQUET <span>↗</span>
          </a>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-top">
          <div>
            <a href="#home" className="logo footer-logo">
              <span className="logo-mark">✿</span>
              <span>ramos <i>para ti</i><small>214</small></span>
            </a>
            <p>Beautiful gestures, made from the heart.</p>
          </div>
          <div className="footer-links">
            <a href="#collections">COLLECTIONS</a>
            <a href="#story">ABOUT</a>
            <a href="#how-it-works">HOW TO ORDER</a>
            <a href="#order">ENQUIRE</a>
          </div>
          <div className="footer-links">
            <a href={instagram} target="_blank" rel="noopener noreferrer">
              INSTAGRAM ↗
            </a>
            <a href="#home">BACK TO TOP ↑</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 RAMOS PARA TI 214 · WEBSITE CONCEPT</span>
          <span>INDEPENDENT DEMO · NOT AFFILIATED WITH THE BUSINESS</span>
        </div>
      </footer>

      <a href="#order" className="mobile-order-button">
        ENQUIRE ABOUT A BOUQUET <span>↗</span>
      </a>
    </>
  );
}
