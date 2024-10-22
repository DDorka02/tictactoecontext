import { createContext, useState } from "react";
export const KattContext = createContext("");

export const KattProvider = ({ children }) => {
  const [lista, setLista] = useState([
    true,
    false,
    false,
    true,
    false,
    true,
    false,
    true,
    true,
  ]);

  function katt(adat) {
    console.log(adat)
    const sl = [...lista];
    if ((sl[adat] === false)) {
      sl[adat] = true;
    } else {
      sl[adat] = false;
    }
    setLista([...sl]);
    console.log(lista)
  }
  return (
    <KattContext.Provider value={{ lista, katt }}>
      {children}
    </KattContext.Provider>
  );
};
