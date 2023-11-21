"use client";

import { Button } from "../button";

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
            <Button
              className="gym__button--tertiary"
              onClick={() => console.log("Editar", item.id)}
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
