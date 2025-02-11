import AribitroCard from "../Components/ArbitroCard";
import EquipoCard from "../Components/EquipoForm";

const AdminPanel = () => {
  return (
    <>
    <div className="flex flex-col md:flex-row">
      <EquipoCard />
      <AribitroCard/>
      </div>
    </>
  );
};
export default AdminPanel;
