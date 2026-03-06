import "./BookDetail.css";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function BookDetail() {
  const { id } = useParams();   
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8080/books/${id}`)
      .then(res => res.json())
      .then(data => setBook(data));
  }, [id]);

  if (!book) return <div>Loading...</div>;
  return (
    <div className="page">
      <Header />

      <div className="detail-top">
        <div className="detail-left-top">
            <button className="hamburger">☰</button>
            <Link to="/" className="home-link">Home</Link>
        </div>

        <div className="search-bar">
            <input type="text" />
            <button>🔍</button>
        </div>
       </div>



      <main className="detail-main">

        <div className="detail-left">
          <div className="book-summary">
            <img src="/book2.jpg" alt="" />

            <div className="summary-text">
              <h2>{book.title}</h2>
              <p>สำนักพิมพ์ Animag</p>
              <p>หมวดหมู่ Light novel</p>
            </div>
          </div>

          <p className="description">
            คนข้างห้องในแมนชั่นที่ฟุจิมิยะอามาเนะอาศัยอยู่ตอนนี้คือสาวงามอันดับหนึ่งของโรงเรียนชิอินะมาฮิรุพวกเขาทั้งสองไม่มีความเกี่ยวข้องอะไรกันเลยแต่นับจากวันที่เขายื่นร่มให้เธอซึ่งเปียกปอนจากสายฝนความสัมพันธ์ที่ไม่มีชื่อเรียกก็เริ่มต้นขึ้นมาฮิรุคอยมาทำอาหารและช่วยดูแลเรื่องต่างๆโดยไม่สามารถวางใจให้อามาเนะใช้ชีวิตเรื่อยเปื่อยตามลำพังเธอและเขาต่าง
            ค่อยๆเปิดใจให้แก่กันแม้จะไม่ใช่หนทางที่ซื่อตรงนักแต่ระยะห่างของทั้งสองก็ค่อยๆ ลดลงทีละน้อย
          </p>

          <p className="highlight">
            เรื่องราวความรักแสนหวานกับคนข้างห้องสุดน่ารักที่ชวนให้ใจเต้นตึกตึก
          </p>
        </div>

        <div className="detail-right">
          <h3>รายละเอียด</h3>
          <p>ราคา {book.price} บาท</p>
          <p>น้ำหนัก {book.weight} กรัม</p>
          <p>ผู้เขียน {book.author}</p>
          <p>ผู้วาดภาพประกอบ ฮาเนะโคโตะ</p>
          <p>ผู้แปล ชัยพฤกษ์ วุฒิบุญวัฒนา</p>
          <p>วันที่วางจำหน่ายตุลาคม 2564</p>
        </div>

      </main>
    </div>
  );
}

export default BookDetail;
