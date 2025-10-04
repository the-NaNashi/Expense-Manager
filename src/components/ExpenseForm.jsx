import React from 'react';

const ExpenseForm = () => {
    return (
        <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Submit Expense</h1>
            <div className="p-8 bg-white rounded-lg shadow-md">
                 <form className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium">Attach Receipts</label>
                        <input type="file" className="w-full mt-1" />
                    </div>
                     <div>
                        <label className="block text-sm font-medium">Description</label>
                        <input type="text" className="w-full px-3 py-2 mt-1 border rounded-md" />
                    </div>
                     <div>
                        <label className="block text-sm font-medium">Expense Date</label>
                        <input type="date" className="w-full px-3 py-2 mt-1 border rounded-md" />
                    </div>
                     <div>
                        <label className="block text-sm font-medium">Category</label>
                        <input type="text" className="w-full px-3 py-2 mt-1 border rounded-md" />
                    </div>
                     <div className="flex space-x-4">
                        <div className="flex-grow">
                            <label className="block text-sm font-medium">Total amount</label>
                            <input type="number" className="w-full px-3 py-2 mt-1 border rounded-md" />
                        </div>
                         <div>
                            <label className="block text-sm font-medium">Currency</label>
                            <select className="w-full px-3 py-2 mt-1 border rounded-md">
                                <option>USD</option>
                                <option>INR</option>
                                <option>EUR</option>
                            </select>
                         </div>
                     </div>
                     <div>
                        <label className="block text-sm font-medium">Paid by</label>
                        <input type="text" className="w-full px-3 py-2 mt-1 border rounded-md" />
                    </div>
                     <div>
                        <label className="block text-sm font-medium">Remarks</label>
                        <textarea className="w-full px-3 py-2 mt-1 border rounded-md"></textarea>
                    </div>
                     <button type="submit" className="w-full py-2 text-white bg-blue-600 rounded-md">
                        Submit
                    </button>
                 </form>
            </div>
        </div>
    );
};

export default ExpenseForm;
