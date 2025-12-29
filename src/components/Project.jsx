const projects = [
  "/bongoDev.png",
  "/bongoDev3.png",
  "/bongoDev2.png",
  "/bongoDev2.png",
  "/bongoDev.png",
  "/bongoDev3.png",
];

export default function Projects() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((img, i) => (
            <div key={i} className="bg-white p-6 shadow-md rounded">
              <img src={img} alt="project" className="mb-4 rounded-md" />
              <h3 className="text-xl font-semibold text-center">
                Project {i + 1}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
