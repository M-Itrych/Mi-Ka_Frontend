import { useNavigate } from "react-router-dom";

const AdminGoTo = ({path, text}) => {
  const navigate = useNavigate();

  const goToBack = () => {
    navigate(path);
  };
  return <a onClick={goToBack} href={path}>{!text ? "Powrót" : text}</a>;
};

export default AdminGoTo;