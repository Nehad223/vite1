import { useEffect, useState } from "react";
import Error_auth from "./Error_auth";
const TelegramAuth = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (window.Telegram && window.Telegram.WebApp) {
      const tg = window.Telegram.WebApp;
      console.log("Telegram WebApp: ", tg);  // عرض كامل الـ WebApp للتأكد
      if (tg.initDataUnsafe && tg.initDataUnsafe.user) {
        console.log("User data: ", tg.initDataUnsafe.user);  // بيانات المستخدم
        setUser(tg.initDataUnsafe.user);
      } else {
        console.log("User data is not available.");
      }
    }
  }, []);
  
 

  return (
    <div>
      {user ? (
        <div>
          <h2>{user.first_name} </h2>
          <p>  {user.id}</p>
        </div>
      ) : (
        <Error_auth/>
      )}
    </div>
  );
};

export default TelegramAuth;

