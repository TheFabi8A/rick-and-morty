import { useContext, useState } from "react";
import { CharactersContext } from "../../ApplicationContext";
import { Input, Button } from "@nextui-org/react";
import { EyeSlashFilledIcon } from "./svg/EyeSlashFilledIcon";
import { EyeFilledIcon } from "./svg/EyeFilledIcon";

export default function FormLogin() {
  const { setIsAuth } = useContext(CharactersContext);
  const [isVisible, setIsVisible] = useState(false);

  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const [userEmailErrorMessage, setUserEmailErrorMessage] = useState("");
  const [userPasswordErrorMessage, setUserPasswordErrorMessage] = useState("");

  const toggleVisibilityPasswordIcon = () => setIsVisible(!isVisible);

  const handleFormSubmit = () => {
    setIsAuth(true);
  };

  const handleUserEmailBlur = () => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (userEmail.length === 0) {
      setUserEmailErrorMessage("Por favor ingrese su correo");
    } else if (!emailPattern.test(userEmail)) {
      setUserEmailErrorMessage("Ingrese un correo válido");
    } else {
      setUserEmailErrorMessage("");
    }
  };

  const handleButtonSubmit = () => {
    if (userPassword !== "admin" && userEmail !== "admin@admin.com") {
      setUserPasswordErrorMessage("Contraseña incorrecta");
      setUserEmailErrorMessage("Correo incorrecto");
      console.log("credenciales inválidas");
    } else if (userPassword !== "admin") {
      setUserPasswordErrorMessage("Contraseña incorrecta");
    } else if (userEmail !== "admin@admin.com") {
      setUserEmailErrorMessage("Correo incorrecto");
    } else if (userPassword === "admin" && userEmail === "admin@admin.com") {
      handleFormSubmit();
    } else return;
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

  return (
    <>
      <form
        onSubmit={handleFormSubmit}
        className="flex flex-col justify-center gap-4 max-w-xs mx-auto h-screen p-4">
        <h1 className="text-center text-3xl font-black">Login</h1>
        <Input
          name="user-email"
          onBlur={handleUserEmailBlur}
          onChange={handleInputsChange}
          color="secondary"
          variant="bordered"
          type="email"
          label="Email Address"
          isRequired
          errorMessage={userEmailErrorMessage}
        />
        <Input
          name="user-password"
          onBlur={handleUserPasswordBlur}
          onChange={handleInputsChange}
          color="secondary"
          label="Password"
          variant="bordered"
          endContent={
            <button
              className="focus:outline-none"
              type="button"
              onClick={toggleVisibilityPasswordIcon}>
              {isVisible ? (
                <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
              ) : (
                <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
              )}
            </button>
          }
          type={isVisible ? "text" : "password"}
          isRequired
          errorMessage={userPasswordErrorMessage}
        />
        <Button
          onClick={handleButtonSubmit}
          color="secondary"
          variant="shadow"
          type="button">
          Sign in to account
        </Button>
      </form>
    </>
  );
}
