import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import AdminDashboard from './pages/AdminDashBoard';
import EmployeeDashboard from './pages/EmployeeDashboard';
import ManagerDashboard from './pages/ManagerDashboard';
import Header from './components/Header';
import ExpenseForm from './components/ExpenseForm';

function App() {
  // This would come from auth state (Context, Redux, etc.)
  const userRole = 'Admin'; // Change this to 'Employee' or 'Manager' to test views

  return (
    <Router>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/employee" element={<EmployeeDashboard />} />
          <Route path="/manager" element={<ManagerDashboard />} />
          <Route path="/submit-expense" element={<ExpenseForm />} />
          <Route path="/" element={<DefaultDashboard role={userRole} />} />
        </Routes>
      </main>
    </Router>
  );
}

// Simple component to route users based on their role
const DefaultDashboard = ({ role }) => {
  switch (role) {
    case 'Admin':
      return <AdminDashboard />;
    case 'Employee':
      return <EmployeeDashboard />;
    case 'Manager':
      return <ManagerDashboard />;
    default:
      return <LoginPage />;
  }
};


export default App;
