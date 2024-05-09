import { useNavigate } from "react-router-dom";

const AdminGoTo = ({path, text}) => {
  const navigate = useNavigate();

  const goToBack = () => {
    navigate(path);
  };
  return <a onClick={goToBack}>{!text ? "Powrót" : text}</a>;
};

export default AdminGoTo;