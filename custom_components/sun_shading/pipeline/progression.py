"""Compte rendu d'avancement du pipeline, indépendant de qui l'écoute.

Une `Progression` reçoit des étapes pondérées et, dans chaque étape, une
fraction ; elle en dérive une fraction globale 0-1 et la transmet au
rappel. En ligne de commande le rappel imprime ; dans le sous-processus de
l'intégration il émet une ligne `PROGRESSION` que le parent lit.
"""


class Progression:
    def __init__(self, rappel=None):
        self._rappel = rappel or (lambda fraction, message: None)
        self._debut, self._poids = 0.0, 1.0
        self.etape_courante = ""

    def etape(self, nom, debut, fin):
        """Toute progression rapportée ensuite est cadrée entre debut et fin."""
        self.etape_courante = nom
        self._debut, self._poids = debut, fin - debut
        self.avance(0.0, nom)

    def avance(self, fraction, message=""):
        fraction = min(1.0, max(0.0, fraction))
        self._rappel(self._debut + self._poids * fraction,
                     message or self.etape_courante)

    def compte(self, i, n, message=""):
        self.avance(i / n if n else 1.0, message)
