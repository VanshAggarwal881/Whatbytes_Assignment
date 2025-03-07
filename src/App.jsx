import "./App.css";
import StatSection from "./components/assessment/StatSection";
import TestHeader from "./components/assessment/TestHeader";
import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Sidebar />
      <TestHeader />
      <StatSection />
    </div>
  );
}

export default App;
