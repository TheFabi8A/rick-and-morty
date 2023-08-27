import "./tailwind.css";

import Application from "./Application";
import ApplicationContext from "../ApplicationContext";

export default function App() {
  return (
    <ApplicationContext>
      <Application />
    </ApplicationContext>
  );
}
