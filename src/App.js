import AppRoutes from "routes/Routes";

import { useUiContext } from "contexts/UI/ui.context";

function App() {
  const {
    state: { theme },
  } = useUiContext();
  return (
    <div className="App" style={{ ...theme.style }}>
      <AppRoutes />
    </div>
  );
}

export default App;
