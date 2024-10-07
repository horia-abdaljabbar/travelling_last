// import React, { createContext, useContext, useEffect, useState } from 'react';

// export const LanguageContext = createContext();

// export const useLanguage = () => useContext(LanguageContext);

// export const LanguageContextProvider = ({ children }) => {
//   const [language, setLanguage] = useState('ar');
//   const [languageStorage, setLanguageStorage] = useState(localStorage.getItem('lang'));
// const getLang=()=>{
//   if(languageStorage =='ar'){
//     setLanguage('ar');
//     console.log(language+"hhhhh");
//   }
//   else if(languageStorage =='en'){
//     setLanguage('en');
//     console.log(language+"hhhhh");

//   }
// }
// useEffect(()=>{
//   getLang();
// },[languageStorage])
//   return <LanguageContext.Provider value={{language,setLanguage,setLanguageStorage}}>
//     {children}
//   </LanguageContext.Provider>;
//   // return (
//   //   <LanguageContext.Provider value={{ language, setLanguage }}>
//   //     {children}
//   //   </LanguageContext.Provider>
//   // );
//   console.log("hi");
// };

// export default LanguageContextProvider
