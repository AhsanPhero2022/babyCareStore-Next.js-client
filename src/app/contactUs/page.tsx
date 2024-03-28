import Link from "next/link";


const ContactPage = () => {
    return (
        <div>
              <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <p className="text-gray-600 mb-6">
          Feel free to reach out to us if you have any questions, suggestions, or inquiries.
        </p>
        <div className="flex flex-col space-y-4">
          <div>
            <span className="text-gray-700">Email:</span>{' '}
            <a href="ahsanabir567@gmail.com" className="text-blue-500">ahsanabir567@gmail.com</a>
          </div>
          <div>
            <span className="text-gray-700">Phone:</span> (+880) 1862476402</div>
          <div>
            <span className="text-gray-700">Address:</span> 123 Main Street, City, Country
          </div>
        </div>
        <div className="mt-6 flex space-x-4">
          <Link href="https://twitter.com/example">
            <p className="text-blue-500 hover:text-blue-700"  rel="noopener noreferrer">
              Twitter
            </p>
          </Link>
          <Link href="https://facebook.com/example">
            <p className="text-blue-500 hover:text-blue-700"  rel="noopener noreferrer">
              Facebook
            </p>
          </Link>
          <Link href="https://instagram.com/example">
            <p className="text-blue-500 hover:text-blue-700"  rel="noopener noreferrer">
              Instagram
            </p>
          </Link>
        </div>
      </div>
    </div>
        </div>
    );
};

export default ContactPage;