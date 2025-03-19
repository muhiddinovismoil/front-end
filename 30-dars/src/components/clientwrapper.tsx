"use client";

import { usePathname } from "next/navigation";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { SessionProvider } from "next-auth/react";

export default function ClientWrapper({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const isAuthPage =
        pathname.startsWith("/login") || pathname.startsWith("/register");

    return (
        <SessionProvider>
            <div className="flex flex-col min-h-screen justify-between">
                {!isAuthPage && <Header />}
                <div>{children}</div>
                {!isAuthPage && <Footer />}
            </div>
        </SessionProvider>
    );
}
