export default function Experience() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Experience
        </h2>
        <div className="space-y-6">
          {/* Spark Tech */}
          <div className="bg-white p-6 shadow-md rounded">
            <h3 className="text-xl font-semibold text-[#0693e3]">
              Full Stack Developer (MERN / Next.js)
            </h3>
            <p className="text-gray-600">
              Spark Tech Company | Dhaka, Bangladesh | 2024 – Present
            </p>

            <ul className="mt-4 list-disc list-inside text-gray-700 space-y-1">
              <li>
                Developed and maintained full-stack web applications using
                React.js, Next.js, Node.js, Express.js, and MongoDB.
              </li>
              <li>
                Built secure REST APIs with JWT authentication, role-based access
                control, and proper validation.
              </li>
              <li>
                Implemented CI/CD pipelines and deployed applications using
                GitHub Actions, Vercel, Render, and Netlify.
              </li>
              <li>
                Worked with PostgreSQL, MongoDB, Prisma, and Mongoose for scalable
                data management.
              </li>
              <li>
                Collaborated closely with UI/UX designers to convert Figma
                designs into responsive, high-performance interfaces.
              </li>
              <li>
                Integrated third-party services such as Stripe, Firebase, and
                cloud-based APIs.
              </li>
            </ul>
          </div>

          {/* Freelance / Project Experience */}
          <div className="bg-white p-6 shadow-md rounded">
            <h3 className="text-xl font-semibold text-[#00d084]">
              Freelance Full Stack Developer
            </h3>
            <p className="text-gray-600">Remote | 2023 – Present</p>

            <ul className="mt-4 list-disc list-inside text-gray-700 space-y-1">
              <li>
                Delivered end-to-end MERN & Next.js projects for local and global
                clients.
              </li>
              <li>
                Built scalable backend systems using NestJS, Express.js, and
                MongoDB/PostgreSQL.
              </li>
              <li>
                Implemented real-time features using WebSockets and Socket.IO.
              </li>
              <li>
                Deployed and maintained production servers with basic DevOps
                practices (Docker, NGINX, cloud hosting).
              </li>
              <li>
                Ensured application performance, security, and SEO best
                practices.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
