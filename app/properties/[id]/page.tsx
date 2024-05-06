import Image from "next/image";

const PropertyDetailPage = () => {
    return <main className="max-w-[1500px] mx-auto px-6">
    <p>The quieter you become the more you are able to hear</p>
    <div className="w-full h-[64vh] mb-5 overflow-hidden rounded-xl relative">
    <Image fill src="/airbnb 5.jpg" className="object-cover w-full h-full" alt="sorree"/>

    </div>
    </main>
}

export default PropertyDetailPage;