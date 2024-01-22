import productJson from '@/components/data/product.json';

function deepCopy(obj: any) {
    return JSON.parse(JSON.stringify(obj));
}

export function getData() {
    return deepCopy(productJson)
}
<<<<<<< HEAD

function getCategoryIdx(category: string) {
    return category.toLowerCase().replace(/\s+/g, '_');
}
=======
>>>>>>> 22ba033 (update)

export function getUniqueCategories() {
    const categoriesSet = new Set();

    getData().forEach(product => {
        product.categories.forEach(category => {
            // Add only the category name to the Set to ensure uniqueness
            categoriesSet.add(category);
        });
    });

    // Convert Set into the desired array format
    return Array.from(categoriesSet).map((category: string) => ({
        idx: getCategoryIdx(category),
        name: category
    }));
}

export function getProductsOrderedByCategories() {
    const categoriesList = {};

    getData().forEach(product => {
        product.categories.forEach(category => {
            // Add only the category name to the Set to ensure uniqueness
            if (categoriesList[category] === undefined) {
                categoriesList[category] = {
                    category,
                    idx: getCategoryIdx(category),
                    list: [],
                    url: `/products/${getCategoryIdx(category)}`
                };
            }
            categoriesList[category].list.push(product);
        });
    });

    // Convert Set into the desired array format
    return categoriesList;
}

export function getProductByPid(pid) {
    return getData().find(product => product.pid === decodeURI(pid));
}

export function searchProductsByName(name) {
    return getData().filter(product => product.title.toLowerCase().indexOf(name.toLowerCase()) >= 0);
}