import { useNavigate } from "react-router-dom";
import { Button } from "../button";

/* eslint-disable @typescript-eslint/no-explicit-any */
type BodyListProps = {
  bodyList: Array<any>;
};

export function BodyList({ bodyList }: BodyListProps) {
  const navigation = useNavigate();

  function handleNavigationEdit(id: string) {
    navigation(`/student/edit/${id}`);
  }

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
            <Button
              className="gym__button--tertiary"
              onClick={() => handleNavigationEdit(item.id)}
            >
              Editar
            </Button>
            <Button
              className="gym__button--tertiary__danger"
              onClick={() => console.log("Apagar", item.id)}
            >
              Apagar
            </Button>
          </td>
        </tr>
      ))}
    </tbody>
  );
}
