const BestSellingToys = () => {
  const toys = [
    {
      id: 1,
      name: "Iron Man ",
      image:
        "https://i.postimg.cc/D00CvZyF/anthony-duran-ghziy-Ue5e-I8-unsplash.jpg",
      price: "$19.99",
      review: "4.5",
      seller: "Toy Universe",
    },
    {
      id: 2,
      name: "Spider-Man ",
      image: "https://i.postimg.cc/4ddMdwBr/spiderman.jpg",
      price: "$24.99",
      review: "4.8",
      seller: "Heroic Toys",
    },
    {
      id: 3,
      name: "Batman ",
      image:
        "https://i.postimg.cc/sg404bLk/jannik-selz-vtk-QTNr-J2cs-unsplash.jpg",
      price: "$29.99",
      review: "4.7",
      seller: "Gotham Collectibles",
    },
    {
      id: 4,
      name: "Captain America ",
      image: "https://i.postimg.cc/CLjvwWwR/mulyadi-j-TWTBh-VQ27w-unsplash.jpg",
      price: "$22.99",
      review: "4.6",
      seller: "Superhero Merchandise",
    },
  ];

  return (
    <section className="best-selling-toys py-16 my-container bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-4xl text-black text-center mb-10 font-serif font-extrabold">
          Best Selling Toys
        </h2>
        <div
          data-aos="fade-up-left"
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {toys.map(toy => (
            <div
              key={toy.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src={toy.image}
                alt={toy.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{toy.name}</h3>
                <p className="text-gray-600 mb-2">Price: {toy.price}</p>
                <p className="text-gray-600 mb-2">Review: {toy.review}</p>
                <p className="text-gray-600">Seller: {toy.seller}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellingToys;
