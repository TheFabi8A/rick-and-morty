export { default as FormLogin } from "./FormLogin";

import { useContext, useState } from "react";
import { CharactersContext } from "@application-context";

export default function Index() {
  const { setIsAuth } = useContext(CharactersContext);

  const [isVisible, setIsVisible] = useState(false);

  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const toggleVisibilityPasswordIcon = () => setIsVisible(!isVisible);

  const handleFormSubmit = () => {
    setIsAuth(true);
  };

  const handleButtonSubmit = (e) => {
    e.preventDefault();

    let passwordErrorMessage = "";
    let emailErrorMessage = "";

    if (userPassword.length !== 0 && userPassword !== "admin") {
      passwordErrorMessage = "Contraseña incorrecta";
    }

    if (userEmail !== "admin@admin.com") {
      emailErrorMessage = "El correo no está registrado";
    }

    if (passwordErrorMessage || emailErrorMessage) {
      setUserPasswordErrorMessage(passwordErrorMessage);
      setUserEmailErrorMessage(emailErrorMessage);
    } else {
      handleFormSubmit();
    }
  };
  const [userEmailErrorMessage, setUserEmailErrorMessage] = useState("");
  const [userPasswordErrorMessage, setUserPasswordErrorMessage] = useState("");

  const handleUserEmailBlur = () => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (userEmail.length === 0) {
      setUserEmailErrorMessage("Porfavor ingrese su correo");
    } else if (!emailPattern.test(userEmail)) {
      setUserEmailErrorMessage("Ingrese un correo válido");
    } else {
      setUserEmailErrorMessage("");
    }
  };

  const handleUserPasswordBlur = () => {
    if (userPassword.length === 0) {
      setUserPasswordErrorMessage("Porfavor ingrese su contraseña");
    } else {
      setUserPasswordErrorMessage("");
    }
  };

  const handleInputsChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "user-email":
        setUserEmail(value);
        break;
      case "user-password":
        setUserPassword(value);
        break;
      default:
        break;
    }
  };

  return {
    userEmailErrorMessage,
    userPasswordErrorMessage,
    handleButtonSubmit,
    toggleVisibilityPasswordIcon,
    handleInputsChange,
    handleUserPasswordBlur,
    handleUserEmailBlur,
  };
}
