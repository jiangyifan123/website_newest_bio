const raw_data = [
    {
        "image": "/assets/images/gallery/gallery-1.jpg",
        "overlay": "/assets/images/icons/icon-8.png",
        "title": "Agar",
        "categories": ["Colloids"],
        "pid": "agar"
    },
    {
        "image": "/assets/images/gallery/gallery-1.jpg",
        "overlay": "/assets/images/icons/icon-8.png",
        "title": "Xanthan Gum",
        "categories": ["Colloids"],
        "pid": "xanthan_gum"
    },
    {
        "image": "/assets/images/gallery/gallery-1.jpg",
        "overlay": "/assets/images/icons/icon-8.png",
        "title": "Gellan Gum",
        "categories": ["Colloids"],
        "pid": "gellan_gum"
    },
    {
        "image": "/assets/images/gallery/gallery-1.jpg",
        "overlay": "/assets/images/icons/icon-8.png",
        "title": "Carrageenan",
        "categories": ["Colloids"],
        "pid": "carrageenan"
    },
    {
        "image": "/assets/images/gallery/gallery-1.jpg",
        "overlay": "/assets/images/icons/icon-8.png",
        "title": "Pectin",
        "categories": ["Colloids"],
        "pid": "pectin"
    },

    // Amino Acids
    {
        "image": "/assets/images/gallery/gallery-1.jpg",
        "overlay": "/assets/images/icons/icon-8.png",
        "title": "L-arginine",
        "categories": ["Amino Acids"],
        "pid": "l_arginine"
    },
    {
        "image": "/assets/images/gallery/gallery-1.jpg",
        "overlay": "/assets/images/icons/icon-8.png",
        "title": "L-Arginine hydrochloride",
        "categories": ["Amino Acids"],
        "pid": "l_arginine_hydrochloride"
    },
    {
        "image": "/assets/images/gallery/gallery-1.jpg",
        "overlay": "/assets/images/icons/icon-8.png",
        "title": "L-histidine",
        "categories": ["Amino Acids"],
        "pid": "l_histidine"
    },
    {
        "image": "/assets/images/gallery/gallery-1.jpg",
        "overlay": "/assets/images/icons/icon-8.png",
        "title": "L-glutamine",
        "categories": ["Amino Acids"],
        "pid": "l_glutamine"
    },
    {
        "image": "/assets/images/gallery/gallery-1.jpg",
        "overlay": "/assets/images/icons/icon-8.png",
        "title": "L-citrulline",
        "categories": ["Amino Acids"],
        "pid": "l_citrulline"
    },
    {
        "image": "/assets/images/gallery/gallery-1.jpg",
        "overlay": "/assets/images/icons/icon-8.png",
        "title": "L-Citrulline DL-Malate",
        "categories": ["Amino Acids"],
        "pid": "l_citrulline_dl_malate"
    },
    {
        "image": "/assets/images/gallery/gallery-1.jpg",
        "overlay": "/assets/images/icons/icon-8.png",
        "title": "L-Alanine",
        "categories": ["Amino Acids"],
        "pid": "l_alanine"
    },
    {
        "image": "/assets/images/gallery/gallery-1.jpg",
        "overlay": "/assets/images/icons/icon-8.png",
        "title": "L-Phenylalanine",
        "categories": ["Amino Acids"],
        "pid": "l_phenylalanine"
    },
    {
        "image": "/assets/images/gallery/gallery-1.jpg",
        "overlay": "/assets/images/icons/icon-8.png",
        "title": "L-Tryptophan",
        "categories": ["Amino Acids", "Feed Amino Acids"],
        "pid": "l_tryptophan"
    },
    {
        "image": "/assets/images/gallery/gallery-1.jpg",
        "overlay": "/assets/images/icons/icon-8.png",
        "title": "L-Threonine",
        "categories": ["Amino Acids", "Feed Amino Acids"],
        "pid": "l_threonine"
    },
    {
        "image": "/assets/images/gallery/gallery-1.jpg",
        "overlay": "/assets/images/icons/icon-8.png",
        "title": "Keratin hydrolyzed (Instantized BCAA)",
        "categories": ["Amino Acids"],
        "pid": "keratin_hydrolyzed_instantized_bcaa"
    },
    {
        "image": "/assets/images/gallery/gallery-1.jpg",
        "overlay": "/assets/images/icons/icon-8.png",
        "title": "L-Valine",
        "categories": ["Amino Acids", "Feed Amino Acids"],
        "pid": "l_valine"
    },
    {
        "image": "/assets/images/gallery/gallery-1.jpg",
        "overlay": "/assets/images/icons/icon-8.png",
        "title": "L-Isoleucine",
        "categories": ["Amino Acids", "Feed Amino Acids"],
        "pid": "l_isoleucine"
    },
    {
        "image": "/assets/images/gallery/gallery-1.jpg",
        "overlay": "/assets/images/icons/icon-8.png",
        "title": "Creatine monohydrate",
        "categories": ["Amino Acids"],
        "pid": "creatine_monohydrate"
    },
    {
        "image": "/assets/images/gallery/gallery-1.jpg",
        "overlay": "/assets/images/icons/icon-8.png",
        "title": "L-Malic acid",
        "categories": ["Amino Acids"],
        "pid": "l_malic_acid"
    },
    {
        "image": "/assets/images/gallery/gallery-1.jpg",
        "overlay": "/assets/images/icons/icon-8.png",
        "title": "N-Acetyl-L-cysteine",
        "categories": ["Amino Acids"],
        "pid": "n_acetyl_l_cysteine"
    },
    {
        "image": "/assets/images/gallery/gallery-1.jpg",
        "overlay": "/assets/images/icons/icon-8.png",
        "title": "L-Arginine nitrate",
        "categories": ["Amino Acids"],
        "pid": "l_arginine_nitrate"
    },
    {
        "image": "/assets/images/gallery/gallery-1.jpg",
        "overlay": "/assets/images/icons/icon-8.png",
        "title": "Taurine",
        "categories": ["Amino Acids"],
        "pid": "taurine"
    },
    {
        "image": "/assets/images/gallery/gallery-1.jpg",
        "overlay": "/assets/images/icons/icon-8.png",
        "title": "Inositol",
        "categories": ["Amino Acids"],
        "pid": "inositol"
    },
    // Prebiotics
    {
        "image": "/assets/images/gallery/gallery-1.jpg",
        "overlay": "/assets/images/icons/icon-8.png",
        "title": "Human milk oligosaccharides (HMO)",
        "categories": ["Prebiotics"],
        "pid": "human_milk_oligosaccharides_hmo"
    },
    {
        "image": "/assets/images/gallery/gallery-1.jpg",
        "overlay": "/assets/images/icons/icon-8.png",
        "title": "Iso-malto-oligosaccharide (IMO)",
        "categories": ["Prebiotics"],
        "pid": "iso_malto_oligosaccharide_imo"
    },
    {
        "image": "/assets/images/gallery/gallery-1.jpg",
        "overlay": "/assets/images/icons/icon-8.png",
        "title": "Fructooligosaccharides (FOS)",
        "categories": ["Prebiotics"],
        "pid": "fructooligosaccharides_fos"
    },
    {
        "image": "/assets/images/gallery/gallery-1.jpg",
        "overlay": "/assets/images/icons/icon-8.png",
        "title": "Galactooligosaccharides (GOS)",
        "categories": ["Prebiotics"],
        "pid": "galactooligosaccharides_gos"
    },
    {
        "image": "/assets/images/gallery/gallery-1.jpg",
        "overlay": "/assets/images/icons/icon-8.png",
        "title": "Xylo-oligosaccharides (XOS)",
        "categories": ["Prebiotics"],
        "pid": "xylo_oligosaccharides_xos"
    },
    // Sweeteners
    {
        "image": "/assets/images/gallery/gallery-1.jpg",
        "overlay": "/assets/images/icons/icon-8.png",
        "title": "Erythritol",
        "categories": ["Sweeteners"],
        "pid": "erythritol"
    },
    {
        "image": "/assets/images/gallery/gallery-1.jpg",
        "overlay": "/assets/images/icons/icon-8.png",
        "title": "Allulose",
        "categories": ["Sweeteners"],
        "pid": "allulose"
    },
    {
        "image": "/assets/images/gallery/gallery-1.jpg",
        "overlay": "/assets/images/icons/icon-8.png",
        "title": "Xylitol",
        "categories": ["Sweeteners"],
        "pid": "xylitol"
    },
    {
        "image": "/assets/images/gallery/gallery-1.jpg",
        "overlay": "/assets/images/icons/icon-8.png",
        "title": "D-Xylose",
        "categories": ["Sweeteners"],
        "pid": "d_xylose"
    },
    {
        "image": "/assets/images/gallery/gallery-1.jpg",
        "overlay": "/assets/images/icons/icon-8.png",
        "title": "Aspartame",
        "categories": ["Sweeteners"],
        "pid": "aspartame"
    },
    {
        "image": "/assets/images/gallery/gallery-1.jpg",
        "overlay": "/assets/images/icons/icon-8.png",
        "title": "Dextrose monohydrate",
        "categories": ["Sweeteners"],
        "pid": "dextrose_monohydrate"
    },
    {
        "image": "/assets/images/gallery/gallery-1.jpg",
        "overlay": "/assets/images/icons/icon-8.png",
        "title": "D(+)-Glucose",
        "categories": ["Sweeteners"],
        "pid": "d_glucose"
    },
    {
        "image": "/assets/images/gallery/gallery-1.jpg",
        "overlay": "/assets/images/icons/icon-8.png",
        "title": "D-Mannitol",
        "categories": ["Sweeteners"],
        "pid": "d_mannitol"
    },
    {
        "image": "/assets/images/gallery/gallery-1.jpg",
        "overlay": "/assets/images/icons/icon-8.png",
        "title": "Mannitol",
        "categories": ["Sweeteners"],
        "pid": "mannitol"
    },
    {
        "image": "/assets/images/gallery/gallery-1.jpg",
        "overlay": "/assets/images/icons/icon-8.png",
        "title": "Pure Crystalline Fructose (PCF)",
        "categories": ["Sweeteners"],
        "pid": "pure_crystalline_fructose_pcf"
    },
    {
        "image": "/assets/images/gallery/gallery-1.jpg",
        "overlay": "/assets/images/icons/icon-8.png",
        "title": "Trehalose",
        "categories": ["Sweeteners"],
        "pid": "trehalose"
    },
    // Dietary Fibers
    {
        "image": "/assets/images/gallery/gallery-1.jpg",
        "overlay": "/assets/images/icons/icon-8.png",
        "title": "Polydextrose",
        "categories": ["Dietary Fibers"],
        "pid": "polydextrose"
    },
    {
        "image": "/assets/images/gallery/gallery-1.jpg",
        "overlay": "/assets/images/icons/icon-8.png",
        "title": "Resistant dextrin",
        "categories": ["Dietary Fibers"],
        "pid": "resistant_dextrin"
    },
    // Flavor Enhancers
    {
        "image": "/assets/images/gallery/gallery-1.jpg",
        "overlay": "/assets/images/icons/icon-8.png",
        "title": "Monosodium glutamate (MSG)",
        "categories": ["Flavor Enhancers"],
        "pid": "monosodium_glutamate_msg"
    },
    {
        "image": "/assets/images/gallery/gallery-1.jpg",
        "overlay": "/assets/images/icons/icon-8.png",
        "title": "Citric acid monohydrate",
        "categories": ["Flavor Enhancers"],
        "pid": "citric_acid_monohydrate"
    },
    {
        "image": "/assets/images/gallery/gallery-1.jpg",
        "overlay": "/assets/images/icons/icon-8.png",
        "title": "Citric acid",
        "categories": ["Flavor Enhancers"],
        "pid": "citric_acid"
    },
    // Flavor Enhancers
    {
        "image": "/assets/images/gallery/gallery-1.jpg",
        "overlay": "/assets/images/icons/icon-8.png",
        "title": "Monosodium glutamate (MSG)",
        "categories": ["Flavor Enhancers"],
        "pid": "monosodium_glutamate_msg"
    },
    {
        "image": "/assets/images/gallery/gallery-1.jpg",
        "overlay": "/assets/images/icons/icon-8.png",
        "title": "Citric acid monohydrate",
        "categories": ["Flavor Enhancers"],
        "pid": "citric_acid_monohydrate"
    },
    {
        "image": "/assets/images/gallery/gallery-1.jpg",
        "overlay": "/assets/images/icons/icon-8.png",
        "title": "Citric acid",
        "categories": ["Flavor Enhancers"],
        "pid": "citric_acid"
    },

    // Feed Amino Acids
    {
        "image": "/assets/images/gallery/gallery-1.jpg",
        "overlay": "/assets/images/icons/icon-8.png",
        "title": "L-Methionine",
        "categories": ["Feed Amino Acids"],
        "pid": "l_methionine"
    },
    {
        "image": "/assets/images/gallery/gallery-1.jpg",
        "overlay": "/assets/images/icons/icon-8.png",
        "title": "L-Lysine",
        "categories": ["Feed Amino Acids"],
        "pid": "l_lysine"
    },
    {
        "image": "/assets/images/gallery/gallery-1.jpg",
        "overlay": "/assets/images/icons/icon-8.png",
        "title": "L-Leucine",
        "categories": ["Feed Amino Acids"],
        "pid": "l_leucine"
    },
    // Chemicals
    {
        "image": "/assets/images/gallery/gallery-1.jpg",
        "overlay": "/assets/images/icons/icon-8.png",
        "title": "MEA",
        "categories": ["Chemicals"],
        "pid": "mea"
    },
    {
        "image": "/assets/images/gallery/gallery-1.jpg",
        "overlay": "/assets/images/icons/icon-8.png",
        "title": "Industrial Xanthan Gum",
        "categories": ["Chemicals"],
        "pid": "industrial_xanthan_gum"
    },
    {
        "image": "/assets/images/gallery/gallery-1.jpg",
        "overlay": "/assets/images/icons/icon-8.png",
        "title": "Industrial Citric acid",
        "categories": ["Chemicals"],
        "pid": "industrial_citric_acid"
    },
    {
        "image": "/assets/images/gallery/gallery-1.jpg",
        "overlay": "/assets/images/icons/icon-8.png",
        "title": "Sodium tartrate",
        "categories": ["Chemicals"],
        "pid": "sodium_tartrate"
    },
    {
        "image": "/assets/images/gallery/gallery-1.jpg",
        "overlay": "/assets/images/icons/icon-8.png",
        "title": "Tetrakis(hydroxymethyl)phosphonium sulfate (THPS)",
        "categories": ["Chemicals"],
        "pid": "tetrakis_hydroxymethyl_phosphonium_sulfate_thps"
    },
    {
        "image": "/assets/images/gallery/gallery-1.jpg",
        "overlay": "/assets/images/icons/icon-8.png",
        "title": "Tetrakis(hydroxymethyl)phosphonium chloride (THPC)",
        "categories": ["Chemicals"],
        "pid": "tetrakis_hydroxymethyl_phosphonium_chloride_thpc"
    }
];

const processed_data = raw_data.map(item => {
    // Transform each category and keep them as an array
    const category_idx = item.categories.map(category => 
        category.toLowerCase().replace(/\s+/g, '_')
    );
    
    // Return the modified item
    return { ...item, category_idx };
});

export function getData() {
    return [...processed_data];
} 

export function getUniqueCategories(products) {
    const categoriesSet = new Set();

    getData().forEach(product => {
        product.categories.forEach(category => {
            // Add only the category name to the Set to ensure uniqueness
            categoriesSet.add(category);
        });
    });

    // Convert Set into the desired array format
    return Array.from(categoriesSet).map(category => ({
        idx: category.toLowerCase().replace(/\s+/g, '_'),
        name: category
    }));
}

export function getProductListSortedByCategory() {
    const productMap = {};

    getData().forEach(product => {
        product.categories.forEach(category => {
            // Add only the category name to the Set to ensure uniqueness
            if (productMap[category] === undefined) {
                productMap[category] = new Set();
            }
            productMap[category].add(product);
        });
    });
    return productMap;
}

export function getProductByPid(pid) {
    return getData().find(product => product.pid === pid);
}