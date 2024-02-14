import React, { useEffect, useState } from "react";
import CardsBooks from "../BooksCard/CardsBook";
import { nanoid } from "nanoid";

const Main = () => {
  const [dataBooks, setDataBooks] = useState([]);
  const [errorBooks, setErrorBooks] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  console.log(dataBooks);

  const getBooks = async () => {
    setLoading(true);
    try {
      const resp = await fetch("https://epibooks.onrender.com/");
      const data = await resp.json();
      setDataBooks(data.slice(0, 10));
      setLoading(false);
    } catch (e) {
      setErrorBooks(e.message);
    }
  };

  useEffect(() => {
    getBooks();
  }, []);

  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredBooks = dataBooks.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="container">
      <div className="row">
        <div className="col">
          {errorBooks && <div>qualcosa non va...</div>}

          {loading && !errorBooks && (
            <div className="fw-bold">Caricamento in corso...</div>
          )}

          {!loading && !errorBooks && (
            <div>
              <input
                type="text"
                placeholder="Cerca per titolo..."
                value={searchTerm}
                onChange={handleSearchInputChange}
              />

              <div className="d-flex flex-wrap justify-content-center align-items-center gap-3">
                {filteredBooks.map((book) => (
                  <CardsBooks
                    key={nanoid()}
                    title={book.title}
                    category={book.category}
                    price={book.price}
                    img={book.img}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Main;
