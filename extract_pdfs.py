import fitz
import glob
import os

# Find all PDFs except the handbook
for pdf_path in glob.glob('resources/*.pdf'):
    basename = os.path.basename(pdf_path)
    if 'Handbook' in basename:
        continue
    
    # Create a clean filename
    output_name = basename.replace('.pdf', '_extracted.txt')
    output_file = f'resources/{output_name}'
    
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(f'FILE: {basename}\n')
        f.write('='*60 + '\n')
        pdf = fitz.open(pdf_path)
        for i, page in enumerate(pdf):
            f.write(f'\n--- Page {i+1} ---\n')
            f.write(page.get_text())
        pdf.close()
    print(f'Saved: {output_file}')
