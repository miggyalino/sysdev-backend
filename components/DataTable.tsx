import { Language } from "@/types";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import EditDialog from "./EditDialog";
import { Button } from "./ui/button";
import { FormProvider } from "react-hook-form";

type TableProps = {
  data: Language[];
  onDelete: (id: number) => void;
  form: any;
};

const DataTable = ({ data, onDelete, form }: TableProps) => {
  return (
    <Table className="w-96">
      <TableHead>
        <TableRow>
          <TableCell>Programming Language</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data &&
          data.map((language: Language) => (
            <TableRow key={language.id}>
              <TableCell>{language.name}</TableCell>
              <TableCell>
                <Button
                  variant="destructive"
                  onClick={() => onDelete(language.id)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
};

export default DataTable;
