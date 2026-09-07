# Changelog

## 1.1.0 — 2026-09-07

### Buildings newer than the 3D model

The Eurométropole model dates from 2022, so a house built since was simply
missing: no shadow, and no surface to probe. The build now completes it from
the **IGN BD TOPO** (national, updated continuously, Licence Ouverte 2.0).

- Every footprint that no LoD2 building covers is added as a simplified
  volume: walls up to the eaves height, a truncated roof up to the ridge
  height. Both come from IGN measurements; the 35° slope is a convention.
- The ground comes from the map's own terrain model, not from the IGN
  altitude, so an added building sits exactly on the relief it shades.
- Buildings already in the 3D model are left alone. Footprints only partly
  covered — an extension, a misalignment between the two datasets — are
  skipped and listed in the build log rather than guessed. Anything under
  20 m² is skipped too: the 3D model is not exhaustive on garden sheds, and
  their shadow is negligible.
- On by default, with a **recent buildings** switch in the Advanced section
  of the config flow, and `"complement": {"bdtopo": false}` in `zone.json`
  for command-line builds.
- The added buildings show in all three map modes, including the satellite
  view and the 2022 photomesh, which do not know them either.

### A hand-modelled roof no longer damages the neighbour

Importing an OBJ used to remove the roof of whichever building was closest to
the target point. For a house missing from the 3D model, that was the
neighbour's roof, silently. The nearest building must now be within 25 m;
beyond that nothing is removed and the model is simply **added**. This is the
remaining path for a house that the BD TOPO does not know yet.

### Also

- The device now reports its author and the installed version, instead of
  crediting the data provider as its manufacturer.

## 1.0.1 — 2026-09-04

Two defects found while switching a live instance over:

- The map did not pass `entry_id` to the service, which made publishing
  impossible as soon as an instance had two zones.
- It republished the opening name read from `friendly_name`, which carries
  the device name as a prefix — it would have stacked up on every *recompute
  all*. The name now travels in its own `opening_name` attribute.

## 1.0.0 — 2026-09-04

First public release.

- One `binary_sensor` per opening, `on` when the sun reaches that window,
  with real attributes (`elevation_min`, `elevation_max`, `margin`,
  `foliage`, `cover`, `point`, `normal`).
- A sidebar panel: a 3D map of the neighbourhood with shadows at any date and
  time, a sun path, and a probe that counts direct sun minute by minute.
- Openings are defined by clicking in the map; the page publishes the horizon
  mask into Home Assistant itself. No YAML, no copy-paste.
- The integration builds its own zone from Strasbourg Eurométropole open
  data, or serves a folder produced by the same pipeline on another machine.
