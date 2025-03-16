// import { assets } from '@/assets/assets'
// import Image from 'next/image'
// import React, { useState } from 'react'
// import { motion, AnimatePresence } from "motion/react"

// const Contact = () => {
//   const [result, setResult] = useState("");
//   const [showModal, setShowModal] = useState(false);

//   const onSubmit = async (event) => {
//     event.preventDefault();
//     setResult("Sending....");
//     setShowModal(true);
//     const formData = new FormData(event.target);
//     console.log("formData",formData);
//     // Enter your web3 froms access key below
//     formData.append("access_key", "1488469d-b258-4da9-8b7a-287db0438ecc");

//     const response = await fetch("https://api.web3forms.com/submit", {
//       method: "POST",
//       body: formData
//     });
//     console.log("formData----",response);
//     const data = await response.json();
//     console.log("formData---22222",data);
//     if (data.success) {
//       setResult("Form Submitted Successfully");
//       event.target.reset();
//     } else {
//       console.log("Error", data);
//       setResult(data.message);
//     }
//   };

//   const closeModal = () => {
//     setShowModal(false);
//   };

//   return (
//     <motion.div
//     initial={{ opacity: 0 }} 
//       whileInView={{ opacity: 1 }} 
//       transition={{ duration: 1 }} 
//     id='contact' className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none'>

//       <motion.h4 
//       initial={{ y: -20, opacity: 0 }} 
//       whileInView={{ y: 0, opacity: 1 }} 
//       transition={{ delay: 0.3, duration: 0.5 }}
//       className='text-center mb-2 text-lg font-Ovo'>
//       Connect with me</motion.h4>

//       <motion.h2
//       initial={{ y: -20, opacity: 0 }}
//       whileInView={{ y: 0, opacity: 1 }}
//       transition={{ delay: 0.5, duration: 0.5 }}
//       className='text-center text-5xl font-Ovo'>
//       Get in touch</motion.h2>

//       <motion.p
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       transition={{ delay: 0.7, duration: 0.5 }}
//       className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
//       I'd love to hear from you! If you have any questions, comments, or feedback, please use the form below.</motion.p>

//       <motion.form
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       transition={{ delay: 0.9, duration: 0.5 }}
//       onSubmit={onSubmit} className='max-w-2xl mx-auto'>
//         <div className='grid grid-cols-auto gap-6 mt-10 mb-8'>

//             <motion.input
//             initial={{ x: -50, opacity: 0 }}
//             whileInView={{ x: 0, opacity: 1 }}
//             transition={{ delay: 1.1, duration: 0.6 }}
//             type="text" placeholder='Enter your name' required
//             className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90' name='name'/>

//             <motion.input
//             initial={{ x: 50, opacity: 0 }}
//             whileInView={{ x: 0, opacity: 1 }}
//             transition={{ delay: 1.2, duration: 0.6 }}
//             type="email" placeholder='Enter your email' required
//             className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90' name='email'/>

//         </div>
//         <motion.textarea 
//         initial={{ y: 100, opacity: 0 }}
//         whileInView={{ y: 0, opacity: 1 }}
//         transition={{ delay: 1.3, duration: 0.6 }}
//         rows='6' placeholder='Enter your message' required
//         className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 dark:bg-darkHover/30 dark:border-white/90' name='message'></motion.textarea>

//         <motion.button
//         whileHover={{ scale: 1.05 }} 
//         transition={{ duration: 0.3 }}
//         type='submit'
//         className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover'
//         >Submit now <Image src={assets.right_arrow_white} alt='' className='w-4'/></motion.button>
//       </motion.form>

