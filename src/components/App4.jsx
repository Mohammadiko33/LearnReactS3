import React from "react";
import JavaScriptCourse from "./4.HOCs/JavaScriptCourse";
import ReactCourse from "./4.HOCs/ReactCourse";

export default function App4() {
  return (
    <>
      <JavaScriptCourse />
      <ReactCourse />
    </>
  );
}
// توضیحات
// هایر اوردر کامپوننت یک کامپوننت دیگه ای هستش که یا کامپوننت دیگه ای رو به عنوان ورودی میگیره و حالا روی اون کامپوننت کلی کار انجام میده ب استیت میده بهش ایونت ادد میکنه و سپس کامپوننت جدید رو کامپوننت که کلی کار روش انجام شده رو به عنوان خروجی برمیگردونه
// higher order components که به بحث ری یوزبل بودن کدهمون خیلی خیلی کمک میکنه استفاده دوباره و مجدد داشته باشیم
// ما زمانی بخایم از اچ او سی استفاده میکنیم که لاجیکی رو اینجااستفاده میشه از تکرار اون قسمت جلوگیری کرده باشیم
