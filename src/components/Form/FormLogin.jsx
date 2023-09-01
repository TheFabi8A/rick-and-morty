import { Input, Button } from "@nextui-org/react";

import { EyeFilledIcon, EyeSlashFilledIcon } from "../svg";

import Index from ".";

export default function FormLogin() {
  const {
    toggleVisibilityPasswordIcon,
    isVisible,
    userEmailErrorMessage,
    userPasswordErrorMessage,
    handleInputsChange,
    handleUserPasswordBlur,
    handleButtonSubmit,
    handleUserEmailBlur,
    handleFormSubmit,
  } = Index();

  return (
    <>
      <form
        onSubmit={handleFormSubmit}
        className="h-[100dvh] flex flex-col justify-center gap-4 max-w-xs mx-auto p-4">
        <h1 className="text-center text-3xl font-black">Ingresar</h1>
        <Input
          name="user-email"
          onBlur={handleUserEmailBlur}
          onChange={handleInputsChange}
          color="secondary"
          variant="bordered"
          type="email"
          label="Correo"
          isRequired
          errorMessage={userEmailErrorMessage}
        />
        <Input
          name="user-password"
          onBlur={handleUserPasswordBlur}
          onChange={handleInputsChange}
          color="secondary"
          label="Contraseña"
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
          type="submit">
          Sign in to account
        </Button>
      </form>
    </>
  );
}
