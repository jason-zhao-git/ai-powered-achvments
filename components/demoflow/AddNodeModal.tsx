import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectContent,
} from "@/components/ui/select";
import Image from "next/image";

// Import the Close icon
import CloseIcon from "/public/Icons/Close.svg";
import { ScrollArea } from "@/components/ui/scroll-area";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  nodeType: z.string().min(1, {
    message: "Please select a node type.",
  }),
});

interface AddNodeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddNode: (node: { name: string; type: string }) => void;
}

const AddNodeModal: React.FC<AddNodeModalProps> = ({
  isOpen,
  onClose,
  onAddNode,
}) => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      nodeType: "task",
    },
  });

  const handleSubmit = (data: { name: string; nodeType: string }) => {
    onAddNode({ name: data.name, type: data.nodeType });
    form.reset();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50">
      <div className="bg-white bg-opacity-30 rounded-lg shadow-lg border-2 border-opacity-30 border-white backdrop-filter backdrop-blur-sm backdrop-saturate-200 p-6 w-full max-w-md">
      <div className="flex justify-end z-10">
          <button
            className="bg-white bg-opacity-30 rounded-lg shadow-lg border-2 border-opacity-30 border-white backdrop-filter backdrop-blur-sm backdrop-saturate-200 p-2 z-10"
            onClick={onClose}
          >
            <Image src={CloseIcon} alt="Close" width={24} height={24} />
          </button>
        </div>
      <div className="flex justify-center">
      <h2 className="text-2xl text-white/85 font-mono">Add New Node</h2>
      </div>
      

        <ScrollArea className="max-h-96">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSubmit)}
              className="space-y-4"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="nodeType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Node Type</FormLabel>
                    <FormControl>
                      <Select
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select Node Type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="task">Task</SelectItem>
                          <SelectItem value="custom">Custom</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full bg-blue-500 text-white">
                Add Node
              </Button>
            </form>
          </Form>
        </ScrollArea>
      </div>
    </div>
  );
};

export default AddNodeModal;
