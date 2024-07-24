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
  Hash,
  Tag,
  Pencil,
  ChevronLeft,
  ChevronRight,
  ScanText,
  Circle
} from "lucide-react"; // Import the icons
import { ScrollArea } from "@/components/ui/scroll-area";

const AnnotationDialog = ({ nodeData, onSave }) => {
  const { name, description, arrowStyle } = nodeData;

  const [annotationName, setAnnotationName] = useState(name);
  const [annotationDescription, setAnnotationDescription] =
    useState(description);
  const [annotationArrowStyle, setAnnotationArrowStyle] = useState(arrowStyle);

  const handleSave = () => {
    onSave({
      name: annotationName,
      description: annotationDescription,
      arrowStyle: annotationArrowStyle,
    });
  };
  const getArrowIcon = (direction) => {
    if (direction === "left") {
      return <ChevronLeft className="flex-shrink-0 w-4 h-4 text-primary capitalize" />;
    } else if (direction === "right") {
      return <ChevronRight className="flex-shrink-0 w-4 h-4 text-primary capitalize" />;
    } else {
      return <Circle className="flex-shrink-0 w-4 h-4 text-primary capitalize" />;
    }
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
                  value={annotationName}
                  onChange={(e) => setAnnotationName(e.target.value)}
                  className="text-lg font-bold text-gray-900 border-b focus:outline-none"
                />
              </DialogTitle>
              <DialogDescription>
                <textarea
                  value={annotationDescription}
                  onChange={(e) => setAnnotationDescription(e.target.value)}
                  className="my-2 w-full h-60 text-sm text-gray-900 border rounded p-2 focus:outline-none"
                />
                <div className="mt-4">
                  <Label className="text-gray-900 font-bold">Arrow Style</Label>
                  <select
                    value={annotationArrowStyle}
                    onChange={(e) => setAnnotationArrowStyle(e.target.value)}
                    className="mt-2 mb-1 w-full p-2 border rounded"
                  >
                    <option value="none">None</option>
                    <option value="left">Left</option>
                    <option value="right">Right</option>
                  </select>
                </div>
              </DialogDescription>
            </DialogHeader>
            <DialogFooter className="flex gap-2 p-4 w-full justify-end z-50">
              <Button onClick={handleSave}>Save</Button>
            </DialogFooter>
          </div>
        </ScrollArea>
        <ScrollArea className="w-5/12">
          <div className="flex flex-col gap-2 bg-gray-100 w-full p-4">
            <div className="grid gap-2 p-4 border-b-2 w-full">
              <Label className="flex items-start">Annotation Name:</Label>
              <div className="flex text-left items-start justify-start gap-2 pb-2">
                <Hash className="flex-shrink-0 w-4 h-4 text-primary capitalize mt-1" />
                {annotationName}
              </div>
            </div>

            <div className="grid gap-2 p-4 border-b-2 w-full">
              <Label className="flex items-start">
                
                Description:
              </Label>
              <ScrollArea>
                <div className="flex text-left items-start justify-start gap-2 pb-2">
                <ScanText className=" flex-shrink-0 w-4 h-4 text-primary capitalize mt-1" />
                  {annotationDescription}
                </div>
              </ScrollArea>
            </div>
            <div className="grid gap-2 p-4 border-b-2 w-full">
              <Label className="flex items-start">Arrow Direction:</Label>
              <div className="flex text-left items-center justify-start gap-2 pb-2">
                {getArrowIcon(annotationArrowStyle)}
                <p className="text-sm">{annotationArrowStyle || "None"}</p>
              </div>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default AnnotationDialog;
