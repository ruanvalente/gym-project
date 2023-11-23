type HeaderListProps = {
  headerList: Array<string>;
  hasEdit?: boolean;
};

export function HeaderList({ headerList, hasEdit = false }: HeaderListProps) {
  return (
    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
      <tr>
        {headerList.map((header, index) => (
          <th key={index} scope="col" className="px-6 py-3 uppercase">
            {header}
          </th>
        ))}

        {hasEdit && (
          <th scope="col" className="px-6 py-3 uppercase">
            Ações
          </th>
        )}
      </tr>
    </thead>
  );
}
