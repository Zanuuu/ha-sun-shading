#!/usr/bin/env python3
"""Importe une toiture OBJ comme modèle précis : python3 sources/importe_toit_obj.py --zone <nom> toiture.obj [--note …]

Le code est dans custom_components/sun_shading/pipeline/importe_toit_obj.py."""
import _pipeline  # noqa: F401
from pipeline import importe_toit_obj

if __name__ == "__main__":
    importe_toit_obj.principal()
