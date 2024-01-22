import productJson from '@/components/data/product.json';

function deepCopy(obj: any) {
    return JSON.parse(JSON.stringify(obj));
}

export function getData() {
    return deepCopy(productJson)
}

function getCategoryIdx(category: string) {
    return category.toLowerCase().replace(/\s+/g, '_');
}

export function getUniqueCategories() {
    const categoriesSet = new Set();

    productJson.forEach(product => {
        product.categories.forEach(category => {
            // Add only the category name to the Set to ensure uniqueness
            categoriesSet.add(category);
        });
    });

    const orderList = Array.from(categoriesSet).sort();
    const OtherIdx = orderList.indexOf('Others');
    if (OtherIdx > -1) {
        orderList.splice(OtherIdx, 1);
        orderList.push('Others');
    }
    // Convert Set into the desired array format
    const res = orderList.map((category: string) => ({
        idx: getCategoryIdx(category),
        name: category
    }));
    return res;
}

export function getProductsOrderedByCategories() {
    const categoriesList = {};

    productJson.forEach(product => {
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

    const orderedResultList = {}
    Object.keys(categoriesList).sort().forEach(category => {
        categoriesList[category].list.sort((a, b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase())); 
        orderedResultList[category] = categoriesList[category];
    });

    if ('Others' in orderedResultList) {
        const other = orderedResultList['Others'];
        delete orderedResultList['Others'];
        orderedResultList['Others'] = other;
    }
    // Convert Set into the desired array format
    return orderedResultList;
}

export function getProductByPid(pid) {
    return productJson.find(product => product.pid === decodeURI(pid));
}

export function searchProductsByName(name) {
    return productJson.filter(product => product.title.toLowerCase().indexOf(name.toLowerCase()) >= 0).slice(0, 20);
}