"use client"

import { useRouter } from "next/navigation";

const Test = () => {

    const sampleData = [
        {
            name: "Jolie Ruched-Bodice Maxi Dress",
            brand: "Forever New",
            price: 219.99,
            url: "https://www.forevernew.com.au/jolie-strappy-ruched-bodice-maxi-287555?colour=red-calida-botanical",
        },
        {
            name: "YPB neoKNIT Polo Sweatshirt",
            brand: "Abercrombie & Fitch",
            price: 55.00,
            url: "https://www.abercrombie.com/shop/wd/p/ypb-neoknit-polo-sweatshirt-57526822?categoryId=12203&faceout=model&seq=01",
        },
        {
            name: "Fairy Shirt foro Women Long Sleeve Vintage Print Crop Top Crewneck Aesthetic Slim Blouse Tee Grunge Clothes",
            brand: "NUFIWI",
            price: 18.59,
            url: "https://www.amazon.com.au/Sleeve-Vintage-Crewneck-Aesthetic-Clothes/dp/B09KQNWKKJ/ref=sr_1_48?c=ts&dib=eyJ2IjoiMSJ9.Ao-3GwDt-HcOjEiO4CBg7nFPyXJm5hEvILcatfQ_DVMZmCdOTuQrXA5iU-E0NQfp9JjQsp1vQ7cLh1tIebtydrv9na5PPt693bUctJ8Ew2VOYEWLRAi9eVm4TK-HeXbf3UbTk36sxMdIj6qPk5XfTPwpRa45HDAMGQ1nxPflZQ-OvdKvNR5kAeac0D7WgPZb73FU0AngPT0MgSaOByDMih_0b-e0ElHZXHyQ1EEsdmGugvL_2F5081gVh7pVEgjSPG93Ag1sqWW9KRVaZ84kVFyd9ZzAffdMFAcqUY4ZuGU.-XCjMAG0uHMrZYPoSHHCvpHy4Jz7ZyvyNgz-514pDAw&dib_tag=se&keywords=Women%27s+Tops%2C+Tees+%26+Blouses&qid=1723105141&s=fashion&sr=1-48&ts_id=5131107051",
        },
        {
            name: "Ocean Blue Knit Mini Dress",
            brand: "House of CB",
            price: 261.00,
            url: "https://app.houseofcb.com/noya-crystal-blue-knit-mini-dress",
        },
        {
            name: "Peach Poppy Print Cotton Bustier Sundress",
            brand: "House of CB",
            price: 362,
            url: "https://app.houseofcb.com/rosalee-peach-poppy-print-cotton-bustier-sundress",
        },
        {
            name: "Deei Double Ruffle Mini Skort Soft Lemon",
            brand: "Lioness",
            price: 59.00,
            url: "https://www.princesspolly.com.au/products/double-ruffle-mini-skort-soft-lemon",
        },
        {
            name: "Lilitina Top White",
            brand: "Princess Polly",
            price: 55.00,
            url: "https://www.princesspolly.com.au/products/lilitina-top-white",
        },
        {
            name: "Feelix Long Sleeve Lace Bodysuit Black",
            brand: "Princess Polly",
            price: 65.00,
            url: "https://www.princesspolly.com.au/products/feelix-long-sleeve-lace-bodysuit-black",
        },
        {
            name: "Strutter Strapless Top White",
            brand: "Princess Polly Soft Fit",
            price: 55.00,
            url: "https://www.princesspolly.com.au/products/strutter-strapless-top-white",
        },
    ];
    
    const router = useRouter();

    async function addProduct(name: string, brand: string, price: number, url: string) {
        try {
            const res = await fetch("http://localhost:3000/api/products", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({ name, brand, price, url }),
            });

            if (res.ok) {
                router.push('/');
            } else {
                throw new Error('Failed to add product');
            }
        } catch (error) {
            console.log(error);
        }
    };

    function handleAddProduct() {
        sampleData.map(async data => {
            await addProduct(data.name, data.brand, data.price, data.url);
        })
    }

    // handleAddProduct();

    // sampleData.map(data => {
    //     addProduct(data.name, data.brand, data.price, data.url);
    // });

    // function handleAddProduct() {
    //     addProduct("Name", "Brand", 100.00, "test.com");
    // }

    function testFunc() {
        console.log("run");
    }

    return (
        <>
            Hello
            <button onClick={handleAddProduct}>Add Product</button>
        </>
    )
}

export default Test