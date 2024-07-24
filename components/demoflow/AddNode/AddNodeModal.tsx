import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import AddNodeForm from "./AddNodeForm.jsx"; // Adjust the path as necessary

// Import the Close icon
import CloseIcon from "../../../public/Icons/Close.svg";
import { ScrollArea } from "@/components/ui/scroll-area";


const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }).max(40, { message: "Name must be at most 40 characters." }),
  nodeType: z.string().min(1, { message: "Please select a node type." }),
  description: z.string().min(1, { message: "Description cannot be empty." }),
  connections: z.object({
    up: z.string().nullable().optional(),
    down: z.string().nullable().optional(),
    left: z.string().nullable().optional(),
    right: z.string().nullable().optional(),
  }),
});

interface AddNodeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddNode: (node: any) => void;
}

const AddNodeModal: React.FC<AddNodeModalProps> = ({ isOpen, onClose, onAddNode }) => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      nodeType: "task",
      description: "",
      connections: {
        up: null,
        down: null,
        left: null,
        right: null,
      },
    },
  });

  const handleSubmit = (data: any) => {
    onAddNode(data);
    
    form.reset();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50">
      <div className="bg-white bg-opacity-30 rounded-lg shadow-lg border-2 border-opacity-30 border-white backdrop-filter backdrop-blur-sm backdrop-saturate-200 p-6 w-full max-w-md max-h-[90vh]">
        <div className="flex justify-end">
          <button
            className="bg-white bg-opacity-30 rounded-lg shadow-lg border-2 border-opacity-30 border-white backdrop-filter backdrop-blur-sm backdrop-saturate-200 p-2"
            onClick={onClose}
          >
            <Image src={CloseIcon} alt="Close" width={24} height={24} />
          </button>
        </div>
        <div className="flex justify-center">
          <h2 className="text-2xl text-white/80 font-pixel">Add New Node</h2>
        </div>
        
        <ScrollArea className="max-h-[70vh] overflow-y-auto">
          <AddNodeForm form={form} handleSubmit={handleSubmit} />
        </ScrollArea>
      </div>
    </div>
  );
};

export default AddNodeModal;
