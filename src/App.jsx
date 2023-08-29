import "./tailwind.css";

import Application from "./Application";
import ApplicationContext from "@application-context";

export default function App() {
  return (
    <ApplicationContext>
      <Application />
    </ApplicationContext>
  );
}
