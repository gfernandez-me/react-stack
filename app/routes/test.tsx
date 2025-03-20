export default function DataList() {
  const data = [
    { name: "Daniel", age: 25 },
    { name: "John", age: 24 },
    { name: "Jen", age: 31 },
  ];

  const DataItem = ({ name, age }: { name: string; age: number }) => (
    <li>
      <span>{`${name} `}</span>
      <span>{age}</span>
    </li>
  );
  return (
    <div>
      <h2>Data List</h2>
      <ul>
        {data.map((dataItem: { name: string; age: number }, index: number) => (
          <DataItem
            name={dataItem.name}
            age={dataItem.age}
            key={`data-item-${index}`}
          />
        ))}
      </ul>
    </div>
  );
}
