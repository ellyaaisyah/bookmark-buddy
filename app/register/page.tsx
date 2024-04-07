import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RegistrationForm } from "./_components";

export default function RegisterPage() {
	return (
		<Card className="w-full sm:w-80 lg:w-96">
			<CardHeader>
				<CardTitle>Register</CardTitle>
			</CardHeader>
			<CardContent>
				<RegistrationForm />
			</CardContent>
		</Card>
	);
}
