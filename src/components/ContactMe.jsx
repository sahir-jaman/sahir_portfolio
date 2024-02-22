import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast, Toaster } from "react-hot-toast";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_g7l0lxg",
        "template_5s91ye7",
        form.current,
        "j6FR2oScObJI1OYdk"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Successfully Send!");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  // function SendMail() {
  //   var params = {
  //     from_name: document.getElementById("fullName").value,
  //     email_id: document.getElementById("email_id").value,
  //     message: document.getElementById("message").value,
  //   };
  //   emailjs.send("service_g7l0lxg", "template_5s91ye7", params).then(function(res){
  //     alert("success!"+res.status);
  //   });
  // }

  return (
    <div id="contact" className="contact md:pt-[70px] lg:pt-[120px] pt-[40px]">
      <div className="text-white max-w-[90%] md:max-w-[80%]">
        <h1 className="text-[40px]">Contact Me</h1>
        <p className="text-justify py-2 text-[18px] md:w-[61%]">
          I am interested in working with any company who thinks my skill will
          be helpful for them. If you believe I could be a valuable asset to your team, please feel free to drop me a line. I look forward to connecting with you.
        </p>

        <div className="Forms text-black">
          <form className="pt-4 w-12/12 md:w-8/12 h-11/12" ref={form} onSubmit={sendEmail}>
            <div className="w-full lg:w-11/12 my-5 ">
              <input
                id="fullName"
                className="w-full p-3"
                placeholder="Name"
                name="user_name"
                required
              />
            </div>
            <div className="w-full lg:w-11/12 my-5 ">
              <input
                id="email_id"
                label="Your Email"
                className="w-full p-3"
                placeholder="Your Email"
                name="user_email"
                required
              />
            </div>
            <div className="w-full lg:w-11/12 my-5 ">
              <textarea
                id="message"
                label="Message"
                className="w-full p-3"
                placeholder="Message"
                name="message"
                required
              />
            </div>
            <div className="w-full lg:w-11/12 my-3 inter">
              <button
                className="bg-[#2ecc71] hover:bg-blue-600 text-black font-bold py-2 px-4 rounded"
                type="submit"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default Contact;
