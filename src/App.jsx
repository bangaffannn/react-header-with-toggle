import companyLogo from "../public/logo.png";
import DarkModeToggle from "../components/LightDarkMode.jsx";
import coverImage from "../public/illustration-intro.png";

function App({ children }) {
  return (
    <div className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <img
            className="rounded w-16 h-auto md:w-20 md:h-auto"
            src={companyLogo}
            alt="company logo"
          />
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold ml-2 md:ml-4">
            paoUI
          </h1>
        </div>
        <div className="flex items-center space-x-4">
          <ul className="flex items-center space-x-4">
            <a href="/" className="hover:text-gray-500">
              About
            </a>
            <a href="/" className="hover:text-gray-500">
              Portfolio
            </a>
            <a href="/" className="hover:text-gray-500">
              Project
            </a>
            <a href="/">
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">
                Sign Up
              </button>
            </a>
          </ul>
          <DarkModeToggle />
        </div>
      </div>
      <div className="p-4 flex flex-col md:flex-row items-center md:items-start">
        <img
          src={coverImage}
          alt="cover image"
          className="w-full md:w-1/2 lg:w-1/3 h-auto"
        />
        <div className="md:pl-8 py-4">
          <h1 className="p-2 text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">
            WELCOME TO OUR WEBSITE
          </h1>
          <p className="text-sm md:text-base p-2 mb-2">
            Please follow our product with the very best quality
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 ml-2 rounded">
            Contact us
          </button>
        </div>
      </div>
      {children}
    </div>
  );
}

export default App;
