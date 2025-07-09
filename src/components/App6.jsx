import React , {useState} from "react";
import "./6.summerInfo/app.css";
import infos from "./6.summerInfo/datas";
import Summer from "./6.summerInfo/Summer";

export default function App6() {
  const [openID , setOpenID] = useState(null)
  const [datas , setDatas] = useState(infos)

  const handleToggle = id => {
    setOpenID(openID === id ? null : id)
  }

  return (
    <div className="infos_Container">
      <h3 className="fwMedium mb2 fs1-5">questions and answers about login </h3>
      <div className="infos dfc g1">
        {datas ? datas.map(data => <Summer {...data} isOpen={openID === data.id} toggle={() => handleToggle(data.id)} key={data.id} />) : "your data is empty"}        
      </div>
    </div>
  );
}
