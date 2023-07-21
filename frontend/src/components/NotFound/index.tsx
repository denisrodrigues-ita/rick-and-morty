import notFound from "../../assets/img/notFound.png";

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-16">
      <h2>Not Found</h2>
      <img src={notFound} alt="Not Found" />
    </div>
  );
};

export default NotFound;
