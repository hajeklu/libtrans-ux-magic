
import { Card } from "@/components/ui/card";

export const PreviewWidget = () => {
  return (
    <Card className="p-6 max-w-md mx-auto bg-white shadow-lg">
      <div className="flex flex-col items-center space-y-4">
        <img
          src="/logo.png"
          alt="Libtrans"
          className="w-32 h-32 object-contain"
        />
        <h2 className="text-xl font-bold text-libtrans-900">
          Libtrans - Spolehlivá přeprava
        </h2>
        <p className="text-sm text-gray-600 text-center">
          Profesionální dopravní služby a logistika pro vaše podnikání
        </p>
      </div>
    </Card>
  );
};
