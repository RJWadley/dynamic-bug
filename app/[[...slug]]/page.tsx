// if this page is not a catch-all route, it works
// if I make this a client component, it works
// "use client"

export default function TemplatePage() {
	// editing this file will break HMR
	// and even when it doesn't, we get frequent 404 errors
	return "edit me to break my HMR";
}
