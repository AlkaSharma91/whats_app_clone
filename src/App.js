import Messanger from "./components/Messanger";
import AccountProvider from "./context/AccountProvider";
import UserProvider from "./context/UserProvider";
import TemplateProvider from "./template/TemplateProvider";

function App() {
  return (
    <TemplateProvider>
      <UserProvider>
        <AccountProvider>
          <Messanger />
        </AccountProvider>
      </UserProvider>
    </TemplateProvider>
  );
}

export default App;
