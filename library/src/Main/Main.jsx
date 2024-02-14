import { useEffect, useState } from "react";
import CardsBooks from "../BooksCard/CardsBook";

const Main = () => {
  const [dataBooks, setDataBooks] = useState([]);
  console.log(dataBooks);

  const getBooks = async () => {
    try {
      const resp = await fetch("https://epibooks.onrender.com/");
      const data = await resp.json();
      setDataBooks(data);
      setDataBooks(dataBooks.slice(0, 10));
    } catch (e) {
      console.error(e, "errore");
    }
  };

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <main className="container">
      <div className="row">
        <div className="col-6 ">
          <div className="d-flex flex-column gap-3">
            {dataBooks.map((book) => {
              return (
                <CardsBooks
                  title={book.title}
                  category={book.category}
                  price={book.price}
                  img={book.img}
                />
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
};
export default Main;
