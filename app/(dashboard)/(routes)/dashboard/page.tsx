import { UserButton } from "@clerk/nextjs";

export default function Dashboard() {
    return (
        <>
            <div className="container  py-4 flex justify-between items-center">
                <div><h4 className="font-bold text-lg">Dashboard</h4></div>
                <div>
                    <UserButton afterSignOutUrl="/" />
                </div>
            </div>
        </>
    );
}