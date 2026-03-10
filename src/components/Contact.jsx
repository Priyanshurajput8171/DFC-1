
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Mail, MapPin, Instagram } from "lucide-react";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        () => {
          alert("Failed to send message.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center px-6 py-20 bg-[#d4d5cc]"
    >
      <div className="max-w-7xl mx-auto w-full">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#5f9920]">
            Contact Us
          </h2>
          <p className="text-gray-700 mt-3">
            We'd love to hear from you
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* CONTACT INFO */}
          <div className="space-y-10">

            <div className="flex items-start gap-5">
              <Instagram className="text-[#5f9920]" size={34} />
              <div>
                <h4 className="text-xl font-semibold">Instagram</h4>
                <p className="text-gray-700 text-lg">
                  @delicious_food_house
                </p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <Mail className="text-[#5f9920]" size={34} />
              <div>
                <h4 className="text-xl font-semibold">Email</h4>
                <p className="text-gray-700 text-lg">
                  contact@deliciousfood.com
                </p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <MapPin className="text-[#5f9920]" size={34} />
              <div>
                <h4 className="text-xl font-semibold">Location</h4>
                <p className="text-gray-700 text-lg">
                  221B Baker Street, London, UK
                </p>
              </div>
            </div>

          </div>

          {/* FORM */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="backdrop-blur-md bg-white/20 border border-white/30 p-8 rounded-2xl shadow-xl space-y-6"
          >
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full bg-transparent border border-gray-400 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5f9920]"
            />

            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full bg-transparent border border-gray-400 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5f9920]"
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
              className="w-full bg-transparent border border-gray-400 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5f9920]"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-[#5f9920] text-white py-3 rounded-lg font-semibold hover:bg-[#4b7c19] transition"
            >
              Send Message
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}

export default Contact;


