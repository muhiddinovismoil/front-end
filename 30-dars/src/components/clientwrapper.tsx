"use client";

import { usePathname } from "next/navigation";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export default function ClientWrapper({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const isAuthPage =
        pathname.startsWith("/login") || pathname.startsWith("/register");

    return (
        <div className="flex flex-col min-h-screen justify-between">
            {!isAuthPage && <Header />} <div>{children}</div>
            {!isAuthPage && <Footer />}{" "}
        </div>
    );
}
