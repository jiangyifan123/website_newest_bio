const buildDetailObject = (json) => {
    return {
        desc: "",
        info: {},
        pdfUrl: "#",
        ...json,
    }
}

const product_detail = {
    "agar": buildDetailObject({
        desc: `Newest Biotech INC., a leading Agar Manufacturer, excels in producing high-quality agar with a unique capability to melt at 65 degrees Celsius, catering to diverse industries.
    
        Leveraging years of expertise, we offer unparalleled customer service and customized product specifications to meet clients' unique requirements. Our specialization in various gel strengths sets us apart, enabling us to produce both small and large quantities efficiently, catering to one-time or regular monthly orders. 
        
        Our modern production methods ensure fast delivery without compromising on quality. Committed to customer satisfaction, we provide flexible packaging options and strive to offer the best quality at competitive prices, aiming to be the industry leader.`,
        
        info: {
            "otherName": {
                "Agar Agar": [],
                "Agarose": [],
            },
            "Our Specialty:": {
                "Fulfill custom need to produce Agar with melting point as low as 65 degree Celsius": [],
            },
            "Functionalities:": {
                "Forms Strong, Brittle GelsBinds Water Tolerant of High Solids Require Heat Activation": [],
            },
            "Applicable industries:" : {
                "Food Industry": [
                    "Bakery Products",
                    "Dairy Products",
                    "Beverages",
                    "Health Foods",
                    "Vegetarian and Vegan Foods",
                ],
                "Microbiology": [],
                "Pharmaceutical": [],
                "Biotechnology": [],
                "Cosmetics and Personal Care": [],
            }
        }
    }),
}

export function getProductDetailByName(name) {
    return product_detail[name.toLowerCase()] || buildDetailObject({});
}