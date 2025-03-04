
import { Card } from "@/components/ui/card";

export const PreviewWidget = () => {
  return (
    <Card className="p-6 max-w-md mx-auto bg-white shadow-lg">
      <div className="flex flex-col items-center">
        <img
          src="/logo.png"
          alt="Libtrans"
          className="w-32 h-32 object-contain"
        />
      </div>
    </Card>
  );
};
