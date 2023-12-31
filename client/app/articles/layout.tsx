import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
    return <div className="px-4 py-8">
        { children }
    </div>
}