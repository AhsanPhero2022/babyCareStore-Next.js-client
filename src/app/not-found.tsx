import Image from "next/image";

const NotFoundPage = () => {
  return (
    <div className="w-[90%] mx-auto">
      <Image
        src="https://img.freepik.com/free-vector/404-error-with-landscape-concept-illustration_114360-7898.jpg?size=626&ext=jpg&ga=GA1.1.2082370165.1711411200&semt=sph"
        width={800}
        height={800}
        alt="not found page"
        className="w-full"
      />
    </div>
  );
};

export default NotFoundPage;
