import DonationForm from "@/components/donation/donation-form";
import { Layout } from "@/components/ui/layout";
import { Title } from "@/components/ui/title";

export default async function Donation() {
  return (
    <Layout>
      <div className="mb-9">
        <Title className="flex items-center text-white justify-center">
          Donation
        </Title>
      </div>
      <DonationForm />
    </Layout>
  );
}
