
import { Facebook, Twitter, Instagram, LinkedinIcon as LinkedIn } from "lucide-react"
import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8 mx-auto">
      <div className="container px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-pink-400">NaukriHub</h3>
            <p className="text-sm text-gray-300">
              Connecting talents with opportunities, empowering careers worldwide.
            </p>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4 text-pink-400">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/home" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/jobs" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Job
                </Link>
              </li>
              <li>
                <Link to="/browse" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Browse
                </Link>
              </li>
            </ul>
          </div>
        
          <div>
            <h4 className="text-md font-semibold mb-4 text-pink-400">Connect With Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedIn size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} JobHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

