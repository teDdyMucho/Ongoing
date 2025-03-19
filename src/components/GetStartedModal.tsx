import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { X, CheckCircle, DollarSign, Phone, Bot, Loader2 } from 'lucide-react';
import axios from 'axios';

interface GetStartedModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function GetStartedModal({ isOpen, onClose }: GetStartedModalProps) {
  console.log('GetStartedModal rendered with isOpen:', isOpen);

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    businessName: '',
    name: '',
    phone: '',
    position: '',
    email: '',
    businessLink: '',
    industry: '',
    challenges: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // NocoDB API configuration
      const nocodbBaseUrl = import.meta.env.VITE_NOCODB_API_URL;
      const nocodbAuthToken = import.meta.env.VITE_NOCODB_AUTH_TOKEN;
      const nocodbTableId = 'm231p6gjk00cfxe'; // Table ID from the API example
      
      console.log('NocoDB Config:', { 
        baseUrl: nocodbBaseUrl, 
        tableId: nocodbTableId
      });
      
      if (!nocodbBaseUrl || !nocodbAuthToken) {
        throw new Error('NocoDB API configuration is missing');
      }

      // Prepare the API endpoint for inserting a record using the correct format
      const apiEndpoint = `${nocodbBaseUrl}/api/v2/tables/${nocodbTableId}/records`;
      
      console.log('Submitting to endpoint:', apiEndpoint);

      // Send data to NocoDB
      const response = await axios.post(
        apiEndpoint,
        {
          ...formData,
          timestamp: new Date().toISOString(),
          source: 'get_started_form'
        },
        {
          headers: {
            'xc-token': nocodbAuthToken, // Changed from 'xc-auth' to 'xc-token'
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          withCredentials: false
        }
      );

      console.log('API Response:', response);

      if (response.status === 200 || response.status === 201) {
        setSubmitted(true);
        // Reset form data
        setFormData({
          businessName: '',
          name: '',
          phone: '',
          position: '',
          email: '',
          businessLink: '',
          industry: '',
          challenges: ''
        });
      } else {
        throw new Error(`Failed to submit form: ${response.status} ${response.statusText}`);
      }
    } catch (err) {
      console.error('Form submission error:', err);
      // Provide more detailed error message
      if (err instanceof Error) {
        setError(`Error: ${err.message}`);
      } else {
        setError('Something went wrong. Please try again later.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      className="fixed inset-0 z-50 overflow-y-auto"
    >
      <div className="flex min-h-screen items-center justify-center px-4">
        <Dialog.Overlay className="fixed inset-0 bg-black/50" />

        <div className="relative bg-white rounded-xl max-w-2xl w-full mx-auto p-8">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
          >
            <X className="w-6 h-6" />
          </button>

          {!submitted ? (
            <>
              <Dialog.Title className="text-2xl font-bold text-gray-900 mb-6">
                Get Started with OnGoing Workforce
              </Dialog.Title>

              {error && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-600">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Business Name*
                    </label>
                    <input
                      type="text"
                      name="businessName"
                      required
                      value={formData.businessName}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name*
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number*
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Position (Optional)
                    </label>
                    <input
                      type="text"
                      name="position"
                      value={formData.position}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email*
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Business Link (Optional)
                    </label>
                    <input
                      type="url"
                      name="businessLink"
                      value={formData.businessLink}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Industry (Optional)
                    </label>
                    <input
                      type="text"
                      name="industry"
                      value={formData.industry}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Every business faces challenges. How can we support you?*
                  </label>
                  <textarea
                    name="challenges"
                    required
                    value={formData.challenges}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
                    disabled={isSubmitting}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin mr-2" />
                      Submitting...
                    </>
                  ) : (
                    'Submit'
                  )}
                </button>
              </form>
            </>
          ) : (
            <div className="text-center py-8">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Thank You for Your Interest!
              </h3>
              <p className="text-gray-600 mb-8">
                We'll contact you soon to discuss how we can help your business grow.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <button
                  onClick={() => window.location.href = '/pricing'}
                  className="flex items-center justify-center gap-2 p-4 bg-white border-2 border-green-600 text-green-600 rounded-lg hover:bg-green-50 transition-colors"
                >
                  <DollarSign className="w-5 h-5" />
                  <span>Pricing</span>
                </button>
                <button
                  onClick={() => window.location.href = '/contact'}
                  className="flex items-center justify-center gap-2 p-4 bg-white border-2 border-green-600 text-green-600 rounded-lg hover:bg-green-50 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span>Contact</span>
                </button>
                <button
                  onClick={() => window.location.href = '/ai-demo'}
                  className="flex items-center justify-center gap-2 p-4 bg-white border-2 border-green-600 text-green-600 rounded-lg hover:bg-green-50 transition-colors"
                >
                  <Bot className="w-5 h-5" />
                  <span>Try our AI</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </Dialog>
  );
}