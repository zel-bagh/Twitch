import Image from "next/image";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Poppins({
    subsets: ["latin"],
    weight: ["200", "300", "400", "500", "600", "700", "800"],
})

export const Logo = () => {
     /* can be done using cn() */
    return (
        <div className="flex flex-col items-center gap-2">
            <div className="bg-white rounded-full">
                <Image
                    src="/spooky.svg"
                    alt="Twitch"
                    width={80}
                    height={80} />
            </div>
            <div className={"flex flex-col items-center " + font.className}>
                <p className="text-xl font-semibold"> Twitch </p>
                <p className="text-sm text-muted-foreground"> Let's Play </p>
            </div>
        </div>
    );
};