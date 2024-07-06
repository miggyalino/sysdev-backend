"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Form, useForm } from "react-hook-form";
import { FormControl, FormField, FormItem } from "./ui/form";
import { toast } from "sonner";
import { LANGUAGE_API_URL } from "@/constants";

type EditDialogProps = {
  id: number;
};

const EditDialog = ({ id }: EditDialogProps) => {
  const editForm = useForm();

  const onSubmit = async (data: any) => {
    const { name } = data;

    await fetch(`${LANGUAGE_API_URL}/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        name: name,
      }),
    });
    toast.success("Edit Successfully");
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="bg-slate-600">
          Edit
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit name</DialogTitle>
        </DialogHeader>
        <Form {...editForm}>
          <form
            onSubmit={editForm.handleSubmit(onSubmit)}
            className="flex gap-2 mb-2"
          >
            <FormField
              control={editForm.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Python" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button className="bg-slate-700" type="submit">
              Submit
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default EditDialog;
