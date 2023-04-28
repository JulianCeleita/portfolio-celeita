import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { FiX } from "react-icons/fi";
import Button from "./reusable/Button";
import FormInput from "./reusable/FormInput";

function HireMeModal({ onClose, onRequest }: HireMeModalProps) {
  function sendEmail(e: any) {
    e.preventDefault();

    emailjs
      .sendForm(
        "default_service",
        "template_0t8it18",
        e.target,
        "YP3WMHTWmE_WLDbkU"
      )
      .then(
        (result) => {
          console.log(result.text);
          const confirmationMessage = document.getElementById(
            "confirmation-message"
          );
          if (confirmationMessage) {
            confirmationMessage.classList.remove("hidden");
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="font-general-medium fixed inset-0 z-30 transition-all duration-500"
    >
      {/* Modal Backdrop */}
      <div className="bg-filter bg-black bg-opacity-50 fixed inset-0 w-full h-full z-20"></div>

      {/* Modal Content */}
      <main className="flex flex-col items-center justify-center h-full w-full">
        <div className="modal-wrapper flex items-center z-30">
          <div className="modal max-w-md mx-5 xl:max-w-xl lg:max-w-xl md:max-w-xl bg-secondary-light dark:bg-primary-dark max-h-screen shadow-lg flex-row rounded-lg relative">
            <div className="modal-header flex justify-between gap-10 p-5 border-b border-ternary-light dark:border-ternary-dark">
              <h5 className=" text-primary-dark dark:text-primary-light text-xl">
                What project are you looking for?
              </h5>
              <button
                onClick={onClose}
                className="px-4 font-bold text-primary-dark dark:text-primary-light"
              >
                <FiX className="text-3xl" />
              </button>
            </div>
            <div className="modal-body p-5 w-full h-full">
              <form onSubmit={sendEmail} className="max-w-xl m-4 text-left">
                <FormInput
                  inputLabel=""
                  labelFor="emailjs_name"
                  inputType="text"
                  inputId="emailjs_name"
                  inputName="emailjs_name"
                  placeholderText="Your Name"
                  ariaLabelName="Name"
                />
                <FormInput
                  inputLabel=""
                  labelFor="emailjs_email"
                  inputType="email"
                  inputId="emailjs_email"
                  inputName="emailjs_email"
                  placeholderText="Your email"
                  ariaLabelName="Email"
                />
                <FormInput
                  inputLabel=""
                  labelFor="emailjs_subject"
                  inputType="text"
                  inputId="emailjs_subject"
                  inputName="emailjs_subject"
                  placeholderText="Enter your subject"
                  ariaLabelName="EmailJS Subject"
                />

                <div className="mt-6">
                  <textarea
                    className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
                    id="message"
                    name="message"
                    cols={14}
                    rows={6}
                    aria-label="Message"
                    placeholder="Enter your message"
                  ></textarea>
                </div>

                <div className="mt-6 pb-4 sm:pb-1">
                  <span
                    className="px-4
											sm:px-6
											py-2
											sm:py-2.5
											text-white
											bg-indigo-500
											hover:bg-indigo-600
											rounded-md
											focus:ring-1 focus:ring-indigo-900 duration-500"
                    aria-label="Submit Request"
                  >
                    <Button title="Send Request" aria-label="Send Message" />
                  </span>
                </div>
                <div
                  id="confirmation-message"
                  className="hidden bg-transparent border border-solid border-green-500 text-green-500 text-center p-2 rounded-md mt-4"
                >
                  Email sent successfully!
                </div>
              </form>
            </div>
            <div className="modal-footer mt-2 sm:mt-0 py-5 px-8 border0-t text-right">
              <span
                onClick={onClose}
                className="px-4
									sm:px-6
									py-2 bg-gray-600 text-primary-light hover:bg-ternary-dark dark:bg-gray-200 dark:text-secondary-dark dark:hover:bg-primary-light
									rounded-md
									focus:ring-1 focus:ring-indigo-900 duration-500"
                aria-label="Close Modal"
              >
                <Button title="Close" />
              </span>
            </div>
          </div>
        </div>
      </main>
    </motion.div>
  );
}

export default HireMeModal;
