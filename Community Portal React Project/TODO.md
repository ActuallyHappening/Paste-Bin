# BEFORE production build:
- *remove @ts-ignore comments*
- add proper project info
- **Allow for GESTURES on phone / IPad**

# Additions to improve general quality:
Adding constructors for the datamodels in src/datamodels/project/constructors/Defaults.tsx
these will allow for some simpler constructors for the data model classes

Hovering over the houses changes the colour of the marker / shows a tooltop / does something
- To apply add handler in _DITUMesh.triggers.onPOinterOver or somethign like that in src/components/three/globe/globeassets/House.tsx

Clicks that miss close the menubar and panels
- To apply add clickMissed (named something like that) to globe canvas in src somewhere

# FIX ugly:

Fix the ugly house red circles (if they are not red and ugly you are lucky :)
they are in src/components/three/globe/globeassets/House.tsx under HouseMeshMarker
