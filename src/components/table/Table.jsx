import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

 const rows = [
    {
      id: 2342353,
      name: "toolforge-testtool-104",
      type: "testing",
      date: "31 Oct",
      status: "Pending",
    },
    {
      id: 2357741,
      name: "toolforge-quasar",
      type: "Software",
      date: "5 Nov",
      status: "Approved",
    },
    {
      id: 2342355,
      name: "toolforge-ml-article-descriptions",
      type: "Description",
      date: "4 Nov",
      status: "Pending",
    },
    {
      id: 2342855,
      name: "Toolforge-glams",
      type: "Testing",
      date: "7 Nov",
      status: "Approved",
    },
  ];
const List = () => {
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tool ID</TableCell>
            <TableCell className="tableCell">Name</TableCell>
            <TableCell className="tableCell">Type</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">{row.name}</TableCell>
              <TableCell className="tableCell">{row.type}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;