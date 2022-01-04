import { Button } from "components/common";
import {useTheme} from "hooks";

function App() {
  const theme = useTheme();
  return (
    <div className="App" style={{...theme, padding: 20}}>
      <Button label="Todos" onClick={()=>{}} />
    </div>
  );
}

export default App;
