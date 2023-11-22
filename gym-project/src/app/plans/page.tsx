import { Button } from "../shared/components/button";
import { DataTable } from "../shared/components/data-table";

export default function StudentPlans() {
  const headerList = ["título", "duraçao", "valor por/mês"];
  const bodyList = [
    {
      title: "Start",
      duration: "1 mês",
      valuePerMonth: "R$ 129,00",
    },
    {
      title: "Gold",
      duration: "3 meses",
      valuePerMonth: "R$ 109,00",
    },
    {
      title: "Diamond",
      duration: "6 meses",
      valuePerMonth: "R$ 89,90",
    },
  ];

  return (
    <>
      <div className="container flex flex-col w-full p-4 mx-auto mt-6 md:items-center md:justify-center md:flex-row md:p-0">
        <h2 className="flex-1 text-3xl font-bold">Gerenciador de planos</h2>
        <div className="flex items-center mt-4">
          <Button className="gym__button--primary">Cadastrar</Button>
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
