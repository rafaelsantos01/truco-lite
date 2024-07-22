import Trophy from "@/components/ui/trophy";
import { Button } from "../ui/button";

export default function WinnersForm() {
  return (
    <section className="space-y-4">
      <div>
        <Trophy />
      </div>
      <Button className="w-full h-12">Continuar Jogo</Button>
    </section>
  );
}
