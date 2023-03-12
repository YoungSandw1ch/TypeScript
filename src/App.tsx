import DataGrid from "./components/DataGrid";

export default function App() {
  const users = [
    { id: 1, name: "John", age: 55 },
    { id: 2, name: "Mitchel", age: 23 },
    { id: 3, name: "Mike", age: 50 },
  ];

    const orders = [
    { id: 1, quantity: 11, amount: 55 },
    { id: 2, quantity: 33, amount: 23 },
    { id: 3, quantity: 45, amount: 50 },
  ];

  return (
    <>
      <DataGrid items={users} />

      <br />
        
      <DataGrid items={orders} />
    </>
  );
}