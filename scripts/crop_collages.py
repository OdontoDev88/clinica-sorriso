"""Separa as duas colagens da Clínica Sorriso em fotografias individuais.

Uso (a partir da raiz do projeto):
    python scripts/crop_collages.py

As divisórias são detectadas por pixels: linhas e colunas quase inteiramente
brancas. Cada recorte recebe uma margem de segurança para eliminar o
serrilhado da divisória, é ampliado 2x com Lanczos e salvo em WebP.
A ampliação suaviza a exibição em telas grandes, mas não cria detalhes novos.
"""

from pathlib import Path

import numpy as np
from PIL import Image, ImageFilter

ROOT = Path(__file__).resolve().parent.parent
SOURCE = ROOT / "source-images"
OUTPUT = ROOT / "public" / "images"

WHITE = 238
DIVIDER_FRACTION = 0.97
SAFETY_INSET = 3
SCALE = 2

# Nomes por linha e, dentro da linha, da esquerda para a direita.
COLLAGES = {
    "colagem-1.webp": [
        ["fachada-clinica-02", "recepcao-02"],
        ["sala-espera-02", "consultorio-03"],
        ["dentista-atendimento-02", "consulta-paciente-02"],
        ["equipe-odontologica-02", "sorriso"],
        ["implante-dentario-02", "ortodontia-02"],
        ["consultorio-04", "consulta-raio-x"],
    ],
    "colagem-2.webp": [
        ["fachada-clinica", "recepcao"],
        ["sala-espera", "consultorio-01"],
        ["dentista-atendimento-01", "consulta-paciente"],
        ["equipe-odontologica", "estetica-dental", "implante-dentario"],
        ["ortodontia", "procedimento-clinico", "consultorio-02"],
    ],
}


def spans_between_dividers(fraction: np.ndarray) -> list[tuple[int, int]]:
    """Retorna os trechos (início, fim) que ficam entre as divisórias."""
    spans, start = [], None
    for index, is_divider in enumerate(fraction > DIVIDER_FRACTION):
        if not is_divider and start is None:
            start = index
        elif is_divider and start is not None:
            spans.append((start, index))
            start = None
    if start is not None:
        spans.append((start, len(fraction)))
    return spans


def main() -> None:
    OUTPUT.mkdir(parents=True, exist_ok=True)
    for filename, rows in COLLAGES.items():
        image = Image.open(SOURCE / filename).convert("RGB")
        gray = np.asarray(image.convert("L")).astype(float)
        bands = spans_between_dividers((gray > WHITE).mean(axis=1))
        if len(bands) != len(rows):
            raise SystemExit(f"{filename}: {len(bands)} linhas, esperava {len(rows)}")

        for (top, bottom), names in zip(bands, rows):
            cells = spans_between_dividers((gray[top:bottom] > WHITE).mean(axis=0))
            if len(cells) != len(names):
                raise SystemExit(f"{filename}: {len(cells)} colunas, esperava {len(names)}")

            for (left, right), name in zip(cells, names):
                box = (
                    left + SAFETY_INSET,
                    top + SAFETY_INSET,
                    right - SAFETY_INSET,
                    bottom - SAFETY_INSET,
                )
                crop = image.crop(box)
                large = crop.resize(
                    (crop.width * SCALE, crop.height * SCALE), Image.Resampling.LANCZOS
                ).filter(ImageFilter.UnsharpMask(radius=2, percent=45, threshold=3))
                large.save(OUTPUT / f"{name}.webp", "WEBP", quality=86, method=6)
                print(f"{name:26} origem {crop.width}x{crop.height} -> {large.width}x{large.height}")


if __name__ == "__main__":
    main()
