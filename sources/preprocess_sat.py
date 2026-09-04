#!/usr/bin/env python3
"""Vue satellite : python3 sources/preprocess_sat.py --zone <nom> (après preprocess.py)

Le code est dans custom_components/sun_shading/pipeline/preprocess_sat.py."""
import _pipeline  # noqa: F401
from pipeline import preprocess_sat

if __name__ == "__main__":
    preprocess_sat.principal()
