import productJson from '@/components/data/product.json';

function deepCopy(obj: any) {
    return JSON.parse(JSON.stringify(obj));
}

export function getData() {
    return deepCopy(productJson)
}

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
        idx: category.toLowerCase().replace(/\s+/g, '_'),
        name: category
    }));
}

export function getProductByPid(pid) {
    return getData().find(product => product.pid === decodeURI(pid));
}