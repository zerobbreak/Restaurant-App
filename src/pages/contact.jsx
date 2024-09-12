import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../style";

const BluehillsContact = () => {
  return (
    <div className="bg-white w-full overflow-hidden">
      
        <Navbar logoImage="/assets/logo2.svg"/>

      {/* Existing contact details section */}
      <section className="px-6 py-16 bg-gray-50 text-gray-900">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-extrabold text-center text-gray-800 mb-12">
            Contact Us
          </h1>
          <div className="bg-white shadow-md rounded-lg p-8">
          <h2 className="text-3xl font-semibold mb-6">Bookings</h2>
            {/* <h2 className="text-3xl font-semibold mb-6">Get in Touch</h2>
            <p className="text-lg leading-relaxed text-gray-600 mb-8">
              We'd love to hear from you! Whether you have a question, feedback,
              or just want to chat, feel free to reach out using any of the
              methods below.
            </p> */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Blue Hills</h3>
                <p className="text-lg text-gray-700">
                  Just Badela Food & Wine
                  <br />
                  Bluehills, Midrand
                  <br />
                  Johannesburg, South Africa
                </p>
                <p className="text-lg text-gray-700">
                  <strong>Phone:</strong> 063 111 8703
                </p>
                <p className="text-lg text-gray-700">
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:bluehills@justbadela.co.za"
                    className="text-blue-600 hover:underline"
                  >
                    bluehills@justbadela.co.za
                  </a>
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Soweto</h3>
                <p className="text-lg text-gray-700">
                  Just Badela Food & Wine
                  <br />
                  Soweto
                  <br />
                  Johannesburg, South Africa
                </p>
                <p className="text-lg text-gray-700">
                  <strong>Phone:</strong> 063 141 5767
                </p>
                <p className="text-lg text-gray-700">
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:dumile@badela.co.za"
                    className="text-blue-600 hover:underline"
                  >
                    dumile@badela.co.za
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New contact form section */}
      <section className="px-6 py-16 bg-gray-100 text-gray-900">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white shadow-md rounded-lg p-8">
            <h2 className="text-3xl font-semibold mb-6">Submit Your Query or Suggestion</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-lg font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-lg font-medium text-gray-700">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Subject"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-lg font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-4 py-2 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 bg-white text-gray-900">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-100 shadow-md rounded-lg p-8">
            <h2 className="text-3xl font-semibold mb-6">Book an Event</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-lg font-medium text-gray-700">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg font-medium text-gray-700">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label htmlFor="location" className="block text-lg font-medium text-gray-700">
                  Select Location
                </label>
                <select
                  id="location"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="bluehills">Bluehills</option>
                  <option value="soweto">Soweto</option>
                </select>
              </div>
              <div>
                <label htmlFor="eventType" className="block text-lg font-medium text-gray-700">
                  Type of Event
                </label>
                <input
                  type="text"
                  id="eventType"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="E.g. Birthday, Wedding"
                />
              </div>
              <div>
                <label htmlFor="guests" className="block text-lg font-medium text-gray-700">
                  Number of Guests
                </label>
                <input
                  type="number"
                  id="guests"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Enter number of guests"
                />
              </div>
              <div>
                <label htmlFor="date" className="block text-lg font-medium text-gray-700">
                  Event Date
                </label>
                <input
                  type="date"
                  id="date"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white px-4 py-2 rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  Book Event
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BluehillsContact;
