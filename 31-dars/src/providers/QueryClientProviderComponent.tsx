"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { useState } from "react";

const QueryClientProviderComponent = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [client] = useState(() => new QueryClient());
    return (
        <QueryClientProvider client={client}>{children}</QueryClientProvider>
    );
};

export default QueryClientProviderComponent;
