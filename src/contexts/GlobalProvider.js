import { UiProvider} from "./UI/ui.context";

const GlobalProvider = ({ children }) => (
    <UiProvider>{children}</UiProvider>
)

export default GlobalProvider;