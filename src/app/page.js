import Banner from "@/components/Banner";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <div className="flex-1">
      <Banner />
      <h1 className="text-3xl font-bold text-center mt-10">Welcome to Wanderlust</h1>
      <p className="text-center mt-4 text-gray-600">
        Your gateway to extraordinary travel experiences around the world.
      </p>
    </div>
  );
}
