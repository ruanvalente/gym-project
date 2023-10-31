export function StudentList() {
  return (
    <div className="container flex mx-auto mt-6">
      <h2 className="flex-1 text-3xl font-bold">Gerenciador de Alunos</h2>
      <button className="rounded-md text-white bg-red-500 hover:bg-red-800 focus:ring-4 focus:ring-blue-300 font-medium  text-sm px-5 py-2.5 mr-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800">
        Cadastrar
      </button>
      <input
        className="outline-none block rounded-md border-0 py-1.5 pl-4 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6;"
        type="text"
        name="search"
        id="search"
        placeholder="Buscar aluno"
      />
    </div>
  );
}
