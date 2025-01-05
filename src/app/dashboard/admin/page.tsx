import CountChart from "@/app/components/CountChart";
import UserCard from "@/app/components/UserCard";
import AttendanceChart from "@/app/components/AttendanceChart";

const AdminPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* kiri */}
      <div className="w-full lg:w-2/3 flex gap-4 flex-col">
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="student" />
          <UserCard type="teacher" />
          <UserCard type="parent" />
          <UserCard type="staff" />
        </div>

        <div className="flex gap-4 flex-col lg:flex-row">
          <div className="w-full lg:w-1/3 h-[450px]">
            <CountChart />
          </div>
          <div className="w-full lg:w-2/3 h-[450px]">
            <AttendanceChart />
          </div>
        </div>
      </div>
      {/* kanan */}
      <div className="w-full lg:w-1/3"></div>
    </div>
  );
};

export default AdminPage;