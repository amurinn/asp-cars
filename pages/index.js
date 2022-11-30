import Script from "next/script";

const Home = () => {

  const importAll = (r) => r.keys().map(r);

  const cars = importAll(
    require.context("../content/cars/", false, /\.json$/)
  );

  console.log(cars);

  return (
    <>
      <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
      <h1>ASP Cars</h1>
      <ul>
        {cars.map((car, index) => (
          <li key={index}>
            <p>Model: {car.title} </p>
            <p>Year: {car.year} </p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
