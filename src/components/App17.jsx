import React, { useState, useEffect, useId } from 'react';
import { Button } from 'react-bootstrap';

// کامپوننت کاربر که useId مخصوص به خود را دارد
const User = ({ index }) => {
  const id = useId(); // این useId برای هر نمونه User کاملاً مستقل است
  const [createdAt] = useState(new Date().toISOString());

  return (
    <li>
      User {index + 1} - ID: <strong className='fwBold fs1-2 fffiracode-vf'>{id}</strong> - Created at: {new Date(createdAt).toLocaleTimeString()}
    </li>
  );
};

const DynamicUserGenerator = () => {
  const [userCount, setUserCount] = useState(0);
  const [isGenerating, setIsGenerating] = useState(false);

  useEffect(() => {
    if (!isGenerating || userCount >= 1000) return;

    const intervalId = setInterval(() => {
      setUserCount(prev => prev + 1);
    }, 50);

    return () => clearInterval(intervalId);
  }, [isGenerating, userCount]);

  const startGeneration = () => {
    setUserCount(0);
    setIsGenerating(true);
  };

  const stopGeneration = () => {
    setIsGenerating(false);
  };

  return (
    <div>
      <h2>Generated Users: {userCount}/1000</h2>
      <div style={{ margin: '10px 0' }}>
        <Button onClick={startGeneration} disabled={isGenerating}>
          Start Generation
        </Button>
        <Button onClick={stopGeneration} disabled={!isGenerating} style={{ marginLeft: '10px' }}>
          Stop
        </Button>
      </div>
      <div >
        <ul className='df jcse fw'>
          {Array.from({ length: userCount }).map((_, index) => (
            <User key={`user-${index}`} index={index} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DynamicUserGenerator;

// نکات کلیدی:
// تفاوت‌های نامگذاری: استفاده از camelCase برای پروپ‌ها و رویدادها.
// فرم‌های کنترل‌شده: مدیریت state از طریق value و onChange.
// عناصر سفارشی: نیاز به توجه به تفاوت‌ها در نامگذاری و انتقال داده.
// پشتیبانی تجربی: استفاده از نسخه‌های آزمایشی React برای ویژگی‌های پیشرفته (با احتیاط در محیط تولید).