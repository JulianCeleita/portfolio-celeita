import emailjs from "@emailjs/browser";
import Button from "../reusable/Button";
import FormInput from "../reusable/FormInput";

function ContactForm() {
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
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <div className="w-full lg:w-1/2">
      <div className="leading-loose">
        <form
          onSubmit={sendEmail}
          className="max-w-xl m-4 p-6 sm:p-10 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left"
        >
          <p className="font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8">
            Contact Form
          </p>

          <FormInput
            inputLabel="Full Name"
            labelFor="emailjs_name"
            inputType="text"
            inputId="emailjs_name"
            inputName="emailjs_name"
            placeholderText="Your Name"
            ariaLabelName="Name"
          />
          <FormInput
            inputLabel="Email"
            labelFor="emailjs_email"
            inputType="email"
            inputId="emailjs_email"
            inputName="emailjs_email"
            placeholderText="Your email"
            ariaLabelName="Email"
          />
          <FormInput
            inputLabel="Subject"
            labelFor="emailjs_subject"
            inputType="text"
            inputId="emailjs_subject"
            inputName="emailjs_subject"
            placeholderText="Enter your subject"
            ariaLabelName="EmailJS Subject"
          />

          <div className="mt-6">
            <label
              className="block text-lg text-primary-dark dark:text-primary-light mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
              id="message"
              name="message"
              cols={14}
              rows={6}
              aria-label="Message"
            ></textarea>
          </div>

          <div className="mt-6">
            <span className="font-general-medium  px-7 py-4 text-white text-center font-medium tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg mt-6 duration-500">
              <Button title="Send Message" aria-label="Send Message" />
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
