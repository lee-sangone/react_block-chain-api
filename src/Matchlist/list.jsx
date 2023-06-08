import axios from "axios";
import { useEffect, useState } from "react";
const API_KEY = "2D04652A-1F6D-4D69-BC3E-E7641404E85B";

const MatchListPage = () => {
  const [matchlist, setMatchlist] = useState([]);

  useEffect(() => {
    const getMatchList = async (e) => {
      const { data } = await axios
        .get("https://rest.coinapi.io/v1/trades/latest", {
          headers: {
            "X-CoinAPI-Key": API_KEY,
          },
        })
        .catch((e) => {
          console.log(e);
        });
      setMatchlist(data);
    };

    getMatchList();
    console.log(matchlist);
  }, []);

  useEffect(() => {
    console.log(matchlist);
  }, [matchlist]);

  return <div>경기리스트</div>;
};

export default MatchListPage;
