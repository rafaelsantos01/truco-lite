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
          value={linkDonation}
          fgColor="hsl(222.2, 47.4%, 11.2%)"
          level="L"
          size={240}
        />
      </div>

      <Button
        variant={"outline"}
        className=" w-full"
        onClick={copyQRCode}
        disabled={isDisabled}
      >
        {isDisabled ? "Copiado para área transferência" : "Copiar código QR"}
      </Button>
    </div>
  );
}
