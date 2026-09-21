"use client";

import { ComponentProps } from "react";
import Link from "next/link";
import {
	Home,
	LogIn,
	LogOut,
	Scan,
	Package,
	Gift,
	ExternalLink,
	UserRoundPlus,
	Trophy,
	Info,
	Users,
} from "lucide-react";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarRail,
} from "@/components/ui/sidebar";
import { Spinner } from "@/components/ui/spinner";
import { useUser } from "@/context/user-context";

export function AppSidebar({ ...props }: ComponentProps<typeof Sidebar>) {
	const { user, isLoading } = useUser();

	return (
		<Sidebar collapsible="icon" className="border-r border-sidebar-border" {...props}>
			<SidebarHeader className="border-b border-sidebar-border py-2">
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton size="lg">
							<Link href="/home" className="flex items-center w-full gap-2">
								<div className="flex aspect-square size-8 items-center justify-center rounded-lg text-white">
									<img
										src="/images/logo.png"
										alt="Logo"
										className="size-10 object-contain"
									/>
								</div>
								<div className="grid flex-1 text-left leading-tight">
									<span className="truncate font-bold tracking-wide text-sidebar-foreground">
										DINO LEGACY
									</span>
									<span className="truncate text-[10px] text-muted-foreground">
										THE ISLE
									</span>
								</div>
							</Link>
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarHeader>

			<SidebarContent className="py-2">
				<SidebarGroup>
					<SidebarGroupLabel className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
						Chung
					</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							<SidebarMenuItem>
								<SidebarMenuButton>
									<Link href="/home" className="flex items-center gap-2.5 w-full">
										<Home className="size-4 text-blue-400" />
										<span className="font-medium">Trang chủ</span>
									</Link>
								</SidebarMenuButton>
							</SidebarMenuItem>
							<SidebarMenuItem>
								<SidebarMenuButton>
									<Link href="/me" className="flex items-center gap-2.5 w-full">
										<Info className="size-4 text-blue-400" />
										<span className="font-medium">Thông tin sinh tồn</span>
									</Link>
								</SidebarMenuButton>
							</SidebarMenuItem>
							<SidebarMenuItem>
								<SidebarMenuButton>
									<Link
										href="/inventory"
										className="flex items-center gap-2.5 w-full"
									>
										<Package className="size-4 text-blue-400" />
										<span className="font-medium">Kho đồ của bạn</span>
									</Link>
								</SidebarMenuButton>
							</SidebarMenuItem>
							<SidebarMenuItem>
								<SidebarMenuButton>
									<Link
										href="/events/online-reward"
										className="flex items-center gap-2.5 w-full"
									>
										<Gift className="size-4 text-blue-400" />
										<span className="font-medium">Sự kiện Online 3h</span>
									</Link>
								</SidebarMenuButton>
							</SidebarMenuItem>
							<SidebarMenuItem>
								<SidebarMenuButton>
									<Link href="#" className="flex items-center gap-2.5 w-full">
										<UserRoundPlus className="size-4 text-blue-400" />
										<span className="font-medium">
											Mời bạn bè{" "}
											<span className="text-amber-600">(Coming soon)</span>
										</span>
									</Link>
								</SidebarMenuButton>
							</SidebarMenuItem>
							<SidebarMenuItem>
								<SidebarMenuButton>
									<Link href="#" className="flex items-center gap-2.5 w-full">
										<Trophy className="size-4 text-blue-400" />
										<span className="font-medium">
											Xếp hạng{" "}
											<span className="text-amber-600">(Coming soon)</span>
										</span>
									</Link>
								</SidebarMenuButton>
							</SidebarMenuItem>
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>

				{user?.role === "MANAGER" && (
					<SidebarGroup>
						<SidebarGroupLabel className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
							Quản lý
						</SidebarGroupLabel>
						<SidebarGroupContent>
							<SidebarMenu>
								<SidebarMenuItem>
									<SidebarMenuButton>
										<Link
											href="/manager/players"
											className="flex items-center gap-2.5 w-full"
										>
											<Users className="size-4 text-blue-400" />
											<span className="font-medium">
												Danh sách người chơi
											</span>
										</Link>
									</SidebarMenuButton>
								</SidebarMenuItem>
							</SidebarMenu>
						</SidebarGroupContent>
					</SidebarGroup>
				)}
			</SidebarContent>

			<SidebarFooter className="gap-3">
				<SidebarMenu>
					<SidebarMenuItem>
						{isLoading ? (
							<div className="flex items-center justify-center p-2 w-full">
								<Spinner className="size-4 text-blue-400" />
							</div>
						) : (
							user && (
								<div className="flex flex-col gap-2 w-full">
									<SidebarMenuButton
										className="text-rose-400 hover:bg-rose-500/10 hover:text-rose-300 cursor-pointer flex items-center gap-2 px-3"
										onClick={() => {
											window.location.href = "/api/auth/logout";
										}}
									>
										<LogOut className="size-3.5" />
										<span className="font-medium">Đăng xuất</span>
									</SidebarMenuButton>
								</div>
							)
						)}
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarFooter>
			<SidebarRail />
		</Sidebar>
	);
}
