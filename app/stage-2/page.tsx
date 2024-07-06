"use client";
import { LANGUAGE_API_URL } from "@/constants";
import { fetcher } from "@/fetchUtils/language";
import { Language } from "@/types";
import React from "react";
import useSWR from "swr";

import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import DataTable from "@/components/DataTable";
import HomeButton from "@/components/HomeButton";

const StageTwo = () => {
  const {
    data: languages,
    error,
    mutate,
  } = useSWR<Language[]>(LANGUAGE_API_URL, fetcher);

  const form = useForm();

  const onSubmit = async (data: any) => {
    const { name } = data;
    console.log(name);

    await fetch(LANGUAGE_API_URL, {
      method: "POST",
      body: JSON.stringify({
        name: name,
      }),
    });
    toast("Language added");
    form.setValue("name", "");
    mutate(languages, true);
  };

  const onDelete = async (id: number) => {
    await fetch(`${LANGUAGE_API_URL}/${id}`, {
      method: "DELETE",
    });
    toast("Language deleted");
    mutate(languages);
  };

  return (
    <section className="h-screen flex justify-center items-center bg-slate-900">
      <div className="bg-white p-6 rounded-lg">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex gap-2 mb-2"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Python" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button className="bg-slate-600" type="submit">
              Submit
            </Button>
          </form>
        </Form>
        <DataTable data={languages || []} onDelete={onDelete} form={form} />
        <HomeButton />
      </div>
    </section>
  );
};

export default StageTwo;
