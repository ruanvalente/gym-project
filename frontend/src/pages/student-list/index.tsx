import { DataTable } from "../../shared/components/data-table";

export function StudentList() {
  const headerList = ["nome", "e-mail", "idade", ""];
  return (
    <>
      <div className="container flex flex-col w-full p-4 mx-auto mt-6 md:items-center md:justify-center md:flex-row md:p-0">
        <h2 className="flex-1 text-3xl font-bold">Gerenciador de Alunos</h2>
        <div className="flex items-center mt-4">
          <button className="rounded-md text-white bg-red-500 hover:bg-red-800 focus:ring-4 focus:ring-blue-300 font-medium text-sm px-5 py-2.5 mr-2">
            Cadastrar
          </button>
          <input
            className="w-full outline-none block rounded-md border-0 py-1.5 pl-4 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6"
            type="text"
            name="search"
            id="search"
            placeholder="Buscar aluno"
          />
        </div>
      </div>

      <DataTable headerList={headerList} />
    </>
  );
}
