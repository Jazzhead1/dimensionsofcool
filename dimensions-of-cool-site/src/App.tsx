import React, { useState } from "react";

export default function App() {
  const upcomingShows = [
    {
      date: "Fri 27 Mar",
      venue: "The Barrel Inn",
      time: "8:30 PM – 12:00 AM",
      location: "15 Cook Street, Howick",
    },
  ];

  const genres = ["Electronica", "House", "Pop", "Rock", "Reggae", "Dance", "Funk"];

  const featuredSongs = ["Smooth Operator", "Cold Heart", "Dreams", "Valerie"];

  const setlist = [
    "Smooth Operator",
    "Cold Heart",
    "Dreams",
    "In the Air",
    "He’s So Shy",
    "Lady",
    "Don’t Call Me Baby",
    "Master Blaster",
    "In Colour",
    "Everywhere",
    "Valerie",
    "About Damn Time",
    "One Kiss",
    "Flowers",
    "Latch",
    "Titanium",
    "Believe",
    "Get Lucky",
    "Price Tag",
    "Zombie",
    "Dancing in the Moonlight",
    "Thinking About You",
    "Murder on the Dancefloor",
    "Forget You",
    "Starlight",
    "Spinning Around",
    "Love Foolosophy",
    "Stir It Up",
    "Man! I Feel Like a Woman",
    "I Will Survive",
    "I Can’t Go for That",
    "Dancing Queen",
    "Let’s Hear It for the Boy",
    "Houdini",
    "Happy",
    "I’m Outta Love",
    "Personify",
    "Heaven Is a Place",
    "Finally",
    "Listen to the Music",
    "Dance the Night",
    "Wish You Were Here",
    "I Wanna Dance with Somebody",
  ];

  const members = [
    {
      name: "Justin Fukushima",
      role: "Bass / Vocals",
      img: "/images/member1.jpg",
      bio: "Justin is a seasoned musician with over 30 years of experience in the music industry. With a strong background in jazz, he has spent decades gigging and teaching music. He studied at Christchurch Jazz Polytechnic and brings deep groove, musicianship, and leadership to the band.",
    },
    {
      name: "Fonnie Jo",
      role: "Lead Singer",
      img: "/images/member2.jpg",
      bio: "Fonnie Jo is an experienced live performer with many years of gigging behind her. She studied at MAINZ and is currently teaching kapa haka, bringing strength, soul, and cultural richness to the Dimensions of Cool sound.",
    },
    {
      name: "Simon McDowell",
      role: "Drummer",
      img: "/images/member3.jpg",
      bio: "Simon McDowell has more than 20 years of gigging experience and was tutored by Frank Gibson and Paul Russel ( Super Groove, Eight, Midwave Breaks ) Simon delivers precision, energy, and a polished rhythmic backbone that drives the band live.",
    },
    {
      name: "Kat McCormack",
      role: "Lead Vocalist",
      img: "/images/member4.jpg",
      bio: "Kat McCormack is a dynamic lead vocalist with more than 20 years of gigging experience. She is also a radio host on Radio Rhema, bringing professionalism, confidence, and a strong stage presence to every performance.",
    },
    {
      name: "Lisa Tareha",
      role: "Lead Vocalist",
      img: "/images/member5.jpg",
      bio: "Lisa Tareha has a background in classical performing arts, adding elegance, control, and expressive vocal versatility to the band. Her performance style blends technique with warmth and emotion.",
    },
  ];

  const videos = [
    {
      title: "Featured Live Performance",
      subtitle: "Dimensions of Cool on stage",
      embed: "https://www.youtube.com/embed/_dJ9cckK5Jg",
      link: "https://www.youtube.com/watch?v=_dJ9cckK5Jg",
    },
    {
      title: "Live Performance 02",
      subtitle: "Energy, groove, and live feel",
      embed: "https://www.youtube.com/embed/MMXBxaYd8Qw",
      link: "https://www.youtube.com/watch?v=MMXBxaYd8Qw",
    },
    {
      title: "Live Performance 03",
      subtitle: "Modern live electronica and pop",
      embed: "https://www.youtube.com/embed/2c2SAYO203I",
      link: "https://www.youtube.com/watch?v=2c2SAYO203I",
    },
    {
      title: "Live Performance 04",
      subtitle: "More from Dimensions of Cool",
      embed: "https://www.youtube.com/embed/RfxAcSnprZA",
      link: "https://www.youtube.com/watch?v=RfxAcSnprZA",
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    eventType: "",
    eventDate: "",
    venue: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleEnquirySubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Booking Enquiry from ${formData.name || "Website Visitor"}`
    );

    const body = encodeURIComponent(`Hello Dimensions of Cool,

I would like to make a booking enquiry.

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Event Type: ${formData.eventType}
Preferred Date: ${formData.eventDate}
Venue / Location: ${formData.venue}

Message:
${formData.message}

Thank you.`);

    window.location.href = `mailto:dimensionsofcool@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div
      style={{
        background: "#050505",
        color: "white",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <section style={{ padding: "60px 24px", maxWidth: 1200, margin: "0 auto" }}>
        <div style={heroGridStyle}>
          <div>
            <p style={{ color: "#6ee7b7", letterSpacing: 2, textTransform: "uppercase" }}>
              Live Electronica • Auckland
            </p>
            <h1 style={{ fontSize: "56px", margin: "10px 0" }}>Dimensions of Cool</h1>
            <p style={{ color: "#d4d4d8", lineHeight: 1.7 }}>
              Modern live energy with house, dance, pop, rock, reggae, funk, and electronica.
              
            </p>

            <div style={{ display: "flex", gap: 12, marginTop: 24, flexWrap: "wrap" }}>
              <a href="#shows" style={buttonPrimary}>View Shows</a>
              <a href="#videos" style={buttonSecondary}>Watch Videos</a>
              <a href="#contact" style={buttonSecondary}>Book the Band</a>
            </div>

            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 24 }}>
              {genres.map((genre) => (
                <span key={genre} style={tagStyle}>{genre}</span>
              ))}
            </div>
          </div>

          <div style={cardStyle}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              <img src="/images/member1.jpg" alt="Justin Fukushima" style={heroImg} />
              <img src="/images/member2.jpg" alt="Fonnie Jo" style={heroImg} />
              <img src="/images/member3.jpg" alt="Simon McDowell" style={heroImg} />
              <img src="/images/member4.jpg" alt="Kat McCormack" style={heroImg} />
            </div>
            <div style={{ marginTop: 12, textAlign: "center", color: "#a1a1aa" }}>
              Dimensions of Cool Live
            </div>
          </div>
        </div>
      </section>

      <section style={sectionStyle}>
        <h2 style={headingStyle}>About the Band</h2>
        <p style={paragraphStyle}>
          Dimensions of Cool blends live musicianship with a contemporary electronic edge.
          The result is a stylish, crowd-friendly set that moves easily between chilled grooves,
          dancefloor energy, and big singalong moments.
        </p>
        <p style={paragraphStyle}>
          With a versatile song list and experienced performers, the band is ideal for venues,
          private events, corporate functions, and nights that need both sophistication and fun.
        </p>
      </section>

      <section id="shows" style={sectionStyle}>
        <h2 style={headingStyle}>Upcoming Shows</h2>
        {upcomingShows.map((show) => (
          <div key={show.venue} style={listCardStyle}>
            <div>
              <strong>{show.date}</strong>
            </div>
            <div>
              <div>{show.venue}</div>
              <div style={{ color: "#a1a1aa" }}>{show.location}</div>
              <div style={{ color: "#a1a1aa" }}>{show.time}</div>
            </div>
          </div>
        ))}
      </section>

      <section style={sectionStyle}>
        <h2 style={headingStyle}>Featured Songs</h2>
        <div style={grid2Style}>
          {featuredSongs.map((song) => (
            <div key={song} style={listCardStyle}>
              <strong>{song}</strong>
            </div>
          ))}
        </div>
      </section>

      <section style={sectionStyle}>
        <h2 style={headingStyle}>Song Setlist</h2>
        <div style={grid2Style}>
          {setlist.map((song, index) => (
            <div key={`${index}-${song}`} style={listCardStyle}>
              <span>{index + 1}. {song}</span>
            </div>
          ))}
        </div>
      </section>

      <section style={sectionStyle}>
        <h2 style={headingStyle}>Members & Biography</h2>
        <div style={grid3Style}>
          {members.map((member) => (
            <div key={member.name} style={cardStyle}>
              <img
                src={member.img}
                alt={member.name}
                style={{ width: "100%", height: 240, objectFit: "cover", borderRadius: 12 }}
              />
              <h3 style={{ marginTop: 16 }}>{member.name}</h3>
              <div style={{ color: "#6ee7b7", marginBottom: 10 }}>{member.role}</div>
              <p style={{ color: "#a1a1aa", lineHeight: 1.6 }}>{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="videos" style={sectionStyle}>
        <h2 style={headingStyle}>Live Performances</h2>
        <p style={paragraphStyle}>
          Watch Dimensions of Cool live in action.
        </p>

        <div style={featuredVideoCardStyle}>
          <div style={featuredVideoFrameWrapStyle}>
            <iframe
              width="100%"
              height="100%"
              src={videos[0].embed}
              title={videos[0].title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              style={featuredIframeStyle}
            ></iframe>
          </div>

          <div style={featuredVideoContentStyle}>
            <p style={{ color: "#6ee7b7", letterSpacing: 2, textTransform: "uppercase" }}>
              Featured Video
            </p>
            <h3 style={{ fontSize: "30px", margin: "8px 0 12px" }}>{videos[0].title}</h3>
            <p style={{ color: "#cbd5e1", lineHeight: 1.8, marginBottom: 22 }}>
              A featured look at the live performance energy of Dimensions of Cool.
            </p>

            <a
              href={videos[0].link}
              target="_blank"
              rel="noreferrer"
              style={buttonPrimary}
            >
              Watch on YouTube
            </a>
          </div>
        </div>

        <div style={videoGridStyle}>
          {videos.slice(1).map((video) => (
            <div key={video.title} style={videoCardStyle}>
              <div style={videoFrameWrapStyle}>
                <iframe
                  width="100%"
                  height="100%"
                  src={video.embed}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  style={videoIframeStyle}
                ></iframe>
              </div>

              <div style={{ paddingTop: 16 }}>
                <h3 style={{ margin: "0 0 8px", fontSize: "20px" }}>{video.title}</h3>
                <p style={{ color: "#a1a1aa", lineHeight: 1.7, marginBottom: 16 }}>
                  {video.subtitle}
                </p>
                <a
                  href={video.link}
                  target="_blank"
                  rel="noreferrer"
                  style={videoLinkStyle}
                >
                  Open on YouTube →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" style={sectionStyle}>
        <h2 style={headingStyle}>Book Dimensions of Cool</h2>
        <p style={paragraphStyle}>
          Available for bars, venues, private events, corporate functions, weddings, and special nights.
        </p>

        <div style={contactGridStyle}>
          <div style={cardStyle}>
            <h3 style={{ marginTop: 0, marginBottom: 18 }}>Booking Enquiry</h3>

            <form onSubmit={handleEnquirySubmit}>
              <div style={formGridStyle}>
                <div>
                  <label style={labelStyle}>Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    style={inputStyle}
                    required
                  />
                </div>

                <div>
                  <label style={labelStyle}>Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your phone number"
                    style={inputStyle}
                    required
                  />
                </div>

                <div>
                  <label style={labelStyle}>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email address"
                    style={inputStyle}
                    required
                  />
                </div>

                <div>
                  <label style={labelStyle}>Event Type</label>
                  <input
                    type="text"
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    placeholder="Wedding, private party, venue, corporate event..."
                    style={inputStyle}
                  />
                </div>

                <div>
                  <label style={labelStyle}>Preferred Date</label>
                  <input
                    type="text"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleChange}
                    placeholder="Event date"
                    style={inputStyle}
                  />
                </div>

                <div>
                  <label style={labelStyle}>Venue / Location</label>
                  <input
                    type="text"
                    name="venue"
                    value={formData.venue}
                    onChange={handleChange}
                    placeholder="Venue or suburb"
                    style={inputStyle}
                  />
                </div>
              </div>

              <div style={{ marginTop: 16 }}>
                <label style={labelStyle}>Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your event, times, vibe, and any special requests..."
                  style={textareaStyle}
                  required
                />
              </div>

              <button
                type="submit"
                style={{
                  ...buttonPrimary,
                  border: "none",
                  cursor: "pointer",
                  marginTop: 18,
                }}
              >
                Send Booking Enquiry
              </button>
            </form>
          </div>

          <div style={cardStyle}>
            <h3 style={{ marginTop: 0, marginBottom: 18 }}>Direct Contact</h3>

            <div style={contactInfoBlock}>
              <div style={contactLabelStyle}>Email</div>
              <a href="mailto:dimensionsofcool@gmail.com" style={contactLinkStyle}>
                dimensionsofcool@gmail.com
              </a>
            </div>

            <div style={contactInfoBlock}>
              <div style={contactLabelStyle}>Phone</div>
              <a href="tel:0226135608" style={contactLinkStyle}>
                0226135608
              </a>
            </div>

            <div style={contactInfoBlock}>
              <div style={contactLabelStyle}>Contact Person</div>
              <div style={{ color: "#ffffff", fontSize: 18 }}>Justin</div>
            </div>

            <p style={{ color: "#a1a1aa", lineHeight: 1.7, marginTop: 24 }}>
              For bookings and availability, contact Justin directly by phone or email.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

const sectionStyle: React.CSSProperties = {
  maxWidth: 1200,
  margin: "0 auto",
  padding: "30px 24px 60px",
};

const headingStyle: React.CSSProperties = {
  fontSize: "36px",
  marginBottom: 20,
};

const paragraphStyle: React.CSSProperties = {
  color: "#d4d4d8",
  lineHeight: 1.8,
  maxWidth: 900,
};

const cardStyle: React.CSSProperties = {
  border: "1px solid rgba(255,255,255,0.1)",
  background: "rgba(255,255,255,0.04)",
  borderRadius: 24,
  padding: 20,
};

const listCardStyle: React.CSSProperties = {
  border: "1px solid rgba(255,255,255,0.1)",
  background: "#111111",
  borderRadius: 18,
  padding: 18,
  marginBottom: 16,
};

const tagStyle: React.CSSProperties = {
  border: "1px solid rgba(255,255,255,0.1)",
  background: "rgba(255,255,255,0.05)",
  padding: "8px 14px",
  borderRadius: 999,
  fontSize: 14,
};

const buttonPrimary: React.CSSProperties = {
  background: "#34d399",
  color: "black",
  padding: "12px 18px",
  borderRadius: 16,
  textDecoration: "none",
  fontWeight: 700,
};

const buttonSecondary: React.CSSProperties = {
  border: "1px solid rgba(255,255,255,0.2)",
  background: "rgba(255,255,255,0.05)",
  color: "white",
  padding: "12px 18px",
  borderRadius: 16,
  textDecoration: "none",
  fontWeight: 700,
};

const heroImg: React.CSSProperties = {
  width: "100%",
  height: 160,
  objectFit: "cover",
  borderRadius: 12,
};

const grid2Style: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: 16,
};

const grid3Style: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
  gap: 20,
};

const heroGridStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
  gap: 40,
  alignItems: "center",
};

const contactGridStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
  gap: 24,
  alignItems: "start",
  marginTop: 24,
};

const formGridStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: 16,
};

const labelStyle: React.CSSProperties = {
  display: "block",
  marginBottom: 8,
  color: "#e4e4e7",
  fontSize: 14,
  fontWeight: 600,
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "14px 16px",
  borderRadius: 14,
  border: "1px solid rgba(255,255,255,0.12)",
  background: "#0f0f10",
  color: "white",
  outline: "none",
  fontSize: 15,
  boxSizing: "border-box",
};

const textareaStyle: React.CSSProperties = {
  width: "100%",
  minHeight: 150,
  padding: "14px 16px",
  borderRadius: 14,
  border: "1px solid rgba(255,255,255,0.12)",
  background: "#0f0f10",
  color: "white",
  outline: "none",
  fontSize: 15,
  resize: "vertical",
  fontFamily: "Arial, sans-serif",
  boxSizing: "border-box",
};

const contactInfoBlock: React.CSSProperties = {
  marginBottom: 20,
  paddingBottom: 16,
  borderBottom: "1px solid rgba(255,255,255,0.08)",
};

const contactLabelStyle: React.CSSProperties = {
  color: "#6ee7b7",
  fontSize: 13,
  textTransform: "uppercase",
  letterSpacing: 1.2,
  marginBottom: 8,
};

const contactLinkStyle: React.CSSProperties = {
  color: "#ffffff",
  textDecoration: "none",
  fontSize: 18,
};

const featuredVideoCardStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
  gap: 24,
  border: "1px solid rgba(255,255,255,0.1)",
  background:
    "linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03))",
  borderRadius: 28,
  padding: 20,
  marginBottom: 28,
  boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
};

const featuredVideoFrameWrapStyle: React.CSSProperties = {
  position: "relative",
  width: "100%",
  paddingTop: "56.25%",
  borderRadius: 20,
  overflow: "hidden",
  background: "#000",
};

const featuredIframeStyle: React.CSSProperties = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  border: "none",
  borderRadius: 20,
};

const featuredVideoContentStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
};

const videoGridStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: 22,
};

const videoCardStyle: React.CSSProperties = {
  border: "1px solid rgba(255,255,255,0.08)",
  background: "rgba(255,255,255,0.04)",
  borderRadius: 24,
  padding: 16,
  boxShadow: "0 10px 35px rgba(0,0,0,0.25)",
};

const videoFrameWrapStyle: React.CSSProperties = {
  position: "relative",
  width: "100%",
  paddingTop: "56.25%",
  borderRadius: 18,
  overflow: "hidden",
  background: "#000",
};

const videoIframeStyle: React.CSSProperties = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  border: "none",
  borderRadius: 18,
};

const videoLinkStyle: React.CSSProperties = {
  color: "#6ee7b7",
  textDecoration: "none",
  fontWeight: 700,
  letterSpacing: 0.3,
};