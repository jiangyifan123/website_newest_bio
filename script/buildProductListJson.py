import docx
import json

file = r'./production description.docx'
doc = docx.Document(file)

productList = {}
stk = [productList,]


for paragraph in doc.paragraphs:
    if paragraph.style.name.startswith('Heading'):
        num = int(paragraph.style.name.replace('Heading', ''))
        assert (num <= len(stk))
        while num < len(stk):
            stk.pop()
        stk[-1][paragraph.text.strip()] = {} if num < 3 else []
        stk.append(stk[-1][paragraph.text.strip()])
    else:
        if len(paragraph.text.strip()) == 0:
            continue
        stk[-1].append(paragraph.text.split(':')[0].strip())

procceededProductList = {}

for category_name, products in productList.items():
    for product_name, info in products.items():
        for key in list(info):
            if 'Other Names'.lower() in key.lower():
                info.pop(key)
            if 'Description'.lower() in key.lower():
                tmp = info.pop(key)
                info['desc'] = tmp
        pid = '_'.join(product_name.lower().split(' '))
        category_idx = '_'.join(category_name.lower().split(' '))
        if pid not in procceededProductList:
            procceededProductList[pid] = {"pid": pid, "title": product_name, "categories": [], "category_idx": [], "infos": {}}
        info['pdfUrl'] = '#'
        procceededProductList[pid]["categories"].append(category_name)
        procceededProductList[pid]['category_idx'].append(category_idx)
        procceededProductList[pid]["infos"][category_idx] = info
        procceededProductList[pid]['image'] = "/assets/images/gallery/gallery-1.jpg"
        procceededProductList[pid]['overlay'] = "/assets/images/icons/icon-8.png"

# with open('product_detail.json', 'w') as f:
#     f.write(json.dumps(productList, indent=4))

with open('product.json', 'w', encoding='utf8') as f:
    json.dump(list(procceededProductList.values()), f, ensure_ascii=False, indent=4)