import { useState } from 'react';

const API_URL = 'https://binaportfolio-backend.onrender.com';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [touched, setTouched] = useState({});
    const [status, setStatus] = useState({ type: '', message: '' });
    const [loading, setLoading] = useState(false);

    // Validation rules
    const validate = (values) => {
        const errors = {};
        if (!values.name) {
            errors.name = 'Name is required';
        }
        if (!values.email) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(values.email)) {
            errors.email = 'Email address is invalid';
        }
        if (!values.subject) {
            errors.subject = 'Subject is required';
        }
        if (!values.message) {
            errors.message = 'Message is required';
        } else if (values.message.length < 10) {
            errors.message = 'Message must be at least 10 characters';
        }
        return errors;
    };

    const errors = validate(formData);

    const handleBlur = (e) => {
        setTouched({ ...touched, [e.target.name]: true });
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const dismissNotification = () => {
        setStatus({ type: '', message: '' });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setTouched({
            name: true,
            email: true,
            subject: true,
            message: true
        });

        if (Object.keys(errors).length > 0) {
            setStatus({
                type: 'error',
                message: 'Please fill in all required fields correctly.'
            });
            return;
        }

        setLoading(true);
        setStatus({ type: '', message: '' });

        try {
            const response = await fetch(`${API_URL}/api/contact`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (response.ok) {
                setStatus({ type: 'success', message: 'Message sent successfully!' });
                setFormData({ name: '', email: '', subject: '', message: '' });
                setTouched({});
            } else {
                setStatus({
                    type: 'error',
                    message: data.message || `Error: ${response.status} - ${response.statusText}`
                });
            }
        } catch (error) {
            setStatus({
                type: 'error',
                message: `Connection error: ${error.message}. Please try again.`
            });
        } finally {
            setLoading(false);
        }
    };

    const getInputClassName = (fieldName) => `
        w-full px-4 py-3 rounded-xl bg-white/5 border
        ${touched[fieldName] && errors[fieldName]
            ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500'
            : 'border-white/10 focus:border-purple-500 focus:ring-purple-500'
        }
        text-white focus:outline-none focus:ring-1 transition-all duration-300
        ${touched[fieldName] && !errors[fieldName] && 'border-green-500/50'}
    `;

    return (
        <div className="relative min-h-screen w-full pt-24 pb-20 overflow-hidden" id="contact">
            {/* Background matching Hero */}
            <div className="absolute inset-0 bg-black">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(76,29,149,0.08),rgba(0,0,0,0.2))]"></div>
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:120px_120px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_70%)]"></div>
            </div>

            {/* Content Container */}
            <div className="relative container mx-auto px-4 md:px-6 z-10">
                {/* Section Header (editorial style) */}
                <div className="mb-10 md:mb-14">
                    <p className="text-white/60 text-sm md:text-base tracking-widest uppercase mb-3 text-center">Contact</p>
                    <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight text-center">Let’s build something great</h2>
                </div>

                {/* Contact Grid */}
                <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Left Side - Contact Info */}
                    <div className="space-y-6">
                        <div className="rounded-3xl p-8 border border-white/10 bg-white/[0.04] backdrop-blur-xl">
                            <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
                            <p className="text-gray-300 mb-8">
                                Have a project in mind? Let's discuss how we can work together to create something amazing.
                            </p>

                            {/* Contact Details */}
                            <div className="space-y-6">
                                {[
                                    { icon: "📧", title: "Email", value: "binibelaygom@gmail.com" },
                                    { icon: "📱", title: "Phone", value: "+251 902 888 906" },
                                    { icon: "📍", title: "Location", value: "Addis Ababa, Ethiopia" }
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center gap-4 p-4 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10">
                                        <span className="text-2xl">{item.icon}</span>
                                        <div>
                                            <h4 className="text-gray-400 text-sm">{item.title}</h4>
                                            <p className="text-white font-medium">{item.value}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Social Links */}
                            <div className="flex gap-4 mt-8">
                                {[
                                    { name: "github", url: "https://github.com/biniyam-belay" },
                                { name: "linkedin", url: "https://www.linkedin.com/in/biniyam-belay-147673270/" },
                                { name: "twitter", url: "https://x.com/biniy_am" },
                                { name: "instagram", url: "https://www.instagram.com/biniya_am/" },
                                ].map((social) => (
                                    <a
                                        key={social.name}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 rounded-xl backdrop-blur-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all duration-300"
                                    >
                                        <i className={`fab fa-${social.name} text-xl`}></i>
                                    </a>
                                ))}
                            </div>

                        </div>
                    </div>

                    {/* Right Side - Contact Form */}
                    <div className="rounded-3xl p-8 border border-white/10 bg-white/[0.04] backdrop-blur-xl">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div>
                                    <label className="text-gray-300 text-sm mb-2 block">
                                        Your Name
                                        <span className="text-red-400 ml-1">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={getInputClassName('name')}
                                        placeholder="Your Name"
                                    />
                                    {touched.name && errors.name && (
                                        <p className="mt-1 text-sm text-red-400">{errors.name}</p>
                                    )}
                                </div>
                                <div>
                                    <label className="text-gray-300 text-sm mb-2 block">
                                        Your Email
                                        <span className="text-red-400 ml-1">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={getInputClassName('email')}
                                        placeholder="your@email.com"
                                    />
                                    {touched.email && errors.email && (
                                        <p className="mt-1 text-sm text-red-400">{errors.email}</p>
                                    )}
                                </div>
                            </div>

                            <div>
                                <label className="text-gray-300 text-sm mb-2 block">
                                    Subject
                                    <span className="text-red-400 ml-1">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={getInputClassName('subject')}
                                    placeholder="Project Inquiry"
                                />
                                {touched.subject && errors.subject && (
                                    <p className="mt-1 text-sm text-red-400">{errors.subject}</p>
                                )}
                            </div>

                            <div>
                                <label className="text-gray-300 text-sm mb-2 block">
                                    Message
                                    <span className="text-red-400 ml-1">*</span>
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    rows="4"
                                    className={getInputClassName('message')}
                                    placeholder="Your message here..."
                                ></textarea>
                                {touched.message && errors.message && (
                                    <p className="mt-1 text-sm text-red-400">{errors.message}</p>
                                )}
                            </div>

                            {status.message && (
                                <div className={`relative p-4 pr-12 rounded-xl ${status.type === 'success'
                                        ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                                        : 'bg-red-500/10 text-red-400 border border-red-500/20'
                                    }`}>
                                    <div className="flex items-center">
                                        <span className="mr-2">
                                            {status.type === 'success' ? (
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                            ) : (
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            )}
                                        </span>
                                        {status.message}
                                    </div>
                                    <button
                                        type="button"
                                        onClick={dismissNotification}
                                        className="absolute top-4 right-4 hover:opacity-75 transition-opacity"
                                        aria-label="Dismiss notification"
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={loading || Object.keys(errors).length > 0}
                                className="w-full px-8 py-4 rounded-xl text-sm font-medium bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {loading ? (
                                    <span className="flex items-center justify-center">
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Sending...
                                    </span>
                                ) : 'Send Message'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-40 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]"></div>
            </div>
        </div>
    );
};

export default Contact;
