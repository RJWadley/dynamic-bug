"use cache";

import { lazy, Suspense } from "react";

// if this is not lazy, it works
const LazyComponent = lazy(() => import("./dynamic"));

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
				<Suspense>
					<LazyComponent />
				</Suspense>
				{children}
			</body>
		</html>
	);
}
