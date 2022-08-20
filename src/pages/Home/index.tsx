import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <div>Home</div>
      <input type="text" />
      <button onClick={() => navigate("/detail")}>按钮</button>
    </>
  );
};

export default Home;
