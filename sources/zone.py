#!/usr/bin/env python3
"""Affiche la zone résolue (centre CC48, rayons, titre) : python3 sources/zone.py --zone <nom>

Le code est dans custom_components/sun_shading/pipeline/zone.py.
"""
import argparse

import _pipeline  # noqa: F401
from pipeline import zone

if __name__ == "__main__":
    p = zone.argument_zone(argparse.ArgumentParser(description=__doc__.splitlines()[0]))
    z = zone.resout(p.parse_args().zone)
    print(f"{z.nom} : {z.lat}, {z.lon} -> CC48 ({z.cx:.4f} ; {z.cy:.4f})")
    print(f"  rayons : {z.rayons}")
    print(f"  titre : {z.titre} — {z.lieu}")
