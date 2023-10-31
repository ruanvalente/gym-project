export function StudentList() {
  return (
    <div>
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
      <div className="container mx-auto mt-6 bg-white rounded-md shadow-md">
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-white dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3 uppercase">
                  Nome
                </th>
                <th scope="col" className="px-6 py-3 uppercase">
                  E-mail
                </th>
                <th scope="col" className="px-6 py-3 uppercase">
                  Idade
                </th>
                <th scope="col" className="px-6 py-3"></th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Cha Ji-Hun
                </th>
                <td className="px-6 py-4">example@email.com</td>
                <td className="px-6 py-4">22</td>
                <td className="px-6 py-4">
                  <button className="mr-4 text-blue-400">editar</button>
                  <button className="ml-4 text-red-400">apagar</button>
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Darius Cummings
                </th>
                <td className="px-6 py-4">example@email.com</td>
                <td className="px-6 py-4">33</td>
                <td className="px-6 py-4">
                  <button className="mr-4 text-blue-400">editar</button>
                  <button className="ml-4 text-red-400">apagar</button>
                </td>
              </tr>
              <tr className="bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Carmelita Marsham
                </th>
                <td className="px-6 py-4">example@email.com</td>
                <td className="px-6 py-4">24</td>
                <td className="px-6 py-4">
                  <button className="mr-4 text-blue-400">editar</button>
                  <button className="ml-4 text-red-400">apagar</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
