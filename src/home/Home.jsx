import "./Home.css";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Home() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/books")
      .then(res => res.json())
      .then(data => setBooks(data));
  }, []);

  const getBookById = (id) => {
  return books.find(book => book.bookId === id);
  };
  
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

  <div className="tabs">
    <div className="tab active">Light Novel</div>
    <div className="tab">Manga</div>
  </div>

  <section className="book-section">
    <div className="section-header">
      <span>ยอดนิยม</span>
      <span>ดูทั้งหมด</span>
    </div>

    <div className="book-grid">
      <div className="book-card">
        <img src="/book1.jpg" alt="" />
        <p>{getBookById(1)?.title}</p>
      </div>
      <Link to="/book/2" className="book-card">
        <img src="/book2.jpg" alt="" />
        <p>{getBookById(2)?.title}</p>
      </Link>
      <div className="book-card">
        <img src="/book3.jpg" alt="" />
        <p>{getBookById(3)?.title}</p>
      </div>
      <div className="book-card">
        <img src="/book4.jpg" alt="" />
        <p>{getBookById(4)?.title}</p>
      </div>
      <div className="book-card">
        <img src="/book5.jpg" alt="" />
        <p>{getBookById(5)?.title}</p>
      </div>
    </div>
  </section>

  <section className="book-section">
    <div className="section-header">
      <span>โรแมนติก</span>
      <span>ดูทั้งหมด</span>
    </div>

    <div className="book-grid">
      <div className="book-card">
        <img src="/book2.jpg" alt="" />
        <p>{getBookById(2)?.title}</p>
      </div>
      <div className="book-card">
        <img src="/book6.jpg" alt="" />
        <p>{getBookById(6)?.title}</p>
      </div>
      <div className="book-card">
        <img src="/book1.jpg" alt="" />
        <p>{getBookById(1)?.title}</p>
      </div>
      <div className="book-card">
        <img src="/book7.jpg" alt="" />
        <p>{getBookById(7)?.title}</p>
      </div>
      <div className="book-card">
        <img src="/book8.jpg" alt="" />
        <p>{getBookById(8)?.title}</p>
      </div>
    </div>
  </section>

</main>

    </div>
  );
}

export default Home;
