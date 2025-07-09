import React, { useMemo, useState } from "react";
import SubApp19 from "./20.with-context/SubApp19";
import { Name } from "./20.with-context/Context";

export default function App19() {

  const myNameIs = "MiKO"

  console.log(Name);
  console.log(Name.Consumer);
  console.log(Name.Provider);

  return (
    <Name.Provider value={myNameIs}>
      <div className="dgpc mt10" style={{backgroundImage: "linear-gradient(270deg, transparent, var(--l-gray), transparent)"}}>
        <div className="bgl-blue plr-5 ptb-2 br-2">
           i'm from ( app19 ) , username: {myNameIs}
        </div>
        <SubApp19/>
      </div>
    </Name.Provider>
  );
}

// کانتکست یک تبجکت ممعمولی جی اسیه که تو تا پراپ برای ما ارسال میکنه 
// provider : این کامپوننت امکان دسترسی به داده های context را برای کامپوننت های فرزند فراهم میکند 
// consumer 
// مزایا context : 
// 1. prop.drilling جلوگیری از 
// 2. کد تمیزتر و قابل نگه داری تر 
// 3. اشتراک گذاری داده بین کامپوننت های مرتبط 
// معایب context : 
// 1. ممکن است باعث رندر غیرضروری شود (اگر بهینه سازی نشده باشد)
// 2. برای داده های با تغییرات زیاد ممکن است مناسب نباشد 
// 3. اشکال زدایی میتواند چالش بر انگیز باشد
// برای بهینه سازی میتوانیم از یوز ممو استفاده بکنیم
//  <Name.Provider value={useMemo(() => ({theme , setTheme}))}></Name.Provider>