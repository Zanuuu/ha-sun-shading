#!/usr/bin/env python3
"""Prétraitement des données EMS : python3 sources/preprocess.py --zone <nom>

Le code est dans custom_components/sun_shading/pipeline/preprocess.py."""
import _pipeline  # noqa: F401
from pipeline import preprocess

if __name__ == "__main__":
    preprocess.principal()
