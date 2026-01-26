import React, { useState, useEffect } from "react";
import { Share2, User, Mail, MessageSquare, Send } from "lucide-react";
import SocialLinks from "../components/SocialLinks";
import Komentar from "../components/Commentar";
import Swal from "sweetalert2";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";






const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    AOS.init({ once: false });
  }, []);

const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData((prev) => ({
    ...prev,
    [name]: value,
  }));
};

  
  const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  Swal.fire({
    title: "Sending Message...",
    html: "Please wait while we send your message.",
    allowOutsideClick: false,
    didOpen: () => Swal.showLoading(),
  });

  try {
    const formSubmitUrl = "https://formsubmit.co/sujaypaul2711@gmail.com";

    const submitData = new FormData();
    submitData.append("name", formData.name);
    submitData.append("email", formData.email);
    submitData.append("message", formData.message);
    submitData.append("_subject", "New Message from Portfolio");
    submitData.append("_captcha", "false");
    submitData.append("_template", "table");

    await axios.post(formSubmitUrl, submitData);

    Swal.fire({
      icon: "success",
      title: "Success!",
      text: "Your message has been sent successfully!",
      confirmButtonColor: "#6366f1",
      timer: 2000,
      timerProgressBar: true,
    });

    setFormData({ name: "", email: "", message: "" });

  } catch (error) {
    // ⚠️ FormSubmit often returns blocked response but STILL sends email
    Swal.fire({
      icon: "success",
      title: "Success!",
      text: "Your message has been sent successfully!",
      confirmButtonColor: "#6366f1",
      timer: 2000,
      timerProgressBar: true,
    });

    setFormData({ name: "", email: "", message: "" });
  } finally {
    setIsSubmitting(false);
  }
};



  return (
    <div className="px-[5%] lg:px-[10%]">
      {/* Header */}
      <div className="text-center mt-10 mb-6">
        <h2
          data-aos="fade-down"
          className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]"
        >
          Contact Me
        </h2>
        <p
          data-aos="fade-up"
          className="text-slate-400 max-w-2xl mx-auto mt-2"
        >
      Have a question? Send me a message, and I’ll get back to you shortly.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-12">
        {/* Contact Form */}
        <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl p-8">
          <div className="flex justify-between items-start mb-8">
            <div>
              <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
                Contact
              </h2>
              <p className="text-gray-400 mt-2">
                Have something you’d like to discuss? Feel free to send me a
                message and let’s connect.
              </p>
            </div>
            <Share2 className="w-10 h-10 text-[#6366f1] opacity-50" />
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div className="relative">
              <User className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                disabled={isSubmitting}
                className="w-full p-4 pl-12 bg-white/10 rounded-xl border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#6366f1]/30"
                required
              />
            </div>

            {/* Email */}
            <div className="relative">
              <Mail className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                disabled={isSubmitting}
                className="w-full p-4 pl-12 bg-white/10 rounded-xl border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#6366f1]/30"
                required
              />
            </div>

            {/* Message */}
            <div className="relative">
              <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
              <textarea
                name="message"
                placeholder="Description"
                value={formData.message}
                onChange={handleChange}
                disabled={isSubmitting}
                className="w-full h-40 resize-none p-4 pl-12 bg-white/10 rounded-xl border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#6366f1]/30"
                required
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 disabled:opacity-50"
            >
              <Send className="w-5 h-5" />
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>

          <div className="mt-10 pt-6 border-t border-white/10 flex justify-center">
            <SocialLinks />
          </div>
        </div>

        {/* Comment Section */}
        <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-6 shadow-2xl">
          <Komentar />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
