import { useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
  DialogHeader,
  DialogFooter,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Plus,
  Pencil,
  Trash2,
  Hash,
  Flag,
  Tag,
  CheckCircle,
  XCircle,
  Plug,
  Unplug,
  Circle,
  Check,
  BadgeCheck,
  BadgeAlert,
  ScrollText,
  FileImage,
  ListTodo,
} from "lucide-react"; // Add the icons
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";

const TaskDialog = ({ nodeData, onSave }) => {
  const {
    name,
    description,
    subtasks,
    connections,
    createdAt,
    completedAt,
    isCompleted,
    imageSrc,
  } = nodeData;

  const [taskName, setTaskName] = useState(name);
  const [taskDescription, setTaskDescription] = useState(description);
  const [taskCompleted, setTaskCompleted] = useState(isCompleted);
  const [taskSubtasks, setTaskSubtasks] = useState(subtasks);
  const [taskImage, setTaskImage] = useState(imageSrc);

  const handleSave = () => {
    const filteredSubtasks = taskSubtasks.filter(
      (subtask) => subtask.subtask.trim() !== ""
    );
    onSave({
      name: taskName,
      description: taskDescription,
      isCompleted: taskCompleted,
      subtasks: filteredSubtasks,
      imageSrc: taskImage,
    });
  };

  const handleToggleCompletion = () => {
    setTaskCompleted(!taskCompleted);
  };

  const getConnectionIcon = (connection) => {
    if (connection === "target") {
      return <Plug className="w-4 h-4 text-primary capitalize" />;
    } else if (connection === "source") {
      return <Unplug className="w-4 h-4 text-primary capitalize" />;
    } else {
      return <Circle className="w-4 h-4 text-primary capitalize" />;
    }
  };

  const getSubtaskIcon = (isComplete) => {
    if (isComplete) {
      return <BadgeCheck className="w-4 h-4 text-primary capitalize" />;
    } else {
      return <BadgeAlert className="w-4 h-4 text-primary capitalize" />;
    }
  };

  const handleSubtaskChange = (index, field, value) => {
    const newSubtasks = [...taskSubtasks];
    newSubtasks[index][field] = value;
    setTaskSubtasks(newSubtasks);
  };

  const handleAddSubtask = () => {
    setTaskSubtasks([...taskSubtasks, { subtask: "", isComplete: false }]);
  };

  const handleDeleteSubtask = (index) => {
    setTaskSubtasks(taskSubtasks.filter((_, i) => i !== index));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setTaskImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon" className="h-4 w-4">
          <Pencil className="h-3 w-3" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl lg:h-4/6 flex flex-col lg:flex-row justify-between">
        <ScrollArea className="w-7/12">
          <div className="flex-1 p-4 w-full">
            <DialogHeader>
              <DialogTitle>
                <input
                  value={taskName}
                  onChange={(e) => setTaskName(e.target.value)}
                  className="text-lg font-bold text-gray-900 border-b focus:outline-none"
                />
              </DialogTitle>
              <DialogDescription>
                <textarea
                  value={taskDescription}
                  onChange={(e) => setTaskDescription(e.target.value)}
                  className="my-2 w-full h-20 text-sm text-gray-900 border rounded p-2 focus:outline-none"
                />
                <div className="mt-4">
                  <Label className="flex items-start text-gray-900 font-bold">
                    Update Avatar SVG
                  </Label>

                  <input
                    type="file"
                    accept=".svg"
                    onChange={handleImageUpload}
                    className="mt-2 mb-1"
                  />
                  <div>
                    <a
                      href="https://www.svgrepo.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 mt-2 w-full"
                    >
                      Check out SVG resources on svgrepo.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-1 mt-12 border-b-2 border-gray-100 pb-2 flex-wrap sm:justify-between lg:gap-0">
                  <div className="flex gap-1 items-center">
                    <ScrollText className="w-5 h-5 text-primary" />
                    <p className="font-bold flex text-sm text-gray-900">
                      Sub-tasks:
                    </p>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-4 w-4 ml-2"
                      onClick={handleAddSubtask}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="pl-4">
                    {taskSubtasks.length > 0 ? (
                      taskSubtasks.map((subtask, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            checked={subtask.isComplete}
                            onChange={(e) =>
                              handleSubtaskChange(
                                index,
                                "isComplete",
                                e.target.checked
                              )
                            }
                          />
                          <input
                            value={subtask.subtask}
                            onChange={(e) =>
                              handleSubtaskChange(
                                index,
                                "subtask",
                                e.target.value
                              )
                            }
                            className="text-sm text-left border rounded p-1"
                          />
                          {getSubtaskIcon(subtask.isComplete)}
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-4 w-4"
                            onClick={() => handleDeleteSubtask(index)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      ))
                    ) : (
                      <p className="text-sm text-left">None</p>
                    )}
                  </div>
                </div>
              </DialogDescription>
            </DialogHeader>
            <DialogFooter className="flex gap-2 p-4 w-full justify-end z-50">
              <Button
                variant={taskCompleted ? "success" : "secondary"}
                onClick={handleToggleCompletion}
                className={`flex items-center gap-2 ${
                  taskCompleted
                    ? "bg-green-600 hover:bg-green-700"
                    : "bg-gray-400 hover:bg-gray-600"
                } text-white`}
              >
                {taskCompleted ? "Mark as Incomplete" : "Mark as Completed"}
                <Check className="w-4 h-4" />
              </Button>
              <Button onClick={handleSave}>Save</Button>
            </DialogFooter>
          </div>
        </ScrollArea>
        <ScrollArea className="w-5/12">
          <div className="flex flex-col gap-2 bg-gray-100 w-full p-4">
            <div className="grid gap-2 p-4 border-b-2 w-full">
              <Label className="flex items-start">Task Avatar:</Label>
              <div className="flex items-start justify-start gap-2 pb-2">
                <FileImage className="flex-shrink-0 w-4 h-4 text-primary capitalize mt-1" />
                <Image
                  src={imageSrc || "/achvAIrm.png"}
                  alt={nodeData.alt || "Task Image"}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
              </div>
            </div>
            <div className="grid gap-2 p-4 border-b-2 w-full">
              <Label className="flex items-start">Task Name:</Label>
              <div className="flex text-left items-start justify-start gap-2 pb-2">
                <Hash className="flex-shrink-0 w-4 h-4 text-primary capitalize mt-1" />
                {name}
              </div>
            </div>
            <div className="grid gap-2 p-4 border-b-2 w-full">
              <Label className="flex items-start">Description:</Label>
              <div className="flex text-left items-start justify-start gap-2 pb-2">
                <Tag className="flex-shrink-0 w-4 h-4 text-primary capitalize mt-1" />
                {description}
              </div>
            </div>
            <div className="grid gap-2 p-4 border-b-2 w-full">
              <Label className="flex items-start">Creation Date:</Label>
              <div className="flex text-left items-center justify-start gap-2 pb-2">
                <CheckCircle className="w-4 h-4 text-primary capitalize" />
                <p className="text-sm">
                  {new Date(createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>
            <div className="grid gap-2 p-4 border-b-2 w-full">
              <Label className="flex items-start">Completion Date:</Label>
              <div className="flex text-left items-center justify-start gap-2 pb-2">
                {completedAt ? (
                  <CheckCircle className="w-4 h-4 text-primary capitalize" />
                ) : (
                  <XCircle className="w-4 h-4 text-primary capitalize" />
                )}
                <p className="text-sm">
                  {completedAt
                    ? new Date(completedAt).toLocaleDateString()
                    : "Not completed"}
                </p>
              </div>
            </div>
            <div className="grid gap-2 p-4 border-b-2 w-full">
              <Label className="flex items-start">Connections:</Label>
              <div className="flex text-left items-center justify-start gap-2 pb-2">
                {getConnectionIcon(connections.up)}
                <p className="text-sm">Up: {connections.up || "none"}</p>
              </div>
              <div className="flex text-left items-center justify-start gap-2 pb-2">
                {getConnectionIcon(connections.down)}
                <p className="text-sm">Down: {connections.down || "none"}</p>
              </div>
              <div className="flex text-left items-center justify-start gap-2 pb-2">
                {getConnectionIcon(connections.left)}
                <p className="text-sm">Left: {connections.left || "none"}</p>
              </div>
              <div className="flex text-left items-center justify-start gap-2 pb-2">
                {getConnectionIcon(connections.right)}
                <p className="text-sm">Right: {connections.right || "none"}</p>
              </div>
            </div>
            <div className="grid gap-2 p-4 border-b-2 w-full">
              <Label className="flex items-start">
                <ListTodo className="flex-shrink-0 w-4 h-4 text-primary capitalize mr-1 -mt-0.5" />
                Sub-tasks
              </Label>
                {subtasks.length > 0 ? (
                  subtasks.map((subtask, index) => (
                    <div
                      key={index}
                      className="flex text-left items-center justify-start gap-2 w-full"
                    >
                      {getSubtaskIcon(subtask.isComplete)}
                      <p className="text-sm">{subtask.subtask}</p>
                    </div>
                  ))
                ) : (
                  <p className="text-sm">None</p>
                )}
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default TaskDialog;
