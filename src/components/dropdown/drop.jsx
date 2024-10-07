// Dropdown.js
import React, { useState,useEffect } from 'react';
import '../dropdown/drop.css';
import { useTranslation } from "react-i18next";


const Dropdown = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false); // حالة التحكم في الفتح والإغلاق
  const { t, i18n } = useTranslation();
  const l=localStorage.getItem('lang');
console.log(l+"Drop");
  const toggleDropdown = (e) => {
    e.preventDefault(); // منع الانتقال إلى رابط آخر
    setIsOpen(!isOpen); // تغيير الحالة عند الضغط لفتح أو إغلاق القائمة
  };
  useEffect(() => {
    localStorage.getItem('i18nextLng');
    }, [i18n, i18n.language])

    useEffect(() => {
        document.querySelector('.dropdown').dir=i18n.dir();
        if (i18n.dir() == 'ltr') {
        }

        else {

        }

    }, [i18n, i18n.language])
  return (
    <div className="dropdown">
      <a href="#" onClick={toggleDropdown} className="dropdown-toggle">
        {t('tours')}{/* الرابط الذي سيظهر القائمة */}
      </a>
      {isOpen && ( // إظهار القائمة فقط إذا كانت الحالة isOpen صحيحة
        <ul className="dropdown-menu">
          {items.map((item, index) => (
            <li key={index}>
              <a href={`#${item}`}>{item}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;