//       {/* Result Modal */}
//       <AnimatePresence>
//         {showModal && (
//           <motion.div 
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
//           >
//             <motion.div 
//               initial={{ scale: 0.8, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.8, opacity: 0 }}
//               className="relative bg-white dark:bg-darkHover p-6 rounded-lg shadow-xl max-w-md w-full mx-4"
//             >
//               <div className="flex flex-col items-center text-center">
//                 <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${
//                   result === "Sending...." 
//                     ? "bg-blue-100 text-blue-600 dark:bg-blue-900/30" 
//                     : result.includes("Successfully") 
//                       ? "bg-green-100 text-green-600 dark:bg-green-900/30" 
//                       : "bg-red-100 text-red-600 dark:bg-red-900/30"
//                 }`}>
//                   {result === "Sending...." ? (
//                     <svg className="animate-spin h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                       <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                       <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                     </svg>
//                   ) : result.includes("Successfully") ? (
//                     <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
//                     </svg>
//                   ) : (
//                     <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
//                     </svg>
//                   )}
//                 </div>
//                 <h3 className="text-xl font-semibold mb-2 font-Ovo">
//                   {result === "Sending...." ? "Sending Message" : 
//                    result.includes("Successfully") ? "Thank You!" : "Oops!"}
//                 </h3>
//                 <p className="text-gray-600 dark:text-gray-300 mb-6 font-Ovo">{result}</p>
//                 {result !== "Sending...." && (
//                   <motion.button
//                     whileHover={{ scale: 1.05 }}
//                     transition={{ duration: 0.3 }}
//                     onClick={closeModal}
//                     className="py-2 px-6 bg-black/80 text-white rounded-full hover:bg-black duration-300 dark:bg-darkHover dark:border-[0.5px] dark:border-white/50"
//                   >
//                     Close
//                   </motion.button>
//                 )}
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.div>
//   )
// }

// export default Contact;


import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion, AnimatePresence } from "motion/react"

const Contact = () => {
  const [result, setResult] = useState("");
  const [showModal, setShowModal] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    setShowModal(true);
    const formData = new FormData(event.target);
    console.log("formData",formData);
    // Enter your web3 froms access key below
    formData.append("access_key", "1488469d-b258-4da9-8b7a-287db0438ecc");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });
    console.log("formData----",response);
    const data = await response.json();
    console.log("formData---22222",data);
    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <motion.div
    initial={{ opacity: 0 }} 
      whileInView={{ opacity: 1 }} 
      transition={{ duration: 1 }} 
    id='contact' className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none'>

      <motion.h4 
      initial={{ y: -20, opacity: 0 }} 
      whileInView={{ y: 0, opacity: 1 }} 
      transition={{ delay: 0.3, duration: 0.5 }}
      className='text-center mb-2 text-lg font-Ovo'>
      Connect with me</motion.h4>

      <motion.h2
      initial={{ y: -20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className='text-center text-5xl font-Ovo'>
      Get in touch</motion.h2>

      <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.7, duration: 0.5 }}
      className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
      I'd love to hear from you! If you have any questions, comments, or feedback, please use the form below.</motion.p>

      <motion.form
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.9, duration: 0.5 }}
      onSubmit={onSubmit} className='max-w-2xl mx-auto'>
        <div className='grid grid-cols-auto gap-6 mt-10 mb-8'>

            <motion.input
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            type="text" placeholder='Enter your name' required
            className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90' name='name'/>

            <motion.input
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            type="email" placeholder='Enter your email' required
            className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90' name='email'/>

        </div>
        <motion.textarea 
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.6 }}
        rows='6' placeholder='Enter your message' required
        className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 dark:bg-darkHover/30 dark:border-white/90' name='message'></motion.textarea>

        <motion.button
        whileHover={{ scale: 1.05 }} 
        transition={{ duration: 0.3 }}
        type='submit'
        className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover'
        >Submit now <Image src={assets.right_arrow_white} alt='' className='w-4'/></motion.button>
      </motion.form>

      {/* Result Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          >
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative bg-white dark:bg-darkHover p-6 sm:p-8 rounded-lg shadow-xl max-w-md w-full mx-4 my-4 max-h-[90vh] overflow-y-auto"
            >
              <div className="flex flex-col items-center text-center">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${
                  result === "Sending...." 
                    ? "bg-blue-100 text-blue-600 dark:bg-blue-900/30" 
                    : result.includes("Successfully") 
                      ? "bg-green-100 text-green-600 dark:bg-green-900/30" 
                      : "bg-red-100 text-red-600 dark:bg-red-900/30"
                }`}>
                  {result === "Sending...." ? (
                    <svg className="animate-spin h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  ) : result.includes("Successfully") ? (
                    <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  ) : (
                    <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                  )}
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-2 font-Ovo">
                  {result === "Sending...." ? "Sending Message" : 
                   result.includes("Successfully") ? "Thank You!" : "Oops!"}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 font-Ovo text-sm sm:text-base">{result}</p>
                {result !== "Sending...." && (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    onClick={closeModal}
                    className="py-3 px-8 bg-black/80 text-white rounded-full hover:bg-black duration-300 dark:bg-darkHover dark:border-[0.5px] dark:border-white/50 text-base min-w-[120px]"
                  >
                    Close
                  </motion.button>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default Contact
