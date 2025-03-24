"use client";
import dynamic from "next/dynamic";
const HeaderLink = dynamic(() => import("@/components/client/header-links"), {
    ssr: false,
});
export const HeaderLinkWrapper = () => {
    return <HeaderLink />;
};
