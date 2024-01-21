import type { Metadata } from "next";

export const metadata: Metadata = {
 title: 'About Title',
 description: 'About Descripcion',
 keywords: ['About Page', 'Renzo', 'Information CSS']
};

export default function AboutPage(){
    return (
        <>
            <span className="text-7xl">About Page</span>
        </>
    )
}