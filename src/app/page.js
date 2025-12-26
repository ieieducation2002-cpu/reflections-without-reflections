import Image from "next/image";
import SeamlessVideo from "../components/SeamlessVideo";

export default function Home() {
  return (
    <>
      {/* Background */}
      <div className="background-container">
        <SeamlessVideo />
        <div className="background-overlay" />
      </div>

      {/* Floating Particles */}
      <div className="particles">
        <div className="particle" />
        <div className="particle" />
        <div className="particle" />
        <div className="particle" />
        <div className="particle" />
        <div className="particle" />
        <div className="particle" />
        <div className="particle" />
      </div>

      {/* Main Content */}
      <main className="main-container">
        <div className="content">

          {/* Lotus Icon with Glow Effects */}
          {/* Lotus Icon with Glow Effects */}
          <div className="lotus-wrapper">
            <div className="lotus-glow" />
            <div className="lotus-ring" />
            <div className="lotus-ring" />
            <div className="lotus-ring" />
            <div className="lotus-container">
              <span className="lotus-icon">🪷</span>
            </div>
          </div>

          {/* Title Section */}
          <div className="title-section">
            <h1 className="title-english">Reflections without Reflections</h1>
            <p className="title-sinhala">කමටහන් නොවන කමටහන්</p>
          </div>


          {/* Quote Cards */}
          <div className="quotes-container">
            {/* Sinhala Quote */}
            <div className="quote-card">
              <span className="quote-mark open">&ldquo;</span>
              <span className="quote-mark close">&rdquo;</span>
              <div className="quote-content">
                <p className="quote-text-sinhala">
                  මම ඔබට පැන්සලක් සහ<br />
                  හිස් පිටු කිහිපයක් දී ඇත.<br />
                  පොත ලියා ගත යුත්තේ ඔබ විසින්මය.
                </p>
                <div className="quote-attribution">
                  <div className="attribution-line" />
                  <span className="quote-author">බණ්ඩාරවෙල වංගීස හිමි</span>
                  <div className="attribution-line" />
                </div>
              </div>
            </div>

            {/* English Quote */}
            <div className="quote-card">
              <span className="quote-mark open">&ldquo;</span>
              <span className="quote-mark close">&rdquo;</span>
              <div className="quote-content-2">
                <p className="quote-text-english">
                  I&apos;ve given you a pencil and blank pages.<br />
                  The book must be written by yourself.
                </p>
                <div className="quote-attribution">
                  <div className="attribution-line" />
                  <span className="quote-author-english">Bandarawela Wangeesa Thero</span>
                  <div className="attribution-line" />
                </div>
              </div>
            </div>
          </div>


        </div>
      </main>
    </>
  );
}
