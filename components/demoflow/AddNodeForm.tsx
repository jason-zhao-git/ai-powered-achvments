import React from "react";
import { useForm, UseFormReturn } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  nodeType: z.string().min(1, { message: "Please select a node type." }),
  description: z.string().min(1, { message: "Description cannot be empty." }),
  subtasks: z
    .string()
    .transform((str) => (str ? str.split(",").map((s) => s.trim()) : []))
    .optional(),
  connections: z.object({
    up: z.string().nullable().optional(),
    down: z.string().nullable().optional(),
    left: z.string().nullable().optional(),
    right: z.string().nullable().optional(),
  }),
});

interface AddNodeFormProps {
  form: UseFormReturn<any>;
  handleSubmit: (data: any) => void;
}

const AddNodeForm: React.FC<AddNodeFormProps> = ({ form, handleSubmit }) => {
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4 text-white/80">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white/80">Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter Name" {...field} className="text-black" />
              </FormControl>
              <FormMessage className="text-white/80" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="nodeType"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white/80">Node Type</FormLabel>
              <FormControl>
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Node Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="task">Task</SelectItem>
                    <SelectItem value="custom">Custom</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage className="text-white/80" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white/80">Description</FormLabel>
              <FormControl>
                <Input placeholder="Enter Description" {...field} className="text-black" />
              </FormControl>
              <FormMessage className="text-white/80" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="subtasks"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white/80">Subtasks (comma separated)</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter Subtasks"
                  {...field}
                  className="text-black"
                  onChange={(e) => field.onChange(e.target.value)}
                />
              </FormControl>
              <FormMessage className="text-white/80" />
            </FormItem>
          )}
        />
        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="connections.up"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white/80">Up Socket</FormLabel>
                <FormControl>
                  <Select value={field.value || 'none'} onValueChange={field.onChange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Socket Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="none">None</SelectItem>
                      <SelectItem value="src">Source</SelectItem>
                      <SelectItem value="target">Target</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage className="text-white/80" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="connections.down"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white/80">Down Socket</FormLabel>
                <FormControl>
                  <Select value={field.value || 'none'} onValueChange={field.onChange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Socket Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="none">None</SelectItem>
                      <SelectItem value="src">Source</SelectItem>
                      <SelectItem value="target">Target</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage className="text-white/80" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="connections.left"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white/80">Left Socket</FormLabel>
                <FormControl>
                  <Select value={field.value || 'none'} onValueChange={field.onChange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Socket Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="none">None</SelectItem>
                      <SelectItem value="src">Source</SelectItem>
                      <SelectItem value="target">Target</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage className="text-white/80" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="connections.right"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white/80">Right Socket</FormLabel>
                <FormControl>
                  <Select value={field.value || 'none'} onValueChange={field.onChange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Socket Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="none">None</SelectItem>
                      <SelectItem value="src">Source</SelectItem>
                      <SelectItem value="target">Target</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage className="text-white/80" />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit" className="w-full bg-blue-500 text-white">
          Add Node
        </Button>
      </form>
    </Form>
  );
};

export default AddNodeForm;
