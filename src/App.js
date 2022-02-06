import AppRoutes from "routes/Routes";

import { useUiContext } from "contexts/UI/ui.context";
import { getByQuery } from "services/firebase/firestore.service";
import { useEffect } from "react";

function App() {
  const { theme } = useUiContext();
  useEffect(async() => {
    let bool = true;
    const docs = await getByQuery("inventory", {
      limit: [2],
      where: ["nombre", "==", "Pedro"],
      where: ["apellido", "==", "Perez"],
    });
    console.log(docs);
  }, []);
  return (
    <div className="App" style={{ ...theme.style }}>
      <AppRoutes />
    </div>
  );
}

export default App;
