/* eslint-disable @typescript-eslint/no-explicit-any */
type BodyListProps = {
  bodyList: Array<any>;
};

export function BodyList({ bodyList }: BodyListProps) {
  return (
    <tbody>
      {bodyList.map((item, rowIndex) => (
        <tr key={rowIndex} className="border-b">
          {Object.keys(item).map((key, columnIndex) => (
            <td key={columnIndex} className="px-6 py-4">
              {item[key]}
            </td>
          ))}
          <td className="px-6 py-4">
            <button
              className="mr-4 text-blue-400"
              onClick={() => console.log("Editar", item.id)}
            >
              Editar
            </button>
            <button
              className="ml-0 text-red-400"
              onClick={() => console.log("Apagar", item.id)}
            >
              Apagar
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  );
}
