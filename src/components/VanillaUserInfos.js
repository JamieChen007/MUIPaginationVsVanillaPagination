export default function VanillaUserInfos({ displayData }) {
  return (
    <>
      <h1>Vanilla Table</h1>
      <table
        style={{ border: "1px solid grey", borderCollapse: "collapse" }}
        border="1"
      >
        <tr style={{ backgroundColor: "black", color: "white" }}>
          <th>ID</th>
          <th>NAME</th>
          <th>EMAIL</th>
          <th>PHONE</th>
          <th>WEBSITE</th>
        </tr>
        {displayData.map((row) => (
          <tr key={row.id}>
            <td>{row.id}</td>
            <td>{row.name}</td>
            <td>{row.email}</td>
            <td>{row.phone}</td>
            <td>{row.website}</td>
          </tr>
        ))}
      </table>
    </>
  );
}
