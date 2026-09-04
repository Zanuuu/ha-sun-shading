#!/usr/bin/env python3
"""Photomaillage 3D : python3 sources/extrait_pm3d.py --zone <nom> [--releve-ombres G] (après preprocess_sat.py)

Le code est dans custom_components/sun_shading/pipeline/extrait_pm3d.py."""
import _pipeline  # noqa: F401
from pipeline import extrait_pm3d

if __name__ == "__main__":
    extrait_pm3d.principal()
