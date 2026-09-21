<div className="relative overflow-hidden rounded-2xl border border-sidebar-border bg-background/60 p-6 flex flex-col justify-between gap-6 backdrop-blur-md w-full">
	<div className="flex items-center justify-between">
		<div className="flex items-center gap-3 transition-colors group">
			<div className="flex size-10 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-400 group-hover:scale-105 transition-transform">
				<img src="img" />
			</div>
			<div className="flex flex-col">
				<span className="text-lg text-slate-200">Title</span>
				<span className="text-xs text-muted-foreground">Desc</span>
			</div>
		</div>
	</div>
	<div className="flex flex-col gap-2">
		<p className="text-sm text-muted-foreground leading-relaxed">Main desc</p>
	</div>
	<div className="pt-2">
		<a
			href="btn-url"
			target="_blank"
			rel="noreferrer"
			className="w-full inline-flex items-center justify-center gap-2 h-10 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm transition-colors"
		>
			<span>Btn</span>
			<ExternalLink className="size-4" />
		</a>
	</div>
</div>;
