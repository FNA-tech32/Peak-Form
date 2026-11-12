import { Image } from "../atoms/Image"
import ContactImg from "../../assets/gym/4.jpeg"
import { Text } from "../atoms/Text"
import { ContactTexts } from "../particles/Data"
import { Button } from "../atoms/Button"


const Contact = () => {
    return (
        <section className="w-full relative">
            <Image alt="Contact Image" className="absolute inset-0 w-full h-full" objectCover="object-cover object-top" image={ContactImg} />
            <div className="relative w-full bg-zinc-900/70 flex flex-col justify-center items-center gap-2 px-6 py-16 md:py-20">
                <Text as="p" className="tracking-widest text-amber-500 uppercase md:text-sm text-xs font-medium">
                    {ContactTexts.firstText}
                </Text>
                <Text as="h1" className="lg:text-5xl md:text-4xl text-3xl text-zinc-100">
                    {ContactTexts.phone}
                </Text>
                <Text as="p" className="text-zinc-100 text-center text-base md:text-lg">
                    {ContactTexts.email}
                </Text>
                <Text as="p" className="text-zinc-200 text-center text-sm md:text-base md:w-1/2 w-4/5">
                    {ContactTexts.address}
                </Text>
                <Text as="p" className="text-zinc-100 md:w-1/2 w-4/5 text-center text-lg my-4">
                    {ContactTexts.paragraph}
                </Text>
                <Button className="px-10 font-medium text-white py-2.5 bg-gradient-to-r whitespace-nowrap from-red-500 to-amber-500" type="button">
                    {ContactTexts.button}
                </Button>
            </div>
        </section>
    )
}

export default Contact