"use client";

import { useState } from "react";
import axios from "axios";
import Header from "../Component/Header";
import Footer from "../Component/Footer";

interface FormData {
  name: string;
  address: string;
  email: string;
  phone: string;
  quantity: number;
  roastType: string;
  packageSize: string;
  comments: string;
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  message: string;
  isError?: boolean;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  message,
  isError = false,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-800 p-6 rounded-lg max-w-sm w-full">
        <h2
          className={`text-2xl font-bold mb-4 ${
            isError ? "text-red-500" : "text-green-500"
          }`}
        >
          {title}
        </h2>
        <p className="text-white mb-6">{message}</p>
        <button
          onClick={onClose}
          className="bg-[#ff5733] hover:bg-[#ff4520] text-white px-4 py-2 rounded-md transition-colors duration-200"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default function Component() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    address: "",
    email: "",
    phone: "",
    quantity: 1,
    roastType: "medium",
    packageSize: "250",
    comments: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [modalState, setModalState] = useState({
    isOpen: false,
    title: "",
    message: "",
    isError: false,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Replace with your actual API endpoint
      const response = await axios.post(
        "https://api.example.com/pre-order",
        formData
      );

      setModalState({
        isOpen: true,
        title: "Thank You!",
        message:
          "Your pre-order has been successfully placed. We will contact you soon with further details.",
        isError: false,
      });

      // Reset form after successful submission
      setFormData({
        name: "",
        address: "",
        email: "",
        phone: "",
        quantity: 1,
        roastType: "medium",
        packageSize: "250",
        comments: "",
      });
    } catch (error) {
      setModalState({
        isOpen: true,
        title: "Oops!",
        message:
          "Something went wrong while placing your pre-order. Please try again later.",
        isError: true,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const closeModal = () => {
    setModalState((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <>
      <Header />
      <div className="bg-[#0a0a0a] min-h-screen px-4 py-16 text-white">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12 animate-fade-in-down">
            <p className="text-[#ff5733] text-sm font-medium mb-4">
              EXCLUSIVE OFFER
            </p>
            <h2 className="text-4xl font-bold">Pre-order Your Perfect Brew</h2>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-6 animate-fade-in-up"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff5733] transition duration-200"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff5733] transition duration-200"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="address" className="block text-sm font-medium">
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff5733] transition duration-200"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="phone" className="block text-sm font-medium">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff5733] transition duration-200"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="quantity" className="block text-sm font-medium">
                  Pre-order Quantity
                </label>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  min="1"
                  required
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff5733] transition duration-200"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label
                  htmlFor="roastType"
                  className="block text-sm font-medium"
                >
                  Roasting Type
                </label>
                <select
                  id="roastType"
                  name="roastType"
                  value={formData.roastType}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff5733] transition duration-200"
                >
                  <option value="light">Light Roast</option>
                  <option value="medium">Medium Roast</option>
                  <option value="dark">Dark Roast</option>
                </select>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="packageSize"
                  className="block text-sm font-medium"
                >
                  Package Size
                </label>
                <select
                  id="packageSize"
                  name="packageSize"
                  value={formData.packageSize}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff5733] transition duration-200"
                >
                  <option value="250">250 grams</option>
                  <option value="500">500 grams</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="comments" className="block text-sm font-medium">
                Comments
              </label>
              <textarea
                id="comments"
                name="comments"
                value={formData.comments}
                onChange={handleChange}
                rows={4}
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff5733] transition duration-200"
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                disabled={isLoading}
                className={`bg-[#ff5733] hover:bg-[#ff4520] text-white px-8 py-3 rounded-md transition-all duration-200 transform hover:scale-105 ${
                  isLoading ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {isLoading ? "Processing..." : "Place Pre-order"}
              </button>
            </div>
          </form>
        </div>

        <Modal
          isOpen={modalState.isOpen}
          onClose={closeModal}
          title={modalState.title}
          message={modalState.message}
          isError={modalState.isError}
        />
      </div>
      <Footer />
    </>
  );
}
