import { UserAuth } from "@/context/AuthContext";
import { useOutsideClick } from "@/hooks/useOutsideClick ";
import { ROUTES } from "@/utils/routes";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";

const Action = () => {
  const [open, setOpen] = useState(false);

  const { i18n } = useTranslation();

  const navigate = useNavigate();

  const { user } = UserAuth();

  const ref = useOutsideClick(() => {
    setOpen(false);
  });

  const handleOpenLanguage = () => {
    setOpen(true);
  };

  const handleLanguage = (value: string) => () => {
    i18n.changeLanguage(value);
    setOpen(false);
  };

  const handleAuth = () => {
    if (user) {
      navigate(ROUTES.PROFILE);
    } else {
      navigate(ROUTES.LOGIN);
    }
  };

  return (
    <div className="flex-1 flex justify-end items-center">
      <div className="relative">
        <button className="p-2" onClick={handleOpenLanguage}>
          <i className="fa-solid fa-earth-asia text-xl"></i>
        </button>
        {open && (
          <div
            ref={ref}
            className="absolute right-0 shadow-base z-20 bg-white p-2 rounded-lg"
          >
            <li
              className="p-2 w-[100px] flex items-center hover:bg-zinc-50 transition-all cursor-pointer rounded-lg h-10"
              onClick={handleLanguage("en")}
            >
              English
            </li>
            <li
              className="p-2 w-[100px] flex items-center hover:bg-zinc-50 transition-all cursor-pointer rounded-lg h-10"
              onClick={handleLanguage("vi")}
            >
              Tiếng Việt
            </li>
          </div>
        )}
      </div>
      <button className="p-2" onClick={handleAuth}>
        <i className="fa-regular fa-user text-xl"></i>
      </button>
      <Link to={ROUTES.CART} className="p-2">
        <i className="fa-light fa-cart-shopping text-xl"></i>
      </Link>
    </div>
  );
};

export default Action;
