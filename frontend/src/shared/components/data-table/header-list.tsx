type HeaderListProps = {
  headerList: Array<string>;
};

export function HeaderList({ headerList }: HeaderListProps) {
  return (
    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
      <tr>
        {headerList.map((header, index) => (
          <th key={index} scope="col" className="px-6 py-3 uppercase">
            {header}
          </th>
        ))}
        <th scope="col" className="px-6 py-3 uppercase">
          Ações
        </th>
      </tr>
    </thead>
  );
}
