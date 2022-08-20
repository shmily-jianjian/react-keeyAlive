import { useNavigate } from "react-router-dom";

const Detail = () => {
  const navigate = useNavigate();

  return (
    <>
      <div>Detail</div>
      <button onClick={() => navigate(-1)}>按钮</button>
    </>
  );
};

export default Detail;
