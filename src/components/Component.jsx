import { useState } from "react";

export default function Modal({ isOpen, onClose, title, children }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg max-w-6xl w-full p-6">
                <div className="flex justify-between items-center border-b pb-2">
                    <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                        {title}
                    </h2>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                    >
                        ✖
                    </button>
                </div>

                <div className="mt-4 text-gray-600 dark:text-gray-300">
                    {children}
                </div>

                <div className="mt-6 flex justify-end">
                    <button
                        onClick={onClose}
                        className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
}
