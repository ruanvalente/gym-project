"use client";

import { Button } from "@/app/shared/components/button";
import { DataTable } from "@/app/shared/components/data-table";
import { InputComponent } from "@/app/shared/components/input";

export default function Student() {
  const headerList = ["id", "nome", "e-mail", "idade"];
  const bodyList = [
    {
      id: 1,
      title: "John Doe",
      email: "john@example.com",
      age: 30,
    },
    {
      id: 2,
      name: "John Doe",
      email: "john@example.com",
      age: 30,
    },
    {
      id: 3,
      name: "John Doe",
      email: "john@example.com",
      age: 30,
    },
  ];

  return (
    <>
      <div className="container flex flex-col w-full p-4 mx-auto mt-6 md:items-center md:justify-center md:flex-row md:p-0">
        <h2 className="flex-1 text-3xl font-bold">Gerenciador de Alunos</h2>
        <div className="flex items-center mt-4">
          <Button className="gym__button--primary">Cadastrar</Button>

          <InputComponent.Root>
            <InputComponent.Input
              type="text"
              name="search"
              id="search"
              placeholder="Buscar aluno"
            />
          </InputComponent.Root>
        </div>
      </div>

      <DataTable
        bodyList={bodyList}
        headerList={headerList}
        hasEditTable={true}
      />
    </>
  );
}
