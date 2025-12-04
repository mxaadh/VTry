import Image from 'next/image'
import '../../assets/AboutPage.css'

export default function AboutPage() {
  return (
    <div className="about-page">
      <div className="founder-section">
        <div className="founder-text">
          <small>BLINGG FOUNDER</small>
          <h2>CLARA BELLANI</h2>
          <p className="subtitle">Jewellery Designer & Creative Director</p>
          <p>
            With over 15 years of experience in luxury jewelry design, Clara Bellani
            founded Blingg to bring timeless elegance to modern fashion. Her passion
            for craftsmanship and attention to detail has made Blingg a trusted name
            in fine jewelry.
          </p>
        </div>
        <div className="founder-image">
          <Image
            src="/images/pexels-photo-1130626.jpeg"
            alt="Founder"
            width={250}
            height={250}
            className="rounded"
          />
        </div>
      </div>

      <div className="started-section">
        <div className="started-image">
          <Image
            src="/images/pexels-photo-1108099.jpeg"
            alt="Jewelry Design"
            width={1200}
            height={400}
            className="rounded"
          />
        </div>

        <div className="started-content">
          <div className="started-title">
            <small>THE BEGINNING</small>
            <h2>HOW WE STARTED</h2>
          </div>

          <div className="started-text">
            <h4>Our Journey</h4>
            <p>
              Blingg began as a small workshop in 2008, where Clara Bellani crafted
              custom pieces for select clientele. Her unique approach to combining
              traditional techniques with contemporary designs quickly gained
              recognition.
            </p>
            <p>
              Today, Blingg has grown into an internationally recognized brand,
              while maintaining the same dedication to quality and artistry that
              defined our earliest creations. Each piece is still carefully
              crafted to ensure it meets our exacting standards.
            </p>
            <p>
              <b>Our mission remains simple:</b> to create jewelry that tells a
              story and becomes a cherished part of your life's most precious moments.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
