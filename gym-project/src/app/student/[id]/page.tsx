"use client";

import { Button } from "@/app/shared/components/button";
import { InputComponent } from "@/app/shared/components/input";

export default function StudentEdit() {
  return (
    <>
      <div className="container flex flex-col w-full p-4 mx-auto mt-6 md:items-center md:justify-center md:flex-row md:p-0">
        <h2 className="flex-1 text-3xl font-bold">Editar aluno</h2>
        <div className="flex items-center mt-4">
          <Button>Voltar</Button>
          <Button className="gym__button--primary">Salvar</Button>
        </div>
      </div>

      <div className="container flex flex-col w-full p-4 mx-auto mt-6 bg-white">
        <form>
          <InputComponent.Root>
            <InputComponent.Label
              className="block py-2 text-sm font-bold uppercase"
              htmlFor="fullName"
            >
              nome completo
            </InputComponent.Label>
            <InputComponent.Input
              type="text"
              name="fullName"
              id="fullName"
              placeholder="Ex: Joe Smith"
            />
          </InputComponent.Root>

          <InputComponent.Root>
            <InputComponent.Label
              className="block py-2 mt-2 text-sm font-bold uppercase"
              htmlFor="e-mail"
            >
              endereço de e-mail
            </InputComponent.Label>
            <InputComponent.Input
              type="email"
              name="e-mail"
              id="e-mail"
              placeholder="Ex: joe.smith@email.com"
            />
          </InputComponent.Root>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div>
              <InputComponent.Root>
                <InputComponent.Label
                  className="block py-2 mt-2 text-sm font-bold uppercase"
                  htmlFor="age"
                >
                  idade
                </InputComponent.Label>
                <InputComponent.Input
                  type="text"
                  name="age"
                  id="age"
                  placeholder="Ex: 25"
                />
              </InputComponent.Root>
            </div>
            <div>
              <InputComponent.Root>
                <InputComponent.Label
                  className="block py-2 mt-2 text-sm font-bold uppercase"
                  htmlFor="weight"
                >
                  peso (em kg)
                </InputComponent.Label>
                <InputComponent.Input
                  type="number"
                  name="weight"
                  id="weight"
                  placeholder="Ex: 54"
                />
              </InputComponent.Root>
            </div>
            <div>
              <InputComponent.Root>
                <InputComponent.Label
                  className="block py-2 mt-2 text-sm font-bold uppercase"
                  htmlFor="height"
                >
                  altura
                </InputComponent.Label>
                <InputComponent.Input
                  type="number"
                  name="height"
                  id="height"
                  placeholder="Ex: 170"
                />
              </InputComponent.Root>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
