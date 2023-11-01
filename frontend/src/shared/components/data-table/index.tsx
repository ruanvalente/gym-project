type DataTableProps = {
  headerList: Array<string>;
};

export function DataTable({ headerList }: DataTableProps) {
  return (
    <div className="container mx-auto mt-6 bg-white rounded-md shadow-md">
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              {headerList.map((header, index) => (
                <th key={index} scope="col" className="px-6 py-3 uppercase">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                Cha Ji-Hun
              </th>
              <td className="px-6 py-4">example@email.com</td>
              <td className="px-6 py-4">22</td>
              <td className="px-6 py-4">
                <button className="mr-4 text-blue-400">editar</button>
                <button className="ml-0 text-red-400">apagar</button>
              </td>
            </tr>
            <tr className="border-b">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                Cha Ji-Hun
              </th>
              <td className="px-6 py-4">example@email.com</td>
              <td className="px-6 py-4">22</td>
              <td className="px-6 py-4">
                <button className="mr-4 text-blue-400">editar</button>
                <button className="ml-0 text-red-400">apagar</button>
              </td>
            </tr>
            <tr className="border-b">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                Cha Ji-Hun
              </th>
              <td className="px-6 py-4">example@email.com</td>
              <td className="px-6 py-4">22</td>
              <td className="px-6 py-4">
                <button className="mr-4 text-blue-400">editar</button>
                <button className="ml-0 text-red-400">apagar</button>
              </td>
            </tr>
            <tr className="border-b">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                Cha Ji-Hun
              </th>
              <td className="px-6 py-4">example@email.com</td>
              <td className="px-6 py-4">22</td>
              <td className="px-6 py-4">
                <button className="mr-4 text-blue-400">editar</button>
                <button className="ml-0 text-red-400">apagar</button>
              </td>
            </tr>
            <tr className="border-b">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                Cha Ji-Hun
              </th>
              <td className="px-6 py-4">example@email.com</td>
              <td className="px-6 py-4">22</td>
              <td className="px-6 py-4">
                <button className="mr-4 text-blue-400">editar</button>
                <button className="ml-0 text-red-400">apagar</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
