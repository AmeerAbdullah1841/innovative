"use client";
import { useState } from "react";
import Image from "next/image";
import { useI18n } from "@/components/I18nProvider";

export default function JoiningSupport() {
  const { t } = useI18n();
  const [formData, setFormData] = useState({
    name: "",
    cellphone: "",
    email: "",
    address: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/franchise-application', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: "", cellphone: "", email: "", address: "" });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div 
      className="min-h-screen relative"
      style={{
        backgroundImage: 'url(/join.jpg)',
        backgroundSize:'100% ',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay for better text readability - temporarily disabled for testing */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-10" /> */}
      
      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-200 mb-4">
            {t("joining_support_title")}
          </h1>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Franchise Expectations */}
          <div className="bg-black bg-opacity-90 backdrop-blur-sm p-8 rounded-lg shadow-lg border border-white">
            <h2 className="text-2xl font-semibold text-white mb-6">
              {t("franchise_expectations_title")}
            </h2>
            <div className="space-y-4 text-gray-200">
              <p className="text-lg font-medium text-white mb-4">
                {t("franchise_expectations_subtitle")}
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-gray-200 mr-2">•</span>
                  <span className="text-white">{t("franchise_criteria_1")}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-200 mr-2">•</span>
                  <span className="text-white">{t("franchise_criteria_2")}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-200 mr-2">•</span>
                  <span className="text-white">{t("franchise_criteria_3")}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-200 mr-2">•</span>
                  <span className="text-white">{t("franchise_criteria_4")}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-200 mr-2">•</span>
                  <span className="text-white">{t("franchise_criteria_5")}</span>
                </li>
              </ul>
            </div>
            <div className="mt-8">
              <a 
                href="#" 
                className="text-gray-400 hover:text-gray-100 underline font-medium"
              >
                {t("get_more_policies")}
              </a>
            </div>
          </div>

          {/* Right Column - Application Form */}
          <div className="bg-black bg-opacity-90 backdrop-blur-sm p-8 rounded-lg shadow-lg border border-white">
            <h2 className="text-2xl font-semibold text-white mb-6">
              {t("franchise_application_title")}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                  {t("name")}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-white bg-gray-800 text-white rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-500"
                  placeholder={t("name_placeholder")}
                  required
                />
              </div>

              <div>
                <label htmlFor="cellphone" className="block text-sm font-medium text-white mb-2">
                  {t("cellphone_number")}
                </label>
                <input
                  type="tel"
                  id="cellphone"
                  name="cellphone"
                  value={formData.cellphone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-white bg-gray-800 text-white rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-500"
                  placeholder={t("cellphone_placeholder")}
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                  {t("email")} <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-white bg-gray-800 text-white rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-500"
                  placeholder={t("email_placeholder")}
                  required
                />
              </div>

              <div>
                <label htmlFor="address" className="block text-sm font-medium text-white mb-2">
                  {t("address")}
                </label>
                <textarea
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 border border-white bg-gray-800 text-white rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-500"
                  placeholder={t("address_placeholder")}
                />
              </div>

              <div className="text-gray-300 text-sm">
                <p>{t("contact_message")}</p>
              </div>

              {/* Success/Error Messages */}
              {submitStatus === 'success' && (
                <div className="bg-green-900 border border-green-600 text-green-200 px-4 py-3 rounded-md">
                  <p className="font-medium">Application submitted successfully!</p>
                  <p className="text-sm">We will contact you within 2-3 business days.</p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-900 border border-red-600 text-red-200 px-4 py-3 rounded-md">
                  <p className="font-medium">Failed to submit application.</p>
                  <p className="text-sm">Please try again or contact us directly.</p>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full font-semibold py-3 px-6 rounded-md transition-colors duration-200 ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-gray-600 hover:bg-gray-700'
                } text-white`}
              >
                {isSubmitting ? 'Submitting...' : t("send")}
              </button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
}
