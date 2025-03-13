import Link from "next/link";

const PaymentsLayout = async ({ children }: { children: React.ReactNode }) => {
    const links = [
        { href: "/payments/home-network", label: "Uyali aloqa" },
        { href: "/payments/network", label: "Internet" },
        { href: "/payments/communal", label: "Kommunal xizmatlar" },
        { href: "/payments/history-payment", label: "To'lovlar tarixi" },
    ];

    return (
        <div className="container">
            <div className="flex gap-[30px] pt-[50px]">
                <div className="h-[302px] pt-[34px] w-[300px] gap-[35px] shadow-md bg-white flex flex-col">
                    <Link className="pl-[20px]" href={"/payments/home-network"}>
                        Uyali aloqa
                    </Link>
                    <Link className="pl-[20px]" href={"/payments/network"}>
                        Internet
                    </Link>
                    <Link className="pl-[20px]" href={"/payments/communal"}>
                        Kommunal xizmatlar
                    </Link>
                    <div className="pl-[20px] pt-[25px] h-[100%] bg-[#f1f1f1]">
                        <Link href={"/payments/history-payment"}>
                            To'lovlar tarixi
                        </Link>
                    </div>
                </div>
                <div>{children}</div>
            </div>
        </div>
    );
};
export default PaymentsLayout;
