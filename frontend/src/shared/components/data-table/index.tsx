/* eslint-disable @typescript-eslint/no-explicit-any */

import { BodyList } from "./body-list";
import { HeaderList } from "./header-list";

type DataTableProps = {
  headerList: Array<string>;
  bodyList: Array<any>;
};

export function DataTable({ headerList, bodyList }: DataTableProps) {
  return (
    <div className="container mx-auto mt-6 bg-white rounded-md shadow-md">
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500">
          <HeaderList headerList={headerList} />
          <BodyList bodyList={bodyList} />
        </table>
      </div>
    </div>
  );
}
