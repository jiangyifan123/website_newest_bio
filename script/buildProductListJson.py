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
        stk[-1][paragraph.text.strip()] = {}
        stk.append(stk[-1][paragraph.text.strip()])
    else:
        if len(paragraph.text.strip()) == 0:
            continue
        if "Normal_Content" not in stk[-1]:
            stk[-1]["Normal_Content"] = []
        stk[-1]["Normal_Content"].append(paragraph.text.strip())

print(productList.keys())

with open('product.json', 'w') as f:
    f.write(json.dumps(productList, indent=4))