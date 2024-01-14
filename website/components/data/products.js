export function getData() {

    const raw_data = [
        {
            "image": "/assets/images/gallery/gallery-1.jpg",
            "overlay": "/assets/images/icons/icon-8.png",
            "title": "Agar",
            "categories": ["Colloids"],
            "link": "/products/colloids/agar"
        },
        {
            "image": "/assets/images/gallery/gallery-1.jpg",
            "overlay": "/assets/images/icons/icon-8.png",
            "title": "Xanthan Gum",
            "categories": ["Colloids"],
            "link": "/products/colloids/xanthan_gum"
        },
        {
            "image": "/assets/images/gallery/gallery-1.jpg",
            "overlay": "/assets/images/icons/icon-8.png",
            "title": "Gellan Gum",
            "categories": ["Colloids"],
            "link": "/products/colloids/gellan_gum"
        },
        {
            "image": "/assets/images/gallery/gallery-1.jpg",
            "overlay": "/assets/images/icons/icon-8.png",
            "title": "Carrageenan",
            "categories": ["Colloids"],
            "link": "/products/colloids/carrageenan"
        },
        {
            "image": "/assets/images/gallery/gallery-1.jpg",
            "overlay": "/assets/images/icons/icon-8.png",
            "title": "Pectin",
            "categories": ["Colloids"],
            "link": "/products/colloids/pectin"
        },

        // Amino Acids
        {
            "image": "/assets/images/gallery/gallery-1.jpg",
            "overlay": "/assets/images/icons/icon-8.png",
            "title": "L-arginine",
            "categories": ["Amino Acids"],
            "link": "/products/amino_acids/l_arginine"
        },
        {
            "image": "/assets/images/gallery/gallery-1.jpg",
            "overlay": "/assets/images/icons/icon-8.png",
            "title": "L-Arginine hydrochloride",
            "categories": ["Amino Acids"],
            "link": "/products/amino_acids/l_arginine_hydrochloride"
        },
        {
            "image": "/assets/images/gallery/gallery-1.jpg",
            "overlay": "/assets/images/icons/icon-8.png",
            "title": "L-histidine",
            "categories": ["Amino Acids"],
            "link": "/products/amino_acids/l_histidine"
        },
        {
            "image": "/assets/images/gallery/gallery-1.jpg",
            "overlay": "/assets/images/icons/icon-8.png",
            "title": "L-glutamine",
            "categories": ["Amino Acids"],
            "link": "/products/amino_acids/l_glutamine"
        },
        {
            "image": "/assets/images/gallery/gallery-1.jpg",
            "overlay": "/assets/images/icons/icon-8.png",
            "title": "L-citrulline",
            "categories": ["Amino Acids"],
            "link": "/products/amino_acids/l_citrulline"
        },
        {
            "image": "/assets/images/gallery/gallery-1.jpg",
            "overlay": "/assets/images/icons/icon-8.png",
            "title": "L-Citrulline DL-Malate",
            "categories": ["Amino Acids"],
            "link": "/products/amino_acids/l_citrulline_dl_malate"
        },
        {
            "image": "/assets/images/gallery/gallery-1.jpg",
            "overlay": "/assets/images/icons/icon-8.png",
            "title": "L-Alanine",
            "categories": ["Amino Acids"],
            "link": "/products/amino_acids/l_alanine"
        },
        {
            "image": "/assets/images/gallery/gallery-1.jpg",
            "overlay": "/assets/images/icons/icon-8.png",
            "title": "L-Phenylalanine",
            "categories": ["Amino Acids"],
            "link": "/products/amino_acids/l_phenylalanine"
        },
        {
            "image": "/assets/images/gallery/gallery-1.jpg",
            "overlay": "/assets/images/icons/icon-8.png",
            "title": "L-Tryptophan",
            "categories": ["Amino Acids", "Feed Amino Acids"],
            "link": "/products/amino_acids/l_tryptophan"
        },
        {
            "image": "/assets/images/gallery/gallery-1.jpg",
            "overlay": "/assets/images/icons/icon-8.png",
            "title": "L-Threonine",
            "categories": ["Amino Acids", "Feed Amino Acids"],
            "link": "/products/amino_acids/l_threonine"
        },
        {
            "image": "/assets/images/gallery/gallery-1.jpg",
            "overlay": "/assets/images/icons/icon-8.png",
            "title": "Keratin hydrolyzed (Instantized BCAA)",
            "categories": ["Amino Acids"],
            "link": "/products/amino_acids/keratin_hydrolyzed_instantized_bcaa"
        },
        {
            "image": "/assets/images/gallery/gallery-1.jpg",
            "overlay": "/assets/images/icons/icon-8.png",
            "title": "L-Valine",
            "categories": ["Amino Acids", "Feed Amino Acids"],
            "link": "/products/amino_acids/l_valine"
        },
        {
            "image": "/assets/images/gallery/gallery-1.jpg",
            "overlay": "/assets/images/icons/icon-8.png",
            "title": "L-Isoleucine",
            "categories": ["Amino Acids", "Feed Amino Acids"],
            "link": "/products/amino_acids/l_isoleucine"
        },
        {
            "image": "/assets/images/gallery/gallery-1.jpg",
            "overlay": "/assets/images/icons/icon-8.png",
            "title": "Creatine monohydrate",
            "categories": ["Amino Acids"],
            "link": "/products/amino_acids/creatine_monohydrate"
        },
        {
            "image": "/assets/images/gallery/gallery-1.jpg",
            "overlay": "/assets/images/icons/icon-8.png",
            "title": "L-Malic acid",
            "categories": ["Amino Acids"],
            "link": "/products/amino_acids/l_malic_acid"
        },
        {
            "image": "/assets/images/gallery/gallery-1.jpg",
            "overlay": "/assets/images/icons/icon-8.png",
            "title": "N-Acetyl-L-cysteine",
            "categories": ["Amino Acids"],
            "link": "/products/amino_acids/n_acetyl_l_cysteine"
        },
        {
            "image": "/assets/images/gallery/gallery-1.jpg",
            "overlay": "/assets/images/icons/icon-8.png",
            "title": "L-Arginine nitrate",
            "categories": ["Amino Acids"],
            "link": "/products/amino_acids/l_arginine_nitrate"
        },
        {
            "image": "/assets/images/gallery/gallery-1.jpg",
            "overlay": "/assets/images/icons/icon-8.png",
            "title": "Taurine",
            "categories": ["Amino Acids"],
            "link": "/products/amino_acids/taurine"
        },
        {
            "image": "/assets/images/gallery/gallery-1.jpg",
            "overlay": "/assets/images/icons/icon-8.png",
            "title": "Inositol",
            "categories": ["Amino Acids"],
            "link": "/products/amino_acids/inositol"
        },
        // Prebiotics
        {
            "image": "/assets/images/gallery/gallery-1.jpg",
            "overlay": "/assets/images/icons/icon-8.png",
            "title": "Human milk oligosaccharides (HMO)",
            "categories": ["Prebiotics"],
            "link": "/products/prebiotics/human_milk_oligosaccharides_hmo"
        },
        {
            "image": "/assets/images/gallery/gallery-1.jpg",
            "overlay": "/assets/images/icons/icon-8.png",
            "title": "Iso-malto-oligosaccharide (IMO)",
            "categories": ["Prebiotics"],
            "link": "/products/prebiotics/iso_malto_oligosaccharide_imo"
        },
        {
            "image": "/assets/images/gallery/gallery-1.jpg",
            "overlay": "/assets/images/icons/icon-8.png",
            "title": "Fructooligosaccharides (FOS)",
            "categories": ["Prebiotics"],
            "link": "/products/prebiotics/fructooligosaccharides_fos"
        },
        {
            "image": "/assets/images/gallery/gallery-1.jpg",
            "overlay": "/assets/images/icons/icon-8.png",
            "title": "Galactooligosaccharides (GOS)",
            "categories": ["Prebiotics"],
            "link": "/products/prebiotics/galactooligosaccharides_gos"
        },
        {
            "image": "/assets/images/gallery/gallery-1.jpg",
            "overlay": "/assets/images/icons/icon-8.png",
            "title": "Xylo-oligosaccharides (XOS)",
            "categories": ["Prebiotics"],
            "link": "/products/prebiotics/xylo_oligosaccharides_xos"
        },
        // Sweeteners
        {
            "image": "/assets/images/gallery/gallery-1.jpg",
            "overlay": "/assets/images/icons/icon-8.png",
            "title": "Erythritol",
            "categories": ["Sweeteners"],
            "link": "/products/sweeteners/erythritol"
        },
        {
            "image": "/assets/images/gallery/gallery-1.jpg",
            "overlay": "/assets/images/icons/icon-8.png",
            "title": "Allulose",
            "categories": ["Sweeteners"],
            "link": "/products/sweeteners/allulose"
        },
        {
            "image": "/assets/images/gallery/gallery-1.jpg",
            "overlay": "/assets/images/icons/icon-8.png",
            "title": "Xylitol",
            "categories": ["Sweeteners"],
            "link": "/products/sweeteners/xylitol"
        },
        {
            "image": "/assets/images/gallery/gallery-1.jpg",
            "overlay": "/assets/images/icons/icon-8.png",
            "title": "D-Xylose",
            "categories": ["Sweeteners"],
            "link": "/products/sweeteners/d_xylose"
        },
        {
            "image": "/assets/images/gallery/gallery-1.jpg",
            "overlay": "/assets/images/icons/icon-8.png",
            "title": "Aspartame",
            "categories": ["Sweeteners"],
            "link": "/products/sweeteners/aspartame"
        },
        {
            "image": "/assets/images/gallery/gallery-1.jpg",
            "overlay": "/assets/images/icons/icon-8.png",
            "title": "Dextrose monohydrate",
            "categories": ["Sweeteners"],
            "link": "/products/sweeteners/dextrose_monohydrate"
        },
        {
            "image": "/assets/images/gallery/gallery-1.jpg",
            "overlay": "/assets/images/icons/icon-8.png",
            "title": "D(+)-Glucose",
            "categories": ["Sweeteners"],
            "link": "/products/sweeteners/d_glucose"
        },
        {
            "image": "/assets/images/gallery/gallery-1.jpg",
            "overlay": "/assets/images/icons/icon-8.png",
            "title": "D-Mannitol",
            "categories": ["Sweeteners"],
            "link": "/products/sweeteners/d_mannitol"
        },
        {
            "image": "/assets/images/gallery/gallery-1.jpg",
            "overlay": "/assets/images/icons/icon-8.png",
            "title": "Mannitol",
            "categories": ["Sweeteners"],
            "link": "/products/sweeteners/mannitol"
        },
        {
            "image": "/assets/images/gallery/gallery-1.jpg",
            "overlay": "/assets/images/icons/icon-8.png",
            "title": "Pure Crystalline Fructose (PCF)",
            "categories": ["Sweeteners"],
            "link": "/products/sweeteners/pure_crystalline_fructose_pcf"
        },
        {
            "image": "/assets/images/gallery/gallery-1.jpg",
            "overlay": "/assets/images/icons/icon-8.png",
            "title": "Trehalose",
            "categories": ["Sweeteners"],
            "link": "/products/sweeteners/trehalose"
        },
        // Dietary Fibers
        {
            "image": "/assets/images/gallery/gallery-1.jpg",
            "overlay": "/assets/images/icons/icon-8.png",
            "title": "Polydextrose",
            "categories": ["Dietary Fibers"],
            "link": "/products/dietary_fibers/polydextrose"
        },
        {
            "image": "/assets/images/gallery/gallery-1.jpg",
            "overlay": "/assets/images/icons/icon-8.png",
            "title": "Resistant dextrin",
            "categories": ["Dietary Fibers"],
            "link": "/products/dietary_fibers/resistant_dextrin"
        },
        // Flavor Enhancers
        {
            "image": "/assets/images/gallery/gallery-1.jpg",
            "overlay": "/assets/images/icons/icon-8.png",
            "title": "Monosodium glutamate (MSG)",
            "categories": ["Flavor Enhancers"],
            "link": "/products/flavor_enhancers/monosodium_glutamate_msg"
        },
        {
            "image": "/assets/images/gallery/gallery-1.jpg",
            "overlay": "/assets/images/icons/icon-8.png",
            "title": "Citric acid monohydrate",
            "categories": ["Flavor Enhancers"],
            "link": "/products/flavor_enhancers/citric_acid_monohydrate"
        },
        {
            "image": "/assets/images/gallery/gallery-1.jpg",
            "overlay": "/assets/images/icons/icon-8.png",
            "title": "Citric acid",
            "categories": ["Flavor Enhancers"],
            "link": "/products/flavor_enhancers/citric_acid"
        },
        // Flavor Enhancers
        {
            "image": "/assets/images/gallery/gallery-1.jpg",
            "overlay": "/assets/images/icons/icon-8.png",
            "title": "Monosodium glutamate (MSG)",
            "categories": ["Flavor Enhancers"],
            "link": "/products/flavor_enhancers/monosodium_glutamate_msg"
        },
        {
            "image": "/assets/images/gallery/gallery-1.jpg",
            "overlay": "/assets/images/icons/icon-8.png",
            "title": "Citric acid monohydrate",
            "categories": ["Flavor Enhancers"],
            "link": "/products/flavor_enhancers/citric_acid_monohydrate"
        },
        {
            "image": "/assets/images/gallery/gallery-1.jpg",
            "overlay": "/assets/images/icons/icon-8.png",
            "title": "Citric acid",
            "categories": ["Flavor Enhancers"],
            "link": "/products/flavor_enhancers/citric_acid"
        },

        // Feed Amino Acids
        {
            "image": "/assets/images/gallery/gallery-1.jpg",
            "overlay": "/assets/images/icons/icon-8.png",
            "title": "L-Methionine",
            "categories": ["Feed Amino Acids"],
            "link": "/products/feed_amino_acids/l_methionine"
        },
        {
            "image": "/assets/images/gallery/gallery-1.jpg",
            "overlay": "/assets/images/icons/icon-8.png",
            "title": "L-Lysine",
            "categories": ["Feed Amino Acids"],
            "link": "/products/feed_amino_acids/l_lysine"
        },
        {
            "image": "/assets/images/gallery/gallery-1.jpg",
            "overlay": "/assets/images/icons/icon-8.png",
            "title": "L-Leucine",
            "categories": ["Feed Amino Acids"],
            "link": "/products/feed_amino_acids/l_leucine"
        },
        // Chemicals
        {
            "image": "/assets/images/gallery/gallery-1.jpg",
            "overlay": "/assets/images/icons/icon-8.png",
            "title": "MEA",
            "categories": ["Chemicals"],
            "link": "/products/chemicals/mea"
        },
        {
            "image": "/assets/images/gallery/gallery-1.jpg",
            "overlay": "/assets/images/icons/icon-8.png",
            "title": "Industrial Xanthan Gum",
            "categories": ["Chemicals"],
            "link": "/products/chemicals/industrial_xanthan_gum"
        },
        {
            "image": "/assets/images/gallery/gallery-1.jpg",
            "overlay": "/assets/images/icons/icon-8.png",
            "title": "Industrial Citric acid",
            "categories": ["Chemicals"],
            "link": "/products/chemicals/industrial_citric_acid"
        },
        {
            "image": "/assets/images/gallery/gallery-1.jpg",
            "overlay": "/assets/images/icons/icon-8.png",
            "title": "Sodium tartrate",
            "categories": ["Chemicals"],
            "link": "/products/chemicals/sodium_tartrate"
        },
        {
            "image": "/assets/images/gallery/gallery-1.jpg",
            "overlay": "/assets/images/icons/icon-8.png",
            "title": "Tetrakis(hydroxymethyl)phosphonium sulfate (THPS)",
            "categories": ["Chemicals"],
            "link": "/products/chemicals/tetrakis_hydroxymethyl_phosphonium_sulfate_thps"
        },
        {
            "image": "/assets/images/gallery/gallery-1.jpg",
            "overlay": "/assets/images/icons/icon-8.png",
            "title": "Tetrakis(hydroxymethyl)phosphonium chloride (THPC)",
            "categories": ["Chemicals"],
            "link": "/products/chemicals/tetrakis_hydroxymethyl_phosphonium_chloride_thpc"
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

    return processed_data

} 

export function getUniqueCategories(products) {
    const categoriesSet = new Set();

    products.forEach(product => {
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