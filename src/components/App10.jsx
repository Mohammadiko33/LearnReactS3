import React, { useLayoutEffect, useState , Profiler } from 'react'

export default function App9() {

 const [divStyle , setDivStyle] = useState({})
 const [num , setNum] = useState(1)

 useLayoutEffect(() => {

  const randint = Math.floor(Math.random() * 516)

  for (let i = 0; i < 100_000_001 ; i++){
   if (i === 100_000_000){
    console.log("for repeating 100,000,000")
    setDivStyle({paddingTop: `${randint}px`})
   }
  }
 } , [num])

 const aboutNumHandler = (id , phase  ,actualDuration ,startTime ,commitTime , baseDuration ) => {
  console.log("id: ",id)
  console.log("phase: ",phase)
  console.log("actualDuration: ",actualDuration)
  console.log("baseDuration: ",baseDuration)
  console.log("startTime: ",startTime)
  console.log("commitTime: ",commitTime , "\n------------------------------")
 }

  return (
    <div style={divStyle} className='dfcjac g1 ac'>
     <Profiler id='aboutNum' onRender={aboutNumHandler}>
     <span> {num} </span>
     </Profiler>
     <button className='w2-5 h2-5 br10 bnone bg-primary cwhite bsdbm' onClick={() => setNum(prevNum => prevNum + 1)}>+</button>
     <button className='w2-5 h2-5 br10 bnone bg-danger cwhite bsrm' onClick={() => setNum(prevNum => prevNum - 1)}>-</button>
    </div>
  )
}

// در اینجا متن شما با راستچین و چپچین صحیح و اصلاح کلمات بههمریخته ارائه میشود:

// ---

// ### **کامپوننت `<Profiler>` در React (نسخه ۱۹.۱)**  
// 📌 **هدف:** اندازهگیری عملکرد رندرینگ بخشهای مختلف برنامه بهصورت برنامهنویسی.  

// ---

// #### **۱. روش استفاده پایه:**  
// ```jsx
// <Profiler id="مشخصه_بخش" onRender={تابع_بازخوانی}>
//   {/* کامپوننت(های) مورد نظر */}
// </Profiler>
// ```  
// - **دو Prop ضروری:**  
//   - **`id`:** شناسه منحصربهفرد (رشتهای) برای بخش مورد اندازهگیری.  
//   - **`onRender`:** تابعی که پس از هر رندر فراخوانی میشود.  

// #### **۲. پارامترهای تابع `onRender`:**  
// تابع بازخوانی ۶ پارامتر دریافت میکند:  
// ۱. **`id`:** شناسه Profiler.  
// ۲. **`phase`:** نوع رندر (`mount`، `update` یا `nested-update`).  
//    - تفاوت `update` و `nested-update`:  
//      - `update` = تک رندر بهینه  
//      - `nested-update` = چند رندر غیربهینه (مگر عمدی باشد).  
// ۳. **`actualDuration`:** زمان واقعی رندر **با** بهینهسازیها.  
// ۴. **`baseDuration`:** زمان رندر **بدون** بهینهسازی (بدون `memo` و ...).  
// ۵. **`startTime`:** زمان شروع رندر.  
// ۶. **`commitTime`:** زمان اتمام رندر (مشترک بین تمام Profilerها).  

// 📊 **تحلیل دادهها:**  
// - مقایسه `actualDuration` و `baseDuration`: نشاندهنده تأثیر بهینهسازیها (مثلاً `memo`).  
// - کاهش `actualDuration` پس از mount اولیه: نشانه استفاده مؤثر از بهینهسازیها.  

// ---

// #### **۳. مثالهای کاربردی:**  
// ##### **اندازهگیری چند بخش:**  
// ```jsx
// <App>
//   <Profiler id="سایدبار" onRender={onRender}>
//     <Sidebar />
//   </Profiler>
//   <Profiler id="محتوا" onRender={onRender}>
//     <Content />
//   </Profiler>
// </App>
// ```  

// ##### **استفاده تو در تو:**  
// ```jsx
// <Profiler id="والد" onRender={onRender}>
//   <Parent>
//     <Profiler id="فرزند" onRender={onRender}>
//       <Child />
//     </Profiler>
//   </Parent>
// </Profiler>
// ```  

// ---

// #### **۴. نکات حیاتی:**  
// - **سربار عملکردی:** Profiler در محیط **Production** بهصورت پیشفرض **غیرفعال** است.  
// - **نسخه خاص React:** برای Profiling باید از نسخه خاص React با قابلیت اندازهگیری استفاده کنید.  
// - **استفاده محتاطانه:** فقط برای بخشهای **حساس به عملکرد** استفاده شود.  
// - **ابزار کمکی:** از **تب Profiler در React Developer Tools** برای تحلیل بهتر استفاده کنید.  

// ---

// #### **۵. بهترین کاربردها:**  
// - شناسایی **کندترین بخشها** در رندرینگ.  
// - بررسی تأثیر **بهینهسازیها** (مثل `React.memo`، `useMemo`).  
// - مقایسه عملکرد **نسخههای مختلف کد**.  

// ⚠️ **هشدار:**  
// - Profiler ممکن است باعث **کاهش مصنوعی عملکرد** شود.  
// - تنها در مراحل **تحلیل و بهینهسازی** از آن استفاده کنید.  

// ---