import type { Metadata } from "next";
import { Geist, Geist_Mono, Monda } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Topbar } from "@/components/topbar";
import { Providers } from "@/components/providers";
import { Toaster } from "@/components/ui/sonner";

const monda = Monda({
	weight: ["400", "700"],
	subsets: ["latin", "vietnamese"],
	variable: "--font-sans",
});

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "DINO LEGACY",
	description: "The Isle Evrima Network",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html
			lang="vi"
			className={cn(
				"dark",
				"h-full",
				"antialiased",
				geistSans.variable,
				geistMono.variable,
				monda.variable,
				"font-sans",
			)}
		>
			<body className="min-h-full flex flex-col font-sans bg-background text-foreground">
				<Providers>
					<TooltipProvider>
						<SidebarProvider>
							<AppSidebar />
							<SidebarInset className="bg-transparent">
								<Topbar />
								<main className="relative flex flex-1 flex-col gap-4 p-4 md:p-6 overflow-hidden min-w-0 max-w-full">
									<div
										className="pointer-events-none absolute inset-0 bg-bottom bg-right bg-no-repeat bg-cover opacity-30"
										style={{
											// backgroundImage: "url('/images/bg.png')",
											backgroundPosition: "center",
											maskImage:
												"radial-gradient(ellipse at 100% 100%, black 20%, transparent 75%)",
											WebkitMaskImage:
												"radial-gradient(ellipse at 100% 100%, black 20%, transparent 75%)",
										}}
									/>
									<div className="relative z-10 flex flex-1 flex-col gap-4 min-w-0 w-full max-w-full overflow-hidden">
										{children}
									</div>
								</main>
							</SidebarInset>
						</SidebarProvider>
					</TooltipProvider>
					<Toaster />
				</Providers>
			</body>
		</html>
	);
}
