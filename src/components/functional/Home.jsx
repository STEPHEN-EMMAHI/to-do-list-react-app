import homeImg from "../../assets/homepage-image.jpg";

export function HomePageImg() {
  return (
    <div className="m-4 flex justify-center">
      <img
        src={homeImg}
        alt="Home page image"
        className="rounded-2xl object-cover"
        width={500}
        height={500}
      />
    </div>
  );
}
