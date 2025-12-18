import os
import re
import time
import pathlib
import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin, urlparse

# ---------- CONFIG ----------
OUTPUT_DIR = "faculty_photos"   # folder to save images
DELAY_SECONDS = 3               # polite delay between requests
HEADERS = {
    "User-Agent": (
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
        "AppleWebKit/537.36 (KHTML, like Gecko) "
        "Chrome/120.0 Safari/537.36"
    )
}

# All faculty members from faculty list.md
FACULTY = [
    {
        "name": "Earu Banoth",
        "scholar_url": "https://scholar.google.com/citations?user=67YLjwsAAAAJ&hl=en",
    },
    {
        "name": "Rupa Haldavnekar",
        "scholar_url": "https://scholar.google.com/citations?user=1wHT0XEAAAAJ&hl=en",
    },
    {
        "name": "Deeptha Ishwar",
        "scholar_url": "https://scholar.google.com/citations?hl=en&user=YOUR_ID",
    },
    {
        "name": "Bala Chakravarthy Neelapu",
        "scholar_url": "https://scholar.google.com/citations?user=BPxEzosAAAAJ&hl=en",
    },
    {
        "name": "Ayyappasamy Sudalaiyadum Perumal",
        "scholar_url": "https://scholar.google.co.in/citations?user=TCxqu5gAAAAJ&hl=en",
    },
    {
        "name": "Annie Shuk-On-Leung",
        "scholar_url": "https://scholar.google.com/citations?user=r7bqMBoAAAAJ&hl=en",
    },
    {
        "name": "Dan V Nicolau",
        "scholar_url": "https://scholar.google.com/citations?user=3VOTDtkAAAAJ&hl=en",
    },
    {
        "name": "Chamundeeswari G",
        "scholar_url": "https://scholar.google.com/citations?user=dN3LBYIAAAAJ&hl=en",
    },
    {
        "name": "Amrita Singh",
        "scholar_url": "https://scholar.google.com/citations?user=1Dmb9mgAAAAJ&hl=en",
    },
    {
        "name": "Prasoon Kumar",
        "scholar_url": "https://scholar.google.com/citations?user=t6k-34sAAAAJ&hl=en",
    },
    {
        "name": "Dan Nicolau Jr",
        "scholar_url": "https://scholar.google.com/citations?user=MZ7P15YAAAAJ&hl=en",
    },
    {
        "name": "Varun Soria",
        "scholar_url": "https://scholar.google.com/scholar?q=Varun+Soria+researcher",
    },
    {
        "name": "Pallavi Shukla",
        "scholar_url": "https://scholar.google.com/citations?user=1FChkGwAAAAJ&hl=en",
    },
    {
        "name": "Jeffery Zuccato",
        "scholar_url": "https://scholar.google.com/citations?user=6O9x9RoAAAAJ&hl=en",
    },
]


def slugify(name: str) -> str:
    """Convert a name to a safe filename."""
    name = name.strip().lower()
    name = re.sub(r"[^a-z0-9]+", "_", name)
    return name.strip("_") or "faculty"


def get_profile_image_url(html: str, base_url: str) -> str | None:
    """Extract the profile image URL from Google Scholar HTML."""
    soup = BeautifulSoup(html, "html.parser")

    # Google Scholar uses various selectors for profile photos
    # Try multiple selectors in order of likelihood
    img = (
        soup.select_one("img#gsc_prf_pup-img")
        or soup.select_one("img.gs_rimg")
        or soup.select_one("div.gsc_prf_pua img")
        or soup.select_one("div#gsc_prf_pu img")
        or soup.select_one("img[src*='scholar.googleusercontent.com']")
    )
    
    if not img:
        return None
    
    src = img.get("src") or img.get("data-src")
    if not src:
        return None
    
    # Skip placeholder/default images
    if "avatar" in src.lower() or "default" in src.lower() or "blank" in src.lower():
        return None
    
    # Make sure we have an absolute URL
    return urljoin(base_url, src)


def download_image(url: str, out_path: pathlib.Path) -> None:
    resp = requests.get(url, headers=HEADERS, timeout=20)
    resp.raise_for_status()
    out_path.write_bytes(resp.content)


def main():
    os.makedirs(OUTPUT_DIR, exist_ok=True)

    for person in FACULTY:
        name = person["name"]
        url = person["scholar_url"]
        
        # Skip invalid URLs
        if "YOUR_ID" in url or "scholar?q=" in url:
            print(f"Skipping {name} - invalid or search URL: {url}")
            continue
            
        print(f"Processing {name} -> {url}")

        try:
            r = requests.get(url, headers=HEADERS, timeout=20)
            r.raise_for_status()
        except Exception as e:
            print(f"  ! Failed to fetch page: {e}")
            time.sleep(DELAY_SECONDS)
            continue

        img_url = get_profile_image_url(r.text, url)
        if not img_url:
            print(f"  ! No profile image found on page for {name}")
            time.sleep(DELAY_SECONDS)
            continue

        # Keep original extension if present, default to .jpg
        parsed = urlparse(img_url)
        ext = os.path.splitext(parsed.path)[1] or ".jpg"
        filename = slugify(name) + ext
        out_path = pathlib.Path(OUTPUT_DIR) / filename

        try:
            download_image(img_url, out_path)
            print(f"  ✓ Saved image to {out_path}")
        except Exception as e:
            print(f"  ! Failed to download image: {e}")

        time.sleep(DELAY_SECONDS)
    
    print(f"\n✓ Completed! Images saved to {OUTPUT_DIR}/ directory")


if __name__ == "__main__":
    main()