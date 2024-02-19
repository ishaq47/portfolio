import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Contact = () => {
  const initialValues = {
    email: '',
    name: '',
    subject: '',
    message: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
    name: Yup.string().required('Required'),
    subject: Yup.string().required('Required'),
    message: Yup.string().required('Required'),
  });

  const onSubmit = (values, { resetForm }) => {
    // Handle form submission logic here
    console.log(values);
    resetForm();
  };

  return (
    <div id='contact' className='flex w-full flex-col h-auto justify-start items-center gap-4 p-10 md:p-20'>
      <section className="">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-primary">Contact Me</h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-primary sm:text-xl">
            Feel free to reach out to me with any questions, inquiries, or collaboration opportunities. I'm here to assist you and look forward to hearing from you!
          </p>
          <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            <Form className="space-y-8">
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-primary">Your email</label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-primary text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                  placeholder="email@example.com"
                  required
                />
                <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
              </div>
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-primary">Your Name</label>
                <Field
                  type="text"
                  id="name"
                  name="name"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-primary text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                  placeholder="Your Name"
                  required
                />
                <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
              </div>
              <div>
                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-primary">Subject</label>
                <Field
                  type="text"
                  id="subject"
                  name="subject"
                  className="block p-3 w-full text-sm text-primary bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Let me know how I can help you"
                  required
                />
                <ErrorMessage name="subject" component="div" className="text-red-500 text-sm" />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-primary">Your message</label>
                <Field
                  as="textarea"
                  id="message"
                  name="message"
                  rows="6"
                  className="block p-2.5 w-full text-sm text-primary bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Leave a message..."
                />
                <ErrorMessage name="message" component="div" className="text-red-500 text-sm" />
              </div>
              <button
                type="submit"
                className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-secondary sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300"
              >
                Send message
              </button>
            </Form>
          </Formik>
        </div>
      </section>
    </div>
  );
};

export default Contact;
