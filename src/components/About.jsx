import React from 'react'
import photoMe from '../assets/photome.png'

const About = () => {
  return (
    <section id="about" className="page-section">
      <div className="about__wrapper">
        <div className="section__header">
          <h1><span>01.</span> Cerita Tentang Aku</h1>
          <div className="line-x"></div>
        </div>
        <div className="about__content">
          <div className="about__text">
            <div className="about__story">
              <p>Jadi, inilah aku. Namaku Fandi dari Indonesia. Suka programming dan desain.</p>
              <p>Aku mengenal programming berawal dari aku di tahun 2013 yang bersekolah di salah satu SMK di kota Malang dan memilih jurusan RPL. Kenapa aku suka programming? Itu karena menurutku programming adalah permainan logika. Setelah mengenal lebih dalam tentang programming, kemudian aku dikenalkan dengan web programming ketika magang di suatu perusahaan. Dan sejak saat itulah aku mengenal HTML, CSS, dan Javascript.</p>
              <p>Seiring berjalannya waktu, aku dipercayakan ikut dalam projek untuk membuat sebuah website ujian untuk sekolahku. Setelah lulus dari sekolah, aku melanjutkan belajar ke universitas di Malang dan mengambil bidang Informatika. Aku mengenal namanya Artificial Intelligence, Machine Learning, dan Data Mining. Menurutku bidang tersebut sangat sulit untuk dipahami, tapi menarik untuk dibahas.</p>
              <p>Sebelum lulus sarjana, aku ikut dalam sebuah lembaga yang mengembangkan aplikasi dan media inovasi yang disruptif. Dan saat ini pun aku membantu pada bagian frontend.</p>
            </div>
          </div>
          <div className="about__photo">
            <div className="about__photo-wrapper">
              <img src={photoMe} alt="M. Fandi Arfabuma" />
              <div className="about__shadow-photo"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About