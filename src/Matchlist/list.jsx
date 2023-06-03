import axios from "axios";
import { useEffect, useState } from "react";

const MatchListPage = () => {
  const [Matchlist, setMatchlist] = useState([]);

  useEffect(() => {
    const getMatchList = async (e) => {
      const { data } = await axios
        .get(
          "https://soccer-football-info.p.rapidapi.com/matches/view/basic/",
          {
            params: { i: "1", l: "en_US" },
            headers: {
              "X-RapidAPI-Key":
                "554bd53ecdmsh7f80505d4814a44p114b4bjsn09bbcc73d52f",
              "X-RapidAPI-Host": "soccer-football-info.p.rapidapi.com",
            },
          }
        )
        .catch((e) => {
          console.log(e);
        });
      setMatchlist(data.result);
    };

    getMatchList();
    console.log(Matchlist);
  }, []);

  return <div>경기리스트</div>;
};

export default MatchListPage;
