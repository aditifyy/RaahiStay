import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Dashboard() {
  return (
    <>
      <Navbar />

      <section className="dashboard-page">
        <h1>Dashboard</h1>

        <p>
          Welcome to your RaahiStay dashboard. Manage bookings,
          explore saved destinations and plan your next getaway.
        </p>
      </section>

      <Footer />
    </>
  );
}

export default Dashboard;