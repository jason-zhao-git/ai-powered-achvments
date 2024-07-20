import React, { useState } from "react";
import { useForm } from "react-hook-form";
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
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  SelectGroup,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const SelectGrid = ({ connections, setConnections }) => (
  <div className="grid grid-cols-2 gap-4 mt-4">
    <div>
      <FormLabel className="text-white/80">
        <p className="font-pixel mt-4 mb-2">Up Socket</p>
      </FormLabel>
      <Select
        defaultValue={connections.up}
        onValueChange={(value) =>
          setConnections((prev) => ({ ...prev, up: value }))
        }
      >
        <SelectTrigger>
          <SelectValue placeholder="Select Socket Type" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="none">None</SelectItem>
            <SelectItem value="source">Source</SelectItem>
            <SelectItem value="target">Target</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
    <div>
      <FormLabel className="text-white/80">
        <p className="font-pixel mt-4 mb-2">Down Socket:</p>
      </FormLabel>
      <Select
        defaultValue={connections.down}
        onValueChange={(value) =>
          setConnections((prev) => ({ ...prev, down: value }))
        }
      >
        <SelectTrigger>
          <SelectValue placeholder="Select Socket Type" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="none">None</SelectItem>
            <SelectItem value="source">Source</SelectItem>
            <SelectItem value="target">Target</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
    <div>
      <FormLabel className="text-white/80">
        <p className="font-pixel mt-4 mb-2">Left Socket:</p>
      </FormLabel>
      <Select
        defaultValue={connections.left}
        onValueChange={(value) =>
          setConnections((prev) => ({ ...prev, left: value }))
        }
      >
        <SelectTrigger>
          <SelectValue placeholder="Select Socket Type" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="none">None</SelectItem>
            <SelectItem value="source">Source</SelectItem>
            <SelectItem value="target">Target</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
    <div>
      <FormLabel className="text-white/80">
        <p className="font-pixel mt-4 mb-2">Right Socket:</p>
      </FormLabel>
      <Select
        defaultValue={connections.right}
        onValueChange={(value) =>
          setConnections((prev) => ({ ...prev, right: value }))
        }
      >
        <SelectTrigger>
          <SelectValue placeholder="Select Socket Type" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="none">None</SelectItem>
            <SelectItem value="source">Source</SelectItem>
            <SelectItem value="target">Target</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  </div>
);

const AddNodeForm = ({ form, handleSubmit }) => {
  const [nodeType, setNodeType] = useState("task");
  const [connections, setConnections] = useState({
    up: "source",
    down: "target",
    left: "none",
    right: "none",
  });
  const [arrowStyle, setArrowStyle] = useState("none");

  const onSubmit = (data) => {
    const formData = {
      ...data,
      nodeType,
      connections: nodeType === "task" ? connections : undefined,
      arrowStyle: nodeType === "annotation" ? arrowStyle : undefined,
    };
    console.log(JSON.stringify(formData, null, 2));
    handleSubmit(formData);
  };

  return (
    <Form {...form}>
      <span>
        <FormLabel className="text-white/80">
          {" "}
          <p className="font-pixel mt-5 mb-2">Node Type:</p>
        </FormLabel>
        <Select
          defaultValue={nodeType}
          onValueChange={(value) => setNodeType(value)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select Node Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="task">Task</SelectItem>
              <SelectItem value="annotation">Annotation</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </span>

      {nodeType === "task" ? (
        <SelectGrid connections={connections} setConnections={setConnections} />
      ) : (
        <div>
          <FormLabel className="text-white/80">
            <p className="font-pixel mt-4 mb-2">Arrow Style:</p>
          </FormLabel>
          <Select
            defaultValue={arrowStyle}
            onValueChange={(value) => setArrowStyle(value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select Arrow Style" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="none">None</SelectItem>

                <SelectItem value="left">Left</SelectItem>
                <SelectItem value="right">Right</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      )}

      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 text-white/80 mt-2"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white/80">
                <p className="font-pixel mt-5 mb-2">Name:</p>
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter Name"
                  {...field}
                  className="text-black"
                />
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
              <FormLabel className="text-white/80">
                <p className="font-pixel mt-5 mb-2">Description:</p>
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter Description"
                  {...field}
                  className="text-black"
                />
              </FormControl>
              <FormMessage className="text-white/80" />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full bg-blue-500 text-white">
          Add Node
        </Button>
      </form>
    </Form>
  );
};

export default AddNodeForm;
