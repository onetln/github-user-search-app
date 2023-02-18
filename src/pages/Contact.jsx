import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { AnimatePresence, motion } from 'framer-motion';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import emailJs from 'emailjs-com';

const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const USER_ID = process.env.REACT_APP_EMAILJS_USER_ID;

const schema = yup
  .object({
    name: yup.string().max(30).required(),
    email: yup.string().email().required(),
    message: yup.string().min(5).max(2000).required(),
  })
  .required();

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const form = useRef();

  const submitForm = async (e) => {
    emailJs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, USER_ID).then(
      (result) => {
        console.log(result.text);
        reset();
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <section>
      <AnimatePresence>
        <div className="card my-5 rounded-lg shadow-lg card bg-base-200">
          <div className="card-body">
            <h4 className="text-3xl m-4 font-bold card-title">
              <span className="text-secondary-focus">Contact me</span> by email
            </h4>
            <div className="mb-2 rounded-md shadow-lg card bg-base-100">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <div className="card-body">
                  <form
                    ref={form}
                    target="_blank"
                    onSubmit={handleSubmit(submitForm)}
                    action=""
                    method="POST"
                  >
                    <div className="mb-3">
                      <input
                        type="text"
                        name="name"
                        placeholder="NAME"
                        className="w-full lg:w-1/2 xl:w-1/2 bg-gray-200 input input-lg text-black"
                        {...register('name')}
                      />
                      <p className="text-red-700 m-1">
                        {errors.name && errors.name.message}
                      </p>
                    </div>
                    <div className="mb-3">
                      <input
                        type="text"
                        name="email"
                        placeholder="EMAIL"
                        className="w-full lg:w-1/2 xl:w-1/2 bg-gray-200 input input-lg text-black"
                        {...register('email')}
                      />
                      <p className="text-red-700 m-1">
                        {errors.email && errors.email.message}
                      </p>
                    </div>
                    <div className="mb-3">
                      <textarea
                        type="text"
                        name="message"
                        rows={5}
                        cols={50}
                        placeholder="MESSAGE"
                        className="w-full lg:w-1/2 xl:w-1/2 bg-gray-200 textarea text-lg text-black"
                        {...register('message')}
                      />
                      <p className="text-red-700 m-1">
                        {errors.message && errors.message.message}
                      </p>
                    </div>
                    <div className="card-actions mt-4">
                      <button className="btn btn-outline">
                        Send a massage
                      </button>
                    </div>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </AnimatePresence>
    </section>
  );
}

export default Contact;
