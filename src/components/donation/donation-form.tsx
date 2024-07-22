"use client";
import { Button } from "@/components/ui/button";
import { QRCodeCanvas } from "qrcode.react";
import { useState } from "react";

export default function DonationForm() {
  const [isDisabled, setIsDisabled] = useState(false);
  const linkDonation = process.env.NEXT_PUBLIC_DONATION || "";

  const copyQRCode = () => {
    navigator.clipboard.writeText(linkDonation);
    setIsDisabled(true);
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <div className="flex items-center justify-center">
        <QRCodeCanvas
          value="https://reactjs.org/"
          bgColor="#fa7304"
          fgColor="#0a0a0a"
          level="L"
          size={200}
        />
      </div>

      <Button
        className="font-mada disabled:bg-transparent "
        onClick={copyQRCode}
        disabled={isDisabled}
      >
        {isDisabled ? "Copiado para área transferência" : "Copiar código QR"}
      </Button>
    </div>
  );
}
