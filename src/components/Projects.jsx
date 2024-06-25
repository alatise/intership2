import Im1 from "../assets/images/Im1.jpg";
import Im2 from "../assets/images/Im2.jpg";
import Im3 from "../assets/images/Im3.jpg";
import Im4 from "../assets/images/Im4.jpg";
import Im5 from "../assets/images/Im5.jpg";
import Im6 from "../assets/images/Im6.jpg";

function Projects() {
  const images = [
    { id: 1, image: Im1 },
    { id: 2, image: Im2 },
    { id: 3, image: Im3 },
    { id: 4, image: Im4 },
    { id: 5, image: Im5 },
    { id: 6, image: Im6 },
  ];
  return (
    <div className="flex flex-col items-center gap-10 justify-center mt-10">
      <h1>Stories</h1>

      <div className="grid md:grid-cols-3  gap-10">
        {images.map((pictures) => (
          <img
            src={pictures.image}
            key={pictures.id}
            alt=""
            className=" cursor-pointer w-[300px] h-[300px] object-cover rounded-lg hover:scale-110 duration-300"
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
