export default function Header() {
  return (
    <header className="h-96 bg-gradient-to-r from-[#0693e3] via-[#00d084] to-[#ff6900] text-white">
      <div className="container mx-auto px-6 py-24 text-center">
        <h1 className="text-5xl font-bold">
          Md Mehedi Hasan | Awesome CI/CD (Updated)
        </h1>
        <p className="text-2xl mt-4">
          DevOps Engineer | Cloud Architect | Automation Enthusiast
        </p>

        <div className="flex items-center justify-center gap-4 mt-4">
          <a
            href="https://github.com/mdmehedihasan-dev"
            target="_blank"
            className="text-xl hover:text-[#ff6900]"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/mdmehedihasanmr"
            target="_blank"
            className="text-xl hover:text-[#ff6900]"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </header>
  );
}
