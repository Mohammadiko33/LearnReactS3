let fakeUser = {
  id: 0,
  userName: "fake user name",
  password: 12587436,
}

function showUserInfo (user) {
  return `userID: ${fakeUser.id} , user name : ${fakeUser.userName} , user password: ${fakeUser.password}`
  return `userID: ${user.id} , user name : ${user.userName} , user password: ${user.password}`
}

const userMohammad = {
  id: 1,
  userName: "Mohammad",
  password: "Mohammad__9142718"
}

console.log(showUserInfo(userMohammad))

fakeUser.password = "MohammadIKO__18924716"

console.log(showUserInfo(userMohammad))

// high order components = کامپوننت های مرتبه بالا 
// pure funtions = فانکشن های خالص 
// impure funtions = فانکشن های نا خالص
// --------------------------------------
// یک شزظ برای اینکه فانکشن خالص باشه یا نباشه اینکه اگر تابع مورد نظر ما که استفادش میکنیم اگر بع اعضای عر ورودی خاص یک خروحی یونیک و منحصر به فرد همون ورودی برای ما ذاشته باشه اون تابع خالا یکی از شرط های خالص رو داره 
// شرط بعدی اینکه تابع خالص فقط فقط میتونه برای محاسبه خروجی فقط فقط از ورودی خودش و از وریبل های لوکال و داخلی استفاده کرده باشه 
// پس یعنی اگر تابعی برای محاسبه خروحی خودش از وریبل های اسکوپ های دیگه و گلوبال اسکوپ ها استفاده کرده باشه اون تابع خالص نیست
// پس شرط های به اون صورت میشه 
// شرظ اول به اعضای هر ایپوت و ورودی فقط باید یک خروجی متفاوتپ باید ما داشته باشه 
// شرط دوم اینکه این تابع ما فقط از لوکال اسکوپ وریبل استفاده کرده باشه و از ورودی خودش برای محاسبه خروجی 
// هرگز نباید از گلوبال اسکوپ یا بیرون از اسکوپ فانکشن استفاده کرده باشه
// مثلا ما نمیتونیم از مس دات رندوم استفاده کنیم چون ما نمیتونم توی وریبل های خالص از ورودی گلوبال استفاده کنیم ما توی توابع خالص نمیتوانیم دام رو دستکاری کرده باشیم چون شرط بعذی اینکه
// نداشتن ساید افکت هست به فارسی یعنی عوارض جانبی یعنی اگه تابعی بیاد موقع اجرا شدن بیاد جاهای خارج از لوکالشو تغییر بده این میشه تابع ایپیورر یا نا خالص 
// اگر تابع ی داشتیم که موصع اجرا شدن بیاد یک جا هایی خارج از لوکالشو تغییر بدع یا کلا ازشون استفاده کرده باشه این دیگه از خالص یودن دز میائ و میشه ناخالص
// اگر فانکشنی به اعضای هر ورودی یک خروجی دادن از وریبل های لوکال و از اینپوت استفاده کرده باشه و از  ن ای پی ای ن از ریسپانو ن از گلوبال یعنی اگر تابع داشته باشیم که بع عنوان ح الاعاتی خارج از خودش رورو تغییر نیستش و بهش میگن تابع اینچیور یا همان نا خالص 
// به چه دردی میخورند ؟ 
// توباع خالص از اونجایی که مشحصه چونکته چه هملکرد میخان داشته باشن و چونکه فقط از وریبل های لوکال خودشون 
