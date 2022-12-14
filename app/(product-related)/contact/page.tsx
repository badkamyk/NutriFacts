'use client'
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { Input } from "../../../components/Input";


export default function Contact() {
    const [formInputs, setFormInputs] = useState({
        email: "",
        subject: "",
        message: "",
    });
    const formRef = useRef<HTMLFormElement>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormInputs((prev: typeof formInputs) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        emailjs.sendForm('service_id', 'template_id', formRef.current as string | HTMLFormElement, 'key_id')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        setFormInputs({
            email: "",
            subject: "",
            message: "",
        })
    }

    return (
        <section className="bg-white dark:bg-gray-900 min-h-screen">
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact
                    Us</h2>
                <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl" role="subtitle">Got a
                    technical issue? Want to send feedback about a feature? Need details about our Business plan?
                    Let us know.</p>
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-8" role="form">
                    <div>
                        <label htmlFor="email"
                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                        {/*<input type="email" id="email" onChange={handleChange} name="email" value={formInputs.email}*/}
                        {/*       className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"*/}
                        {/*       placeholder="name@example.com" required/>*/}
                        <Input type="email" id="email" onChange={handleChange} name="email" value={formInputs.email}
                               placeholder="name@example.com" required
                               className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"/>
                    </div>
                    <div>
                        <label htmlFor="subject"
                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                        {/*<input type="text" id="subject" onChange={handleChange} name="subject"*/}
                        {/*       value={formInputs.subject}*/}
                        {/*       className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"*/}
                        {/*       placeholder="Let us know how we can help you" required/>*/}
                        <Input type="text" id="subject" onChange={handleChange} name="subject"
                               value={formInputs.subject}
                               className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                               placeholder="Let us know how we can help you" required/>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="message"
                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your
                            message</label>
                        <textarea id="message" rows={6} onChange={handleChange} name="message"
                                  value={formInputs.message}
                                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                  placeholder="Leave a comment..."/>
                    </div>
                    <button type="submit"
                            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-700 sm:w-fit hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send
                        message
                    </button>
                </form>
            </div>
        </section>
    )
}
