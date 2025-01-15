import AOS from "aos";
import "aos/dist/aos.css";
import image1 from "../assets/tech1.jpeg";
import image2 from "../assets/project.png";
import image3 from "../assets/job.png";
import image4 from "../assets/payment.png";
import image5 from "../assets/hired.png";
import image6 from "../assets/trained.png";
import { Link } from "react-router-dom"; // Import Link from React Router

const features = [
  {
    icon: image2,
    title: "Project-Based Training and Mentoring",
  },
  {
    icon: image3,
    title: "Get Job Ready Skills, No experience Needed to enroll",
  },
  {
    icon: image4,
    title: "Flexible Monthly Payment Plan, Pay as you Learn",
  },
];

export function HeroSectionTech() {
  AOS.init({
    duration: 2000, // Set the duration to 1000ms (1 second)
  });

  return (
    <>
      <section
        className="h-screen bg-white text-center flex flex-col justify-center relative bg-cover bg-center overflow-x-hidden"
        style={{
          backgroundImage: `url(${image1})`,
        }}
        data-aos="fade-up"
      >
        <div className="container mx-auto flex flex-col items-center md:flex-row md:justify-between relative overflow-x-hidden">
          {/* Text Section */}
          <div className="text-left md:w-1/2" data-aos="fade-right">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-wide text-white">
              Developing Highly <span className="text-purple-600">Skilled</span> Tech Talents
            </h1>

            <p className="text-purple-600 mt-4 text-xl font-bold text-shadow-sm">
              At 5Tech Academy, we are turning individuals without tech skills into world-class Tech Talents
            </p>

            <div className="mt-6 flex gap-4">
            <Link to="/course" className="px-8 py-3 border border-purple-500 text-purple-500 font-bold rounded-lg hover:bg-purple-50">
                Apply Now
              </Link>
            </div>
          </div>
        </div>

        {/* Tech Stack Logos */}
        <div
          className="mt-10 w-full flex justify-center items-center gap-8 flex-wrap overflow-x-hidden"
          data-aos="zoom-in"
        >
          <div className="hover:shadow-xl transition-all duration-300 p-2">
            <img
              src="https://reworkacademy.co/static/media/nodejs_logo.c580880cda32187e07e1.png"
              alt="Node.js"
              className="h-16"
            />
          </div>
          <div className="hover:shadow-xl transition-all duration-300 p-2">
            <img
              src="https://reworkacademy.co/static/media/react_logo.ef28a7569ef18dd72579.png"
              alt="React"
              className="h-16"
            />
          </div>
          <div className="hover:shadow-xl transition-all duration-300 p-2">
            <img
              src="https://reworkacademy.co/static/media/mongodb.324e2fcabe3af8a6195a.png"
              alt="MongoDB"
              className="h-16"
            />
          </div>
          <div className="hover:shadow-xl transition-all duration-300 p-2">
            <img
              src="https://reworkacademy.co/static/media/python_logo.f1a07429fcf04073a41e.png"
              alt="Python"
              className="h-16"
            />
          </div>
          <div className="hover:shadow-xl transition-all duration-300 p-2">
            <img
              src="https://reworkacademy.co/static/media/mysql_logo.167c88550478e6f0f85c.png"
              alt="MySQL"
              className="h-16"
            />
          </div>
          <div className="hover:shadow-xl transition-all duration-300 p-2">
            <img
              src="https://reworkacademy.co/static/media/kotlin_logo.1dbc91985eeec0d49af7.png"
              alt="Kotlin"
              className="h-16"
            />
          </div>
          <div className="hover:shadow-xl transition-all duration-300 p-2">
            <img
              src="https://reworkacademy.co/static/media/java_logo.63b31c9fcf5d2346d810.png"
              alt="Java"
              className="h-16"
            />
          </div>
          <div className="hover:shadow-xl transition-all duration-300 p-2">
            <img
              src="https://reworkacademy.co/static/media/dart_logo.4c039ed9bad19dc90cc9.png"
              alt="Dart"
              className="h-16"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gray-50 py-14 overflow-x-hidden" data-aos="fade-up">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Why Choose Us</h2>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center max-w-sm text-center"
                data-aos="flip-left"
              >
                <div className="w-32 h-32 flex justify-center items-center bg-blue-100 rounded-full shadow-lg mb-6">
                  <img
                    className="w-20 h-20 object-contain"
                    src={feature.icon}
                    alt={feature.title}
                  />
                </div>
                <p className="font-medium text-xl text-gray-700">{feature.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-12 px-6 md:px-20" data-aos="fade-right">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Text Section */}
        <div>
          <h3 className="text-purple-600 font-semibold text-sm uppercase mb-2">
            5Tech Academy
          </h3>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get Skilled. Get Hired
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            5Tech Academy is instituted to give you high-level tech skills
            to fill the technical skill shortage gap in the fast-growing tech
            industry. We focus on giving you Job Ready Skills, that gives you
            the opportunity to grow your career faster. Best of all, you pay
            as you learn with our Flexible monthly Payment plan. Our
            curriculums are designed to take from Novice to Advanced skills
            level, no experience is needed to enroll.
          </p>
          <Link to="/course" className="bg-purple-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-purple-700 transition">
              Apply Now
            </Link>
        </div>
        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src= {image5}
            alt="Rework Academy Illustration"
            className="w-full max-w-md md:max-w-lg"
            data-aos="zoom-out-down"
          />
        </div>
      </div>
    </section>

      {/* Get Trained Section */}
      <section className="bg-white py-16 px-6 md:px-20 overflow-x-hidden" data-aos="fade-left">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 text-center mb-12">
            Get Trained with us and Become
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src={image6}
                alt="Training Illustration"
                className="w-full h-auto rounded-lg shadow-xl"
                data-aos="zoom-in-up"
              />
            </div>

            <div>
              <div className="flex items-center gap-16 mb-8">
                <div>
                  <h2 className="text-5xl font-extrabold text-purple-700">10%</h2>
                  <p className="text-xl font-semibold text-gray-800">Top Developers trained</p>
                </div>
                <div>
                  <h2 className="text-5xl font-extrabold text-purple-700">90%</h2>
                  <p className="text-xl font-semibold text-gray-800">
                    Hiring rate for 5Tech Academy Graduates
                  </p>
                </div>
              </div>
              <p className="text-lg font-medium text-gray-800 leading-relaxed mb-8">
                We are turning individuals without skills into world-class skilled tech talents.
              </p>
              <Link to="/course" className="bg-purple-700 text-white font-bold py-4 px-8 text-lg rounded-lg shadow-lg hover:bg-purple-800 transition">
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
