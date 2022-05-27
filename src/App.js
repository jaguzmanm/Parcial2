import "./App.css";
import SpaceList from "./components/spacesList";
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";

import { IntlProvider, FormattedMessage } from "react-intl";

function App() {
  const locale = navigator.language;
  let lang;
  if (locale.startsWith("es")) {
    lang = localeEsMessages;
  } else {
    lang = localeEnMessages;
  }
  return (
    <div>
      <IntlProvider locale={locale} messages={lang}>
        <h1>
          <FormattedMessage id="space" />
        </h1>
        <SpaceList />
      </IntlProvider>
    </div>
  );
}

export default App;
