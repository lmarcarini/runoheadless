import type { NextPage } from "next";

const headers = new Headers();
headers.append("Authorization", "Basic YWRtaW46YWRtaW4=");

const PlayGround: NextPage = () => {
  const handleClick = async () => {
    const response = await fetch("/graphql/execute.json/Runo/articlelist", {
      headers,
    });
    const data = await response.json();
    console.log(data);
  };
  return (
    <div>
      <button type="button" onClick={handleClick}>
        Fetch List
      </button>
    </div>
  );
};

export default PlayGround;
