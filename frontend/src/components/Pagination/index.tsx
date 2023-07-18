interface IPages {
  pages: number;
  totalPages: number;
  setPages: React.Dispatch<React.SetStateAction<number>>;
}

const Pagination = ({ pages, totalPages, setPages }: IPages) => {
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
      <button onClick={prevPage}>{"<"}</button>
      {pages} {totalPages}
      <button onClick={nextPage}>{">"}</button>
    </section>
  );
};

export default Pagination;
