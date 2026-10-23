import os
import sys
from PIL import Image
from rembg import remove

def process_images():
    assets_dir = r"public/assets"
    images = [
        ("feature_academic_senior.jpg", "feature_academic_cutout.png"),
        ("feature_stem_senior.jpg", "feature_stem_cutout.png"),
        ("feature_sports_senior.jpg", "feature_sports_cutout.png"),
        ("feature_leadership_senior.jpg", "feature_leadership_cutout.png"),
    ]

    for in_name, out_name in images:
        in_path = os.path.join(assets_dir, in_name)
        out_path = os.path.join(assets_dir, out_name)
        print(f"Processing {in_path} -> {out_path}...")
        
        with open(in_path, 'rb') as f:
            input_data = f.read()
            output_data = remove(input_data)
            
        with open(out_path, 'wb') as f:
            f.write(output_data)
            
        print(f"Saved {out_path}")

if __name__ == "__main__":
    process_images()
