import { BsChevronLeft } from "react-icons/bs";

interface IPages {
  pages: number;
  totalPages: number;
  setPages: React.Dispatch<React.SetStateAction<number>>;
}

const Pagination = ({ pages, totalPages, setPages }: IPages) => {
  const maxVisiblePages = 5;
  const halfVisiblePages = Math.floor(maxVisiblePages / 2);

  const startPage = Math.max(
    Math.min(pages - halfVisiblePages, totalPages - maxVisiblePages + 1),
    1
  );
  const endPage = Math.min(startPage + maxVisiblePages - 1, totalPages);

  const arrayPages = Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i
  );

  const prevPage = () => {
    if (pages - 1 < 1) return;
    setPages(pages - 1);
  };

  const nextPage = () => {
    if (pages + 1 > totalPages) return;
    setPages(pages + 1);
  };

  return (
    <section className="pagination">
      <button disabled={pages - 1 < 1} onClick={prevPage}>
        <BsChevronLeft />
      </button>
      {arrayPages.map((page) => (
        <button
          className={page === pages ? "text-yellow-300" : ""}
          key={page}
          onClick={() => setPages(page)}
          disabled={page === pages}
        >
          {page}
        </button>
      ))}
      <button
        disabled={pages + 1 > totalPages}
        className="rotate-180"
        onClick={nextPage}
      >
        <BsChevronLeft />
      </button>
    </section>
  );
};

export default Pagination;
