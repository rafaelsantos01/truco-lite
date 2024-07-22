import CounterForm from "../counter/counter-form";
import { Separator } from "../ui/separator";

export default function StartForm() {
  return (
    <div className="flex space-x-10 ">
      <CounterForm />
      <Separator orientation="vertical" className="h-auto bg-primary" />
      <CounterForm />
    </div>
  );
}
