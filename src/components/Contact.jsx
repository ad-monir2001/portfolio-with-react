import { Mail, Phone, MapPin } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import toast, { Toaster } from 'react-hot-toast';
const Contact = () => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(e.target.form_name.value);
    emailjs
      .sendForm('service_jv6ek2w', 'template_8xq8pxa', form.current, {
        publicKey: '6SUYUvWDqamndxUqI',
      })
      .then(
        () => {
          toast.success('Successfully send your message!');
        },
        (error) => {
          toast.error('FAILED...', error.text);
        }
      );
  };

  return (
    <div>
      <h1 className="font-heading text-white font-bold text-4xl text-center italic">
        <span className="border-b border-[#00adb5]">Contact me</span>{' '}
      </h1>
      {/* Left Section - Contact Information */}
      <div className="flex flex-col md:flex-row w-full max-w-6xl mx-auto gap-8 p-6">
        <div className="bg-black text-white rounded-lg p-8 md:w-1/2 space-y-8">
          <div>
            <h2 className="text-4xl font-bold mb-2">Contact information</h2>
          </div>

          <div className="space-y-6 font-body">
            <div className="flex items-center space-x-4">
              <Phone className="w-6 h-6" />
              <span>(+880) 1521-544143</span>
            </div>

            <div className="flex items-center space-x-4">
              <Mail className="w-6 h-6" />
              <span>ad.monir2001@gmail.com</span>
            </div>

            <div className="flex items-center space-x-4">
              <MapPin className="w-6 h-6" />
              <div>
                <p>Bogura, Bangladesh</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="md:w-1/2 space-y-6">
          <form ref={form} onSubmit={handleSubmit} className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  name="from_name"
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter Your Name"
                />
              </div>
            </div>
            <div>
              <Toaster />
            </div>

            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="from_email"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter Your Email"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                name="message"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent h-32"
                placeholder="Write Your Message"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
