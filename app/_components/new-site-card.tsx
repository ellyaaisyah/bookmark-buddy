"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
	url: z.string().url(),
});

export const NewSiteCard = () => {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			url: "",
		},
	});

	const onSubmit = (values: z.infer<typeof formSchema>) => {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		console.log(values);
	};

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Card className="hover:shadow-lg hover:cursor-pointer">
					<CardContent className="text-center pt-6">Add new</CardContent>
				</Card>
			</DialogTrigger>
			<DialogContent>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
						<FormField
							control={form.control}
							name="url"
							render={({ field }) => (
								<FormItem>
									<FormLabel>URL</FormLabel>
									<FormControl>
										<Input
											placeholder="Type in the url you want to bookmark"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<div className="text-right">
							<Button type="submit">Save</Button>
						</div>
					</form>
				</Form>
			</DialogContent>
		</Dialog>
	);
};
