import Image from "next/image";
import ReservationSidebar from "@/app/components/properties/ReservationSidebar";

const PropertyDetailPage = () => {
    return <main className="max-w-[1500px] mx-auto px-6">
    <p>The quieter you become the more you are able to hear</p>
    <div className="w-full h-[64vh] mb-5 overflow-hidden rounded-xl relative">
    <Image fill src="/airbnb 5.jpg" className="object-cover w-full h-full" alt="sorree"/>

    </div>
    <div className="grid mt-4 grid-cols-1 md:grid-cols-5 gap-4">
        <div className="col-span-3 py-6 pr-6">
        <h1 className="mb-4 text-4xl">Property Name</h1>
            <span className="mb-6 block text-lg text-gray-600">4 guests . 2 bdrm . 1 bathroom</span>
            <hr />

            <div className="py-6 flex items-center space-x-4">
                <Image src='/airbnb 5.jpg' width={50} height={50} className="rounded-full" alt="landlord">

                </Image>

                <p><strong>John Doe</strong></p>
            </div>

            <hr />

            <p className="mt-6 text-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur magni laboriosam illum maiores assumenda laudantium officiis perferendis iusto nisi quibusdam dolorum perspiciatis, aperiam dolores quidem est totam, provident optio quam!</p>


        </div>
        <div className="col-span-2">
            <ReservationSidebar/>    
=        </div>
    </div>
    </main>
}

export default PropertyDetailPage;