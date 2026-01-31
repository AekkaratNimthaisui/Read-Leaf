import "./Home.css";
import Header from "../components/Header";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="page">
      <Header />

      <div className="top-controls">
        <button className="hamburger">☰</button>

        <div className="search-bar">
          <input type="text" placeholder="" />
          <button>🔍</button>
        </div>
      </div>

      <main className="home-main">

  {/* Tabs */}
  <div className="tabs">
    <div className="tab active">Light Novel</div>
    <div className="tab">Manga</div>
  </div>

  {/* ===== ยอดนิยม ===== */}
  <section className="book-section">
    <div className="section-header">
      <span>ยอดนิยม</span>
      <span>ดูทั้งหมด</span>
    </div>

    <div className="book-grid">
      <div className="book-card">
        <img src="/book1.jpg" alt="" />
        <p>คุณอาเรียโต๊ะข้างๆ พูดรัสเซียหวานใส่ซะหัวใจจะวาย</p>
      </div>
      <Link to="/book/2" className="book-card">
        <img src="/book2.jpg" alt="" />
        <p>ขาดคุณนางฟ้าข้างห้องไป</p>
      </Link>
      <div className="book-card">
        <img src="/book3.jpg" alt="" />
        <p>Re:ZERO รีเซทชีวิต ฝ่าวิกฤตต่างโลก</p>
      </div>
      <div className="book-card">
        <img src="/book4.jpg" alt="" />
        <p>86-เอทตี้ซิกซ์-</p>
      </div>
      <div className="book-card">
        <img src="/book5.jpg" alt="" />
        <p>มุมมองนักอ่านพระเจ้า</p>
      </div>
    </div>
  </section>

  {/* ===== โรแมนติก ===== */}
  <section className="book-section">
    <div className="section-header">
      <span>โรแมนติก</span>
      <span>ดูทั้งหมด</span>
    </div>

    <div className="book-grid">
      <div className="book-card">
        <img src="/book2.jpg" alt="" />
        <p> ขาดคุณนางฟ้าข้างห้องไป ผมคงมีชีวิตต่อไปไม่ได้อีกแล้ว</p>
      </div>
      <div className="book-card">
        <img src="/book6.jpg" alt="" />
        <p> อันเนมด์ เมโมรี</p>
      </div>
      <div className="book-card">
        <img src="/book1.jpg" alt="" />
        <p> คุณอาเรียโต๊ะข้างๆ พูดรัสเซียหวานใส่ซะหัวใจจะวาย</p>
      </div>
      <div className="book-card">
        <img src="/book7.jpg" alt="" />
        <p> โจเซ่ กับเสือและหมู่ปลา</p>
      </div>
      <div className="book-card">
        <img src="/book8.jpg" alt="" />
        <p>มันผิดรึไงถ้าใจอยากจะพบรักในดันเจี้ยน</p>
      </div>
    </div>
  </section>

</main>

    </div>
  );
}

export default Home;
