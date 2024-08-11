"use server"

import { db, connectMongoDB } from "@/libs/mongodb";
import { NextResponse } from "next/server";

export async function POST(req: any) {
    const { name, brand, price, url } = await req.json();
    await connectMongoDB();
    const newProduct = {
        name,
        brand,
        price,
        url,
        createdAt: new Date(),
        updatedAt: new Date(),
    };
    await db.collection('products').insertOne(newProduct);
    return NextResponse.json({ message: "Product added" }, { status: 201 });
}

export async function GET(req: any) {
    console.log("GET function reached");
    // await connectMongoDB();
    // const products = await db.collection('products').find({}).toArray();
    // return NextResponse.json({ products });
    return NextResponse.json(
        [
            {
                name: "Jolie Ruched-Bodice Maxi Dress",
                brand: "Forever New",
                price: 219.99,
                url: "https://www.forevernew.com.au/jolie-strappy-ruched-bodice-maxi-287555?colour=red-calida-botanical",
                img: "/assets/images/jolie.webp",
            },
            {
                name: "YPB neoKNIT Polo Sweatshirt",
                brand: "Abercrombie & Fitch",
                price: 55.00,
                url: "https://www.abercrombie.com/shop/wd/p/ypb-neoknit-polo-sweatshirt-57526822?categoryId=12203&faceout=model&seq=01",
                img: "/assets/images/ypb.webp",
            },
            {
                name: "Fairy Shirt foro Women Long Sleeve Vintage Print Crop Top Crewneck Aesthetic Slim Blouse Tee Grunge Clothes",
                brand: "NUFIWI",
                price: 18.59,
                url: "https://www.amazon.com.au/Sleeve-Vintage-Crewneck-Aesthetic-Clothes/dp/B09KQNWKKJ/ref=sr_1_48?c=ts&dib=eyJ2IjoiMSJ9.Ao-3GwDt-HcOjEiO4CBg7nFPyXJm5hEvILcatfQ_DVMZmCdOTuQrXA5iU-E0NQfp9JjQsp1vQ7cLh1tIebtydrv9na5PPt693bUctJ8Ew2VOYEWLRAi9eVm4TK-HeXbf3UbTk36sxMdIj6qPk5XfTPwpRa45HDAMGQ1nxPflZQ-OvdKvNR5kAeac0D7WgPZb73FU0AngPT0MgSaOByDMih_0b-e0ElHZXHyQ1EEsdmGugvL_2F5081gVh7pVEgjSPG93Ag1sqWW9KRVaZ84kVFyd9ZzAffdMFAcqUY4ZuGU.-XCjMAG0uHMrZYPoSHHCvpHy4Jz7ZyvyNgz-514pDAw&dib_tag=se&keywords=Women%27s+Tops%2C+Tees+%26+Blouses&qid=1723105141&s=fashion&sr=1-48&ts_id=5131107051",
                img: "/assets/images/fairy.webp",
            },
            {
                name: "Ocean Blue Knit Mini Dress",
                brand: "House of CB",
                price: 261.00,
                url: "https://app.houseofcb.com/noya-crystal-blue-knit-mini-dress",
                img: "/assets/images/ocean.webp",
            },
            {
                name: "Peach Poppy Print Cotton Bustier Sundress",
                brand: "House of CB",
                price: 362,
                url: "https://app.houseofcb.com/rosalee-peach-poppy-print-cotton-bustier-sundress",
                img: "/assets/images/peach.webp",
            },
            {
                name: "Deei Double Ruffle Mini Skort Soft Lemon",
                brand: "Lioness",
                price: 59.00,
                url: "https://www.princesspolly.com.au/products/double-ruffle-mini-skort-soft-lemon",
                img: "/assets/images/deei.webp",
            },
            {
                name: "Lilitina Top White",
                brand: "Princess Polly",
                price: 55.00,
                url: "https://www.princesspolly.com.au/products/lilitina-top-white",
                img: "/assets/images/lilitina.webp",
            },
            {
                name: "Feelix Long Sleeve Lace Bodysuit Black",
                brand: "Princess Polly",
                price: 65.00,
                url: "https://www.princesspolly.com.au/products/feelix-long-sleeve-lace-bodysuit-black",
                img: "/assets/images/feelix.webp",
            },
            {
                name: "Strutter Strapless Top White",
                brand: "Princess Polly Soft Fit",
                price: 55.00,
                url: "https://www.princesspolly.com.au/products/strutter-strapless-top-white",
                img: "/assets/images/strutter.webp",
            },
        ]
    )
}
