import Announcements from "@/components/Announcements";
import BigCalendar from "@/components/BigCalendar";
import EventCalendar from "@/components/EventCalendar";

const ParentPage = () => {
  <div className="flex-1 p-4 flex gap-4 flex-col xl:flex-row">
    {/* kiri */}
    <div className="w-full xl:w-2/3 flex gap-4 flex-col">
      <div className="h-full bg-white p-4 rounded-md">
        <h1 className="text-xl font-semibold">Schedule (Nama Anak)</h1>
        <BigCalendar />
      </div>
    </div>
    {/* kanan */}
    <div className="w-full xl:w-1/3 flex flex-col gap-4">
      <EventCalendar />
      <Announcements />
    </div>
  </div>;
};

export default ParentPage;
